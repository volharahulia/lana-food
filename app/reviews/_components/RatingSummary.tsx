import Link from "next/link";
import { Star } from "@phosphor-icons/react/ssr";
import Section from "../../_components/ui/Section";
import Surface from "../../_components/ui/Surface";
import { googleRating, googleReviewCount, googleWriteReviewUrl } from "../../_data/reviews";
import { ratingSummaryContent } from "../_data/reviewsConfig";
import GoogleLogoIcon from "./GoogleLogoIcon";

// Section 2 — Google Rating Summary. A rating summary only: overall rating,
// stars, review count, and Google context — the only action here is the
// "Review us on Google" badge, which prompts the same write-a-review action
// as GoogleReviewsCta's "Leave a Review" button below, so it reuses that
// same googleWriteReviewUrl destination rather than a second URL. Rating
// value/count come from the centralized Reviews data source
// (app/_data/reviews.ts) and use its bracketed-placeholder convention
// ("[Google Rating]"/"[Review Count]") when not configured yet.
export default function RatingSummary() {
  const filledStars = googleRating != null ? Math.round(googleRating) : 5;

  return (
    <Section spacing="snug">
      <Surface
        tone="white"
        className="flex flex-col divide-y divide-border-hairline p-6 tablet:flex-row tablet:divide-x tablet:divide-y-0 tablet:items-center tablet:p-8"
      >
        <div className="flex flex-col items-start gap-2 pb-5 tablet:flex-1 tablet:items-start tablet:pb-0 tablet:pr-8">
          <p className="font-body text-sm text-ink-700">{ratingSummaryContent.heading}</p>
          <p className="font-display text-2xl font-semibold text-primary-600">
            {googleRating != null ? googleRating.toFixed(1) : "[Google Rating]"}
          </p>
          <div className="flex gap-1 text-gold-decorative" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} weight={i < filledStars ? "fill" : "regular"} size={18} />
            ))}
          </div>
          <p className="font-body text-sm text-ink-700">
            {googleReviewCount != null ? `${googleReviewCount} Reviews` : "[Review Count]"}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 pt-5 tablet:flex-1 tablet:items-start tablet:pt-0 tablet:pl-8">
          <p className="max-w-xs font-body text-sm text-ink-700">{ratingSummaryContent.caption}</p>
          {googleWriteReviewUrl ? (
            <Link
              href={googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-hairline bg-cream-300 px-4 py-2 font-body text-sm font-semibold text-ink-900 transition-colors duration-150 hover:bg-cream-500"
            >
              <GoogleLogoIcon size={20} />
              {ratingSummaryContent.googleBadgeLabel}
            </Link>
          ) : (
            // No real Google write-review URL configured yet — render the
            // same badge, inert, rather than a dead/fake link.
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-2 rounded-full border border-border-hairline bg-cream-300 px-4 py-2 font-body text-sm font-semibold text-ink-900 opacity-60"
            >
              <GoogleLogoIcon size={20} />
              {ratingSummaryContent.googleBadgeLabel}
            </span>
          )}
        </div>
      </Surface>
    </Section>
  );
}
