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
// Real Google/review data itself is NOT duplicated here — it lives in the
// centralized app/_data/reviews.ts (googleReviewsUrl, googleWriteReviewUrl,
// googleRating, googleReviewCount, and the review list — also shared with
// Home's ReviewsPreview), the project's single source of truth for that data.

export const reviewsHero = {
  h1: "Loved by Families Across the Bay Area",
  intro:
    "See how Lana Food has helped make celebrations memorable across the San Francisco Bay Area.",
  // Same { src, alt, objectPosition } shape as cateringHero.image /
  // menuHero's image slot — until a real photo is placed at this path,
  // resolveImage() returns undefined and ImagePlaceholder renders the
  // established neutral placeholder, exactly like Catering/Menu's Hero do.
  image: {
    src: "/images/reviews/hero.jpg",
    alt: "Lana Food homemade dishes shared at a customer celebration",
    objectPosition: undefined as string | undefined,
  },
};

export const ratingSummaryContent = {
  heading: "Overall Google Rating",
  caption: "Based on real reviews from our amazing customers on Google.",
  googleBadgeLabel: "Review us on Google",
};

// Both CTA labels live only in the "More Reviews on Google" section (the
// only place these two buttons render) — kept as named constants so wording
// only ever needs to change in one place. "Read More Reviews on Google" uses
// app/_data/reviews.ts's googleReviewsUrl; "Leave a Review" uses its
// googleWriteReviewUrl — two distinct destinations.
export const googleCtaLabels = {
  readMore: "Read More Reviews on Google",
  leaveReview: "Leave a Review",
};

export const customerPhotosContent = {
  heading: "Photos from Our Customers",
};

// Review category filters and sorting were removed (explicit project
// decision): the current review dataset doesn't support meaningful
// event-type categorization or date-based ordering yet. The page is a
// simple chronological grid instead — see ReviewsGrid.tsx.

// Cards per page — also the grid's 3-column × 2-row initial layout target.
export const REVIEWS_PAGE_SIZE = 6;

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
