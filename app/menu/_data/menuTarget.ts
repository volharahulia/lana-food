// Cross-page menu-card identity — the single place a specific rendered
// MenuCardData is referenced from outside MenuExperience (today: Home's
// "Most Popular Dishes" deep link). `card.id` (parseMenu.ts) is only unique
// *within* one category — two categories can each produce e.g. "|s:0" — so
// the stable reference is the existing category slug + existing card id
// composed together, never a newly invented identifier.

import type { MenuCategoryData, MenuCardData } from "./types";

const SEPARATOR = "::";

export function menuCardRef(categorySlug: string, cardId: string): string {
  return `${categorySlug}${SEPARATOR}${cardId}`;
}

/** DOM id for the rendered card — used by MenuCard for deep-link scrolling. */
export function menuCardDomId(categorySlug: string, cardId: string): string {
  return `menu-card-${menuCardRef(categorySlug, cardId)}`;
}

export type MenuTarget = {
  categorySlug: string;
  card: MenuCardData;
  /** The rendered MenuSubcategory's name (null for a flat/no-subcategory
   * bucket) — used to force that section's preview open for the deep link. */
  subcategoryName: string | null;
};

// Resolves a menuCardRef back against freshly parsed menu data. Returns null
// on any mismatch (unknown category, unknown card, malformed ref) so callers
// can fail gracefully instead of throwing — the target may reference stale
// data if the spreadsheet changed between page loads.
export function resolveMenuTarget(
  categories: MenuCategoryData[],
  ref: string | null | undefined
): MenuTarget | null {
  if (!ref) return null;
  const separatorIndex = ref.indexOf(SEPARATOR);
  if (separatorIndex === -1) return null;
  const categorySlug = ref.slice(0, separatorIndex);
  const cardId = ref.slice(separatorIndex + SEPARATOR.length);

  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return null;

  for (const subcategory of category.subcategories) {
    const card = subcategory.cards.find((c) => c.id === cardId);
    if (card) return { categorySlug, card, subcategoryName: subcategory.name };
  }
  return null;
}

export type PopularDish = {
  categorySlug: string;
  card: MenuCardData;
};

// Flattens every category's published cards, in the existing category →
// subcategory → Display Order sequence, to the ones marked Popular Dish —
// the only ordering signal the data model provides. Home renders this list
// directly; nothing here is Home-specific.
export function getPopularDishes(categories: MenuCategoryData[]): PopularDish[] {
  return categories.flatMap((category) =>
    category.subcategories.flatMap((subcategory) =>
      subcategory.cards
        .filter((card) => card.popularDish)
        .map((card) => ({ categorySlug: category.slug, card }))
    )
  );
}
