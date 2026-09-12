// Menu search matching — one source of truth (cardMatches) used by both
// search modes /menu supports:
//   - searchMenu: category-scoped, used by the /menu page's own search field
//     (MENU.md "Search Scope": "Search filters the currently selected menu
//     category (active tab). Search does not filter across tabs.")
//   - searchMenuAllCategories: global, used only for a query that arrives
//     from the Home/Header search (MenuExperience.tsx) — never used for the
//     on-page field's own typing.
// Neither scope changes what counts as a match; only which cards are in
// scope to check.

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
