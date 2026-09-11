import type { ReactNode } from "react";

// Shared site-wide layout primitive — owns responsive column/grid behavior
// ONLY. It never owns section padding (see Section) or card background/
// border/radius (see Surface).
//
// Two named variants exist for grid shapes that are proven duplicates
// (identical across ≥2 unrelated files) but aren't expressible as a plain
// N-up column count: "hero-split" (the fixed 400px/440px text+photo column
// formula shared by every page Hero) and "trust-indicators" (the asymmetric
// gap-x/gap-y trust-badge row shared by Home's and Catering's Hero). Numeric
// `columns` covers every other card-grid duplication found in the audit.
export type GridColumns =
  | { base?: 1 | 2 | 4; tablet?: 2 | 3 | 4; laptop?: 3 | 4 | 5; desktop?: 4 }
  | "hero-split"
  | "trust-indicators";

export type GridGap = "sm" | "md" | "lg";

const gapClass: Record<GridGap, string> = {
  sm: "gap-4",
  md: "gap-5",
  lg: "gap-6",
};

const baseColsClass: Record<1 | 2 | 4, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  4: "grid-cols-4",
};
const tabletColsClass: Record<2 | 3 | 4, string> = {
  2: "tablet:grid-cols-2",
  3: "tablet:grid-cols-3",
  4: "tablet:grid-cols-4",
};
const laptopColsClass: Record<3 | 4 | 5, string> = {
  3: "laptop:grid-cols-3",
  4: "laptop:grid-cols-4",
  5: "laptop:grid-cols-5",
};
const desktopColsClass: Record<4, string> = {
  4: "desktop:grid-cols-4",
};

type GridProps = {
  columns: GridColumns;
  gap?: GridGap;
  as?: "div" | "ul";
  className?: string;
  children: ReactNode;
};

export default function Grid({ columns, gap = "md", as: Tag = "div", className = "", children }: GridProps) {
  if (columns === "hero-split") {
    // Explicit grid-cols-1 below laptop (rather than leaving the single
    // mobile/tablet column implicit) — an implicit "auto" track's minimum
    // is content-based, so a wide child (e.g. a full-width icon row) could
    // otherwise inflate the whole column past the viewport; grid-cols-1
    // (minmax(0,1fr), same as every other numeric Grid variant) has an
    // explicit zero minimum, so the column always respects the container.
    const classes =
      `grid grid-cols-1 gap-6 laptop:grid-cols-[400px_1fr] laptop:items-stretch laptop:gap-8 desktop:grid-cols-[440px_1fr] desktop:gap-12 ${className}`.trim();
    return <Tag className={classes}>{children}</Tag>;
  }

  if (columns === "trust-indicators") {
    // One row of 4 at every breakpoint, mobile included — the compact
    // gap-x-3 keeps four 56px icons + labels inside the mobile content width
    // with room to spare; tablet+ opens back up to the original gap-x-5.
    const classes =
      `grid grid-cols-4 gap-x-3 gap-y-3 tablet:gap-x-5 ${className}`.trim();
    return <Tag className={classes}>{children}</Tag>;
  }

  const classes = [
    "grid",
    baseColsClass[columns.base ?? 1],
    columns.tablet ? tabletColsClass[columns.tablet] : "",
    columns.laptop ? laptopColsClass[columns.laptop] : "",
    columns.desktop ? desktopColsClass[columns.desktop] : "",
    gapClass[gap],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
