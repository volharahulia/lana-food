// Editable Reviews page content — mirrors the same page-local content/data
// pattern already used by About/Contact/Catering/Menu (see
// app/about/_data/aboutConfig.ts, app/contact/_data/contactConfig.ts,
// app/catering/_data/cateringConfig.ts, app/menu/_data/menuConfig.ts). Every
// user-facing string, CTA label/link, and collection lives here; components
// only render it. Copy not spelled out verbatim in REVIEW.md's "Approved
// content" sections is transcribed from the approved visual reference
// (public/images/review-reference.png), same as the equivalent gaps were
// handled for About/Contact/Catering.
//
// Google rating/count/review data itself is NOT duplicated here — it lives
// in app/_data/business.ts (rating/count/destinations) and
// app/_data/reviews.ts (the review list, shared with Home's ReviewsPreview),
// the project's single sources of truth for that real data.

export const reviewsHero = {
  h1: "Loved by Families Across the Bay Area",
  intro:
    "See how Lana Food has helped make celebrations memorable across the San Francisco Bay Area.",
};

export const ratingSummaryContent = {
  heading: "Overall Google Rating",
  caption: "Based on real reviews from our amazing customers on Google.",
  googleBadgeLabel: "Review us on Google",
};

// Both CTA labels live only in the "More Reviews on Google" section now
// (RatingSummary no longer duplicates these buttons) — kept as named
// constants so wording only ever needs to change in one place. Both buttons
// resolve to the same single business.googleBusinessProfile destination.
export const googleCtaLabels = {
  readMore: "Read More Reviews on Google",
  leaveReview: "Leave a Review",
};

// Filter categories as shown in review-reference.png's Review Filters row
// ("All Reviews / Catering / Everyday Food / Holiday Orders / Kids' Parties").
// Note: this differs from REVIEW.md §6's prose list (which repeats §9's
// Celebrations event-type list) — the actual reference pills use Lana Food's
// service-line categories instead. Per REVIEW.md §1 the reference image is
// the compositional authority for Reviews-specific UI, so the pills below
// follow the image; see the implementation report for this recorded
// conflict. "All Reviews" is handled by the component as the implicit
// default filter and isn't listed here.
export type ReviewFilter = { id: string; label: string };
export const reviewFilters: ReviewFilter[] = [
  { id: "catering", label: "Catering" },
  { id: "everyday-food", label: "Everyday Food" },
  { id: "holiday-orders", label: "Holiday Orders" },
  { id: "kids-parties", label: "Kids' Parties" },
];
export const ALL_REVIEWS_FILTER_ID = "all";
export const allReviewsFilterLabel = "All Reviews";

export type SortOption = { id: string; label: string };
export const reviewSortOptions: SortOption[] = [{ id: "most-recent", label: "Most Recent" }];

export const REVIEWS_PAGE_SIZE = 6;

export const reviewsEmptyState = {
  message: "No reviews match this filter yet.",
  clearLabel: "Show all reviews",
};

export const googleReviewsCta = {
  heading: "More Reviews on Google",
  message: "See what more of our customers have to say about their experience with Lana Food.",
  image: {
    src: "/images/reviews/google-cta.jpg",
    alt: "Homemade Lana Food dishes served at a recent celebration",
    objectPosition: undefined as string | undefined,
  },
};

// Final CTA — content only. Presentation reuses the shared CtaBlock's
// existing "split" pattern exactly as Catering/About already use it (see
// ReviewsFinalCta.tsx) — no image, no page-specific variant.
export const reviewsFinalCta = {
  heading: "Let's Make Your Next Celebration Special",
  supportingText: "We'd love to help make it delicious and memorable.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "View Menu", href: "/menu" },
};
