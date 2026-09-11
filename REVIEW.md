# LANA FOOD — REVIEWS PAGE SPECIFICATION

Production-ready specification for the Lana Food Reviews page at `/reviews`.

This document defines the Reviews page structure, content requirements, responsive behavior, accessibility, SEO, data/editability requirements and implementation constraints.

---

## 1. DOCUMENT STATUS & AUTHORITY

### Scope

This is the specification for the Reviews page only. Do not use it as a reason to modify unrelated pages, redesign the global site, or introduce a new visual system.

### This document supersedes older wording

The structure defined in **Section 3** below is the current approved structure. It replaces any earlier Reviews-page specification, including any prior version of this document that listed Review Filters + Sorting, a Celebrations/Event Photography section with event categories, or a breadcrumb as required page-level elements. Those are **not** part of the approved page.

Do not reintroduce sections from older specifications or from the general site IA merely because they once appeared in an earlier draft.

### Source-of-truth priority

1. This document (current approved Reviews-page structure and decisions).
2. Lana Food UI Design System.
3. `CLAUDE.md` and current project-wide implementation rules.
4. Existing implemented Home, Menu, Catering and About pages and their shared visual system.
5. `review-reference.png` — visual/compositional reference only for the sections that still exist below; it does not override Section 3's approved structure.

---

## 2. REVIEWS PAGE PURPOSE

Reviews is a standalone trust-building destination. The page should:

- present authentic customer reviews;
- show real customer/event photography once supplied;
- demonstrate the quality of Lana Food's service;
- build confidence before contact/conversion;
- give a direct path to Google (both reading and leaving reviews).

The page should feel like a natural continuation of the Lana Food website, not a generic testimonial landing page.

---

## 3. APPROVED PAGE STRUCTURE

The page contains **exactly** these major sections, in this order:

1. **Hero**
2. **Google Reviews block** (rating summary + "Review us on Google" / "Read More Reviews on Google" / "Leave a Review")
3. **Reviews** (the review grid + pagination)
4. **Photos from Our Customers** (responsive customer-photo carousel)
5. **Final CTA**
6. **Footer**

There must be **no**:

- Menu section
- Catering section
- Most Popular Dishes section
- Explore Catering CTA
- Instagram section
- Review category filters or sorting controls
- a separate "Celebrations / Event Photography" section with event-type categories
- any other major section not listed above

Do not add a section merely because it exists on Home, Menu or Catering.

---

## 4. HERO

- H1: `Loved by Families Across the Bay Area` — the single semantic H1. Do not invent new copy.
- Supporting intro copy and the hero image slot come from the existing shared content/data source (`app/reviews/_data/reviewsConfig.ts`'s `reviewsHero`, including its `image` field).
- Must be a real, visible Hero section using the same hero-split treatment (fixed-width text column + full photo column with the shared cream/photo fade) as every other page Hero — not a bare text/heading block. Reviews has no hero CTA or trust indicators in its approved content, so the text column is only the H1, the shared decorative divider, and the intro copy.
- The photo slot mirrors Catering's and Menu's Hero exactly (4:5 mobile / 16:9 tablet / stretched auto+fade laptop+, via the shared `ImagePlaceholder` + `HeroPhotoFade`) since, like theirs, no real photo exists yet at `public/images/reviews/hero.jpg` — the established neutral placeholder renders until one is added. Reuse this shared Hero structure rather than duplicating Home's Hero implementation, and do not modify the Home page.
- No breadcrumb.
- No horizontal overflow on mobile.

---

## 5. GOOGLE REVIEWS BLOCK

Two components render this block, immediately after the Hero and before Reviews:

1. **Rating summary** (`RatingSummary.tsx`) — overall rating, stars, review count, and the **"Review us on Google"** badge/link.
2. **Google Reviews CTA** (`GoogleReviewsCta.tsx`) — Google identity icon, supporting message, **"Read More Reviews on Google"**, **"Leave a Review"**, and supporting photography.

### Requirements (do not regress)

- `"Review us on Google"` is a real, fully clickable link/button (not a decorative `<span>`).
- `"Read More Reviews on Google"` has no Export/share icon — label text only.
- Both Google logos use the shared multicolor `GoogleLogoIcon` component (`app/reviews/_components/GoogleLogoIcon.tsx`) — never the monochrome Phosphor `GoogleLogo`, never a plain text "G".
- Real destinations only, sourced from `app/_data/reviews.ts` — never hardcoded or invented elsewhere:
  - `"Review us on Google"` → `googleWriteReviewUrl` (same write-review action as "Leave a Review").
  - `"Read More Reviews on Google"` → `googleReviewsUrl`.
  - `"Leave a Review"` → `googleWriteReviewUrl`.
- If a destination is not configured (`null`), render the control in its existing disabled/inert fallback state rather than a dead or fabricated link.
- External links use `target="_blank" rel="noopener noreferrer"`.
- Rating value and review count come from `app/_data/reviews.ts` (`googleRating`, `googleReviewCount`); use the existing bracketed-placeholder convention when unset. Never invent these values.

---

## 6. REVIEWS

- Real review content only (`app/_data/reviews.ts`), rendered via the existing `ReviewsGrid` / `ReviewCard` components.
- No customer-identifying information (names, initials, avatars, cities) is rendered publicly, per the existing privacy rule — do not reintroduce it without an approved privacy policy and explicit consent.
- No filters, no sorting (explicit project decision — the dataset does not currently support meaningful categorization).
- Pagination stays wired for when the dataset grows past `REVIEWS_PAGE_SIZE`; it renders nothing while everything fits on one page.
- Desktop: 3-column grid. Mobile: 1 column. No horizontal overflow.
- Never invent review text, ratings, dates, event types or customer identities.

---

## 7. PHOTOS FROM OUR CUSTOMERS

### Purpose

A responsive carousel of real customer/event photography, added manually by the project owner over time.

### Heading

`Photos from Our Customers`

### Data source

`app/reviews/_data/reviewsImages.ts` exports `customerPhotos: CustomerPhoto[]`, a plain ordered array of `{ src, alt }`. This is the **only** place the photo list is controlled:

- **Add** a photo → append an entry.
- **Remove** a photo → delete an entry.
- **Reorder** → reorder the array.
- **Change a path** → edit `src`.

`CustomerPhotoCarousel.tsx` (`app/reviews/_components/`) only ever maps over this array — it never lists filenames or hardcodes photo data itself, and never needs to change when the photo list changes.

### Image location

`public/images/reviews/`

Expected filenames: `review1.jpg` through `review9.jpg`.

These files are supplied later by the project owner. Until a file exists at its documented path, `resolveImage()` (the same existence-check helper every other page image slot uses) returns `undefined` and the shared `ImagePlaceholder` component renders its established neutral placeholder — the carousel is fully functional and correctly laid out before any real photo is added. Never generate, download, substitute, or fabricate a photo; never use the reference screenshots as content; never create empty fake image files.

### Alt text

Generic, honest, non-invented alt text only ("Photo from a Lana Food customer celebration") until real, specific captions can be supplied per photo. Do not fabricate descriptions of photo content that hasn't been provided.

### Responsive behavior — carousel, not a grid, not paginated

| Breakpoint | Visible slides | Controls |
|---|---|---|
| Mobile (`<768px`) | 1 | Swipe/drag + Previous/Next arrows |
| Tablet (`768–1023px`) | 2 | Swipe/drag where appropriate + Previous/Next arrows |
| Desktop (`≥1024px`) | 4 | Previous/Next arrows |

- No pagination dots/controls at any breakpoint.
- Slide count per breakpoint comes from CSS (`flex-basis`) only, not per-breakpoint JavaScript.
- Previous/Next scroll the track by its own current `clientWidth`, so "one page" automatically matches whatever number of slides is visible at the current breakpoint — one implementation, not duplicated per breakpoint.
- Touch swipe/drag comes from native horizontal scrolling (`overflow-x-auto` + `scroll-snap`) — no custom pointer-drag handler.
- Arrow buttons are real, keyboard-focusable `<button>` elements with `aria-label`s ("Previous photos" / "Next photos").
- If there are fewer real photos than the visible-slide count for a breakpoint, the row is simply shorter. Never duplicate or invent photos to fill it.
- No horizontal **page** overflow — only the carousel's own track scrolls.
- No layout shift when navigating.
- No CSS hacks, arbitrary transforms, negative offsets, or breakpoint-specific compensating values.

### Image ratio

`4:5` (portrait) — these are real phone/camera photography, primarily vertical, not square. Do not force them into a `1:1` square container; do not crop the composition merely to make it square. Use the Design System's existing 4:5 portrait treatment (the same ratio used for dish/founder photography elsewhere on the site), with `object-fit: cover` only, no excessive cropping. Do not invent a different Reviews-specific ratio.

---

## 8. FINAL CTA

### Headline

`Let's Make Your Next Celebration Special`

### Buttons — exactly two

1. **Contact Us** (primary) → `/contact`
2. **View Menu** (secondary) → `/menu`

Do not add `Explore Catering`, `Request a Quote`, `Order Now`, or any additional button. Use the existing shared `CtaBlock` — do not create a Reviews-specific CTA implementation.

---

## 9. FOOTER

Use the existing global Footer unchanged. Do not duplicate or redesign footer content for Reviews.

---

## 10. HEADER / GLOBAL UI

Reviews inherits the existing global site shell — sticky Header, mobile fixed Contact Us bar, Back to Top, WhatsApp entry point. Do not redesign or duplicate any of these for Reviews. Persistent controls must never overlap.

---

## 11. RESPONSIVE BEHAVIOR

Mobile-first. Use only the existing Design System breakpoints (Mobile `<768px`, Tablet `768–1023px`, Laptop `1024–1279px`, Desktop `≥1280px`). Do not create Reviews-specific breakpoints.

At 390px, verify:

- Hero fits with no overflow.
- Google Reviews block's "Review us on Google" is clickable and shows the multicolor logo.
- "Read More Reviews on Google" has no extra icon.
- Reviews grid is one column; pagination (if shown) is usable.
- Photos from Our Customers shows exactly 1 photo at a time, swipeable, with working arrows and no pagination dots.
- Final CTA shows exactly Contact Us + View Menu.
- No horizontal page overflow anywhere.

---

## 12. TYPOGRAPHY / SPACING / GRID / COMPONENTS

No Reviews-specific typography scale, spacing scale, grid, card style, button style, or color palette. Use the existing Lana Food Design System and shared components (`Section`, `SectionHeading`, `Grid`, `Surface`, `Button`, `CtaBlock`, `ImagePlaceholder`, `HeartDivider`, Phosphor icons) throughout.

---

## 13. EDITABLE CONTENT / DATA

All Reviews content stays editable through the existing page-local content/data files, without changing presentation components:

- `app/reviews/_data/reviewsConfig.ts` — Hero copy, rating-summary copy, Google CTA labels, customer-photos heading, Final CTA copy/destinations.
- `app/reviews/_data/reviewsImages.ts` — singleton Reviews photo slots and the `customerPhotos` collection.
- `app/_data/reviews.ts` — the shared, centralized source for `googleRating`, `googleReviewCount`, `googleReviewsUrl`, `googleWriteReviewUrl`, and the `reviews` list itself (also consumed by Home's compact preview).

Do not invent a new JSON file, CMS, or storage mechanism — this project's convention is page-local `_data` files, already in use everywhere else.

---

## 14. ACCESSIBILITY

- One semantic H1; logical heading hierarchy.
- All CTAs and carousel arrows are semantic, keyboard-accessible elements with meaningful accessible names.
- Visible focus state (the existing sitewide `:focus-visible` treatment) on every interactive element — never removed or overridden.
- Meaningful images get real alt text; decorative icons are marked `aria-hidden`.
- No interaction depends on color alone.
- Respect `prefers-reduced-motion`.

---

## 15. SEO / STRUCTURED DATA

- Page title: `Customer Reviews | Lana Food | Bay Area California`.
- H1: `Loved by Families Across the Bay Area`.
- Route: `/reviews`.
- Review content renders as crawlable HTML, never as an image.
- `BreadcrumbList` and `AggregateRating` (LocalBusiness) structured data are emitted only from real configured data — never fabricated.

---

## 16. CONTENT / DATA SAFETY

Never invent: customer testimonials, ratings, review counts, customer identities or locations, review dates, Google URLs, business contact data, or photography. If real data is unavailable, omit the field or use the existing neutral placeholder — never `N/A`, `Coming soon`, or a fabricated substitute.

---

## 17. ARCHITECTURE

- `app/reviews/page.tsx` composes, in order: `ReviewsHero`, `RatingSummary`, `GoogleReviewsCta`, `ReviewsGrid`, `CustomerPhotoCarousel`, `ReviewsFinalCta`.
- Client Components are used only where genuine interaction requires them (the review grid's pagination state, the customer-photo carousel's scroll control). Server Components remain the default elsewhere.
- No unnecessary abstraction layers; no Reviews-specific copies of shared components without a genuine reusable need; no CSS/layout hacks.

---

## 18. ACCEPTANCE CRITERIA

- [ ] Page contains exactly the six approved sections, in order, and nothing else.
- [ ] No Menu, Catering, Most Popular Dishes, Explore Catering, Instagram, filter/sort, or event-category section exists.
- [ ] "Review us on Google" is a real, fully clickable link using `googleWriteReviewUrl`.
- [ ] "Read More Reviews on Google" has no extra icon and uses `googleReviewsUrl`.
- [ ] Both Google logos render via the shared multicolor `GoogleLogoIcon`.
- [ ] Reviews grid/pagination/privacy rules are unchanged from the existing implementation.
- [ ] Photos from Our Customers is a carousel (not a grid, not paginated): 1 slide on mobile, 2 on tablet, 4 on desktop, in a 4:5 portrait ratio (never forced square), with working swipe and Previous/Next arrows, no pagination dots.
- [ ] Customer-photo content is fully controlled from `app/reviews/_data/reviewsImages.ts`'s `customerPhotos` array; the carousel component needs no changes to add/remove/reorder photos.
- [ ] Expected photo paths are `public/images/reviews/review1.jpg` … `review9.jpg`; no fake/placeholder image files were created.
- [ ] Final CTA has exactly `Contact Us` and `View Menu`.
- [ ] No horizontal page overflow at 390px, tablet, or desktop.
- [ ] No invented content, URLs, or assets anywhere on the page.
