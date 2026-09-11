// Singleton Reviews-page photo slots — mirrors the established pattern in
// app/_data/homeImages.ts / app/about/_data/aboutImages.ts /
// app/catering/_data/cateringImages.ts. Each real photo drops in at its
// documented path with zero component changes required.
export const reviewsImages = {
  hero: "/images/reviews/hero.jpg",
  googleCta: "/images/reviews/google-cta.jpg",
} as const;

export type CustomerPhoto = {
  src: string;
  alt: string;
};

// "Photos from Our Customers" carousel — the single place to add, remove or
// reorder a customer/event photo (CustomerPhotoCarousel.tsx only ever maps
// over this array; it never lists filenames itself). Each real file drops in
// under public/images/reviews/ at the path below — resolveImage() (see
// export below) renders the shared neutral placeholder until it does, so the
// carousel is fully functional before any real photo exists. Alt text stays
// generic and honest (no invented photo descriptions) until real captions
// are supplied for each image.
export const customerPhotos: CustomerPhoto[] = [
  { src: "/images/reviews/review1.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review2.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review3.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review4.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review5.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review6.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review7.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review8.jpg", alt: "Photo from a Lana Food customer celebration" },
  { src: "/images/reviews/review9.jpg", alt: "Photo from a Lana Food customer celebration" },
];

export { resolveImage } from "../../_data/homeImages";
