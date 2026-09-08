"use client";

import { useMemo, useState } from "react";
import Grid from "../../_components/ui/Grid";
import Pagination from "../../_components/ui/Pagination";
import ReviewCard from "./ReviewCard";
import { reviews, type Review } from "../../_data/reviews";
import { REVIEWS_PAGE_SIZE } from "../_data/reviewsConfig";

// Temporary layout-development padding only — never fabricated review text.
// While the real dataset (app/_data/reviews.ts) has fewer than
// REVIEWS_PAGE_SIZE entries, the grid is padded out with the same honest
// "content pending" structural-placeholder shape ReviewCard already renders
// for any real review with no quote yet (rating only, empty quote — never
// invented testimony, never a customer identity). This padding automatically
// shrinks and disappears as real reviews are added — once
// app/_data/reviews.ts has REVIEWS_PAGE_SIZE (6) or more real entries,
// withPlaceholders is a no-op and every card shown is real.
function withPlaceholders(list: Review[], minimum: number): Review[] {
  if (list.length >= minimum) return list;
  const filler: Review[] = Array.from({ length: minimum - list.length }, (_, i) => ({
    id: `placeholder-${i}`,
    rating: 5,
    quote: "",
  }));
  return [...list, ...filler];
}

// Section — Reviews Grid. A simple chronological grid: no category filters
// and no sorting (removed per explicit project decision — the current
// dataset doesn't support meaningful event-type categorization, and with no
// real review dates yet, "most recent" sorting would be a no-op UI control).
// Pagination stays wired for when the real dataset grows past
// REVIEWS_PAGE_SIZE; it renders nothing while everything fits on one page
// (see Pagination.tsx). Reviews are read directly from the centralized data
// source — no prop threading, no page-level wiring required.
export default function ReviewsGrid() {
  const [page, setPage] = useState(1);

  const displayReviews = useMemo(() => withPlaceholders(reviews, REVIEWS_PAGE_SIZE), []);

  const totalPages = Math.max(1, Math.ceil(displayReviews.length / REVIEWS_PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = displayReviews.slice(
    (currentPage - 1) * REVIEWS_PAGE_SIZE,
    currentPage * REVIEWS_PAGE_SIZE
  );

  return (
    <div className="container-page flex flex-col gap-8 py-10 laptop:py-16">
      <Grid columns={{ base: 1, tablet: 2, laptop: 3 }} gap="md">
        {pageItems.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Grid>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
