import type { Metadata } from "next";
import ReviewsHero from "./_components/ReviewsHero";
import RatingSummary from "./_components/RatingSummary";
import ReviewsGrid from "./_components/ReviewsGrid";
import GoogleReviewsCta from "./_components/GoogleReviewsCta";
import ReviewsFinalCta from "./_components/ReviewsFinalCta";
import { business } from "../_data/business";
import { googleRating, googleReviewCount } from "../_data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Lana Food | Bay Area California",
  description: "Real customer reviews and event photography from Lana Food celebrations.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "/reviews" },
  ],
};

// AggregateRating only when the real Google values are configured
// (REVIEW.md §18 — no fabricated schema values). Individual Review schema
// is intentionally not emitted yet: Schema.org's Review type expects an
// author, and REVIEW.md §7/§18 forbid publishing customer identity without
// approved consent, so there is currently no real, publishable field to use
// for it — add it once real, attributable review data exists.
const aggregateRatingJsonLd =
  googleRating != null && googleReviewCount != null
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: business.name,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: googleRating,
          reviewCount: googleReviewCount,
        },
      }
    : null;

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {aggregateRatingJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
        />
      )}

      <ReviewsHero />
      <RatingSummary />
      <ReviewsGrid />
      <GoogleReviewsCta />
      <ReviewsFinalCta />
    </>
  );
}
