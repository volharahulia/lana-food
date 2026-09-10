import Image from "next/image";
import { business } from "../../_data/business";

type MenuPhotoProps = {
  /** Already-resolved image src, or undefined — resolution happens server-side
   * in parseMenu.ts (it needs `fs`, which can't reach this client component). */
  src: string | undefined;
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
};

// 4:5 dish photo per MENU.md/Design System. Falls back to the approved Lana
// Food logo (never invented food photography) when the Photo field is empty
// or the referenced file hasn't been placed under public/images/menu/ yet —
// dropping the real file at that path starts rendering it automatically.
export default function MenuPhoto({
  src,
  alt,
  unavailable = false,
  sizes,
  priority = false,
  className = "",
  showBadge = true,
}: MenuPhotoProps) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-md bg-cream-500 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${unavailable ? "saturate-[0.8] opacity-80" : ""}`}
        />
      ) : (
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
      )}

      {unavailable && showBadge && (
        <span className="absolute left-2 top-2 rounded-full bg-surface-white/95 px-2.5 py-1 font-body text-xs font-semibold text-ink-900 shadow-xs">
          Currently Unavailable
        </span>
      )}
    </div>
  );
}
