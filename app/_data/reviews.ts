export type Review = {
  rating: number;
  quote: string;
  name?: string;
  city?: string;
  eventType?: string;
  /** ISO date (e.g. "2026-01-15"), when known — powers "Most Recent" sorting
   * on /reviews. Omitted, never invented, until the owner supplies it. */
  date?: string;
};

// Exactly 3 editable entries per project-owner instruction. CLAUDE.md §14/§36
// forbid inventing names, cities, event types or review text, so `quote` is
// left blank (rendered as an editable placeholder by ReviewsPreview and by
// /reviews's ReviewCard) and the optional name/city/eventType/date fields are
// omitted until the owner supplies the real (translated) content for each
// entry.
export const reviews: Review[] = [
  { rating: 5, quote: "" },
  { rating: 5, quote: "" },
  { rating: 5, quote: "" },
];
