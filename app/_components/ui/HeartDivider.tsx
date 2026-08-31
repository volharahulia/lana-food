import { Heart } from "@phosphor-icons/react/ssr";

type HeartDividerProps = {
  /** Sets the color of both hairlines and the heart via currentColor —
   * pass a text-* token class, e.g. "text-primary-600" (default) or
   * "text-cream-300" for use on a red/dark background. */
  className?: string;
};

// Small decorative hairline—heart—hairline flourish used under a page/section
// eyebrow (Contact intro, About founder intro, About mission) and standalone
// above a CTA headline (About closing CTA). Single source of truth for this
// motif so it can't drift between the places it repeats.
export default function HeartDivider({ className = "text-primary-600" }: HeartDividerProps) {
  return (
    <div aria-hidden className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-current" />
      <Heart size={20} weight="fill" />
      <span className="h-px w-8 bg-current" />
    </div>
  );
}
