// Editable page-level Menu content that is NOT sourced from the spreadsheet
// (dish/category/subcategory data lives in docs/lanafood_menu.xlsx and is
// read by parseMenu.ts). Change copy and layout knobs here without touching
// component markup — per MENU.md "Content Editability Requirement".

export const menuHero = {
  eyebrow: undefined as string | undefined,
  h1: "Our Menu",
  intro:
    "Homemade Eastern European dishes made from scratch with fresh ingredients and lots of love.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: undefined as { label: string; href: string } | undefined,
  /** Matches the approved menu-reference.png composition: content on the
   * left, photography on the right. */
  align: "left" as "left" | "center",
};

export const menuSearch = {
  placeholder: "Search dishes…",
  align: "left" as "left" | "center",
  iconPosition: "left" as "left" | "right",
};

export const menuEmptyState = {
  message: "No dishes match that search. Try another search or browse the full menu.",
  clearLabel: "Clear search",
};

export type MenuCategoryInfoContent = {
  note: string;
  boxes: { label: string; price: number; currency: string }[];
};

// Per-category optional info block (MenuCategoryInfo.tsx), keyed by category
// slug. Only Gastroboxes has approved content today (MENU.md "Special Case:
// Gastroboxes") — add an entry here for another category if/when copy is
// approved for it; categories with no entry simply render nothing.
export const menuCategoryInfo: Record<string, MenuCategoryInfoContent | undefined> = {
  gastroboxes: {
    note: "Minimum order for one type of bruschetta: 10 pcs",
    boxes: [
      { label: "Gastrobox — 20 pcs", price: 90, currency: "USD" },
      { label: "Gastrobox — 40 pcs", price: 170, currency: "USD" },
    ],
  },
};

export const expandControls = {
  expandLabel: "Show More",
  collapseLabel: "Show Less",
};
