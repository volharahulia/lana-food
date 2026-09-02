import type { Icon } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react/ssr";

type EmptyStateProps = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  /** Defaults to MagnifyingGlass (the existing Menu empty state's icon). */
  icon?: Icon;
};

// Shared empty-state primitive — extracted from Menu's original
// implementation (MENU.md) so /reviews (REVIEWS.md §7 "Empty state") can
// reuse the exact same treatment instead of a page-specific copy. Menu's own
// EmptyState.tsx now delegates here with its own copy/icon.
export default function EmptyState({
  message,
  actionLabel,
  onAction,
  icon: IconComponent = MagnifyingGlass,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md border border-dashed border-border-strong py-16 text-center">
      <IconComponent size={32} weight="thin" className="text-ink-300" aria-hidden />
      <p className="max-w-sm font-body text-base text-ink-700">{message}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex min-h-11 items-center font-body text-sm font-semibold text-primary-600 hover:underline"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
