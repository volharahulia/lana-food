export type CateringEvent = {
  label: string;
  supportText: string;
  icon: string;
};

// Event types + supporting phrases approved in CLAUDE.md §12b. Icons are the
// approved custom Lana Food set (public/images/icons/ is the single source
// of truth, CLAUDE.md §33) — the path lives here, not in a component-side
// lookup map, so replacing an icon file only ever requires editing this file.
export const cateringEvents: CateringEvent[] = [
  {
    label: "Birthdays",
    supportText: "Make birthdays unforgettable",
    icon: "/images/icons/birthdays_icon.svg",
  },
  {
    label: "Baby Showers",
    supportText: "Celebrate new beginnings",
    icon: "/images/icons/baby_showers_icon.svg",
  },
  {
    label: "Family Gatherings",
    supportText: "Bring family together",
    icon: "/images/icons/family_gatherings_icon.svg",
  },
  {
    label: "Corporate Events",
    supportText: "Impress your team and clients",
    icon: "/images/icons/corporate_events_icon.svg",
  },
];
