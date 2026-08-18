import { existsSync } from "fs";
import path from "path";

// Central path registry for the Home page's single/singleton photo slots
// (one photo per section, not driven by a content array). Menu-category and
// dish images live next to their own content instead — see the `image`
// field on each entry in menuCategories.ts / popularDishes.ts.
export const homeImages = {
  catering: "/images/home/catering.jpg",
  lanaPortrait: "/images/home/lana-portrait.jpg",
} as const;

// Resolves a documented image path to a real `src` only if the file has
// actually been placed under /public — otherwise undefined, so callers pass
// that straight to ImagePlaceholder and get the neutral placeholder box
// instead of a broken/404 image. Drop the real file at the documented path
// and it starts rendering automatically; no component or data change needed.
export function resolveImage(relativePath: string): string | undefined {
  const absolute = path.join(process.cwd(), "public", relativePath);
  return existsSync(absolute) ? relativePath : undefined;
}
