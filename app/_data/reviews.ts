// ---------------------------------------------------------------------------
// CENTRALIZED REVIEWS DATA SOURCE
// ---------------------------------------------------------------------------
// The single file to edit for the Reviews page's Google configuration and
// review content. Update the values below directly — no component changes
// are required for any of them to take effect.
//
// We do not call the Google Places/Business Profile API, scrape Google, or
// fetch reviews automatically. This file IS the data source: real values are
// entered here by hand once the project owner supplies them.
//
// Consumed by:
// - app/reviews/_components/RatingSummary.tsx      (googleRating, googleReviewCount)
// - app/reviews/_components/GoogleReviewsCta.tsx    (googleReviewsUrl for
//   "Read More Reviews on Google"; googleWriteReviewUrl for "Leave a
//   Review" — two distinct destinations, never conflated)
// - app/reviews/_components/ReviewsGrid.tsx         (reviews)
// - app/_components/ReviewsPreview.tsx              (Home's compact preview — reviews)
// - app/_components/Footer.tsx                      (googleReviewsUrl, "View our
//   Google Business Profile" link)
// - app/reviews/page.tsx                            (AggregateRating structured data)
// ---------------------------------------------------------------------------

/** Google Reviews / Business Profile destination — where visitors go to
 * *view* existing Google reviews and the Business Profile listing. Powers
 * "Read More Reviews on Google" and the Footer's "View our Google Business
 * Profile" link. Never invented; supplied manually by the project owner. */
export const googleReviewsUrl: string | null = "https://www.google.com/maps/place/Lana+European+Food/@37.405604,-122.1154093,17z/data=!4m8!3m7!1s0x808fb13f05f5efe1:0xa83a76ef9b6b4a12!8m2!3d37.4055998!4d-122.1128344!9m1!1b1!16s%2Fg%2F11xvrqkdct!5m1!1e4?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D";

/** Direct destination for *opening the Google review submission form* — a
 * separate URL from googleReviewsUrl (viewing vs. writing a review are two
 * different Google destinations). Powers "Leave a Review" only. Never
 * invented; supplied manually by the project owner. */
export const googleWriteReviewUrl: string | null = "https://g.page/r/CRJKa5vvdjqoEBE/review";

/** Overall Google rating (e.g. 4.9). Never invented — leave null until real. */
export const googleRating: number | null = 5.0;

/** Total Google review count. Never invented — leave null until real. */
export const googleReviewCount: number | null = 26;

export type Review = {
  id: string;
  rating: number;
  quote: string;
  /** ISO date (e.g. "2026-01-15"), when known. */
  date?: string;
  /** Only when actually known and approved for publication — never invent
   * a classification for an existing review. */
  eventType?: string;
  /** Shown on Home's ReviewsPreview only — /reviews's ReviewCard never
   * renders customer-identifying fields (privacy rule), regardless of
   * whether they're present here. */
  name?: string;
  city?: string;
};

// The single shared list of published reviews — the project's one source of
// truth for review content, consumed by both Home's compact ReviewsPreview
// and the full /reviews grid. This list is open-ended: add, remove, or
// reorder entries freely. Nothing in the data layer assumes or requires a
// fixed count.
//
// - Home's ReviewsPreview shows only its own intended compact number of
//   cards (reviewsPreviewContent.visibleCount in app/_data/homeContent.ts —
//   currently 3, per CLAUDE.md §14) regardless of how many entries exist
//   here.
// - /reviews's ReviewsGrid shows the full list, up to REVIEWS_PAGE_SIZE (6)
//   per page, with pagination once there are more than 6.
//
// `quote` is left as "" until the owner supplies the real review text — both
// consumers render "" as an honest "content pending" structural placeholder,
// never as invented testimony. Add, remove, reorder, or fill in entries
// here; no component changes are required. Never add a fake/synthetic entry
// to this list — 3 real, approved placeholder entries exist below because
// that's what the project owner has supplied so far, not because the list
// is capped at 3.
export const reviews: Review[] = [
  { id: "review-1", rating: 5, quote: "Thank you so much again for the wonderful catering 😊 We and all of our guests absolutely loved everything! 👍 I also shared your contact information with others." },
  { id: "review-2", rating: 5, quote: "Sveta, thank you so much. Everything was amazing and delicious. Thank you for your generosity and abundance. I will also leave a review on your profile." },
  { id: "review-3", rating: 5, quote: "Thank you so much! Everything was so delicious today, just like homemade food, as if my mom had cooked it and fed me. Thank you ❤️🙏 And you even include a little gift every time — it is so nice 😊 I can feel the Belarusian soul 🥰❤️" },
  { id: "review-4", rating: 5, quote: "Oh, how delicious! Just like home)) I have already tried the soup, stuffed cabbage rolls, and shashlik. Everything is so delicious! Thank you so much. You can really feel the soul in the food. It was lovely meeting you. Now we will be seeing each other more often))" },
  { id: "review-5", rating: 5, quote: "My children said you make the best borscht! 😍 And your syrniki are incredible — so much real farmer's cheese! 😍" },
  { id: "review-6", rating: 5, quote: "You are my lifesaver! Everything is unbelievably delicious! I tried everything, and it is better than perfect ❤️❤️❤️ I am so happy I found you :) Thank you 🙏" },
  { id: "review-7", rating: 5, quote: "I managed to try a syrnik with my daughter before her class. It was absolutely delicious. The sweetness and consistency were perfect!" },
  { id: "review-8", rating: 5, quote: "Svetlana, thank you so much! I truly appreciate how carefully and thoughtfully you prepare and send the orders — everything arrives hot and fresh, ready to pick up and eat. It may seem like a small thing to some people, but I understand how difficult it is to organize all of this for such a large number of customers. Thank you!" },
  { id: "review-9", rating: 5, quote: "Sveta, thank you so much for your food! Everything was so delicious yesterday!!!!! Especially the blinchiki and julienne ❤️❤️❤️ And thank you for the beautiful presentation and for the extra dish as a gift 🥰🥰🥰🥰 I always recommend you to everyone when people ask me about homemade food ❤️ because I know that you truly cook like you do at home and put so much of yourself into what you do. Thank you so much again — our celebration turned out beautifully thanks to you!!!!" },
  { id: "review-10", rating: 5, quote: "Hi! The beef stew turned out absolutely perfect 🥰 Better than I could have imagined! Everything was so delicious — the vinaigrette, syrniki, and borscht. Thank you ❤️" },
  { id: "review-11", rating: 5, quote: "Hello! Thank you so much! Everything was so delicious, and it was delivered right on time! Perfect food for both kids and adults! The bruschettas and ham and cheese rolls were especially delicious! The kids loved the pirozhki too! Thank you so much!" },
  { id: "review-12", rating: 5, quote: "Sveta, hi! I’m writing to you again to say thank you for the food ❤️ My guests yesterday were so impressed with my “cooking skills,” and I modestly lowered my eyes and gave them your contact information 🤭 Thank you! Everything was so delicious and beautifully presented ❤️" },
  { id: "review-13", rating: 5, quote: "Lana, thank you so much! Everything was absolutely delicious and exceeded our expectations! My child loved your blinchiki! He said they were “a million times better than mine” 😂 Which makes me very happy, because normally he doesn’t eat anything except what I cook. This is a lifesaver! Thank you! 🙏" },
  { id: "review-14", rating: 5, quote: "Sveta, hi! Thank you so much for our wonderful holiday spread yesterday 😊 All the guests were absolutely delighted! Everything was so delicious and beautifully presented. Even the kids devoured the blinchiki and sausages in dough 😊 We also really appreciated how well everything was organized — it was delivered on time, all our requests were taken into account, and everything was ready to serve 😊" },
  { id: "review-15", rating: 5, quote: "Lana, thank you so much for the amazing food! It was simply delicious! And a special thank you for such wonderful little surprises! The finely chopped Olivier salad and the rolls were exactly what we needed. We were absolutely delighted!!! ❤️❤️❤️ And I completely fell in love with your syrniki 😍" },
];
