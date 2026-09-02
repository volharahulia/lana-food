# LANA FOOD — REVIEWS PAGE SPECIFICATION

Production-ready specification for the Lana Food Reviews page at `/reviews`.

This document defines the Reviews page structure, content requirements, responsive behavior, visual composition, accessibility, SEO, data/editability requirements, and implementation constraints.

---

## 1. DOCUMENT STATUS & AUTHORITY

### Scope

This task is **only the specification for the Reviews page**.

Do not use this document as a reason to modify unrelated pages, redesign the global site, or introduce a new visual system.

### Source-of-truth priority

When implementing `/reviews`, use the following order:

1. Existing Lana Food IA and approved content requirements
2. Lana Food UI Design System
3. `CLAUDE.md` and current project-wide implementation rules
4. Existing implemented Home, Menu, Catering and About pages and their shared visual system
5. `review-reference.png` for Reviews-specific visual composition

The reference is a **visual/compositional authority**, not a separate design system.

If the reference and existing site differ:

- `review-reference.png` wins for Reviews-specific **composition**.
- Existing site + Design System win for **shared visual language**.

Do not silently resolve an unresolved source conflict. Record it in **Open Questions / Conflicts**.

---

## 2. REVIEWS PAGE PURPOSE

Reviews is a standalone trust-building destination.

The page should:

- present authentic customer reviews;
- show real food and event photography;
- demonstrate the quality of Lana Food's service;
- build confidence before contact/conversion;
- encourage visitors to continue to Menu, Catering or Contact.

The page should feel like a natural continuation of the Lana Food website, not like a generic testimonial landing page.

The IA explicitly establishes Reviews as a standalone page because customer testimonials and event photography provide strong social proof.

---

## 3. APPROVED PAGE STRUCTURE

The page contains exactly these page-level sections:

1. Site Header
2. Reviews Hero / Page Header
3. Google Rating Summary
4. Review Filters + Sorting
5. Reviews Grid
6. Pagination
7. Celebrations / Event Photography
8. More Reviews on Google CTA
9. Final `Let's Make Your Next Celebration Special` CTA
10. Site Footer

Do **not** add additional page-level sections.

The IA defines the Reviews information requirements as Page Header, Customer Rating Summary, Featured Reviews, Event Gallery, Google Reviews and final conversion. The approved visual reference composes these into the structure above.

---

# 4. HERO / PAGE HEADER

## Purpose

Introduce the Reviews page, establish trust, and provide the page context before visitors reach the rating and review content.

## Required content

### Breadcrumb

`Home → Reviews`

Use the existing site Breadcrumb component/pattern.

- `Home` is linked.
- `Reviews` is the current page and is not a link.
- Use the existing breadcrumb typography, separator and spacing.

### H1

`Loved by Families Across the Bay Area`

This is the single semantic H1.

### Supporting introduction

The IA provides this approved example introduction:

`See how Lana Food has helped make celebrations memorable across the San Francisco Bay Area.`

Use approved project content only. If the final project content source differs, use that approved content rather than inventing replacement copy.

### Decorative treatment

The reference shows the established Lana Food decorative flourish/divider treatment beneath the heading area.

Use the existing shared flourish/divider primitive. Do not create a Reviews-specific decorative language.

## Desktop composition

Follow `review-reference.png`:

- warm cream/ivory hero ground;
- breadcrumb near the top of the content area;
- editorial H1 in the established heading style;
- supporting copy below;
- decorative flourish integrated into the hero;
- large food photograph occupying the right side;
- soft transition between photography and cream background;
- no harsh vertical image edge.

The hero should use the site's established hero treatment. Do not create a separate Reviews-only hero system.

## Mobile composition

Follow the mobile reference:

- compact global header;
- breadcrumb at the top of the hero content;
- centered/stacked hero copy;
- H1 remains the dominant element;
- supporting copy follows naturally;
- decorative flourish remains restrained;
- food photography appears below/within the established mobile hero pattern;
- no horizontal overflow.

## Image

The reference shows a large food image of a celebration/appetizer setting.

Use only a real approved Lana Food image when one exists.

If the approved image is not available:

- preserve the intended image container and crop;
- use the project's approved neutral placeholder treatment;
- do not use the reference screenshot as the image;
- do not crop photography out of the screenshot;
- do not generate substitute food photography.

Image source, alt text, focal/object position and publication state must remain editable through the existing asset/content architecture.

---

# 5. GOOGLE RATING SUMMARY

## Purpose

Provide immediate third-party/social-proof context before the visitor reads individual reviews.

## Required content

The rating summary supports:

- overall Google rating;
- total number of reviews;
- Google Business Profile identity/badge;
- link to Google reviews;
- `Leave a Review` CTA.

### Data rule

Do not invent:

- rating value;
- review count;
- Google Business Profile URL;
- business identifier;
- review destination.

Use the existing page-level Review Section pattern from the Design System as the base rather than creating a new Reviews-specific system.

If real values or destinations are not configured:

> Requires real project data; do not invent.

The component must obtain those values from the existing project content/data architecture.

## Desktop composition

The reference shows a single horizontal multi-part surface containing:

1. Rating summary
2. Google identity / review context
3. Google review action(s)

The surface should read as one cohesive Lana Food card/surface, not as several unrelated cards.

Use the existing:

- surface treatment;
- card radius;
- border;
- elevation;
- typography;
- button system;
- spacing tokens.

Do not create a Reviews-only card style.

## Mobile composition

The same information stacks vertically in a logical order:

1. rating;
2. Google identity/review context;
3. review actions.

Buttons remain easy to tap and do not overflow the viewport.

---

# 6. REVIEW FILTERS + SORTING

## Purpose

Allow visitors to narrow the visible review set while keeping the full review collection accessible.

## Reference filter categories

The approved reference shows these event categories:

- Birthdays
- Baby Showers
- Family Gatherings
- Holiday Celebrations
- Kids' Parties

Reproduce this category composition only where these categories are supported by the approved project content/data. Do not invent classifications for existing reviews or photos.

## Sorting

The reference shows:

`Most Recent`

Use the existing project control/select primitive for sorting.

The IA states that reviews should be displayed dynamically, with the newest or most relevant appearing first.

If multiple sorting modes are supported by the existing data model, expose only approved/implemented options. Do not invent additional user-facing sorting labels.

## Desktop behavior

- Filter controls appear as a horizontal group.
- Active filter uses the existing active pill/chip treatment.
- Inactive filters use the existing inactive treatment.
- Sorting control is visually separated from the filter group as shown in the reference.
- The controls align with the page content container.

## Mobile behavior

- Filters remain on one horizontal row when necessary.
- The filter group may scroll horizontally.
- The active filter must remain discoverable/visible.
- Sorting remains accessible without causing page overflow.
- Do not create a second mobile-only filter pattern.

## Accessibility

- Filter controls are semantic interactive elements.
- Active state is communicated semantically, not by color alone.
- Keyboard focus is visible.
- Sorting is keyboard accessible.
- Horizontal scrolling must remain usable with keyboard/touch as appropriate.
- No horizontal **page** overflow is permitted.

Use existing pill/chip/control primitives. Do not introduce a new pill style.

---

# 7. REVIEWS GRID

## Purpose

Present authentic testimonials as the main content of the page.

## Review data

Each review may contain:

- star rating;
- review text;
- review date, where available;
- event type, where available and approved for publication.

Customer-identifying information must not be published at this stage.

Do not display:

- customer full names;
- first names;
- initials;
- customer avatars or photos;
- cities or other location information that could identify a customer;
- contact details;
- any other personally identifying information.

The review presentation should remain visually complete without requiring customer-identifying information.

Reviews should be dynamically ordered according to the active sorting/filtering state.

## Critical authenticity and privacy rules

Never invent:

- review text;
- ratings;
- dates;
- event types;
- customer identities;
- customer locations.

Until the project has an approved privacy policy and explicit permission/consent for public publication of customer-identifying information:

keep reviews anonymous;
do not publish customer names or initials;
do not publish customer avatars or identifiable customer photography;
do not publish customer locations;
do not expose any other personally identifying information.

If identifying information exists in the source review data, do not render it in the public Reviews page.

Customer/event photography may only be published where the required permission for public website use has been obtained.

Do not infer consent from the fact that a review or photograph exists on another platform.

If permission status is unknown or unavailable, omit the identifying information or asset from the public page.

## Desktop composition

The approved reference shows:

- 3-column review grid;
- 6 visible cards in the shown composition;
- two rows.

The six-card/two-row arrangement is the visual composition shown in the reference. Do not hardcode a page-specific card width or height merely to reproduce the screenshot.

Use the existing shared grid and Review Card primitives.

## Mobile composition

- one-column stack;
- same content hierarchy as desktop;
- cards remain readable and balanced;
- no horizontal overflow.

## Card hierarchy

Follow the visual hierarchy shown in the reference while inheriting the existing Review Card system:

star rating;
review date when available;
review text;
divider/separation;
event type when available.

Customer identity must not be displayed at this stage.

The card must remain visually balanced without a customer name, avatar, city, or other identifying information.

The exact styling must come from the existing Review Card/shared design system.

The Design System defines Review Card as:

- star rating using decorative gold;
- quote/body text;
- avatar-initial circle + name;
- city;
- optional event-type icon.

For the Reviews page, do not expose the identity-related fields from the Review Card pattern until the project has an approved privacy policy and explicit permission/consent for public publication.

Do not create fake names, initials, avatars, or placeholder identities to fill the visual space.

## Empty state

If no reviews are available after loading/filtering:

- use the existing project Empty State;
- provide concise warm copy;
- provide a recovery action where appropriate;
- do not invent review content.

The Design System explicitly supports an Empty state for the Reviews page.

## Loading state

If review data loads asynchronously, use the existing loading/skeleton treatment.

Do not introduce a generic browser spinner or a new loading pattern.

---

# 8. PAGINATION

## Purpose

Allow visitors to navigate additional review results without making the page excessively long.

## Reference behavior

The reference shows pagination centered beneath the review grid.

It is visually quiet and secondary to the review content.

## Requirements

- centered;
- accessible by keyboard;
- usable on mobile;
- consistent with the existing site control system;
- no page-specific pagination styling unless a shared variant is genuinely required.

Do not invent a pagination pattern if an existing project primitive already supports the requirement.

Pagination state must remain compatible with filtering and sorting.

---

# 9. CELEBRATIONS / EVENT PHOTOGRAPHY

## Purpose

Show authentic event photography as additional social proof and demonstrate the kinds of celebrations Lana Food participates in.

The IA requires an Event Gallery and specifically states that photos should only be published with customer permission.

## Reference event categories

Use exactly the categories shown in the approved reference:

- Birthdays
- Baby Showers
- Family Gatherings
- Holiday Celebrations
- Kids' Parties

Do not invent additional event categories.

## Reference composition

The section is a warm cream/secondary surface containing:

- section heading;
- decorative flourish;
- event category labels/icons;
- event photography;
- `View More Photos` CTA.

The reference presents the event categories as a compact horizontal selector/row above the photography.

The event photos form a compact visual gallery beneath it.

## Desktop

Follow the reference composition:

- contained warm section/surface;
- editorial section heading;
- established flourish;
- five event category items in the shown arrangement;
- event photography beneath;
- `View More Photos` CTA centered below the gallery.

Use the existing shared gallery/card primitive.

Do not create a new gallery system if the existing shared gallery primitive can support this composition.

## Mobile

Follow the mobile reference:

- heading and flourish remain centered;
- event category controls become compact and horizontally usable;
- photography adapts to the existing mobile gallery behavior;
- `View More Photos` remains accessible;
- no horizontal page overflow.

If the event category row requires horizontal scrolling, scroll only that control region, not the page.

## Photography rules

Only use:

- authentic Lana Food photography;
- approved project photography;
- approved neutral placeholders while real assets are unavailable.

Never use:

- stock photography;
- generated photography;
- cropped reference screenshots;
- the reference screenshot itself as production photography.

Every image should support the existing asset model:

- source;
- alt text;
- object/focal position where applicable;
- published state;
- display order;
- event category where applicable.

Use the Design System's existing gallery image ratio and treatment. Do not invent a Reviews-specific ratio.

---

# 10. MORE REVIEWS ON GOOGLE CTA

Purpose

Give visitors a direct path to the external Google review source and a clear opportunity to leave their own review.

Required content

The section contains:

Google identity/icon;
short supporting message;
Read More Reviews on Google CTA;
Leave a Review CTA;
supporting event/food photography.

Both Google destinations must be editable through the existing content/data architecture.

Google destinations

Two separate editable destinations are required:

Read More Reviews on Google
opens the configured Google reviews destination;
destination is provided as real project data.
Leave a Review
opens the configured Google destination where the visitor can leave a review;
destination will be provided/configured by the project owner.

Do not invent either URL.

If a destination has not yet been configured:

Requires real project data; do not invent.

The CTA must remain present as an editable field even while its destination is unconfigured.

Do not replace the Leave a Review CTA with another label.

Reference composition

The approved reference shows a horizontal warm branded surface containing:

Google identity/icon;
supporting message;
Google review actions;
supporting event/food photography.

The section should preserve this relationship without introducing arbitrary positioning.

Desktop

Use the existing shared CTA/surface system.

Maintain the reference relationship:

copy and Google identity on the left;
CTA actions in the central action area;
supporting photography on the right.

Use existing:

container;
spacing;
typography;
Button;
surface;
border;
radius;
image;
icon primitives.

Do not create Reviews-specific visual primitives.

Mobile

Stack the content naturally:

Google identity/message;
CTA actions;
supporting photography.

Buttons must remain usable according to the existing shared CTA/Button system.

No horizontal page overflow.

Editable presentation

The following must remain configurable through the existing shared component/content architecture where the project supports such configuration:

supporting copy;
both CTA labels;
both CTA destinations;
image;
image alt text;
image focal/object position;
section alignment;
CTA alignment;
surface/background variant;
spacing variant;
content width/alignment.

Do not create local CSS overrides solely to adjust this section.

---

# 11. FINAL CTA

## Approved content

### Headline

`Let's Make Your Next Celebration Special`

### Buttons

Primary:

`Contact Us`

Secondary:

`View Menu`

The IA explicitly defines:

- `Contact Us` as the primary CTA;
- `View Menu` as the secondary CTA.

Do not replace `Contact Us` with `Order Now`.

Do not invent additional CTA labels.

## Purpose

Provide the final conversion point after the visitor has seen reviews and event photography.

## Reference composition

The reference shows a warm branded CTA block with:

- copy area;
- CTA group;
- food photography;
- decorative visual treatment;
- warm cream/brand palette.

Use the existing shared CTA Block created for the site rather than creating a Reviews-specific CTA implementation.

## Desktop

Follow the reference's visual relationship:

- copy and headline on the left;
- CTA group beneath/alongside the copy;
- food photography on the right;
- warm branded background treatment.

Use existing container, spacing, typography, Button and image primitives.

## Mobile

- copy stacks naturally;
- CTA buttons stack;
- photography remains visible and correctly cropped;
- no horizontal overflow;
- fixed mobile Contact Us remains available independently.

---

# 12. HEADER / FOOTER / GLOBAL UI

Reviews inherits the existing global site shell.

Do not redesign the header or footer for Reviews.

## Header

Use:

- Lana Food logo;
- global navigation;
- active `Reviews` navigation state;
- EN | RU when enabled;
- `Contact Us`;
- phone number when real contact data is available.

Use the existing sticky Header implementation.

Do not create a Reviews-specific mobile navigation.

## Footer

Use the existing global Footer.

Do not duplicate or redesign footer content specifically for Reviews.

## Back to Top

Use the existing sitewide Back to Top component.

The Design System specifies that it becomes visible after approximately 400px of scroll and uses the established floating-button/elevation treatment.

## Mobile fixed Contact Us

Use the existing sitewide fixed mobile Contact Us bar.

It must remain visible and must not be hidden by the hamburger/navigation panel.

## WhatsApp

Show the persistent WhatsApp entry point only when real WhatsApp contact data is configured.

Respect the existing sitewide fixed-element stacking order:

1. fixed Contact Us bar;
2. WhatsApp button above it;
3. Back to Top above WhatsApp after the scroll threshold.

Persistent controls must never overlap.

---

# 13. RESPONSIVE BEHAVIOR

Reviews is mobile-first.

Use only the existing Design System breakpoints:

- Desktop: `≥1280px`
- Laptop: `1024–1279px`
- Tablet: `768–1023px`
- Mobile: `<768px`

Do not create Reviews-specific breakpoints.

## Desktop

Follow the approved reference for:

- hero composition;
- rating summary;
- filter/sort relationship;
- 3-column review grid;
- centered pagination;
- celebrations section;
- Google Reviews CTA;
- final CTA.

## Laptop

Adapt the desktop composition using the existing responsive grid and spacing system.

Do not introduce a separate laptop layout system.

## Tablet

Adapt the established site layout using the existing 8-column/tablet system.

Preserve:

- content hierarchy;
- readable review cards;
- usable filter controls;
- appropriate gallery behavior;
- CTA hierarchy.

## Mobile

Follow the approved mobile reference:

- compact global header;
- stacked hero content/image;
- vertically stacked rating summary;
- horizontally usable filters;
- one-column review cards;
- usable pagination;
- compact celebrations category controls/gallery;
- stacked Google CTA;
- stacked final CTA;
- persistent mobile Contact Us;
- no horizontal page overflow.

Do not duplicate desktop and mobile content simply to solve layout.

---

# 14. TYPOGRAPHY / SPACING / SIZING

Do **not** define a separate Reviews typography or spacing scale.

Use the existing Lana Food Design System and the actual shared implementation.

## Typography

Use:

- Fraunces for headings;
- Karla for body/UI/navigation/buttons;
- Alex Brush only for rare decorative accents.

Do not use script typography for:

- body text;
- navigation;
- buttons;
- review content.

Use the existing semantic type styles rather than new page-specific font sizes.

## Spacing

Use the existing shared spacing tokens and section variants.

The Design System defines the 4px spacing scale and page-level section rhythm. Use the existing project implementation where it has already been refined.

Do not blindly copy pixel distances from `review-reference.png`.

## Grid

Use the existing site grid:

- 12-column desktop;
- 12-column laptop;
- 8-column tablet;
- 4-column mobile.

Do not create a Reviews-specific grid.

## Cards

Use existing Review Card/shared Card primitives.

Do not create page-specific card dimensions just to match the screenshot.

## Buttons

Use the existing Button component and CTA hierarchy.

## Pills

Use the existing pill/chip primitive for filters.

## Icons

Use the existing Phosphor icon system and established bespoke flourish/icon primitives where applicable.

## Image ratios

Use the ratios defined by the existing Design System and shared components.

If a Reviews-specific image ratio is not explicitly defined:

> Not specified — use the existing project/system value.

---

# 15. EDITABLE CONTENT / DATA

All changing user-facing Reviews content must remain editable without changing the presentation component structure.

This includes:

- hero H1;
- hero supporting text;
- breadcrumb labels where the existing content architecture allows;
- Google rating;
- Google review count;
- Google Business Profile destination;
- review data;
- review text;
- customer names;
- cities;
- event types;
- review dates;
- filter labels;
- sorting labels/options;
- event category labels;
- event photography;
- gallery captions where supported;
- Google CTA destinations;
- final CTA copy;
- final CTA destinations.

Use the existing project content/data architecture.

Do **not** prescribe a new JSON file, CMS, database, or storage mechanism unless the project already uses one.

Changing content must not require rewriting presentation components.

## Review data requirements

The existing review data model may contain additional fields, but the public Reviews page must render only information approved for public publication.

Where supported by the existing project data model, review data may include:

- id;
- rating;
- quote/text;
- customer name;
- city;
- event type;
- review date;
- published state;
- permission state where applicable;
- display/order information;
- source/platform where applicable.

However, customer-identifying fields must not be rendered publicly at this stage.

Until an approved privacy policy and explicit permission/consent for public publication are available, do not display:

- customer names;
- initials;
- avatars;
- customer photos;
- cities or other identifying locations;
- contact information;
- other personally identifying information.

The data model does not need to be changed solely to remove these fields from the public presentation.

Do not add user-facing fields solely because they appear useful if the existing project model does not support them.

---

15A. SHARED DESIGN TOKENS & CONFIGURABLE PRESENTATION

All Reviews visual styling must come from the existing Lana Food Design System and shared component system.

Reviews must not introduce an independent visual system.

This applies to:

colors;
typography;
spacing;
section spacing;
container width;
grid;
card styling;
surface treatments;
borders;
radii;
shadows;
buttons;
pills/chips;
icons;
image ratios;
image treatment;
decorative flourishes;
responsive breakpoints.
Shared styling

Use existing semantic design tokens and shared component variants.

Do not hardcode page-specific:

colors;
font sizes;
line heights;
border radii;
shadows;
button dimensions;
spacing values;
breakpoint values.

Do not create a Reviews-specific color palette, typography scale, spacing scale or component styling system.

Configurable layout properties

Where the existing component architecture supports configurable presentation properties, keep the following values identifiable and centrally manageable rather than scattering them through page-specific CSS:

section spacing variant;
content width;
content alignment;
text alignment;
grid configuration;
component gap;
CTA alignment;
image object/focal position;
image aspect ratio where applicable;
surface variant;
visual density where an existing shared variant supports it.

These values should be controlled through existing shared semantic variants or clearly identifiable component configuration.

Do not compensate for incorrect structure with local offsets, transforms or arbitrary margins.

Design-system consistency

If a required visual treatment already exists elsewhere on the site:

Reuse the existing implementation.

If an existing shared primitive lacks a genuinely reusable semantic variant:

Extend the shared primitive with the smallest appropriate semantic variant.

Do not create a Reviews-only workaround.

Content versus presentation

Changing content must not require changing presentation components.

Changing an approved shared presentation value must not require duplicating the component specifically for Reviews.

The goal is:

Shared system → configurable variant → Reviews composition

not:

Reviews page → independent CSS values

---

# 16. IMAGE / ASSET EDITABILITY

Every Reviews image slot must be independently replaceable.

Relevant image slots include:

1. Reviews Hero
2. Event Gallery photos
3. Google Reviews CTA supporting photography
4. Final CTA photography

Each asset should support the existing asset model, including where applicable:

- source;
- alt text;
- object/focal position;
- published state;
- display order;
- category/type.

Use component-level image ratios.

Do not use screenshot assets as production photography.

If a real image is unavailable, preserve the layout with the project's approved neutral placeholder.

Replacing a photo must not require changing component structure.

---

# 17. ACCESSIBILITY

Follow the existing Lana Food accessibility system.

## Semantics

- one semantic H1;
- logical H2/H3 hierarchy;
- semantic breadcrumb navigation;
- semantic buttons/links;
- review content rendered as HTML text;
- meaningful image alt text.

## Filters

- keyboard accessible;
- active state exposed semantically;
- no color-only state indication;
- visible focus.

## Sorting

- keyboard accessible;
- visible focus;
- appropriate accessible name.

## Review cards

Review cards must remain readable and accessible.

If a card is interactive, use the existing semantic interactive pattern.

Do not make a non-interactive review card keyboard-focusable merely for visual reasons.

## Pagination

- keyboard accessible;
- clear current-page state;
- appropriate accessible labels;
- usable on mobile.

## CTAs

All CTA buttons/links must have meaningful accessible names.

## Images

- meaningful images receive descriptive alt text;
- decorative imagery is marked decorative;
- alt text must not fabricate information not present in the asset/data.

## Motion

Respect `prefers-reduced-motion`.

Use the existing restrained motion system.

## Contrast

Follow the Design System contrast requirements.

Gold remains decorative unless the text-safe gold token is required.

Do not rely on color alone to communicate:

- active filter;
- selected state;
- review metadata;
- availability/state.

---

# 18. SEO / STRUCTURED DATA

## Page title

`Customer Reviews | Lana Food | Bay Area California`

Use this as the approved page title unless the current project metadata architecture requires an equivalent implementation.

## H1

`Loved by Families Across the Bay Area`

## URL

`/reviews`

Use the approved clean Reviews route.

## Searchable HTML

Review content must be rendered as crawlable HTML.

Do not render reviews as images or screenshot content.

## Internal links

Provide contextual links to:

- Home;
- Menu;
- Catering;
- Contact.

Use the approved CTA/link destinations.

Google Business Profile is an external destination and must come from real configured data.

## Structured data

The IA requires:

- `AggregateRating`
- `Review`
- `LocalBusiness`
- `BreadcrumbList`

Generate structured data dynamically from real project data.

Do not hardcode:

rating values;
review counts;
customer-identifying information;
review text;
Google URLs;
business information.

Customer-identifying information must not be rendered publicly unless explicit permission/consent for public website publication has been established.

Only publish review/aggregate schema for real, publishable review data.

Do not invent schema values to fill missing fields.
If the required real review/rating data is unavailable, omit the corresponding structured-data fields rather than generating placeholder or fabricated values.

## Image SEO

Use meaningful descriptive alt text for event and food photography.

Do not keyword-stuff alt text.

---

# 19. COMPONENT ARCHITECTURE

Before implementation, inspect the current project architecture and reuse existing shared components.

Possible page-level concepts include:

- `ReviewsHero`
- `RatingSummary`
- `ReviewFilters`
- `ReviewGrid`
- `ReviewCard`
- `Pagination`
- `EventGallery` / celebrations section
- `GoogleReviewsCTA`
- shared `CtaBlock`

These names are suggestions, not requirements.

Do not create a component merely because it is listed above if an equivalent shared component already exists.

## Architecture principles

- Keep the page component focused.
- Keep content/data separate from presentation.
- Reuse existing Header, Footer, Button, Section, Card, Review Card, Breadcrumb, gallery and CTA primitives.
- Client Components should be used only where genuine interaction requires them, such as filtering, sorting, pagination, gallery/lightbox or other stateful behavior.
- Server Components remain the default.

If a genuine Reviews-specific need is not covered by the existing shared system, describe it as a reusable semantic variant rather than a Reviews-only CSS workaround.

Do not add another abstraction layer unnecessarily.

---

# 20. NO CSS / LAYOUT HACKS

Do not recommend or require:

- arbitrary negative margins;
- arbitrary transforms;
- absolute positioning used to compensate for incorrect structure;
- scattered one-off pixel offsets;
- duplicated local spacing values;
- page-specific copies of global tokens;
- screenshot-specific hacks;
- breakpoint-specific positional hacks;
- hardcoded image offsets scattered across components.

If visual tuning is needed:

1. identify the structural cause;
2. use the existing shared system;
3. use an existing semantic variant;
4. if genuinely necessary, define a reusable shared variant;
5. keep adjustable layout values identifiable and centralized.

The goal is to reproduce the intended composition through correct structure, not compensation hacks.

---

# 21. RELATIONSHIP TO HOME REVIEWS PREVIEW

Home contains a compact Reviews Preview.

The standalone Reviews page is a substantially richer destination.

Do **not** make the Home Reviews Preview identical to this page.

Do **not** redesign the Home review carousel because Reviews has:

- filters;
- sorting;
- pagination;
- a full review grid;
- event photography;
- Google review CTAs.

Shared review-card primitives and data patterns may be reused where appropriate, but the page-level compositions remain distinct.

The Home implementation already specifies three review cards at a time in a horizontal carousel with previous/next arrows and pagination dots. That is a separate composition.

---

# 22. VISUAL CONSISTENCY WITH ALREADY DEVELOPED PAGES

This is a dedicated final QA requirement.

Reviews must be compared visually with the current implementations of:

- Home;
- Menu;
- Catering;
- About.

Check specifically:

- header height and behavior;
- page container width;
- section vertical rhythm;
- heading scale;
- body typography;
- CTA dimensions;
- button radius;
- card radius;
- surface treatments;
- borders;
- shadows;
- image treatment;
- icon style;
- decorative flourish usage;
- mobile spacing;
- mobile fixed Contact Us;
- Back to Top;
- footer.

The result should feel like **one coherent Lana Food website**.

### Authority rule during QA

If the reference and existing site differ:

- reference wins for Reviews-specific **composition**;
- existing site + Design System win for **shared visual language**.

Do not make Reviews visually identical to Home, Menu, Catering or About. It should share the same system while preserving the approved Reviews-specific composition.

---

# 23. CONTENT / DATA SAFETY

Do not invent:

- customer testimonials;
- ratings;
- review counts;
- customer identities;
- customer locations;
- event categories beyond the approved list;
- review dates;
- Google URLs;
- business contact data;
- photography;
- awards/certifications;
- unsupported service claims.

If information is unavailable:

> Requires real project data; do not invent.

For optional fields, omit the field from the UI when empty.

Do not show:

- `N/A`;
- `Not available`;
- `Coming soon`;
- fake placeholder reviews;
- fabricated customer names.

The Design System's Empty State is for actual empty/loading UI state, not a substitute for fabricated content.

---

# 24. PERFORMANCE / IMPLEMENTATION NOTES

Follow existing project performance rules.

- Use `next/image`.
- Give priority loading only to the actual above-the-fold Hero image when a real production image is available.
- Lazy-load below-fold photography.
- Avoid unnecessary client-side JavaScript.
- Avoid unnecessary animation.
- Preserve fast mobile loading.
- Do not load the reference screenshot as a production asset.

Gallery/lightbox behavior should use the existing project implementation if available.

---

# 25. MAINTAINABILITY TEST

The Reviews implementation is not considered compliant unless normal content, data, asset and supported presentation changes can be made through the existing content/data and shared component architecture without changing the page structure or duplicating components.

At minimum, it must be possible to:

1. Change the Hero H1.

2. Change the Hero supporting copy.

3. Replace the Hero image.

4. Change Hero image focal/object position.

5. Change the Google rating.

6. Change the Google review count.

7. Change the Google Business Profile/review destination.

8. Change the `Leave a Review` Google destination.

9. Add, remove and reorder reviews.

10. Update review text.

11. Update review date.

12. Update event type where supported by the existing data model.

13. Filter and sort reviews using the defined review data.

14. Add, remove and reorder event categories where the existing content model permits it.

15. Replace event photography.

16. Change event photography focal/object position where supported.

17. Change the `Read More Reviews on Google` CTA destination.

18. Change the `Leave a Review` CTA destination.

19. Change applicable Google Reviews CTA supporting copy.

20. Change final CTA copy.

21. Change final CTA destinations.

22. Replace final CTA photography.

23. Change final CTA image focal/object position where supported.

24. Disable WhatsApp when no real WhatsApp contact is available.

25. Adjust applicable section spacing, content alignment, CTA alignment, surface variant or other supported presentation properties through the existing shared configuration/semantic variants.

26. Replace or adjust applicable shared visual variants without creating Reviews-specific component copies.

None of these operations should require rewriting the page structure.

None of these operations should require duplicating shared components specifically for Reviews.

Changing content or real project data must not require changing presentation components.

Changing a supported shared presentation property must not require introducing page-specific CSS.

All colors, typography, spacing, radii, borders, shadows, buttons, pills, surfaces, icons and other visual styling must continue to come from the existing Lana Food Design System and shared component system.

Where a visual adjustment is genuinely required, use the existing shared semantic variant or the smallest appropriate reusable shared extension rather than a local workaround.

---

# 26. OPEN QUESTIONS / CONFLICTS

The following items must not be silently invented during implementation.

## OPEN-001 — Actual Google rating/count

The IA requires an overall Google rating and total review count, while the reference displays placeholders.

**Resolution:** use real configured project data. If unavailable, do not invent values.

## OPEN-002 — Google destinations

The reference shows Google review CTAs, but no verified destination is defined in the specification materials.

**Resolution:** use the existing configured Google Business Profile/review destination. If not configured, leave it as an editable data requirement.

## OPEN-003 — Review dataset

The IA defines the review fields but does not provide a complete verified production review dataset in this specification.

**Resolution:** implementation must consume real project review data. Do not create placeholder testimonials as production content.

## OPEN-004 — Production Reviews/Event photography

The visual reference contains photography, but the reference itself is not a production asset.

**Resolution:** use approved real project photography when available; otherwise use layout-preserving placeholders.

## OPEN-005 — Existing project implementation details

This specification intentionally does not invent exact class names, file paths, shared component names, or local dimensions.

**Resolution:** inspect the current implementation before coding and reuse the actual shared system.

## OPEN-006 — Pagination implementation

The reference clearly requires pagination, but the exact existing project pagination primitive/behavior is not established by the available source material.

**Resolution:** use the existing project pagination system if present. If none exists, implement the smallest accessible shared pattern required by the reference; do not create screenshot-specific dimensions.

---

# 27. IMPLEMENTATION / ACCEPTANCE CRITERIA

The Reviews page is complete only when all of the following are true.

## Structure

- [ ] IA requirements are preserved.
- [ ] Page contains exactly the approved Reviews sections.
- [ ] No unauthorized page-level sections are introduced.
- [ ] Reviews remains a standalone destination.
- [ ] Home Reviews Preview remains a separate, compact composition.

## Visual composition

- [ ] `review-reference.png` composition is represented accurately.
- [ ] Desktop composition follows the reference.
- [ ] Mobile composition follows the reference.
- [ ] Hero uses the established Lana Food cream/photo relationship.
- [ ] Rating summary has the correct horizontal desktop / stacked mobile relationship.
- [ ] Filter and sorting area follows the reference composition.
- [ ] Desktop review grid uses the reference's 3-column composition.
- [ ] The reference's six-card/two-row arrangement is reproduced when sufficient real review data exists, without hardcoding page-specific card dimensions.
- [ ] Pagination is centered and visually secondary to the review content.
- [ ] Celebrations section follows the reference relationship between category controls, photography and CTA.
- [ ] Google Reviews CTA follows the reference relationship between copy, actions and photography.
- [ ] Both Google review actions are present as editable CTAs.
- [ ] Final CTA follows the approved reference composition.

## Shared visual system

- [ ] Reviews uses the existing Lana Food visual language.
- [ ] Existing Design System tokens and shared primitives are reused.
- [ ] No new Reviews-specific design system is introduced.
- [ ] No new grid system is introduced.
- [ ] No new typography scale is introduced.
- [ ] No arbitrary colors are introduced.
- [ ] All colors come from the existing Lana Food semantic/design token system.
- [ ] Existing typography styles are reused.
- [ ] Existing spacing tokens and section-spacing variants are reused.
- [ ] Existing button, pill, card, surface, radius, border and shadow systems are reused.
- [ ] Decorative flourishes use the established shared primitive.
- [ ] Icons use the established Phosphor/bespoke icon system.
- [ ] Existing image ratios and image treatments are reused.
- [ ] Adjustable presentation values are identifiable and centrally manageable where the existing architecture supports them.
- [ ] No page-specific copies of shared visual primitives are created.
- [ ] No local CSS overrides are introduced solely to imitate the reference.

## Content / data

- [ ] Review content comes only from real approved project data.
- [ ] No review text is invented.
- [ ] No ratings are invented.
- [ ] No review counts are invented.
- [ ] No review dates are invented.
- [ ] No event types are invented.
- [ ] No event categories outside the approved project/reference set are invented.
- [ ] No customer names, initials or identities are invented.
- [ ] No customer locations are invented or displayed as identifying information.
- [ ] Customer-identifying information is not rendered publicly unless explicit permission/consent for public website publication has been established.
- [ ] Customer avatars or identifiable customer photography are not rendered without the required permission.
- [ ] Google rating and review count come from real configured data.
- [ ] Google destinations come from real configured data.
- [ ] No Google URL is invented.
- [ ] Missing optional fields are omitted rather than replaced with fabricated content.
- [ ] User-facing content remains editable through the existing content/data architecture.
- [ ] Images remain independently replaceable.
- [ ] Image focal/object positions remain editable where supported.
- [ ] `Read More Reviews on Google` has an editable destination.
- [ ] `Leave a Review` has a separate editable destination.
- [ ] Both Google CTA labels remain editable.
- [ ] Final CTA content and destinations remain editable.

## Responsive

- [ ] Existing Design System breakpoints are used.
- [ ] No Reviews-specific breakpoint system is introduced.
- [ ] Desktop, laptop, tablet and mobile layouts use the existing responsive grid and spacing system.
- [ ] Mobile filters remain usable without causing page overflow.
- [ ] Review cards become one column on mobile.
- [ ] Pagination remains usable on mobile.
- [ ] Celebrations controls/gallery adapt to the established mobile behavior.
- [ ] Google Reviews CTA stacks appropriately on mobile.
- [ ] Final CTA stacks appropriately on mobile.
- [ ] Fixed mobile Contact Us remains available.
- [ ] WhatsApp and Back to Top follow the existing sitewide stacking behavior.
- [ ] Persistent controls never overlap.
- [ ] No horizontal page overflow exists.

## Accessibility

- [ ] One semantic H1 is present.
- [ ] Heading hierarchy is logical.
- [ ] Breadcrumbs are accessible.
- [ ] Filters are keyboard accessible.
- [ ] Active filter state is communicated semantically and not by color alone.
- [ ] Sorting is keyboard accessible.
- [ ] Pagination is keyboard accessible.
- [ ] Current pagination state is exposed accessibly.
- [ ] CTAs are keyboard accessible.
- [ ] Focus states are visible.
- [ ] Review content is available as HTML text.
- [ ] Non-interactive review cards are not unnecessarily keyboard-focusable.
- [ ] Meaningful images have appropriate descriptive alt text.
- [ ] Decorative imagery is hidden from assistive technology where appropriate.
- [ ] Alt text does not fabricate information.
- [ ] Contrast meets the existing Lana Food accessibility requirements.
- [ ] No interaction depends on color alone.
- [ ] Reduced-motion behavior is respected.

## SEO

- [ ] Page title is `Customer Reviews | Lana Food | Bay Area California`.
- [ ] H1 is `Loved by Families Across the Bay Area`.
- [ ] `/reviews` is the canonical clean Reviews route.
- [ ] Review content is crawlable HTML.
- [ ] Relevant internal links are present.
- [ ] AggregateRating structured data is supported when real rating data exists.
- [ ] Review structured data is supported when real publishable review data exists.
- [ ] LocalBusiness structured data is supported using real business data.
- [ ] BreadcrumbList structured data is supported.
- [ ] Structured data uses only real project data.
- [ ] No fabricated schema values are emitted.
- [ ] Customer-identifying information is not exposed through structured data without the required permission/consent.

## Architecture

- [ ] Existing shared components are reused where applicable.
- [ ] Page component remains focused.
- [ ] Content/data is separated from presentation.
- [ ] Client Components are used only for genuine interaction.
- [ ] Server Components remain the default where applicable.
- [ ] No unnecessary abstraction layer is introduced.
- [ ] No Reviews-specific copies of existing shared components are created without a genuine reusable need.
- [ ] No CSS/layout hacks are required.
- [ ] No arbitrary negative margins, transforms or positional offsets are used to reproduce the screenshot.
- [ ] Adjustable layout decisions are centralized and identifiable.
- [ ] Shared semantic variants are used when an existing primitive genuinely requires an extension.

## Maintainability

- [ ] Changing approved content does not require changing component structure.
- [ ] Adding/removing/reordering reviews does not require changing presentation components.
- [ ] Replacing images does not require changing component structure.
- [ ] Changing image focal/object position does not require structural changes.
- [ ] Changing Google destinations does not require code changes outside the existing content/data configuration.
- [ ] Supported spacing, alignment, surface and presentation variants can be adjusted through the existing shared configuration/semantic variant system.
- [ ] Visual tuning does not require scattered local CSS changes.
- [ ] Reviews-specific composition remains configurable without creating a separate visual system.

## Relationship to existing pages

- [ ] Reviews remains visually consistent with the current Home, Menu, Catering and About implementations.
- [ ] Header and footer match the existing sitewide implementation.
- [ ] Typography matches the existing sitewide implementation.
- [ ] Container widths match the existing sitewide implementation.
- [ ] Section rhythm matches the existing sitewide implementation.
- [ ] Buttons, cards, pills, surfaces, radii, borders and shadows match the existing system.
- [ ] Reviews-specific composition remains distinct from Home, Menu, Catering and About.
- [ ] Home Reviews Preview remains compact and is not redesigned to match the standalone Reviews page.
- [ ] Final QA compares Reviews against the current implementations of Home, Menu, Catering and About.

## Final source-of-truth rule

- [ ] `review-reference.png` is used as the source of truth for Reviews-specific composition.
- [ ] Existing Lana Food Design System is used as the source of truth for shared visual language.
- [ ] Existing implemented pages are used as the source of truth for how the shared system is currently applied.
- [ ] IA is used as the source of truth for approved information architecture and content requirements.
- [ ] Real project data is used as the source of truth for reviews, ratings, business information and destinations.
- [ ] No source conflict is silently resolved or overridden without being documented in `Open Questions / Conflicts`.

The final result must feel like one coherent Lana Food website:

> REFERENCE DEFINES REVIEWS COMPOSITION.

> EXISTING SITE + DESIGN SYSTEM DEFINE SHARED VISUAL LANGUAGE.

> REAL PROJECT DATA DEFINES PUBLISHABLE CONTENT.

> ALL SUPPORTED CONTENT, ASSETS AND PRESENTATION VALUES MUST REMAIN MANAGEABLE THROUGH THE EXISTING ARCHITECTURE.

> NO INVENTED DATA AND NO CSS/LAYOUT HACKS.

---

# 28. FINAL IMPLEMENTATION PRINCIPLE

The Reviews page must satisfy three layers simultaneously:

### Layer 1 — Composition

Follow the approved `review-reference.png` for the Reviews-specific page structure, relationships, proportions and responsive composition.

### Layer 2 — Shared visual language

Use the existing Lana Food Design System and current shared implementation for typography, colors, spacing, cards, buttons, surfaces, icons, navigation, footer and persistent UI.

### Layer 3 — Real data

Use only real, approved review/business/photo data. Keep content and assets editable without changing component structure.

The key invariants are:

> **REFERENCE DEFINES REVIEWS COMPOSITION.**

> **EXISTING SITE + DESIGN SYSTEM DEFINE SHARED VISUAL LANGUAGE.**

> **CONTENT CHANGES MUST NOT REQUIRE COMPONENT CHANGES.**

> **NO INVENTED DATA AND NO CSS/LAYOUT HACKS.**
