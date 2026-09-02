import type { ReactNode } from "react";

// Shared site-wide layout primitive — owns background/border/radius/shadow
// ONLY. It never owns padding, gap, flex/grid direction, or height-stretch
// participation (h-full) — those are the specific card instance's own
// Content-layer concern and stay caller-owned via `className`, same as this
// was already handled before this component existed.
//
// Every tone below is an exact, unmodified extraction of an existing card
// treatment already in use (see the Phase 1 refactor report for the source
// files) — no new visual values were introduced. "bordered" is not yet
// consumed by any component; it's included because a plain bordered/
// unfilled card is a legitimate, named variant the system should support,
// available for Phase 2.
export type SurfaceTone = "none" | "bordered" | "cream" | "white" | "primary";

const toneClass: Record<SurfaceTone, string> = {
  none: "",
  bordered: "rounded-lg border border-border-hairline",
  cream: "rounded-lg border border-border-hairline bg-gradient-to-br from-cream-500 to-cream-300",
  white: "rounded-lg border border-border-hairline bg-surface-white shadow-xs",
  primary: "rounded-lg bg-primary-600",
};

type SurfaceProps = {
  tone: SurfaceTone;
  className?: string;
  children: ReactNode;
};

export default function Surface({ tone, className = "", children }: SurfaceProps) {
  return <div className={`${toneClass[tone]} ${className}`.trim()}>{children}</div>;
}
