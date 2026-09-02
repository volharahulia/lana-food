type PillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

// Shared filter/toggle pill — first added for /reviews's Review Filters
// (REVIEWS.md §6). Active treatment reuses Button's own primary tokens
// (bg-primary-600/text-cream-300) rather than inventing a new color pairing;
// inactive reuses the bordered-pill shape already established by
// MenuSidebar's mobile subcategory row (app/menu/_components/MenuSidebar.tsx).
export default function Pill({ label, active, onClick }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border px-4 font-body text-sm font-semibold transition-colors duration-150 ${
        active
          ? "border-primary-600 bg-primary-600 text-cream-300"
          : "border-border-hairline bg-surface-white text-ink-700 hover:border-primary-600 hover:text-primary-600"
      }`}
    >
      {label}
    </button>
  );
}
