// Singleton Reviews-page photo slots — mirrors the established pattern in
// app/_data/homeImages.ts / app/about/_data/aboutImages.ts /
// app/catering/_data/cateringImages.ts. Each real photo drops in at its
// documented path with zero component changes required.
export const reviewsImages = {
  googleCta: "/images/reviews/google-cta.jpg",
} as const;

export { resolveImage } from "../../_data/homeImages";
