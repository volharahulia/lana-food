// Menu page's single shared Hero photo slot — one image for the whole page,
// not per-category (see MenuHero.tsx). Mirrors app/_data/homeImages.ts's
// resolveImage() pattern (re-exported from there — see its own comment for
// how the placeholder-to-real-photo swap works).
export const menuImages = {
  hero: "/images/menu-hero.jpg",
} as const;

export { resolveImage } from "../../_data/homeImages";
