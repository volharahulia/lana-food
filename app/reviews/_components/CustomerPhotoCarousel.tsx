"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import ImagePlaceholder from "../../_components/ui/ImagePlaceholder";
import Section from "../../_components/ui/Section";
import SectionHeading from "../../_components/ui/SectionHeading";
import { customerPhotosContent } from "../_data/reviewsConfig";

type ResolvedCustomerPhoto = {
  src: string | undefined;
  alt: string;
};

type CustomerPhotoCarouselProps = {
  /** Already-resolved (src-exists-or-undefined) photo list — resolution
   * happens server-side in page.tsx via resolveImage(), the same fs-based
   * existence check every other page image slot uses; it can't run inside
   * this Client Component. See app/reviews/_data/reviewsImages.ts for the
   * actual photo list (customerPhotos) — this component never reads it
   * directly and never needs to change when that list changes. */
  photos: ResolvedCustomerPhoto[];
};

// Section 4 — Photos from Our Customers. A real carousel (native horizontal
// scroll + scroll-snap), not a grid and not a paginated gallery: exactly 1
// slide visible on mobile, 2 on tablet, 4 on desktop, via CSS flex-basis
// only — no per-breakpoint JS and no duplicated markup per breakpoint. Prev/
// Next scroll by the track's own clientWidth, so "one page" automatically
// matches however many slides are currently visible at that breakpoint.
// Touch swipe/drag comes for free from native scrolling; no drag handler
// needed. If fewer photos exist than fill a row, the row is simply shorter;
// nothing is duplicated or invented to pad it out.
//
// Photos are real phone/camera photography — vertical/portrait, not square —
// so each slide uses the Design System's 4:5 ratio (ImagePlaceholder
// ratio="4:5"), the same portrait treatment already used for dish/founder
// photography elsewhere on the site. Do not switch this back to 1:1.
export default function CustomerPhotoCarousel({ photos }: CustomerPhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (photos.length === 0) return null;

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <Section spacing="default">
      <SectionHeading title={customerPhotosContent.heading} align="center" />

      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory scroll-smooth overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="shrink-0 basis-full snap-start px-2 tablet:basis-1/2 laptop:basis-1/4"
          >
            <ImagePlaceholder
              ratio="4:5"
              alt={photo.alt}
              src={photo.src}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Previous photos"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hairline bg-surface-white text-ink-900 shadow-xs transition-colors duration-150 hover:bg-cream-300"
        >
          <CaretLeft size={20} weight="bold" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Next photos"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-hairline bg-surface-white text-ink-900 shadow-xs transition-colors duration-150 hover:bg-cream-300"
        >
          <CaretRight size={20} weight="bold" aria-hidden />
        </button>
      </div>
    </Section>
  );
}
