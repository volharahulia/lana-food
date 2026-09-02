import { Star } from "@phosphor-icons/react/ssr";
import type { Review } from "../../_data/reviews";

const PLACEHOLDER_QUOTE =
  "Review text will appear here once available from real customers. This is a structural placeholder for the review content.";

type ReviewCardProps = {
  review: Review;
};

// REVIEW.md §7: customer name, city, initials and avatars must NOT be
// rendered on this page until an approved privacy policy and explicit
// publication consent exist — unlike Home's ReviewsPreview (which does show
// name/city when present), this card only ever renders rating, date, quote
// and event type. When a review has no quote yet, it shows the reference's
// own bracketed structural-placeholder sentence (public/images/
// review-reference.png) rather than inventing testimony — the same "pending
// content" dashed/cream treatment ImagePlaceholder already uses sitewide for
// missing photography.
export default function ReviewCard({ review }: ReviewCardProps) {
  const hasQuote = review.quote.trim().length > 0;

  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-lg border p-5 ${
        hasQuote
          ? "border-border-hairline bg-surface-white shadow-xs"
          : "border-dashed border-border-strong bg-cream-700"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-1 text-gold-decorative" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} weight={i < review.rating ? "fill" : "regular"} size={16} aria-hidden />
          ))}
        </div>
        {review.date && <span className="font-body text-xs text-ink-500">{review.date}</span>}
      </div>

      <p className={`font-body text-sm leading-[1.6] ${hasQuote ? "text-ink-900" : "italic text-ink-500"}`}>
        {hasQuote ? review.quote : PLACEHOLDER_QUOTE}
      </p>

      {review.eventType && (
        <div className="mt-auto border-t border-border-hairline pt-4">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 font-body text-xs font-semibold text-primary-600">
            {review.eventType}
          </span>
        </div>
      )}
    </article>
  );
}
