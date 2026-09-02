import { CaretLeft, CaretRight } from "@phosphor-icons/react/ssr";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

// Builds the visible page-number sequence: first, last, current ±1, and "…"
// for any gap in between — a standard windowed pattern that stays compact
// regardless of how many pages exist.
function getPageSequence(current: number, total: number): (number | "ellipsis")[] {
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const sequence: (number | "ellipsis")[] = [];
  sorted.forEach((page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) sequence.push("ellipsis");
    sequence.push(page);
  });
  return sequence;
}

// Shared pagination primitive — first added for /reviews's review grid
// (REVIEWS.md §8, OPEN-006: "implement the smallest accessible shared
// pattern required by the reference"). Renders nothing for a single page,
// matching the sitewide convention of hiding rather than padding out UI for
// data that doesn't yet require it.
export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const sequence = getPageSequence(currentPage, totalPages);

  return (
    <nav aria-label="Review pages" className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:text-primary-600 disabled:opacity-40 disabled:pointer-events-none"
      >
        <CaretLeft size={16} aria-hidden />
      </button>

      {sequence.map((item, i) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${i}`} aria-hidden className="px-1 font-body text-sm text-ink-500">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            aria-current={item === currentPage ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-full font-body text-sm font-semibold transition-colors ${
              item === currentPage
                ? "bg-primary-600 text-cream-300"
                : "text-ink-700 hover:bg-cream-500 hover:text-primary-600"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:text-primary-600 disabled:opacity-40 disabled:pointer-events-none"
      >
        <CaretRight size={16} aria-hidden />
      </button>
    </nav>
  );
}
