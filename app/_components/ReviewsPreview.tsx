import { Star } from "@phosphor-icons/react/ssr";
import SectionHeading from "./ui/SectionHeading";
import { reviews } from "../_data/reviews";
import { reviewsPreviewContent } from "../_data/homeContent";

export default function ReviewsPreview() {
  return (
    <div className="flex h-full flex-col gap-4">
      <SectionHeading title={reviewsPreviewContent.title} align="center" as="h3" />

      <div className="flex flex-col gap-3">
        {reviews.slice(0, reviewsPreviewContent.visibleCount).map((review, i) => (
          <article
            key={i}
            className={`flex flex-col gap-2 rounded-md border p-4 shadow-xs ${review.quote
              ? "border-border-hairline bg-surface-white"
              : "border-dashed border-border-strong bg-cream-700"
              }`}
          >
            <div
              className="flex gap-1 text-gold-decorative"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  weight={starIndex < review.rating ? "fill" : "regular"}
                  size={16}
                  aria-hidden
                />
              ))}
            </div>

            {review.quote ? (
              <p className="font-body text-base italic text-ink-900">
                &ldquo;{review.quote}&rdquo;
              </p>
            ) : (
              <p className="font-body text-sm italic text-ink-500">
                Review text coming soon.
              </p>
            )}

            {(review.name || review.city || review.eventType) && (
              <p className="font-body text-sm font-semibold text-ink-700">
                {review.name}
                {review.city ? `, ${review.city}` : ""}
                {review.eventType ? ` · ${review.eventType}` : ""}
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
