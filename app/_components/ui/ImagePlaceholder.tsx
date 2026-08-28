import Image from "next/image";
import { ImageSquare } from "@phosphor-icons/react/ssr";

type Ratio = "16:9" | "4:5" | "1:1" | "auto";

const ratioClasses: Record<Ratio, string> = {
  "16:9": "aspect-[16/9]",
  "4:5": "aspect-[4/5]",
  "1:1": "aspect-square",
  // No aspect-ratio class — the parent (via className, e.g. h-full) controls
  // height. Used where the image must stretch to match a sibling's height.
  auto: "",
};

type ImagePlaceholderProps = {
  ratio: Ratio;
  alt: string;
  radiusClassName?: string;
  className?: string;
  /** Once real photography exists, pass its src and the placeholder swaps
   * automatically for a next/image fill — no layout change required. */
  src?: string;
  priority?: boolean;
  /** Required whenever `src` is set: the image's actual rendered width at
   * each breakpoint (this component uses `fill`, so Next.js can't infer it
   * from layout). Compute it from the caller's real container/grid math,
   * not a generic guess — see call sites for worked examples. */
  sizes?: string;
};

export default function ImagePlaceholder({
  ratio,
  alt,
  radiusClassName = "rounded-md",
  className = "",
  src,
  priority = false,
  sizes,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden ${ratioClasses[ratio]} ${radiusClassName} ${className} ${
        src ? "" : "border border-dashed border-border-strong bg-cream-700"
      }`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <>
          <span className="sr-only">{alt}</span>
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
          >
            <ImageSquare size={28} weight="thin" className="text-ink-500/60" />
          </div>
        </>
      )}
    </div>
  );
}
