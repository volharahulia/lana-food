import { MagnifyingGlass } from "@phosphor-icons/react/ssr";
import { menuEmptyState } from "../_data/menuConfig";

type EmptyStateProps = {
  onClear: () => void;
};

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md border border-dashed border-border-strong py-16 text-center">
      <MagnifyingGlass size={32} weight="thin" className="text-ink-300" aria-hidden />
      <p className="max-w-sm font-body text-base text-ink-700">{menuEmptyState.message}</p>
      <button
        type="button"
        onClick={onClear}
        className="inline-flex min-h-11 items-center font-body text-sm font-semibold text-primary-600 hover:underline"
      >
        {menuEmptyState.clearLabel}
      </button>
    </div>
  );
}
