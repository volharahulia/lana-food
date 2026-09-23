"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import type { MenuCardData, MenuCategoryData } from "../_data/types";
import { searchMenuAllCategories } from "../_data/search";
import { resolveMenuTarget, menuCardDomId } from "../_data/menuTarget";
import MenuTabs from "./MenuTabs";
import MenuSearch from "./MenuSearch";
import MenuSidebar, { sectionDomId } from "./MenuSidebar";
import MenuCategoryInfo from "./MenuCategoryInfo";
import MenuCategorySection from "./MenuCategorySection";
import MenuGlobalSearchResults from "./MenuGlobalSearchResults";
import MenuCardModal from "./MenuCardModal";
import EmptyState from "./EmptyState";
import MenuUrlSync, { type MenuUrlParams } from "./MenuUrlSync";

type MenuExperienceProps = {
  categories: MenuCategoryData[];
};

// Owns all Menu-page interaction state (active tab, search, open modal,
// scroll-spy) and composes the presentational Menu* components around it.
// Category/subcategory/dish content is server-loaded (parseMenu.ts) and
// passed in as `categories` — this component only filters/displays it.
//
// SEO: all four categories' content is rendered unconditionally below (one
// Tabs.Content panel per category), not just the active one — inactive
// panels stay in the DOM/HTML, hidden via the `hidden` attribute, so the
// static /menu response is crawlable for every category regardless of which
// tab a visitor (or crawler) lands on. This component itself no longer reads
// useSearchParams() synchronously during render — that's what previously
// forced the whole subtree behind a <Suspense fallback={null}> in page.tsx,
// which meant NOTHING (not even the default tab) ever reached the static
// HTML. The one remaining useSearchParams() read is isolated in the
// render-nothing MenuUrlSync leaf below, wrapped in its own local Suspense,
// so only that empty leaf is excluded from static prerendering.
export default function MenuExperience({ categories }: MenuExperienceProps) {
  const router = useRouter();
  const tabSlugs = useMemo(() => categories.map((c) => c.slug), [categories]);

  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug ?? "");
  // Home's "Most Popular Dishes" deep link (?item=<categorySlug::cardId>) —
  // resolved against this same parsed menu data (see menuTarget.ts) once the
  // real URL is known (via MenuUrlSync below), never during the first
  // synchronous render (categories[0] is always the correct, safe default
  // for that first paint).
  const [itemRef, setItemRef] = useState<string | null>(null);
  const resolvedTarget = useMemo(() => resolveMenuTarget(categories, itemRef), [categories, itemRef]);

  // One global query — searches every category, always. Switching tabs
  // never clears it and never changes the (global) results shown; only the
  // user's own Clear action resets it back to normal per-tab browsing.
  const [query, setQuery] = useState("");
  // Mirrors `query` but is only ever written by handleUrlParamsChange below
  // (never by local typing) — lets the header-search-arrival scroll effect
  // tell "the URL says there's a new search" apart from "the user is typing
  // into the on-page field", matching prior behavior (which never scrolled
  // on local typing, only on a fresh ?q= arrival).
  const [urlQuery, setUrlQuery] = useState("");
  // The open modal's card plus the exact card list it was opened from (the
  // Previous/Next navigation context) — see openCardInContext below. Kept as
  // one piece of state so a card and its context never drift apart.
  const [modal, setModal] = useState<{ card: MenuCardData; context: MenuCardData[] } | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  // Same "<categorySlug>-<subcategoryName|flat>" composition already used as
  // each MenuCategorySection's React key below — identifies which section
  // must render fully expanded so the deep-link target exists (already
  // expanded past its 4-card preview) to scroll to.
  const forceExpandKey = resolvedTarget
    ? `${resolvedTarget.categorySlug}-${resolvedTarget.subcategoryName ?? "flat"}`
    : null;

  // Applies ?tab=/?item= exactly once, the first time the real URL is known
  // (mirrors what used to be synchronous useState-initializer logic). ?q= is
  // applied on every call, below — that one stays continuously reactive so a
  // Header search landing on an already-mounted /menu (a same-route
  // navigation, no remount) still updates results, matching prior behavior.
  const appliedInitialTabRef = useRef(false);
  const handleUrlParamsChange = useCallback(
    ({ tab, q, item }: MenuUrlParams) => {
      setQuery(q);
      setUrlQuery(q);
      if (!appliedInitialTabRef.current) {
        appliedInitialTabRef.current = true;
        setItemRef(item);
        if (tab && tabSlugs.includes(tab)) {
          setActiveSlug(tab);
        }
      }
    },
    [tabSlugs]
  );

  // Deep link wins over ?tab= (matches prior resolvedTarget?.categorySlug ??
  // tab precedence) — applied once resolvedTarget first resolves, since that
  // only happens after itemRef arrives via handleUrlParamsChange above.
  const appliedDeepLinkRef = useRef(false);
  useEffect(() => {
    if (!resolvedTarget || appliedDeepLinkRef.current) return;
    appliedDeepLinkRef.current = true;
    setActiveSlug(resolvedTarget.categorySlug);
    setActiveSubcategory(resolvedTarget.subcategoryName);
    setModal({ card: resolvedTarget.card, context: resolvedTarget.contextCards });
  }, [resolvedTarget]);

  // Card → containing-subcategory-name lookup, built once from the full
  // parsed tree (every category, not just the active tab) so it stays valid
  // for both normal browsing and cross-category search contexts. Keyed by
  // object reference, matching how modalIndex/navigateModal already identify
  // cards below — see their comment on why id alone isn't unique enough.
  const cardSubcategoryName = useMemo(() => {
    const map = new Map<MenuCardData, string | null>();
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        for (const card of subcategory.cards) {
          map.set(card, subcategory.name);
        }
      }
    }
    return map;
  }, [categories]);

  const activeCategory = categories.find((c) => c.slug === activeSlug) ?? categories[0];
  const searchActive = query.trim().length > 0;
  // One search mode: global, across every category, always — the active
  // tab never filters, narrows, or hides these results. Tabs only matter
  // for normal browsing once the query is cleared.
  const globalResults = useMemo(
    () => (searchActive ? searchMenuAllCategories(categories, query) : []),
    [categories, query, searchActive]
  );
  const hasResults = globalResults.some((r) => r.cards.length > 0);

  function handleSearchFieldChange(value: string) {
    setQuery(value);
  }

  function handleTabChange(slug: string) {
    setActiveSlug(slug);
    setActiveSubcategory(null);
    router.replace(`/menu?tab=${slug}`, { scroll: false });
  }

  function handleSelectSubcategory(name: string) {
    document.getElementById(sectionDomId(activeCategory.slug, name))?.scrollIntoView();
  }

  // Opens the modal with `card` plus the list it was opened from — the same
  // array reference MenuCategorySection/MenuGlobalSearchResults are already
  // rendering (the section's current preview/expanded cards, or the full
  // cross-category search-result set), never a separately built/duplicated list.
  function openCardInContext(card: MenuCardData, context: MenuCardData[]) {
    setModal({ card, context });
  }

  // Cards are matched by reference (indexOf), not by `card.id` — ids are
  // only unique *within* one category (menuTarget.ts), and a search context
  // can span multiple categories, so two different cards could share an id.
  // Every context array is built by filter/flatMap over the same parsed
  // `categories` tree, so its entries are always the same object instances.
  const modalIndex = modal ? modal.context.indexOf(modal.card) : -1;
  const hasPrevious = modalIndex > 0;
  const hasNext = modalIndex !== -1 && modalIndex < (modal?.context.length ?? 0) - 1;

  function navigateModal(direction: 1 | -1) {
    setModal((current) => {
      if (!current) return current;
      const index = current.context.indexOf(current.card);
      if (index === -1) return current;
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= current.context.length) return current;
      return { card: current.context[nextIndex], context: current.context };
    });
  }

  // Scroll-spy: highlight whichever subcategory section sits nearest the top
  // of the viewport, just below the sticky header + tabs.
  useEffect(() => {
    if (!activeCategory?.hasSubcategories || searchActive) return;
    const sections = activeCategory.subcategories
      .map((s) => (s.name ? document.getElementById(sectionDomId(activeCategory.slug, s.name)) : null))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        const name = activeCategory.subcategories.find(
          (s) => s.name && sectionDomId(activeCategory.slug, s.name) === topMost.target.id
        )?.name;
        if (name) setActiveSubcategory(name);
      },
      { rootMargin: "-150px 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory, searchActive]);

  // Deep-link scroll: forceExpandKey above already renders the target card
  // on this same first commit, so it exists in the DOM by the time this
  // effect runs. scroll-mt-[150px] on MenuCard (same value as
  // MenuCategorySection's) keeps it clear of the sticky header/tabs.
  useEffect(() => {
    if (!resolvedTarget) return;
    document
      .getElementById(menuCardDomId(resolvedTarget.categorySlug, resolvedTarget.card.id))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [resolvedTarget]);

  // Header-search arrival scroll: same getElementById + scrollIntoView
  // pattern as the deep-link effect above, targeting the same #menu-tabs
  // anchor BackToTop.tsx already uses to return to "the page's primary
  // working area" on /menu. A Home/Header search query lands above the
  // full-height Menu Hero, which alone can exceed the entire viewport on a
  // short/landscape screen — without this, the search field, tabs and
  // results sit far below the fold with nothing visibly indicating the
  // search succeeded. Fires once per fresh Header-search navigation (query
  // arrives non-empty via handleUrlParamsChange), never on a tab switch or
  // on typing directly into the on-page field.
  useEffect(() => {
    if (!urlQuery.trim()) return;
    document.getElementById("menu-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [urlQuery]);

  if (!activeCategory) return null;

  const subcategoryNames = activeCategory.subcategories
    .map((s) => s.name)
    .filter((n): n is string => n !== null);

  return (
    <Tabs.Root value={activeSlug} onValueChange={handleTabChange}>
      <Suspense fallback={null}>
        <MenuUrlSync onChange={handleUrlParamsChange} />
      </Suspense>

      {/* Search sits above the tabs (Menu Hero → Search → Tabs → Content) —
          a single field for the whole menu, not scoped to whichever tab
          happens to be active. */}
      <div className="container-page py-6 laptop:py-8">
        <MenuSearch value={query} onChange={handleSearchFieldChange} />
      </div>

      <MenuTabs categories={categories.map((c) => ({ slug: c.slug, name: c.name }))} />

      <div className="container-page flex flex-col gap-6 py-6 laptop:py-8">
        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-start laptop:gap-10">
          {activeCategory.hasSubcategories && !searchActive && (
            <MenuSidebar
              categorySlug={activeCategory.slug}
              subcategories={subcategoryNames}
              active={activeSubcategory}
              onSelect={handleSelectSubcategory}
            />
          )}

          <div className="min-w-0 flex-1">
            {searchActive ? (
              hasResults ? (
                <MenuGlobalSearchResults query={query} results={globalResults} onOpenCard={openCardInContext} />
              ) : (
                <EmptyState onClear={() => handleSearchFieldChange("")} />
              )
            ) : (
              categories.map((category) => (
                <Tabs.Content
                  key={category.slug}
                  value={category.slug}
                  forceMount
                  hidden={category.slug !== activeSlug}
                >
                  <MenuCategoryInfo categorySlug={category.slug} />
                  <div className="flex flex-col gap-10">
                    {category.subcategories.map((subcategory) => {
                      const sectionKey = `${category.slug}-${subcategory.name ?? "flat"}`;
                      return (
                        <MenuCategorySection
                          key={sectionKey}
                          categorySlug={category.slug}
                          subcategory={subcategory}
                          bypassCollapse={false}
                          forceExpanded={sectionKey === forceExpandKey}
                          onOpenCard={openCardInContext}
                        />
                      );
                    })}
                  </div>
                </Tabs.Content>
              ))
            )}
          </div>
        </div>
      </div>

      <MenuCardModal
        card={modal?.card ?? null}
        subcategoryName={modal ? cardSubcategoryName.get(modal.card) ?? null : null}
        onOpenChange={(open) => !open && setModal(null)}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        onPrevious={() => navigateModal(-1)}
        onNext={() => navigateModal(1)}
      />
    </Tabs.Root>
  );
}
