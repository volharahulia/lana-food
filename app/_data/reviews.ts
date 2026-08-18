export type Review = {
  rating: number;
  quote: string;
  name: string;
  city: string;
  eventType?: string;
};

// No real customer reviews have been supplied yet. CLAUDE.md §14 / §36
// explicitly forbid inventing names, ratings, locations or review text, so
// this stays empty until real testimonials are provided — ReviewsPreview
// renders nothing until this array has entries, rather than showing
// fabricated content.
export const reviews: Review[] = [];
