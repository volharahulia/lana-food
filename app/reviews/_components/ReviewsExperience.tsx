"use client";

import { useMemo, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import type { Review } from "../../_data/reviews";
import Pill from "../../_components/ui/Pill";
import Grid from "../../_components/ui/Grid";
import Pagination from "../../_components/ui/Pagination";
import EmptyState from "../../_components/ui/EmptyState";
import ReviewCard from "./ReviewCard";
import {
  reviewFilters,
  reviewSortOptions,
  ALL_REVIEWS_FILTER_ID,
  allReviewsFilterLabel,
  REVIEWS_PAGE_SIZE,
  reviewsEmptyState,
} from "../_data/reviewsConfig";

type ReviewsExperienceProps = {
  reviews: Review[];
};

// The reference's initial desktop grid is 6 cards / 3 columns / 2 rows, but
// the shared review dataset (app/_data/reviews.ts, also used by Home's
// ReviewsPreview) currently has only 3 real entries. Rather than inventing
// real-looking reviews or growing the shared dataset (which would also
// change Home's rendered count), the unfiltered "All Reviews" view is padded
// out to REVIEWS_PAGE_SIZE with the exact same structural-placeholder shape
// already used for a real review with no quote yet (rating only, empty
// quote — ReviewCard renders this as the existing dashed "content pending"
// treatment, not as invented testimony). Category filters are never padded:
// a filtered view only ever shows genuine matches, so the empty state stays
// honest. No-op once real data reaches 6+ entries.
function withPlaceholders(reviews: Review[], minimum: number): Review[] {
  if (reviews.length >= minimum) return reviews;
  const filler: Review[] = Array.from({ length: minimum - reviews.length }, () => ({
    rating: 5,
    quote: "",
  }));
  return [...reviews, ...filler];
}

function sortReviews(reviews: Review[], sortId: string): Review[] {
  if (sortId !== "most-recent") return reviews;
  // Stable sort: reviews with a known date move newest-first; reviews
  // without one (all current placeholder entries) keep their original
  // relative order rather than being reshuffled by a missing value.
  return [...reviews].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return b.date.localeCompare(a.date);
  });
}

// Section 3+4+5 — Review Filters + Sorting, Reviews Grid, Pagination
// (REVIEW.md §6/§7/§8). One client component owns the shared interaction
// state (active filter, sort, page) the same way Menu's MenuExperience owns
// tab/search/scroll-spy state — the presentational pieces (Pill, ReviewCard,
// Pagination, EmptyState) stay simple and reusable.
export default function ReviewsExperience({ reviews }: ReviewsExperienceProps) {
  const [activeFilter, setActiveFilter] = useState(ALL_REVIEWS_FILTER_ID);
  const [sortId, setSortId] = useState(reviewSortOptions[0]?.id ?? "most-recent");
  const [page, setPage] = useState(1);

  const activeFilterLabel = reviewFilters.find((f) => f.id === activeFilter)?.label;

  const filtered = useMemo(() => {
    if (activeFilter === ALL_REVIEWS_FILTER_ID) return withPlaceholders(reviews, REVIEWS_PAGE_SIZE);
    return reviews.filter((r) => r.eventType?.toLowerCase() === activeFilterLabel?.toLowerCase());
  }, [reviews, activeFilter, activeFilterLabel]);

  const sorted = useMemo(() => sortReviews(filtered, sortId), [filtered, sortId]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / REVIEWS_PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = sorted.slice(
    (currentPage - 1) * REVIEWS_PAGE_SIZE,
    currentPage * REVIEWS_PAGE_SIZE
  );

  function handleFilterChange(id: string) {
    setActiveFilter(id);
    setPage(1);
  }

  return (
    <div className="container-page flex flex-col gap-8 py-10 laptop:py-16">
      <div className="flex flex-col gap-4 laptop:flex-row laptop:items-center laptop:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <Pill
            label={allReviewsFilterLabel}
            active={activeFilter === ALL_REVIEWS_FILTER_ID}
            onClick={() => handleFilterChange(ALL_REVIEWS_FILTER_ID)}
          />
          {reviewFilters.map((filter) => (
            <Pill
              key={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              onClick={() => handleFilterChange(filter.id)}
            />
          ))}
        </div>

        {reviewSortOptions.length > 0 && (
          <div className="relative shrink-0 self-start laptop:self-auto">
            <label htmlFor="review-sort" className="sr-only">
              Sort reviews
            </label>
            <select
              id="review-sort"
              value={sortId}
              onChange={(e) => setSortId(e.target.value)}
              className="h-11 appearance-none rounded-xs border border-border-hairline bg-surface-white pl-4 pr-9 font-body text-sm font-semibold text-ink-900 focus:border-primary-600"
            >
              {reviewSortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <CaretDown
              size={14}
              weight="bold"
              aria-hidden
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-700"
            />
          </div>
        )}
      </div>

      {pageItems.length > 0 ? (
        <Grid columns={{ base: 1, tablet: 2, laptop: 3 }} gap="md">
          {pageItems.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </Grid>
      ) : (
        <EmptyState
          message={reviewsEmptyState.message}
          actionLabel={reviewsEmptyState.clearLabel}
          onAction={() => handleFilterChange(ALL_REVIEWS_FILTER_ID)}
        />
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
