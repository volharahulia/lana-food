// About page image slot — mirrors app/menu/_data/menuImages.ts's pattern of
// a page-local path registry re-exporting the shared resolveImage() helper
// (see app/_data/homeImages.ts for how the placeholder-to-real-photo swap
// works). The founder portrait already exists as a real, approved asset.
export const aboutImages = {
  founderPortrait: "/images/lana_about.JPG",
} as const;

export { resolveImage } from "../../_data/homeImages";
