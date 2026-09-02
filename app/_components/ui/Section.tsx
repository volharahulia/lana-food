import type { ReactNode } from "react";

// Shared site-wide layout primitive — owns vertical rhythm and section
// width/background mode ONLY. It never owns column/grid behavior (see Grid)
// or card background/border/radius (see Surface); the internal arrangement
// of a section's content is that section's own concern.
//
// `spacing` variants are grounded in the pixel pairs already established
// across the site (see the Phase 1 refactor report) — they intentionally
// reuse Tailwind's own scale rather than inventing new pixel values. The
// Lana Food Design System's documented space-9/11/12 scale (56-64px mobile /
// 96-128px desktop) is measurably larger than every one of these — that gap
// is a pre-existing one, not "fixed" here.
export type SectionSpacing = "snug" | "compact" | "default" | "spacious";
export type SectionWidth = "contained" | "full-bleed";
export type SectionBackground = "none" | "cream" | "primary";

const spacingClass: Record<SectionSpacing, string> = {
  // py-6 laptop:py-8 — added in Phase 2 for small/utility bands, reusing the
  // exact value already live in MenuExperience's page-composition wrapper.
  snug: "py-6 laptop:py-8",
  // py-8 laptop:py-12 — Hero, CateringHero, ContactMain
  compact: "py-8 laptop:py-12",
  // py-10 laptop:py-16 — the majority pattern site-wide
  default: "py-10 laptop:py-16",
  // py-10 laptop:py-16 desktop:py-20 — MenuHero's own (larger) rhythm
  spacious: "py-10 laptop:py-16 desktop:py-20",
};

const backgroundClass: Record<SectionBackground, string> = {
  none: "",
  cream: "bg-cream-500",
  primary: "bg-primary-600",
};

type SectionProps = {
  spacing: SectionSpacing;
  /** "contained" (default): the section itself is the container-page box.
   *  "full-bleed": background runs edge-to-edge, an inner container-page div
   *  constrains the content — Design System §3.4: "Photography sections may
   *  run full-bleed edge-to-edge, with text content still constrained to
   *  the container." */
  width?: SectionWidth;
  /** Only meaningful with width="full-bleed" — contained sections have no
   * section-level background of their own (the page background shows through). */
  background?: SectionBackground;
  /** Narrow escape hatch for concerns Section does not own: position/overflow
   * for an absolutely-positioned visual-effect layer nested inside (e.g. the
   * Hero photo-fade), or similar non-layout needs. Never pass spacing, width,
   * max-width, or grid classes here — those belong to `spacing`/`width` or to
   * a child Grid. Every current use of this prop is documented at its call
   * site with why it's needed. */
  className?: string;
  children: ReactNode;
};

export default function Section({
  spacing,
  width = "contained",
  background = "none",
  className = "",
  children,
}: SectionProps) {
  if (width === "full-bleed") {
    return (
      <section className={`${backgroundClass[background]} ${spacingClass[spacing]} ${className}`.trim()}>
        <div className="container-page">{children}</div>
      </section>
    );
  }

  return (
    <section className={`container-page ${spacingClass[spacing]} ${className}`.trim()}>
      {children}
    </section>
  );
}
