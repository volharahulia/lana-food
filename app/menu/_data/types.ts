// Shared shape for parsed menu content — see parseMenu.ts for how these are
// built from docs/lanafood_menu.xlsx. Nothing here is menu content itself;
// real dish data always comes from the spreadsheet at read time.

export type MenuPhotoRef = {
  src: string;
  /** Real pixel dimensions from the file itself (see
   * _data/imageDimensions.ts) — undefined for an unsupported format or an
   * unreadable/corrupt file, in which case the detail modal falls back to
   * a fixed envelope for just that one photo instead of its true ratio. */
  width?: number;
  height?: number;
};

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
  /** Already-resolved image src (or undefined) — see parseMenu.ts. Always
   * equal to photos[0] when photos is non-empty. Kept alongside `photos` so
   * existing single-photo consumers (e.g. Home's MostPopularDishes.tsx)
   * keep working unchanged. */
  photo?: string;
  /** Every resolved photo for this dish, in Excel column order (first =
   * primary/default) — see _data/photos.ts. Empty array when the Photo
   * field is empty or no listed filename resolves to a real file yet.
   * width/height (when readable — see _data/imageDimensions.ts) are the
   * photo's real pixel dimensions, used only by the dish-detail modal to
   * display each photo at its own natural ratio; the menu-card preview
   * ignores them (it's always a filled 1:1 square, object-fit: cover). */
  photos: MenuPhotoRef[];
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
