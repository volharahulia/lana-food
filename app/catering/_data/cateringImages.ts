// Singleton Catering-page photo slot (Hero) — mirrors the established
// pattern in app/_data/homeImages.ts / app/about/_data/aboutImages.ts.
// Collection photos (Special Features, Celebrations We Cater) live alongside
// their own item data in cateringConfig.ts instead, since each item owns its
// own image/alt/focal-position — a separate registry would just duplicate
// the same paths. The Final CTA no longer has a photo slot: it's a
// contact/conversion CTA (the shared "split" CtaBlock variant), not an
// editorial image card.
export const cateringImages = {
  hero: "/images/catering/hero.jpg",
} as const;

export { resolveImage } from "../../_data/homeImages";
