"use client";

import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { business } from "../../_data/business";
import type { MenuPhotoRef } from "../_data/types";

// Same threshold/ratio MenuCardModal.tsx uses for its own dish-to-dish
// swipe — kept as its own small local copy (not imported) since this photo
// component is the leaf both MenuCard and MenuCardModal render, and photo-
// swipe is a materially different gesture (navigates this dish's photos,
// only active in the detail modal) from that dish-to-dish one.
const PHOTO_SWIPE_THRESHOLD_PX = 50;
const PHOTO_SWIPE_DIRECTIONAL_RATIO = 1.5;

type MenuPhotoProps = {
  /** Already-resolved photos, in order (first = primary/default) — see
   * parseMenu.ts/_data/photos.ts. Resolution (and dimension reading)
   * happens server-side (needs `fs`, which can't reach this client
   * component); an empty array means no real photo exists yet. */
  photos: MenuPhotoRef[];
  alt: string;
  unavailable?: boolean;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Whether the "Currently Unavailable" text badge renders over the photo.
   * Defaults to true (existing behavior, unchanged). Set false at very small
   * render sizes (e.g. a compact list thumbnail) where the badge can't fit —
   * the saturate/opacity dimming below still applies either way. */
  showBadge?: boolean;
  /** "square" is the Menu card's photo preview: ALWAYS a filled 1:1 square
   * (object-fit: cover — crops a non-square source, never distorts it,
   * never leaves empty space around it). "detail" is the dish-detail
   * modal, which shows each photo at its own natural aspect ratio instead
   * (object-fit: contain, no cropping) — see MENU photo spec "Menu List /
   * Card Preview" vs "Detail Modal / Opened Dish": these are intentionally
   * different and must stay that way. */
  aspect: "square" | "detail";
  /** Opens the dish. On the card ("square"), the photo is always part of
   * the open-dish click target, whether it has one photo or several — see
   * MENU interaction spec "Mobile/Desktop Menu": the photo itself must
   * always be clickable to open the dish; photo navigation never lives in
   * the card preview. Not passed for "detail" (the modal is already open). */
  onOpenDish?: () => void;
};

// Falls back to the approved Lana Food logo (never invented food
// photography) when there's no real photo yet for this dish, or every
// listed filename hasn't been placed under public/images/menu/ — dropping
// the real file(s) at that path starts rendering them automatically. The
// placeholder (and its cream background) only ever appears when there is no
// real photo — a real photo always fills its area with nothing showing
// behind or around it.
//
// Multiple photos (MENU.md "Photo field") get manual-only navigation, and it
// only ever lives in ONE place at a time, by design (MENU interaction
// spec): the CARD preview never offers photo navigation at all — tapping/
// clicking it always opens the dish, on every device, so it never competes
// with the existing horizontal swipe-between-dishes gesture. The DETAIL
// MODAL is the only place photo navigation happens: small Previous/Next
// arrows on pointer-fine devices, and a horizontal swipe on touch devices
// (isolated from the modal's own dish-to-dish swipe via stopPropagation on
// pointerdown — see handlePhotoPointerDown). Never both at once, never
// autoplay. A photo that fails to actually load at runtime (as opposed to
// one that simply doesn't exist on disk, already filtered out server-side)
// is dropped from rotation rather than shown broken.
export default function MenuPhoto({
  photos,
  alt,
  unavailable = false,
  sizes,
  priority = false,
  className = "",
  showBadge = true,
  aspect,
  onOpenDish,
}: MenuPhotoProps) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  // A different dish (different `photos` reference) always restarts on its
  // own primary photo — this component instance is reused across re-renders
  // of the same MenuCard/MenuCardModal as `card` changes (e.g. modal
  // Previous/Next), so index must not leak from the previous dish. Adjusted
  // during render (React's documented pattern for resetting state when a
  // prop changes), same technique MenuExperience.tsx already uses for its
  // own url-driven query sync.
  const [lastPhotos, setLastPhotos] = useState(photos);
  if (photos !== lastPhotos) {
    setLastPhotos(photos);
    setIndex(0);
    setFailed(new Set());
  }

  const usable = photos.filter((photo) => !failed.has(photo.src));
  const clampedIndex = Math.min(index, Math.max(usable.length - 1, 0));
  const current = usable[clampedIndex];
  const hasMultiple = usable.length > 1;

  function goTo(next: number) {
    setIndex(((next % usable.length) + usable.length) % usable.length);
  }

  function markFailed(src: string) {
    setFailed((prev) => new Set(prev).add(src));
  }

  // Detail-modal-only touch swipe between this dish's own photos. Swipe is
  // a touch-only enhancement (mouse/pen never starts one), matching
  // MenuCardModal's own dish-swipe pattern. stopPropagation on pointerdown
  // is what keeps this dish's photo swipe from also being read by
  // MenuCardModal's Dialog.Content-level pointerdown/pointerup as a
  // dish-to-dish swipe — that handler never even records a start position
  // for a gesture that began on the photo, so there is nothing for it to
  // act on afterwards; no gesture-arbitration logic needed.
  function handlePhotoPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "touch") return;
    swipeStart.current = { x: e.clientX, y: e.clientY };
    e.stopPropagation();
  }

  function handlePhotoPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start || e.pointerType !== "touch") return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) < PHOTO_SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy) * PHOTO_SWIPE_DIRECTIONAL_RATIO) {
      return;
    }
    if (dx < 0) goTo(clampedIndex + 1);
    else goTo(clampedIndex - 1);
  }

  const isSquare = aspect === "square";
  // Card preview: always a filled square, cropping via cover — never lets
  // the source ratio leave empty space (MENU photo spec "Card Layout": every
  // menu card's image area has identical dimensions). Detail modal: a box
  // whose own ratio matches the photo's real dimensions exactly (not a
  // static square/4:5), only capped by the modal's existing max-width
  // column; contain + a 4:5 fallback box covers the rare case where a
  // photo's dimensions couldn't be read.
  const showsNaturalSize = !isSquare && current?.width && current?.height;

  // Pointer-fine only: small Previous/Next arrows + dots — the ONLY photo
  // navigation UI the card preview ever shows (desktop), and one of two
  // ways to navigate in the detail modal (alongside touch swipe there).
  // Native <button>s, so Tab + Enter/Space already work; the sitewide
  // :focus-visible ring (globals.css) applies automatically. On the card,
  // these are siblings of (not nested inside) the "open dish" button below
  // — the topmost element at a given screen point always receives the
  // click, so clicking an arrow can never also open the dish, with no
  // stopPropagation needed there.
  const arrowsAndDots = hasMultiple && (
    <>
      <button
        type="button"
        onClick={() => goTo(clampedIndex - 1)}
        aria-label="Previous photo"
        className="absolute left-1.5 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-surface-white/90 text-ink-700 shadow-xs transition-colors hover:text-primary-600 pointer-fine:flex"
      >
        <CaretLeft size={14} weight="bold" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => goTo(clampedIndex + 1)}
        aria-label="Next photo"
        className="absolute right-1.5 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-surface-white/90 text-ink-700 shadow-xs transition-colors hover:text-primary-600 pointer-fine:flex"
      >
        <CaretRight size={14} weight="bold" aria-hidden />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-1.5 flex justify-center gap-1" aria-hidden>
        {usable.map((photo, i) => (
          <span
            key={photo.src}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === clampedIndex ? "bg-surface-white" : "bg-surface-white/50"
            }`}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        Photo {clampedIndex + 1} of {usable.length}
      </span>
    </>
  );

  const badge = unavailable && showBadge && (
    <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-surface-white/95 px-2.5 py-1 font-body text-xs font-semibold text-ink-900 shadow-xs">
      Currently Unavailable
    </span>
  );

  if (!current) {
    // No valid photo — the only place the Lana Food placeholder (and its
    // cream background) ever appears.
    return (
      <div
        className={`relative ${isSquare ? "aspect-square" : "aspect-[4/5]"} overflow-hidden rounded-md bg-cream-500 ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <Image
            src={business.logo}
            alt=""
            aria-hidden
            width={120}
            height={120}
            className={`h-auto w-full max-w-[120px] object-contain opacity-70 ${
              unavailable ? "saturate-[0.8]" : ""
            }`}
          />
          <span className="sr-only">{alt}</span>
        </div>
        {onOpenDish && (
          <button type="button" onClick={onOpenDish} aria-label={alt} className="absolute inset-0" />
        )}
        {badge}
      </div>
    );
  }

  if (showsNaturalSize) {
    // Detail modal, dimensions known: the wrapper's own box is set to the
    // photo's exact real ratio via inline style (width: 100% + aspect-ratio
    // computes the height directly from it), then `fill` stretches the
    // image to exactly that box — same fixed-box-plus-fill technique the
    // square/fallback branch below already uses, just with a per-photo
    // dynamic ratio instead of a static one. This is what the Previous/
    // Next arrows below are positioned against (absolute + this div's own
    // `relative`), so they're guaranteed to align with the photo's actual
    // rendered bounds — the previous inline-block + intrinsic width/height
    // + w-full/h-auto approach didn't reliably size the wrapper to match
    // the visually-scaled image, which is what put the arrows below the
    // photo instead of over it.
    return (
      <div
        className={`relative w-full overflow-hidden rounded-md ${className}`}
        style={{ aspectRatio: `${current.width} / ${current.height}` }}
        {...(hasMultiple
          ? { onPointerDown: handlePhotoPointerDown, onPointerUp: handlePhotoPointerUp }
          : {})}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-contain ${unavailable ? "saturate-[0.8] opacity-80" : ""}`}
          onError={() => markFailed(current.src)}
        />
        {arrowsAndDots}
        {badge}
      </div>
    );
  }

  // Card preview (always), or detail modal with an unreadable-dimension
  // photo (rare fallback): a fixed box + fill. Card uses cover — the photo
  // fills the entire square, cropped as needed, never leaving empty space
  // (MENU photo spec "Menu List / Card Preview"). Detail fallback keeps
  // using contain inside an assumed 4:5 box so an undistorted, uncropped
  // view is still shown even without real dimensions.
  return (
    <div
      className={`relative ${isSquare ? "aspect-square" : "aspect-[4/5]"} overflow-hidden rounded-md ${className}`}
      {...(!isSquare && hasMultiple
        ? { onPointerDown: handlePhotoPointerDown, onPointerUp: handlePhotoPointerUp }
        : {})}
    >
      <Image
        key={current.src}
        src={current.src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${isSquare ? "object-cover" : "object-contain"} ${
          unavailable ? "saturate-[0.8] opacity-80" : ""
        }`}
        onError={() => markFailed(current.src)}
      />
      {/* Card: the photo is always part of the open-dish click target,
          single or multi-photo alike — MENU interaction spec "Mobile/
          Desktop Menu — Multiple Photos": the photo itself must be
          clickable, never just an empty area elsewhere on the card. Not
          rendered for the modal (isSquare false), which never passes
          onOpenDish — it's already open. */}
      {isSquare && onOpenDish && (
        <button type="button" onClick={onOpenDish} aria-label={alt} className="absolute inset-0" />
      )}
      {arrowsAndDots}
      {badge}
    </div>
  );
}
