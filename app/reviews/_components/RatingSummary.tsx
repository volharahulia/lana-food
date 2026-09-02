import { Star, GoogleLogo } from "@phosphor-icons/react/ssr";
import Section from "../../_components/ui/Section";
import Surface from "../../_components/ui/Surface";
import { business } from "../../_data/business";
import { ratingSummaryContent } from "../_data/reviewsConfig";

// Section 2 — Google Rating Summary. A rating summary only: overall rating,
// stars, review count, and Google context — no action buttons here anymore
// (per explicit project correction: the "Read More Reviews on Google" /
// "Leave a Review" actions were duplicated between this section and the
// dedicated GoogleReviewsCta section below the grid; they now live only
// there). Rating value/count use the reference's own bracketed-placeholder
// convention ("[Google Rating]"/"[Review Count]") when
// business.googleRating/googleReviewCount aren't configured yet.
export default function RatingSummary() {
  const { googleRating, googleReviewCount } = business;
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
          <span className="inline-flex items-center gap-2 rounded-full border border-border-hairline bg-cream-300 px-4 py-2 font-body text-sm font-semibold text-ink-900">
            <GoogleLogo size={20} aria-hidden />
            {ratingSummaryContent.googleBadgeLabel}
          </span>
        </div>
      </Surface>
    </Section>
  );
}
