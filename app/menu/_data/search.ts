// Menu search matching — cardMatches is the single source of truth for what
// counts as a match. There is exactly one search mode: global, across every
// category, used identically whether the query arrives from the Home/Header
// search (?q= on /menu) or is typed directly into the /menu page's own
// field — see MenuExperience.tsx, which always renders searchMenuAllCategories'
// grouped-by-category result set while a query is active, regardless of
// which tab is selected. searchMenu (single-category) is a building block
// searchMenuAllCategories composes over — it is not used on its own to
// scope or filter displayed results.

import type { MenuCardData, MenuCategoryData } from "./types";

export function cardMatches(card: MenuCardData, query: string): boolean {
  const q = query.toLowerCase();
  if (card.name.toLowerCase().includes(q)) return true;
  return card.variants.some((v) =>
    [v.variant, v.description, v.ingredients].some((field) => field?.toLowerCase().includes(q))
  );
}

// Preserves the category's own subcategory/Display Order card ordering.
export function searchMenu(category: MenuCategoryData, query: string): MenuCardData[] {
  const q = query.trim();
  if (!q) return [];
  return category.subcategories.flatMap((s) => s.cards.filter((c) => cardMatches(c, q)));
}

export type MenuSearchCategoryResult = {
  slug: string;
  name: string;
  cards: MenuCardData[];
};

// Preserves the categories' own order (Holiday, Everyday, Kids', Gastroboxes
// — set by parseMenu.ts). Omits categories with zero matches. Built from the
// same per-category searchMenu() above, so global and category-scoped search
// can never disagree on what matches.
export function searchMenuAllCategories(
  categories: MenuCategoryData[],
  query: string
): MenuSearchCategoryResult[] {
  if (!query.trim()) return [];
  return categories
    .map((category) => ({
      slug: category.slug,
      name: category.name,
      cards: searchMenu(category, query),
    }))
    .filter((result) => result.cards.length > 0);
}
