export type MenuCategory = {
  name: string;
  description: string;
  href: string;
  /** Intended production photo path — see app/_data/homeImages.ts's resolveImage(). */
  image: string;
};

// Copy approved in CLAUDE.md §11 — do not alter without a project decision.
export const menuCategories: MenuCategory[] = [
  {
    name: "Holiday Menu",
    description: "Traditional dishes for holidays & special occasions",
    href: "/menu/holiday",
    image: "/images/home/menu-holiday.jpg",
  },
  {
    name: "Everyday Menu",
    description: "Delicious homemade meals for any day",
    href: "/menu/everyday",
    image: "/images/home/menu-everyday.jpg",
  },
  {
    name: "Kids' Menu",
    description: "Tasty & wholesome options kids will love",
    href: "/menu/kids",
    image: "/images/home/menu-kids.jpg",
  },
];
