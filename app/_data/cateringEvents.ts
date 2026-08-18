export type CateringEvent = {
  label: string;
  supportText: string;
  icon: "cake" | "stroller" | "usersThree" | "briefcase";
};

// Event types + supporting phrases approved in CLAUDE.md §12b.
export const cateringEvents: CateringEvent[] = [
  { label: "Birthdays", supportText: "Make birthdays unforgettable", icon: "cake" },
  { label: "Baby Showers", supportText: "Celebrate new beginnings", icon: "stroller" },
  { label: "Family Gatherings", supportText: "Bring family together", icon: "usersThree" },
  { label: "Corporate Events", supportText: "Impress your team and clients", icon: "briefcase" },
];
