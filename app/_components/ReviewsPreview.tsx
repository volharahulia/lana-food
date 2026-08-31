"use client";

import { useState } from "react";
import { Star } from "@phosphor-icons/react";
import SectionHeading from "./ui/SectionHeading";
import { reviews } from "../_data/reviews";
import { reviewsPreviewContent } from "../_data/homeContent";

export default function ReviewsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-full flex-col gap-5">
      <SectionHeading title={reviewsPreviewContent.title} align="center" as="h3" />

      <div className="flex flex-col gap-4">
        {reviews.map((review, i) => (
          <article
            key={i}
            className={`flex flex-col gap-3 rounded-md border p-5 shadow-xs ${review.quote
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

      {/* All 3 reviews are already shown at once, so the dots are a static
          position indicator (per spec) rather than functional pagination —
          there's nothing to page through until more reviews are added. */}
      {reviews.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {reviews.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setActiveIndex(dotIndex)}
              aria-label={`Review ${dotIndex + 1}`}
              aria-current={dotIndex === activeIndex}
              className={`h-2 w-2 rounded-full ${dotIndex === activeIndex ? "bg-primary-600" : "bg-ink-300"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
