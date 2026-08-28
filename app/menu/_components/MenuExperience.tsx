"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { MenuCardData, MenuCategoryData, MenuSubcategory } from "../_data/types";
import MenuTabs from "./MenuTabs";
import MenuSearch from "./MenuSearch";
import MenuSidebar, { slugify } from "./MenuSidebar";
import MenuCategoryInfo from "./MenuCategoryInfo";
import MenuCategorySection from "./MenuCategorySection";
import MenuCardModal from "./MenuCardModal";
import EmptyState from "./EmptyState";

type MenuExperienceProps = {
  categories: MenuCategoryData[];
};

function cardMatches(card: MenuCardData, query: string): boolean {
  const q = query.toLowerCase();
  if (card.name.toLowerCase().includes(q)) return true;
  return card.variants.some((v) =>
    [v.variant, v.description, v.ingredients].some((field) => field?.toLowerCase().includes(q))
  );
}

function filterSubcategories(subcategories: MenuSubcategory[], query: string): MenuSubcategory[] {
  if (!query.trim()) return subcategories;
  return subcategories
    .map((s) => ({ ...s, cards: s.cards.filter((c) => cardMatches(c, query)) }))
    .filter((s) => s.cards.length > 0);
}

// Owns all Menu-page interaction state (active tab, search, open modal,
// scroll-spy) and composes the presentational Menu* components around it.
// Category/subcategory/dish content is server-loaded (parseMenu.ts) and
// passed in as `categories` — this component only filters/displays it.
export default function MenuExperience({ categories }: MenuExperienceProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabSlugs = categories.map((c) => c.slug);
  const initialTab = searchParams.get("tab");
  const [activeSlug, setActiveSlug] = useState(
    initialTab && tabSlugs.includes(initialTab) ? initialTab : (categories[0]?.slug ?? "")
  );
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [openCard, setOpenCard] = useState<MenuCardData | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.slug === activeSlug) ?? categories[0];
  const searchActive = query.trim().length > 0;
  const filtered = useMemo(
    () => (activeCategory ? filterSubcategories(activeCategory.subcategories, query) : []),
    [activeCategory, query]
  );
  const hasResults = filtered.some((s) => s.cards.length > 0);

  function handleTabChange(slug: string) {
    setActiveSlug(slug);
    setQuery("");
    setActiveSubcategory(null);
    router.replace(`/menu?tab=${slug}`, { scroll: false });
  }

  function handleSelectSubcategory(name: string) {
    document.getElementById(`menu-section-${slugify(name)}`)?.scrollIntoView();
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
        <MenuSearch value={query} onChange={setQuery} />

        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-start laptop:gap-10">
          {activeCategory.hasSubcategories && !searchActive && (
            <MenuSidebar
              subcategories={subcategoryNames}
              active={activeSubcategory}
              onSelect={handleSelectSubcategory}
            />
          )}

          <div className="min-w-0 flex-1">
            <MenuCategoryInfo categorySlug={activeCategory.slug} />

            {hasResults ? (
              <div className="flex flex-col gap-10">
                {filtered.map((subcategory) => (
                  <MenuCategorySection
                    key={`${activeCategory.slug}-${subcategory.name ?? "flat"}`}
                    subcategory={subcategory}
                    bypassCollapse={searchActive}
                    onOpenCard={setOpenCard}
                  />
                ))}
              </div>
            ) : (
              <EmptyState onClear={() => setQuery("")} />
            )}
          </div>
        </div>
      </div>

      <MenuCardModal card={openCard} onOpenChange={(open) => !open && setOpenCard(null)} />
    </div>
  );
}
