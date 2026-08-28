export type Review = {
  rating: number;
  quote: string;
  name?: string;
  city?: string;
  eventType?: string;
};

// Exactly 3 editable entries per project-owner instruction. CLAUDE.md §14/§36
// forbid inventing names, cities, event types or review text, so `quote` is
// left blank (rendered as an editable placeholder by ReviewsPreview) and the
// optional name/city/eventType fields are omitted until the owner supplies
// the real (translated) content for each entry.
export const reviews: Review[] = [
  { rating: 5, quote: "Review 1" },
  { rating: 5, quote: "Review 2" },
  { rating: 5, quote: "Review 3" },
];
