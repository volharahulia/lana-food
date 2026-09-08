// Shared shape for parsed menu content — see parseMenu.ts for how these are
// built from docs/lanafood_menu.xlsx. Nothing here is menu content itself;
// real dish data always comes from the spreadsheet at read time.

export type MenuVariant = {
  variant?: string;
  quantity?: number;
  quantityUnit?: string;
  weight?: number;
  weightUnit?: string;
  /** Absent when the spreadsheet has no price for this row — never fabricated as 0. */
  price?: number;
  currency: string;
  description?: string;
  ingredients?: string;
  allergens?: string;
  available: boolean;
};

export type MenuCardData = {
  /** Stable per-render key (group id or a row-derived id) — not spreadsheet content. */
  id: string;
  name: string;
  featured: boolean;
  displayOrder: number;
  /** Already-resolved image src (or undefined) — see parseMenu.ts. */
  photo?: string;
  /** True when at least one variant is still available. */
  available: boolean;
  /** True when any row in the group has Popular Dish = true (Home "Most
   * Popular Dishes" inclusion flag) — see MENU.md's Excel column schema. */
  popularDish: boolean;
  /** Length 1 for a standalone (non-grouped) dish. */
  variants: MenuVariant[];
};

export type MenuSubcategory = {
  /** Null for categories with no subcategory structure (e.g. Kids' Menu). */
  name: string | null;
  cards: MenuCardData[];
};

export type MenuCategoryData = {
  slug: string;
  name: string;
  hasSubcategories: boolean;
  subcategories: MenuSubcategory[];
};
