import SharedEmptyState from "../../_components/ui/EmptyState";
import { menuEmptyState } from "../_data/menuConfig";

type EmptyStateProps = {
  onClear: () => void;
};

// Thin adapter over the shared ui/EmptyState (extracted for reuse by
// /reviews) — supplies Menu's own copy, MenuExperience's import path is
// unaffected.
export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <SharedEmptyState
      message={menuEmptyState.message}
      actionLabel={menuEmptyState.clearLabel}
      onAction={onClear}
    />
  );
}
