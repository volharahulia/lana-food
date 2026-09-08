// Shared global menu search — used by both the /menu search field and the
// site Header search (MenuExperience.tsx), so the two entry points always
// produce identical results. Searches every category's already-parsed,
// published-only MenuCardData (parseMenu.ts drops unpublished rows), never
// just the active tab.

import type { MenuCardData, MenuCategoryData } from "./types";

export function cardMatches(card: MenuCardData, query: string): boolean {
  const q = query.toLowerCase();
  if (card.name.toLowerCase().includes(q)) return true;
  return card.variants.some((v) =>
    [v.variant, v.description, v.ingredients].some((field) => field?.toLowerCase().includes(q))
  );
}

export type MenuSearchCategoryResult = {
  slug: string;
  name: string;
  cards: MenuCardData[];
};

// Preserves the categories' own order (Holiday, Everyday, Kids', Gastroboxes
// — set by parseMenu.ts) and each category's existing subcategory/Display
// Order card ordering. Omits categories with zero matches.
export function searchMenu(
  categories: MenuCategoryData[],
  query: string
): MenuSearchCategoryResult[] {
  const q = query.trim();
  if (!q) return [];
  return categories
    .map((category) => ({
      slug: category.slug,
      name: category.name,
      cards: category.subcategories.flatMap((s) => s.cards.filter((c) => cardMatches(c, q))),
    }))
    .filter((result) => result.cards.length > 0);
}
