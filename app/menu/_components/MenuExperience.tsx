"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { MenuCardData, MenuCategoryData } from "../_data/types";
import { searchMenu, searchMenuAllCategories } from "../_data/search";
import { resolveMenuTarget, menuCardDomId } from "../_data/menuTarget";
import MenuTabs from "./MenuTabs";
import MenuSearch from "./MenuSearch";
import MenuSidebar, { slugify } from "./MenuSidebar";
import MenuCategoryInfo from "./MenuCategoryInfo";
import MenuCategorySection from "./MenuCategorySection";
import MenuSearchResults from "./MenuSearchResults";
import MenuGlobalSearchResults from "./MenuGlobalSearchResults";
import MenuCardModal from "./MenuCardModal";
import EmptyState from "./EmptyState";

type MenuExperienceProps = {
  categories: MenuCategoryData[];
};

// Owns all Menu-page interaction state (active tab, search, open modal,
// scroll-spy) and composes the presentational Menu* components around it.
// Category/subcategory/dish content is server-loaded (parseMenu.ts) and
// passed in as `categories` — this component only filters/displays it.
export default function MenuExperience({ categories }: MenuExperienceProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Resolves Home's "Most Popular Dishes" deep link (?item=<categorySlug::cardId>)
  // against this same parsed menu data — see menuTarget.ts. A Home→Menu
  // navigation is always a fresh mount (different route), so it's safe to
  // resolve this once, up front, and seed the state below from it directly.
  const itemRef = searchParams.get("item");
  const resolvedTarget = useMemo(() => resolveMenuTarget(categories, itemRef), [categories, itemRef]);

  const tabSlugs = categories.map((c) => c.slug);
  const initialTab = searchParams.get("tab");
  const [activeSlug, setActiveSlug] = useState(
    resolvedTarget?.categorySlug ??
      (initialTab && tabSlugs.includes(initialTab) ? initialTab : (categories[0]?.slug ?? ""))
  );
  const urlQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(urlQuery);
  // Two distinct search modes (not two matching algorithms — cardMatches is
  // the only matcher, used by both): a query that arrives via the URL came
  // from the Home/Header search (Header.tsx does nothing but
  // router.push("/menu?q=...") — the on-page field below never writes to the
  // URL), so it searches every category and stays global until the user
  // either edits the field directly or changes tabs, at which point it
  // becomes an ordinary active-category-only search.
  const [isGlobalSearch, setIsGlobalSearch] = useState(urlQuery.trim().length > 0);
  // The open modal's card plus the exact card list it was opened from (the
  // Previous/Next navigation context) — see openCardInContext below. Kept as
  // one piece of state so a card and its context never drift apart.
  const [modal, setModal] = useState<{ card: MenuCardData; context: MenuCardData[] } | null>(
    resolvedTarget ? { card: resolvedTarget.card, context: resolvedTarget.contextCards } : null
  );
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    resolvedTarget?.subcategoryName ?? null
  );
  // Same "<categorySlug>-<subcategoryName|flat>" composition already used as
  // each MenuCategorySection's React key below — identifies which section
  // must render fully expanded so the deep-link target exists in the DOM to
  // scroll to (MenuCategorySection otherwise previews only 4 cards).
  const forceExpandKey = resolvedTarget
    ? `${resolvedTarget.categorySlug}-${resolvedTarget.subcategoryName ?? "flat"}`
    : null;

  // Keeps `query` in sync when the Header search (a separate component)
  // navigates to /menu?q=… while this page is already mounted — see MENU
  // search behavior "IMPORTANT URL / STATE REQUIREMENT". Adjusted during
  // render (React's documented pattern for resetting state when a prop
  // changes) rather than in an effect, since typing into MenuSearch below
  // never touches the URL and must not be clobbered by this sync.
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery);
    setQuery(urlQuery);
    setIsGlobalSearch(urlQuery.trim().length > 0);
  }

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
  // Global mode (Home/Header search landing): every category. Category mode
  // (typing directly into the field below): active category only — MENU.md
  // "Search Scope": search does not filter across tabs. Never both at once.
  const globalSearchResults = useMemo(
    () => (searchActive && isGlobalSearch ? searchMenuAllCategories(categories, query) : []),
    [categories, query, searchActive, isGlobalSearch]
  );
  const localSearchResults = useMemo(
    () => (searchActive && !isGlobalSearch && activeCategory ? searchMenu(activeCategory, query) : []),
    [activeCategory, query, searchActive, isGlobalSearch]
  );
  const hasGlobalResults = globalSearchResults.some((r) => r.cards.length > 0);
  const hasLocalResults = localSearchResults.length > 0;

  // Direct interaction with the field is a category-scoped search from here
  // on, per the origin-based distinction above, regardless of what the field
  // was pre-filled with on arrival.
  function handleSearchFieldChange(value: string) {
    setQuery(value);
    setIsGlobalSearch(false);
  }

  function handleTabChange(slug: string) {
    setActiveSlug(slug);
    setQuery("");
    setIsGlobalSearch(false);
    setActiveSubcategory(null);
    router.replace(`/menu?tab=${slug}`, { scroll: false });
  }

  function handleSelectSubcategory(name: string) {
    document.getElementById(`menu-section-${slugify(name)}`)?.scrollIntoView();
  }

  // Opens the modal with `card` plus the list it was opened from — the same
  // array reference MenuCategorySection/MenuSearchResults are already
  // rendering (the section's current preview/expanded cards, or the full
  // search-result set), never a separately built/duplicated list.
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
      .map((s) => (s.name ? document.getElementById(`menu-section-${slugify(s.name)}`) : null))
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
          (s) => s.name && `menu-section-${slugify(s.name)}` === topMost.target.id
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

  if (!activeCategory) return null;

  const subcategoryNames = activeCategory.subcategories
    .map((s) => s.name)
    .filter((n): n is string => n !== null);

  return (
    <div>
      <MenuTabs
        categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
        active={activeSlug}
        onChange={handleTabChange}
      />

      <div className="container-page flex flex-col gap-6 py-6 laptop:py-8">
        <MenuSearch value={query} onChange={handleSearchFieldChange} />

        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-start laptop:gap-10">
          {activeCategory.hasSubcategories && !searchActive && (
            <MenuSidebar
              subcategories={subcategoryNames}
              active={activeSubcategory}
              onSelect={handleSelectSubcategory}
            />
          )}

          <div className="min-w-0 flex-1">
            {searchActive ? (
              isGlobalSearch ? (
                hasGlobalResults ? (
                  <MenuGlobalSearchResults query={query} results={globalSearchResults} onOpenCard={openCardInContext} />
                ) : (
                  <EmptyState onClear={() => handleSearchFieldChange("")} />
                )
              ) : hasLocalResults ? (
                <MenuSearchResults
                  query={query}
                  categorySlug={activeCategory.slug}
                  cards={localSearchResults}
                  onOpenCard={openCardInContext}
                />
              ) : (
                <EmptyState onClear={() => handleSearchFieldChange("")} />
              )
            ) : (
              <>
                <MenuCategoryInfo categorySlug={activeCategory.slug} />
                <div className="flex flex-col gap-10">
                  {activeCategory.subcategories.map((subcategory) => {
                    const sectionKey = `${activeCategory.slug}-${subcategory.name ?? "flat"}`;
                    return (
                      <MenuCategorySection
                        key={sectionKey}
                        categorySlug={activeCategory.slug}
                        subcategory={subcategory}
                        bypassCollapse={false}
                        forceExpanded={sectionKey === forceExpandKey}
                        onOpenCard={openCardInContext}
                      />
                    );
                  })}
                </div>
              </>
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
    </div>
  );
}
