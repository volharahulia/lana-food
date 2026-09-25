import { resolveImage } from "../../_data/homeImages";
import { readImageDimensions } from "./imageDimensions";
import type { MenuPhotoRef } from "./types";

// Splits one Excel "Photo" cell into its individual filenames. Fully
// backward compatible with the existing single-photo format: a plain
// "borscht.jpg" (no comma) returns ["borscht.jpg"], exactly as before.
// New multi-photo format: "borscht-1.jpg, borscht-2.jpg" → both, in the
// order given (first = primary/default photo, per the Menu photo spec).
export function parsePhotoField(raw: string | undefined | null): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((filename) => filename.trim())
    .filter((filename) => filename.length > 0);
}

// Resolves every filename in the Photo field to a real, existing /public
// src (see resolveImage) — same existsSync-backed fallback resolveImage
// already used for the single-photo case; a filename with no matching file
// on disk yet is silently dropped (not a broken slot), so a dish can list
// three filenames while only one has actually been uploaded and still show
// correctly rather than partially breaking. Each resolved photo also
// carries its real pixel dimensions when readable (see
// imageDimensions.ts) — used only by the dish-detail modal to show that
// photo at its own natural ratio; the menu-card preview never needs them
// (it's always a filled 1:1 square).
export function resolveMenuPhotos(raw: string | undefined | null): MenuPhotoRef[] {
  return parsePhotoField(raw)
    .map((filename) => resolveImage(`/images/menu/${filename}`))
    .filter((src): src is string => src !== undefined)
    .map((src) => {
      const dimensions = readImageDimensions(src);
      return { src, width: dimensions?.width, height: dimensions?.height };
    });
}
