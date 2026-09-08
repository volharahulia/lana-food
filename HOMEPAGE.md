# HOMEPAGE SPECIFICATION

Complete documentation for developing the Lana Food Home page.

**See also:** `CLAUDE.md` for general project requirements that apply to all pages.

---

## HOME PAGE STRUCTURE

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

Although an earlier IA version contains such a section, it is NOT part of the current approved Home visual direction.

Trust should instead be communicated through:

- Hero trust indicators where shown;
- photography;
- Meet Lana;
- customer reviews;
- catering information;
- overall content and visual presentation.

Do NOT add an Instagram photo gallery to the Home page.

Instagram and Facebook should remain available through simple social links/icons where real account information is available.

Trust should instead be communicated through:
- Hero trust indicators where shown
- photography
- Meet Lana
- customer reviews
- catering information
- overall content and visual presentation


---

## 1. HEADER (STICKY)

Header sticks to the top of the page when scrolling and fits the page width.

### Desktop structure:

- Lana Food logo (links to Home)
- Home
- Menu (may expand: Holiday Menu, Everyday Menu, Kids' Menu, Gastroboxes)
- Catering
- About
- Reviews
- Contact
- EN | RU language switch (when multilingual mode enabled)
- Contact Us CTA button
- phone number (where defined by content)

### Mobile structure:

- Logo top-left
- Hamburger menu top-right
- Language switch inside mobile navigation
- **Fixed Contact Us CTA at the bottom** (must remain visible, not hidden behind hamburger)

### CTA Strategy

**Primary CTA:** `Contact Us`

**Secondary CTA:** `View Menu`

**Supporting CTA:** `Explore Catering` (where appropriate)

❌ Do NOT use "Order Now" as the primary sitewide CTA.

---

## 2. HERO

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

## 3. FEATURED MENU CATEGORIES

Use four large photography-led cards in a horizontal desktop layout.

Section heading:

`Explore Our Menus`

Supporting text:

`Choose the perfect menu for your occasion.`

Featured menu categories:

- Holiday Menu
- Everyday Menu
- Kids' Menu
- Gastroboxes

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

**Gastroboxes**

`Content to add`

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

## 4. MOST POPULAR DISHES

Home should feature a compact “Most Popular Dishes” card showing a curated selection of customer favorites.

The section should communicate that these are popular, approachable choices that customers love.

### Content

Title:

`Most Popular Dishes`

Subtitle:

`Customer favorites made with love.`

Featured dishes:

This list is NOT hardcoded. It is sourced dynamically from the same
Excel-driven menu data Menu itself reads (see MENU.md's Excel column
schema): every published menu item/group across all four categories whose
`Popular Dish` column is `true` appears here, in category → subcategory →
Display Order sequence — the same ordering already used elsewhere in the
menu data model. Changing which rows are marked `Popular Dish` in the
spreadsheet changes this list; no component code changes.

Each dish should include:

- Dish name (from the menu data)
- Small food thumbnail (the menu item's own Photo; the neutral placeholder
  treatment applies when no photo is set, same as on the Menu page)
- Right-facing arrow indicating that the item can be explored

### Arrow / deep-link behavior

Clicking a Popular Dish (its row or arrow) navigates to `/menu` with a
reference to that exact menu item/group. The Menu page resolves the
reference against its own parsed menu data, activates the matching
Category (and Subcategory, if applicable), scrolls to the exact card, and
automatically opens the existing Menu card modal for it. A grouped menu
item resolves to its single rendered group card, never to an individual
variant row. If the reference cannot be resolved (e.g. stale data), the
Menu page opens normally instead of erroring.

CTA:

`View Full Menu`

The section should remain compact and visual. It should not display full dish descriptions, ingredients or pricing on the Home page.

---

# 4b. CATERING OVERVIEW

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

# 5. MEET LANA

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

# 6. CUSTOMER REVIEWS

Home includes a preview of customer reviews.

Display a small number of featured reviews rather than the full Reviews page.

Desktop should display four review cards at a time within a horizontal carousel.

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

# 7. SOCIAL LINKS

Do not include an Instagram photo gallery or social media content preview on the Home page.

The website should not prominently promote Instagram content at this stage.

Social media should still be available through simple icon links.

Include when real information is available:

- Instagram
- Facebook

Do not invent social media accounts or content.

---

# 8. CONTACT CTA

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

## 9. FOOTER

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
- EN | RU language switch
- Google Business Profile link
- copyright
- short brand tagline

**Brand tagline:**
```
Homemade with love in the San Francisco Bay Area
```

❌ Do NOT invent missing contact information.

---

## VISUAL REFERENCE MATCHING

The provided desktop and mobile reference images are implementation references.

When building Home, compare the implementation against the references for:

- overall section order
- proportions
- spacing
- image placement
- typography hierarchy
- alignment
- background areas
- CTA placement
- visual rhythm
- mobile stacking
- Hero photo/cream transition

❌ Do NOT copy the reference screenshot as a single image.

Recreate the layout with real HTML/CSS/React components.

The reference is especially authoritative for visual composition.

---

## COMPONENT ARCHITECTURE

Use reusable React components.

Suggested structure:

```
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
```

❌ Do NOT create a giant page.tsx containing the entire Home implementation.

Keep components focused and readable.

Social links (Instagram, Facebook) should remain simple reusable links
or icon elements — do not require a dedicated Instagram gallery component.

---

## COMPLETION CRITERIA — HOME

The first Home implementation is complete when:

- ✅ the page follows the approved section order
- ✅ no unauthorized sections have been added
- ✅ no Instagram photo gallery has been added
- ✅ no contact submission form has been added in the initial version
- ✅ the desktop composition matches the reference closely
- ✅ the mobile composition matches the mobile reference closely
- ✅ Hero cream/photo/blur transition is implemented
- ✅ correct CTA hierarchy is used
- ✅ correct fonts and brand colors are used
- ✅ image placeholders use correct ratios
- ✅ reference screenshots are NOT used as production photos
- ✅ navigation structure matches the IA
- ✅ layout is responsive
- ✅ no horizontal overflow exists
- ✅ accessibility basics are implemented
- ✅ SEO metadata foundation exists
- ✅ no business facts or content have been invented
- ✅ the code is componentized and maintainable

---

## HOME PAGE SEO STRATEGY

**Primary search intent:**
```
Homemade catering Bay Area
```

**Secondary / long-tail:**
- Eastern European catering
- Family-owned catering
- Homemade party food

Each section should contain:
- descriptive heading
- semantic content
- internal links to related pages
- proper structured data

See `CLAUDE.md` section "16. SEO — CORE REQUIREMENT" for full technical SEO specification.

---

## IMPORTANT REFERENCES

For details, refer to:

- **General requirements:** `CLAUDE.md`
- **Design System:** `docs/Lana-Food-UI-Design-System.docx`
- **Visual references:** `public/images/desktop-reference.png`, `mobile-reference.png`
- **IA & Strategy:** `docs/02_Website_Strategy.docx`, `docs/03_Information_Architecture.docx`
