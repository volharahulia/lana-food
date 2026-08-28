export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

// The Menu page is a single tabbed route (MENU.md) — these deep-link into
// the matching tab via ?tab=, rather than pointing at separate pages.
export const menuDropdown: NavLink[] = [
  { label: "Holiday Menu", href: "/menu?tab=holiday" },
  { label: "Everyday Menu", href: "/menu?tab=everyday" },
  { label: "Kids' Menu", href: "/menu?tab=kids" },
  { label: "Gastroboxes", href: "/menu?tab=gastroboxes" },
];

// Russian is optional per the Website Strategy / IA. No localized content
// exists yet, so the switch stays hidden until it is enabled here — this
// flips visibility sitewide with no layout change (per CLAUDE.md §28).
export const MULTILINGUAL_ENABLED = false;
