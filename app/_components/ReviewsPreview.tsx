"use client";

import { useState } from "react";
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react";
import SectionHeading from "./ui/SectionHeading";
import { reviews } from "../_data/reviews";

const VISIBLE_DESKTOP = 3;

export default function ReviewsPreview() {
  const [index, setIndex] = useState(0);

  // No real reviews supplied yet — CLAUDE.md forbids fabricating names,
  // ratings, locations or quotes, so the section stays out of the page
  // rather than showing empty/fake cards. The carousel below renders
  // automatically as soon as app/_data/reviews.ts has real entries.
  if (reviews.length === 0) {
    return null;
  }

  const maxIndex = Math.max(0, reviews.length - VISIBLE_DESKTOP);
  const visible = reviews.slice(index, index + VISIBLE_DESKTOP);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function next() {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  return (
    <section className="bg-cream-500 py-10 laptop:py-16">
      <div className="mx-auto max-w-[1400px] px-4 tablet:px-6 laptop:px-8 desktop:px-12">
        <SectionHeading title="Customer Reviews" />

        <div className="relative mt-8">
          <div className="grid grid-cols-1 gap-5 tablet:grid-cols-3">
            {visible.map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                className="flex flex-col gap-4 rounded-md border border-border-hairline bg-surface-white p-5 shadow-xs"
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
                <p className="font-body text-base italic text-ink-900">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="font-body text-sm font-semibold text-ink-700">
                  — {review.name}, {review.city}
                  {review.eventType ? ` · ${review.eventType}` : ""}
                </p>
              </article>
            ))}
          </div>

          {reviews.length > VISIBLE_DESKTOP && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-hairline text-ink-900 disabled:opacity-40"
              >
                <CaretLeft size={18} aria-hidden />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Go to review set ${dotIndex + 1}`}
                    aria-current={dotIndex === index}
                    className={`h-2 w-2 rounded-full ${
                      dotIndex === index ? "bg-primary-600" : "bg-ink-300"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                disabled={index === maxIndex}
                aria-label="Next reviews"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-hairline text-ink-900 disabled:opacity-40"
              >
                <CaretRight size={18} aria-hidden />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
