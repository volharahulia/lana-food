import type { Metadata } from "next";
import ReviewsHero from "./_components/ReviewsHero";
import RatingSummary from "./_components/RatingSummary";
import GoogleReviewsCta from "./_components/GoogleReviewsCta";
import ReviewsGrid from "./_components/ReviewsGrid";
import CustomerPhotoCarousel from "./_components/CustomerPhotoCarousel";
import ReviewsFinalCta from "./_components/ReviewsFinalCta";
import { business } from "../_data/business";
import { googleRating, googleReviewCount } from "../_data/reviews";
import { customerPhotos, resolveImage } from "./_data/reviewsImages";

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
// (REVIEW.md §16 — no fabricated schema values). Individual Review schema
// is intentionally not emitted yet: Schema.org's Review type expects an
// author, and REVIEW.md §6/§16 forbid publishing customer identity without
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

// Resolved server-side (resolveImage() needs fs) and passed down as plain
// data — CustomerPhotoCarousel is a Client Component and can't resolve
// image existence itself. See app/reviews/_data/reviewsImages.ts for the
// actual editable photo list.
const resolvedCustomerPhotos = customerPhotos.map((photo) => ({
  src: resolveImage(photo.src),
  alt: photo.alt,
}));

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
      <GoogleReviewsCta />
      <ReviewsGrid />
      <CustomerPhotoCarousel photos={resolvedCustomerPhotos} />
      <ReviewsFinalCta />
    </>
  );
}
