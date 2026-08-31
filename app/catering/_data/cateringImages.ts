// Singleton Catering-page photo slots (Hero, Final CTA) — mirrors the
// established pattern in app/_data/homeImages.ts / app/about/_data/aboutImages.ts.
// Collection photos (Special Features, Celebrations We Cater) live alongside
// their own item data in cateringConfig.ts instead, since each item owns its
// own image/alt/focal-position — a separate registry would just duplicate
// the same paths.
export const cateringImages = {
  hero: "/images/catering/hero.jpg",
  finalCta: "/images/catering/final-cta.jpg",
} as const;

export { resolveImage } from "../../_data/homeImages";
