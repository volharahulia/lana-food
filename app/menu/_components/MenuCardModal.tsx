"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { MenuCardData } from "../_data/types";
import { formatPrice, formatQuantity, formatWeight } from "../_data/format";
import MenuPhoto from "./MenuPhoto";

// A swipe must move at least this far horizontally, and be clearly more
// horizontal than vertical, before it's treated as Previous/Next rather than
// an incidental finger movement or a vertical scroll — see handlePointerUp.
const SWIPE_THRESHOLD_PX = 50;
const SWIPE_DIRECTIONAL_RATIO = 1.5;

type MenuCardModalProps = {
  card: MenuCardData | null;
  /** The open card's containing subcategory name (null when the category has
   * no subcategory structure, e.g. Kids' Menu) — rendered as a mobile/tablet-
   * only contextual label above the card, per MENU.md. */
  subcategoryName: string | null;
  onOpenChange: (open: boolean) => void;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export default function MenuCardModal({
  card,
  subcategoryName,
  onOpenChange,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: MenuCardModalProps) {
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const canNavigate = hasPrevious || hasNext;

  // Swipe is a touch-only enhancement (per spec) — mouse/pen pointers never
  // start a swipe, so desktop drag-to-navigate is never accidentally enabled.
  function handlePointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "touch") return;
    swipeStart.current = { x: e.clientX, y: e.clientY };
  }

  // Decided entirely on release, from the total travel distance — nothing is
  // dragged/followed mid-gesture and nothing calls preventDefault, so native
  // vertical scrolling, text selection and the modal's own controls are
  // never intercepted. Only a clearly horizontal, clearly intentional
  // movement (past SWIPE_THRESHOLD_PX and dominant over vertical travel)
  // triggers navigation; a tap or a vertical scroll gesture never does.
  function handlePointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start || e.pointerType !== "touch") return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy) * SWIPE_DIRECTIONAL_RATIO) {
      return;
    }
    if (dx < 0) onNext();
    else onPrevious();
  }

  function handleKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft" && hasPrevious) onPrevious();
    else if (e.key === "ArrowRight" && hasNext) onNext();
  }

  const arrowButtonClass =
    "hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-surface-white transition-colors duration-150 hover:bg-surface-white/10 disabled:pointer-events-none disabled:opacity-30 laptop:flex";

  return (
    <Dialog.Root open={card !== null} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-900/50 data-[state=open]:animate-in data-[state=open]:fade-in" />
        {/* Content is a transparent row — [external Prev][white card][external
            Next] — so the arrows live inside Radix's own focus trap/outside-
            click boundary (real siblings, not a separately-portaled control),
            without being part of the dish content itself. Below laptop the
            arrows are hidden (zero width/gap) and the card alone fills the
            row exactly as it did before this change — see the card's own
            className comment for the laptop+ width math. */}
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 flex w-[90vw] max-w-[960px] -translate-x-1/2 -translate-y-1/2 items-center gap-4 laptop:max-w-[1080px]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          {card && (
            <>
              {canNavigate && (
                <button
                  type="button"
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  aria-label="Previous dish"
                  className={arrowButtonClass}
                >
                  <CaretLeft size={24} aria-hidden />
                </button>
              )}

              {/* laptop+ width: 90vw minus the space the two external arrows +
                  gaps reserve — 2 × (2.75rem button + 1rem gap-4) = 7.5rem —
                  so [Prev][card][Next] always fits the viewport with no
                  overflow. See Dialog.Content's own max-w-[1080px] (the same
                  960px card cap + that same 7.5rem) for the wide-screen case.
                  Below laptop the subcategory label (when present) sits in
                  this same column, above the card, as part of the modal
                  composition rather than the card itself. min-w-0: a flex
                  item's default min-width is its content's min-content size,
                  not 0 — without this, a long unbroken ingredient/description
                  string can force this column past its assigned width, and
                  since Dialog.Content is position:fixed with the default
                  overflow:visible, that spillover bleeds past the viewport
                  edge and creates page-level horizontal scroll. */}
              <div className="flex w-full min-w-0 flex-col items-center gap-2 laptop:w-[calc(90vw-7.5rem)] laptop:max-w-[960px]">
                {subcategoryName && (
                  <p className="px-1 text-center font-body text-sm font-semibold uppercase tracking-[0.11em] text-ink-900 laptop:hidden">
                    {subcategoryName}
                  </p>
                )}

                <div className="max-h-[90vh] w-full overflow-x-hidden overflow-y-auto rounded-lg bg-surface-white p-6 shadow-lg tablet:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <Dialog.Title className="break-words font-display text-2xl font-medium text-ink-900">
                      {card.name}
                    </Dialog.Title>
                    <Dialog.Close
                      aria-label="Close"
                      className="flex h-11 w-11 shrink-0 items-center justify-center text-ink-700 hover:text-primary-600"
                    >
                      <X size={22} aria-hidden />
                    </Dialog.Close>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-6 tablet:grid-cols-[minmax(0,280px)_1fr]">
                    <MenuPhoto
                      src={card.photo}
                      alt={card.name}
                      unavailable={!card.available}
                      sizes="(min-width: 768px) 280px, 80vw"
                      className="tablet:max-w-[280px]"
                    />

                    <div className="flex flex-col divide-y divide-border-hairline">
                      {card.variants.map((v, i) => (
                        <div key={i} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
                          {v.variant && (
                            <h4 className="break-words font-display text-lg font-medium text-ink-900">
                              {v.variant}
                            </h4>
                          )}

                          {v.description && (
                            <p className="break-words font-body text-sm text-ink-700">{v.description}</p>
                          )}

                          {v.ingredients && (
                            <p className="break-words font-body text-sm text-ink-700">
                              <span className="font-semibold text-ink-900">Ingredients: </span>
                              {v.ingredients}
                            </p>
                          )}

                          {v.allergens && (
                            <p className="break-words font-body text-sm text-ink-700">
                              <span className="font-semibold text-ink-900">Allergens: </span>
                              {v.allergens}
                            </p>
                          )}

                          {(formatQuantity(v) || formatWeight(v)) && (
                            <p className="font-body text-sm text-ink-500">
                              {[formatQuantity(v), formatWeight(v)].filter(Boolean).join(" · ")}
                            </p>
                          )}

                          <div className="flex items-center justify-between gap-4 pt-1">
                            {formatPrice(v) && (
                              <p className="font-body text-lg font-semibold text-primary-600">
                                {formatPrice(v)}
                              </p>
                            )}
                            {!v.available && (
                              <span className="rounded-full bg-cream-500 px-2.5 py-1 font-body text-xs font-semibold text-ink-700">
                                Currently Unavailable
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {canNavigate && (
                <button
                  type="button"
                  onClick={onNext}
                  disabled={!hasNext}
                  aria-label="Next dish"
                  className={arrowButtonClass}
                >
                  <CaretRight size={24} aria-hidden />
                </button>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
