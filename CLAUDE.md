# LANA FOOD — CLAUDE PROJECT INSTRUCTIONS

## 1. PROJECT PURPOSE

Lana Food is a family-owned food business offering homemade Eastern European
food for both everyday home use and celebrations in the San Francisco Bay Area.

The website is a warm, photography-led business website whose main goals are:

1. Help visitors discover Lana Food and its food offering.
2. Present homemade Eastern European food clearly.
3. Support celebrations and catering inquiries.
4. Present Everyday, Kids' and Holiday menu offerings.
5. Build trust through real food photography, Lana's story and customer reviews.
6. Make contacting Lana Food easy.
7. Establish a strong technical and content foundation for local SEO.

The website should feel like being welcomed into a warm family kitchen,
not like using a generic catering/order-management application.

---

# 2. SOURCE OF TRUTH

The project contains four primary source documents:

- `docs/01_Product_Brief.docx`
- `docs/02_Website_Strategy.docx`
- `docs/03_Information_Architecture.docx`
- `docs/Lana-Food-UI-Design-System.docx`

These documents define the product, website strategy, information architecture,
visual system and implementation principles.

IMPORTANT:

Read the source documents completely when their information is required.
Do not rely only on extracted snippets, first paragraphs, summaries, or guesses.

The current visual reference images are also important implementation references:

- `public/images/desktop-reference.png`
- `public/images/mobile-reference.png`
- `public/images/menu-reference.png`

The reference images show the intended visual composition.

Do not treat a visual reference screenshot as production photography.

When this CLAUDE.md contains a later explicit project decision that intentionally
updates an earlier source-document detail, follow the current decision recorded
in this CLAUDE.md.

---

# 3. PRIORITY RULES

When implementing the website:

1. Follow explicit current project decisions recorded in this CLAUDE.md.
2. Use the approved source documents as the detailed specification for
   product requirements, website strategy, information architecture,
   content, design system and visual rules.
3. Match the provided visual references for approved visual composition.
4. Do not invent business facts.
5. Do not silently introduce new sections, features, copy, services,
   locations or UI patterns.
6. If something is not defined, use the smallest implementation necessary
   and preserve the existing structure.
7. Do not redesign the information architecture.
8. Do not replace approved terminology with generic website terminology.

When implementing a feature or section, read the relevant source documentation
before making implementation decisions. Do not rely on this CLAUDE.md as a
replacement for the source documents.

The goal is a close, faithful implementation — not a new interpretation of
the Lana Food brand.

---

# 4. BUSINESS CONCEPT

Lana Food is NOT only a catering company.

The website must communicate two connected directions under one brand.

## 4.1 Homemade Everyday Food

Lana Food offers authentic homemade Eastern European food for people who want good food at home without preparing everything themselves.

Relevant offerings include:

- Everyday Menu
- Kids' Menu
- Holiday Menu

## 4.2 Celebrations / Catering

Lana Food also provides homemade food for celebrations and family events.

Typical occasions include:

- Birthdays
- Baby Showers
- Family Gatherings
- Holiday Celebrations
- Kids' Parties
- Small Private Events

The positioning is closer to a beautiful homemade celebration table than to
traditional restaurant-style full-service catering.

The service may include:

- homemade food
- buffet-style presentation
- delivery
- optional setup

Lana Food is NOT positioned as a full-service restaurant with waitstaff or
table service unless explicitly added later.

The website should communicate:

- homemade food for everyday life
- beautiful food for celebrations

Both are united by authentic Eastern European homemade cooking and family care.

Do not let the catering narrative visually or verbally overwhelm the Everyday Food offering.

---

# 5. LOCATION AND SERVICE AREA

Broader service area:

San Francisco Bay Area, California.

Use the San Francisco Bay Area naturally where it accurately describes the
business.

Do not invent:

- primary business locations;
- additional cities;
- counties;
- exact addresses;
- opening hours;
- service boundaries;
- delivery radius

unless they are provided as confirmed business information.

Maintain consistent location information across the website and structured
data.

---

# 6. CURRENT DEVELOPMENT SCOPE

The immediate development task is the Home page.

Do not implement the complete website unless explicitly requested.

For the first implementation:

- build the Home page;
- create reusable components where appropriate;
- establish the visual system;
- establish responsive behavior;
- create correct image containers/placeholders;
- use the provided references for visual matching.

Other routes may be scaffolded only when necessary for navigation,
but do not build full secondary pages unless requested.

---

# 7. HOME PAGE STRUCTURE

The Home page should contain these sections in this order:

1. Sticky Header
2. Hero
3. Featured Menu Categories
4. Most Popular Dishes
5. Catering Overview
6. Meet Lana
7. Customer Reviews Preview
8. Contact CTA
9. Footer

IMPORTANT:

Do NOT add a separate "Why Choose Lana Food" section to the Home page.

Although an earlier IA version contains such a section, it is NOT part of the
current approved Home visual direction.

Trust should instead be communicated through:

- Hero trust indicators where shown;
- photography;
- Meet Lana;
- customer reviews;
- catering information;
- overall content and visual presentation.

Do NOT add an Instagram photo gallery to the Home page.

Instagram and Facebook should remain available through simple social links/icons
where real account information is available.

---

# 8. HEADER

The Header is sticky.

Desktop structure:

- Lana Food logo
- Home
- Menu
- Catering
- About
- Reviews
- Contact
- EN | RU language switch when multilingual mode is enabled
- Contact Us CTA
- phone number where defined by content

The logo links to Home.

Do not use "Order Now" as the primary sitewide CTA.

The finalized CTA is:

`Contact Us`

The Menu navigation may expose:

- Holiday Menu
- Everyday Menu
- Kids' Menu

Mobile:

- logo top-left
- hamburger top-right
- language switch inside mobile navigation
- fixed Contact Us CTA at the bottom

The mobile fixed Contact Us CTA must remain visible and must not be hidden
behind the hamburger menu.

---

# 9. CTA STRATEGY

Primary CTA:

`Contact Us`

Secondary CTA:

`View Menu`

Supporting CTA where appropriate:

`Explore catering`

Use:

- Contact Us for the primary conversion action.
- View Menu for food discovery.
- Request a Quote primarily for Catering/Contact flows.

Do not replace Contact Us with "Order Now".

---

# 10. HERO

The Hero is one of the most important visual areas of the website.

The provided desktop reference is the visual source of truth for the composition.

IMPORTANT:

The Hero is NOT a simple full-width 16:9 photograph.

The intended composition is:

- warm cream/solid background on the left;
- Hero text, icons and CTAs positioned within the left area;
- food photography visible primarily on the right;
- the photograph visually merges into the cream area;
- there is no harsh vertical image edge;
- the transition is soft, blurred and faded;
- the food subject itself remains sharp;
- the blur is used for the transition area, not the whole photograph.

The visual effect should be implemented in HTML/CSS.

Recommended implementation:

- sharp production image layer;
- blurred/faded image layer or suitable CSS blur treatment;
- gradient/mask transition toward the cream background;
- correct stacking so text remains readable.

Do NOT permanently blur or edit the source photograph.

Do NOT use the desktop reference screenshot itself as the production image.

The image container/crop ratio is:

- desktop: 16:9
- mobile: 4:5

These ratios define the photography container/crop.
They do NOT mean that the entire Hero is a 16:9 rectangle.

Hero content:

Eyebrow:

`California Catering`

H1:

`Homemade Eastern European Cuisine for Life’s Best Moments`

Supporting copy:

`From family gatherings to corporate events, we bring authentic homemade flavors, beautiful presentation, and warm hospitality to your table.`

Primary CTA:

`Contact Us`

Secondary CTA:

`View Menu`

Trust indicators beneath the CTA area:

- Fresh Ingredients
- Homemade Recipes
- Reliable Service
- Made with Love


Do not invent Hero copy if final copy has not yet been supplied.
Use clearly identifiable placeholder content only where necessary.

---

# 11. FEATURED MENU CATEGORIES

Use four large photography-led cards in a horizontal desktop layout.

Section heading:

`Explore Our Menus`

Supporting text:

`Choose the perfect menu for your occasion.`

Featured menu categories:

- Holiday Menu
- Everyday Menu
- Kids' Menu

Each card contains:

- image
- category name
- short description
- `View Menu` link with arrow

### Card content

**Holiday Menu**

`Traditional dishes for holidays & special occasions`

**Everyday Menu**

`Delicious homemade meals for any day`

**Kids' Menu**

`Tasty & wholesome options kids will love`

Do not add Seasonal Specials unless it is part of the approved final reference/content.

### Card layout

Desktop cards should use a wide landscape photography area on top,
followed by the text content below.

The four cards should appear as one horizontal row on desktop.

The photography ratio for these Featured Menu Category cards should be
landscape and follow the approved reference composition.

Do not use the 4:5 portrait ratio for these cards.

The 4:5 ratio applies to individual menu/dish cards elsewhere in the
site, not to the Featured Menu Categories section.

---

# 12a. MOST POPULAR DISHES

Home should feature a compact “Most Popular Dishes” card showing a curated selection of customer favorites.

The section should communicate that these are popular, approachable choices that customers love.

### Content

Title:

`Most Popular Dishes`

Subtitle:

`Customer favorites made with love.`

Featured dishes:

- Fruit Platters
- Olivier Salad
- Mini Sandwiches
- Pelmeni
- Napoleon Cake
- Stuffed Peppers

Each dish should include:

- Dish name
- Small food thumbnail
- Right-facing arrow indicating that the item can be explored

CTA:

`View Full Menu`

The section should remain compact and visual. It should not display full dish descriptions, ingredients or pricing on the Home page.

---

# 12b. CATERING OVERVIEW

Home should introduce Catering as an important part of the Lana Food experience.

The section should use a compact horizontal card with a soft gradient/background treatment. The layout should contain:

- Catering heading and supporting text
- Event-type icons with short labels
- Primary CTA
- Catering photography on the right side

### Content

Title:

`Catering with Professional Setup`

Subtitle:

`Complete catering service for any event.`

Relevant event types:

- Birthdays
- Baby Showers
- Family Gatherings
- Corporate Events

Each event type should be represented by a simple icon with a short supporting phrase where appropriate.

The section should communicate celebrations, professional presentation and the complete catering experience provided by Lana Food.

CTA:

`Explore Catering`

The Home section should remain an overview and should not become a full catering sales page.

Detailed catering process, pricing logic, event details and quote flow belong on the Catering page.

---

# 13. MEET LANA

Home includes a warm founder introduction.

Use:

- Lana portrait
- short founder story
- family values
- homemade philosophy
- link to About

CTA:

`Learn More About Us`

Photography should feel candid, warm and authentic.

Do not use stock photography.

---

# 14. CUSTOMER REVIEWS

Home includes a preview of customer reviews.

Display a small number of featured reviews rather than the full Reviews page.

Desktop should display three review cards at a time within a horizontal carousel.

Review cards may include:

- star rating
- customer name
- city
- optional event type
- review text

The review section should include:

- previous/next navigation arrows
- carousel pagination dots

Use real reviews when supplied.

Never invent customer names, ratings, locations or review text.

---

# 15. SOCIAL LINKS

Do not include an Instagram photo gallery or social media content preview on the Home page.

The website should not prominently promote Instagram content at this stage.

Social media should still be available through simple icon links.

Include when real information is available:

- Instagram
- Facebook

Do not invent social media accounts or content.

---

# 16. CONTACT CTA

Home ends with a clear and simple contact section.

The initial website is a presentation/visit-card website without a backend.

Do not include a message submission form at this stage.

Provide direct contact options:

- phone
- WhatsApp
- email
- service area

Service area:

`San Francisco Bay Area, California`

Primary CTA:

`Contact Us`

The Contact Us CTA should lead to an available direct contact method.

Do not invent contact details.

---

# 17. FOOTER

Footer appears on every page.

Include when real information is available:

- logo
- navigation
- menu links
- phone
- WhatsApp
- email
- Instagram
- Facebook
- service area
- EN | RU
- Google Business Profile link
- copyright
- short brand tagline

Use:

`Homemade with love in the San Francisco Bay Area`

only if this approved wording is retained in the final content.

Do not invent missing contact information.

---

# 18. TYPOGRAPHY

Use the approved Lana Food Design System typography.

Primary display serif:

`Fraunces`

Body, UI, navigation and button type:

`Karla`

Script accent:

`Alex Brush`

Alex Brush is a rare decorative accent only.

Do NOT use the script font for:

- body copy
- navigation
- buttons
- long text

Do not substitute Playfair Display, Inter or another font unless explicitly
requested.

Use the approved type scale, weights and line heights from the Lana Food
Design System.

---

# 19. COLORS

Follow the Lana Food Design System color tokens.

Primary brand red:

`#B3272C` — primary/600

Pressed red:

`#942220` — primary/700

Use the approved warm cream, ivory, warm-grey and charcoal/ink colors
from the Design System tokens.

Gold is a decorative accent only and must follow the approved gold tokens
and accessibility rules.

Do not introduce arbitrary colors.

Do not use generic SaaS blue or cold neutral palettes.

Use CSS variables/design tokens rather than scattering hard-coded colors
through components.

---

# 20. VISUAL STYLE

The website should feel:

- warm
- welcoming
- attentive
- proud
- dependable
- joyful
- editorial
- authentic
- homemade
- premium but not luxurious/corporate

Visual principles:

- generous whitespace
- warm cream/ivory grounds
- photography-led layouts
- editorial serif headlines
- warm humanist sans body text
- restrained red accents
- subtle rounded corners
- fine-line decorative details
- natural photography

Avoid:

- generic SaaS layouts
- corporate blue
- excessive gradients
- excessive shadows
- clip-art
- emoji-style icons
- novelty fonts
- template-like cards
- excessive decorative elements
- stock photography
- cold fluorescent photography
- busy backgrounds

---

# 21. GRID AND LAYOUT

Follow the Lana Food Design System grid and spacing tokens.

Desktop:

- 12-column grid
- centered content
- consistent max-width
- generous horizontal spacing

Laptop:

- 12-column grid
- slightly tighter horizontal margins

Tablet:

- 8-column grid
- responsive spacing and card layouts

Mobile:

- 4-column grid
- mobile-first
- stacked layouts where appropriate
- generous touch targets
- no horizontal overflow
- preserve visual hierarchy

Follow the provided UI Design System for grid dimensions, spacing tokens,
breakpoints and responsive behavior.

Do not create a new grid system.

Mobile is the primary experience. Desktop is an enhanced version of the
same responsive structure.

---

# 22. PHOTOGRAPHY AND IMAGE ASSETS

Currently available production asset:

- `public/images/logo.PNG`

Current reference assets:

- `public/images/desktop-reference.png`
- `public/images/mobile-reference.png`
- `public/images/menu-reference.png`

The reference images are NOT production website photography.

Do NOT:

- use the reference screenshot as a website photo;
- crop photography out of the reference screenshot;
- blur the reference screenshot and use it as a website asset;
- generate imaginary food photography;
- invent missing photos.

Where real photography is not yet available:

Create a correctly sized visual placeholder.

The placeholder must preserve:

- component dimensions;
- aspect ratio;
- intended crop behavior;
- spacing;
- border radius;
- layout relationship.

This allows real photography to be inserted later without changing the layout.

When real photography is added, follow the Lana Food Design System photography
guidelines:

- natural warm daylight;
- warm, consistent color grading;
- clean, uncluttered backgrounds;
- generous negative space where text or UI needs to sit;
- real food, people and catered events rather than stock photography.

Food photography should use overhead or 45° compositions where appropriate.

Founder and team photography should feel candid, warm and authentic rather
than posed or corporate.

---

# 23. IMAGE RATIOS

Use these fixed component ratios from the Design System:

- Hero/full-bleed photography: 16:9 desktop
- Hero mobile crop: 4:5
- Dish/menu cards: 4:5
- Gallery: 1:1
- Founder portrait: 4:5

These are component ratios, not requirements for the pixel dimensions of
the original image file.

Do not invent a required source JPEG size unless explicitly provided.

Use `next/image` with an explicit sized wrapper or fill behavior that preserves
the intended ratio.

Photography aspect ratios must be enforced by the component, not by the
uploaded image itself.

---

# 24. HERO IMAGE TRANSITION

The Hero requires a specific visual transition.

The production photo remains sharp on the main visible right side.

Toward the cream left side:

- the photo gradually fades;
- the transition becomes soft/blurred;
- the cream background becomes dominant;
- no hard vertical boundary should be visible.

Implement this in CSS/HTML.

Do not prepare a permanently blurred image in Figma or an image editor.

The effect must remain reusable when the production Hero photograph is replaced.

The transition must not reduce the sharpness of the main visible food subject.

---

# 24. HERO IMAGE TRANSITION

The Hero requires a specific visual transition.

The production photo remains sharp on the main visible right side.

Toward the cream left side:

- the photo gradually fades;
- the transition becomes soft/blurred;
- the cream background becomes dominant;
- no hard vertical boundary should be visible.

Implement this in CSS/HTML.

Do not prepare a permanently blurred image in Figma or an image editor.

The effect must remain reusable when the production Hero photograph is replaced.

---

# 25. COMPONENT ARCHITECTURE

Use reusable React components.

Suggested structure:

app/
  _components/
    Header.tsx
    Hero.tsx
    FeaturedMenus.tsx
    MostPopularDishes.tsx
    CateringOverview.tsx
    MeetLana.tsx
    ReviewsPreview.tsx
    ContactCTA.tsx
    Footer.tsx

The exact file naming may be adjusted if the existing project structure requires it,
but do not create unnecessary abstraction.

Keep components focused and readable.

Do not create a giant page.tsx containing the entire Home implementation.

Social links such as Instagram and Facebook should remain simple reusable links
or icon elements and do not require a dedicated Instagram gallery component.

---

# 26. NEXT.JS IMPLEMENTATION

Use:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- `next/image`

Use Server Components by default.

Use Client Components only when interaction requires them.

Examples:

- mobile navigation
- language switch
- interactive carousel
- search
- other genuinely interactive UI

Do not add a Client Component only for convenience.

The initial website does not include a contact submission form or backend
form handling.

The route structure should mirror the approved IA:

- `/`
- `/menu`
- `/menu/everyday`
- `/menu/kids`
- `/menu/holiday`
- `/catering`
- `/about`
- `/reviews`
- `/contact`

Do not rename these routes without a project reason.

Use `next/image` for all photography with explicit dimensions or `fill` inside
a correctly sized wrapper.

Give priority loading to the Hero image only.

Use the approved design tokens through CSS variables and Tailwind rather than
hard-coded design values.

---

# 27. DATA AND CONTENT

Menu and content should be structured so the website can later move from
JSON/structured data to Google Sheets or a CMS without redesigning the UI.

Do not hardcode repeated dish information into multiple components.

Keep content separate from presentation where practical.

Menu categories, dishes, metadata and internal links should remain consistent
with the site's content model.

Do not invent menu items, prices, serving sizes or ingredients.

---

# 28. BILINGUAL SUPPORT

English is the primary website language.

Russian is optional.

The language system must not require a different layout or navigation.

When Russian is enabled:

- Russian pages use dedicated localized URLs;
- localize metadata;
- localize page titles;
- localize structured data;
- implement hreflang appropriately.

When Russian is disabled:

- hide the language selector;
- keep the website entirely English;
- do not change the structure or navigation.

Do not invent Russian translations for missing final content.

---

# 29. SEO — CORE REQUIREMENT

SEO is a core project requirement, but SEO copy can be refined later.

The technical and structural foundation must be correct now.

## Home

Primary search intent:

`Homemade catering Bay Area`

Secondary / long-tail:

- Eastern European catering
- Family-owned catering
- Homemade party food

## Menu

Primary:

`Homemade Eastern European food`

Secondary:

- Holiday menu
- Kids' menu
- Homemade party food
- Eastern European dishes

## Catering

Primary:

`Catering services Bay Area`

Secondary:

- Birthday catering
- Baby shower catering
- Family event catering
- Holiday catering

## About

Primary:

`Family-owned catering`

Secondary:

- Authentic Eastern European recipes
- Homemade cooking
- Meet Lana

## Reviews

Primary:

`Catering reviews Bay Area`

Secondary:

- Homemade catering reviews
- Customer testimonials

## Technical SEO Requirements

Every page should have:

- one H1;
- descriptive page title;
- descriptive meta description;
- semantic H1–H3 heading hierarchy;
- searchable HTML content;
- descriptive image alt text;
- internal links to related pages;
- clean, SEO-friendly URLs;
- optimized images and fast loading;
- mobile-first implementation.

Use structured data according to the approved IA:

- Organization
- LocalBusiness
- BreadcrumbList
- Menu / MenuItem
- Service
- AggregateRating / Review
- FAQPage
- ContactPoint

Do not keyword-stuff.

Do not create fake location pages.

Do not repeat location keywords unnaturally.

The Bay Area service area should be communicated naturally throughout
relevant content.

SEO content should use the same structured content source as the website.

---

# 30. LOCAL SEO

Primary business location:

`Mountain View, California`

Broader service area:

`San Francisco Bay Area, California`

Use location information naturally in:

- visible content
- footer
- Contact page
- metadata
- structured data
- internal linking

Do not invent additional service locations.

Maintain consistent business information across the website and Google Business
Profile once the real business information is available.

Plan for:

- `LocalBusiness`
- `Organization`
- `ContactPoint`
- `BreadcrumbList`
- `Menu`
- `MenuItem`
- `Service`
- `AggregateRating`
- `Review`
- `FAQPage`

Never invent structured-data values.

---

# 31. TECHNICAL SEO

Every page should have:

- one clear H1;
- descriptive title;
- descriptive meta description;
- semantic H2/H3 hierarchy;
- crawlable HTML;
- descriptive image alt text;
- clean URL;
- internal links.

Important menu information must exist as HTML.

Do not make a PDF the only representation of menu content.

Images must be optimized.

Use `next/image`.

Hero image should receive priority loading when a real Hero image is available.

The site should remain fast and mobile-friendly.

---

# 32. ACCESSIBILITY

Follow the Design System accessibility requirements.

Ensure:

- sufficient contrast;
- visible keyboard focus;
- semantic HTML;
- accessible buttons;
- accessible navigation;
- alt text for meaningful images;
- decorative images marked appropriately;
- touch targets at least the required minimum size;
- forms have labels and accessible errors.

Do not rely on color alone to communicate state.

---

# 33. ICONOGRAPHY

Use the approved icon style:

- thin-line
- rounded terminals
- warm, slightly hand-finished character

Preferred base library:

Phosphor Icons, Regular weight.

Avoid:

- emoji
- clip-art
- heavy solid icon sets
- inconsistent icon styles

---

# 34. MOTION

Motion should be subtle.

Use short, restrained transitions.

Avoid:

- excessive animation
- large parallax effects
- distracting entrance animations
- animations that slow down the page

The site should feel calm and confident.

---

# 35. PERSISTENT UI

Sitewide:

- sticky header
- Contact Us access
- footer
- Back to Top after sufficient scroll

Mobile:

- fixed Contact Us bar at bottom
- WhatsApp button when real WhatsApp contact is available
- Back to Top above the persistent controls

Persistent controls must never overlap.

The mobile fixed Contact Us bar must remain visible and must not be hidden
behind the hamburger menu or other persistent controls.

---

# 36. ANTI-PATTERNS

Do NOT:

- redesign the approved IA;
- add "Why Choose Lana Food" to Home;
- add an Instagram photo gallery to Home;
- turn Lana Food into an "Order Now" app;
- replace Contact Us with Order Now;
- add a contact submission form in the initial website version;
- invent photography;
- use screenshots as production photography;
- invent business information;
- invent menu data;
- invent customer reviews;
- add unnecessary sections;
- create fake SEO city pages;
- keyword-stuff;
- use generic SaaS UI;
- use cold corporate colors;
- use stock photography;
- replace approved fonts without reason;
- introduce arbitrary colors;
- create unnecessary dependencies;
- rewrite working project infrastructure without need.

---

# 37. REFERENCE MATCHING

The provided desktop and mobile reference images are implementation references.

When building the Home page, compare the implementation against the references for:

- overall section order;
- proportions;
- spacing;
- image placement;
- typography hierarchy;
- alignment;
- background areas;
- CTA placement;
- visual rhythm;
- mobile stacking;
- Hero photo/cream transition.

Do not copy the reference screenshot as a single image.

Recreate the layout with real HTML/CSS/React components.

The reference is especially authoritative for visual composition.

---

# 38. DEVELOPMENT WORKFLOW

Before changing files:

1. Read `CLAUDE.md`.
2. Read the relevant source documentation completely.
3. Inspect the existing project structure.
4. Inspect all available reference images.
5. Identify what is confirmed and what is missing.
6. Do not invent missing assets or business information.

Before implementing a large change:

- provide a concise implementation plan;
- list files to create or modify;
- explain the intended sections/components;
- wait for approval when explicitly requested.
- Do not make unrelated changes outside the requested scope.

For the initial Home implementation, do not modify secondary pages unless required.

---

# 39. IMAGE PLACEHOLDER WORKFLOW

Real production photography will be added later.

When a photo is missing:

- create the correct container;
- preserve the required ratio;
- preserve object-fit/object-position behavior;
- preserve spacing;
- preserve visual hierarchy;
- use a neutral placeholder;
- make replacing the image a simple asset change.

Do not redesign the component when the real image arrives.

---

# 40. COMPLETION CRITERIA — HOME

The first Home implementation is complete when:

- the page follows the approved section order;
- no unauthorized sections have been added;
- no Instagram photo gallery has been added;
- no contact submission form has been added in the initial version;
- the desktop composition matches the reference closely;
- the mobile composition matches the mobile reference closely;
- Hero cream/photo/blur transition is implemented;
- correct CTA hierarchy is used;
- correct fonts and brand colors are used;
- image placeholders use correct ratios;
- reference screenshots are not used as production photos;
- navigation structure matches the IA;
- layout is responsive;
- no horizontal overflow exists;
- accessibility basics are implemented;
- SEO metadata foundation exists;
- no business facts or content have been invented;
- the code is componentized and maintainable.

---

# 41. IMPORTANT CURRENT ASSET STATE

At the beginning of development, the following production asset is confirmed
to be available in the project:

`public/images/logo.PNG`

The following reference assets are confirmed to be available in the project:

- `public/images/desktop-reference.png`
- `public/images/mobile-reference.png`
- `public/images/menu-reference.png`

Do not assume additional food, founder, event, Instagram or menu photography
exists in the project unless the actual asset is present and confirmed.

Use placeholders until real production assets are supplied.

---

# 42. FINAL PRINCIPLE

Build Lana Food as a warm, authentic homemade Eastern European food brand with two connected customer needs:

**EVERYDAY HOMEMADE FOOD**

and

**CELEBRATIONS / CATERING.**

The website should make both clear.

The visual reference defines the intended composition.

The source documents define the approved information architecture and design system.

This `CLAUDE.md` defines the implementation guardrails.

When information is missing, do not guess.

When a decision is already defined, do not reinterpret it.

When an asset is missing, use a placeholder.

When SEO can be improved later, keep the architecture flexible rather than hardcoding speculative content.