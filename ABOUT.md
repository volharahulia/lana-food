# ABOUT PAGE SPECIFICATION

Complete documentation for developing the About page for Lana Food.

**See also:** `CLAUDE.md` for general project requirements.

---

## ABOUT PAGE (`/about`)

The About page tells the story of Lana Food, its philosophy and vision.

---

## CONTENT STRATEGY

**Page Title:**
```
About Lana Food | Family-Owned Homemade Catering | Bay Area California
```

H1:
Made with Family Care. Made for You.

H2:
Our Mission

H2:
Our Values

H3:
Fresh Ingredients
H3:
Homemade Recipes
H3:
Made with Love
H3:
Reliable Service

H2:
Ready to Make Your Next Occasion Special?

---

## SECTION STRUCTURE

The About page follows the approved About visual reference.

The page should contain these sections in this exact order:

1. About Lana / Founder Story
2. Our Mission
3. Core Values
4. Closing CTA
5. Global Footer

Do not add additional sections such as:
- FAQ
- Photo Gallery
- Languages
- What We Offer
- Service Area block
- Why Families Choose Lana Food

FAQ is handled on the Contact page.

### Page Header / Breadcrumb

Use the global breadcrumb component above the About content:

Home → About

The breadcrumb is part of the page structure but is not a separate
visual content section.

### 1. About Lana / Founder Story

This is the main introductory section of the About page.

The section introduces Lana personally and tells the story behind Lana Food.

Desktop:
- two-column editorial layout
- text/content on the left
- founder portrait on the right
- generous whitespace
- warm cream/ivory background

Mobile:
- single-column layout
- text followed by founder portrait
- image remains prominent
- no horizontal overflow

Eyebrow:
ABOUT LANA FOOD

H1:
Made with Family Care.
Made for You.

Supporting introduction:
Lana Food is a family-owned business built on love,
tradition, and the joy of sharing good food.

Founder story:
3 short conversational paragraphs about Lana,
her connection to cooking, family traditions,
and the creation of Lana Food.

Signature:
Lana

Only use verified founder information supplied by the project.
Do not invent Lana's birthplace, immigration history,
family members, cooking history, dates, or other biographical details.


Founder portrait:

- real Lana photography
- candid and approachable
- warm natural lighting
- authentic home/kitchen environment when available
- 4:5 portrait ratio
- rounded corners
- no stock photography
- no corporate portrait styling

Portrait ratio: 4:5 (portrait orientation)

### 2. Our Mission

Centered editorial section on a warm cream/ivory background.

Eyebrow:
OUR MISSION

Mission statement:

To bring families together through authentic,
lovingly prepared meals that taste like home
and feel like celebration.

### 3. Core Values

Display four approved Lana Food value blocks.

Desktop:
- four columns in one horizontal row
- equal visual weight
- thin vertical dividers between items where shown in the reference

Mobile:
- single-column stacked layout
- preserve icon → heading → description hierarchy

Use the approved custom Lana Food icons.
Do not replace them with emoji, stock icons, or another icon style.

Icons:

Fresh Ingredients

We use high-quality, fresh ingredients
to create food that tastes as good as it is wholesome.


Homemade Recipes

Traditional Eastern European recipes made
from scratch, just like at home.


Made with Love

Every dish is prepared with care,
passion, and attention to every detail.


Reliable Service

You can count on us for delicious food,
delivered on time, every time.

### 4. Closing CTA

Use a full-width Lana Food CTA section with the approved
red background treatment shown in the About visual reference.

Eyebrow / decorative element:
small decorative heart/line treatment

Headline:
Ready to Make Your Next Occasion Special?

Supporting text:
We'd love to help make your event delicious and memorable.

Primary CTA:
Contact Us → /contact

Secondary CTA:
View Menu → /menu

---

### 5. Footer

Use the global Lana Food Footer component.

Do not create an About-specific footer.

---

## DESIGN APPROACH

The About page should closely follow the approved About visual reference.

The page is editorial and photography-led, with a calm vertical rhythm.

Visual order:

1. Founder story
   - text left
   - portrait right

2. Mission
   - centered

3. Four values
   - four-column desktop layout
   - stacked mobile layout

4. Closing CTA
   - full-width red section

5. Global footer

### Desktop

- centered max-width content
- two-column founder section
- founder portrait on the right
- four value blocks in one row
- full-width red CTA
- global footer

### Mobile

- single-column founder section
- portrait stacked with content
- centered mission
- four values stacked vertically
- full-width CTA
- fixed mobile Contact Us bar from the global layout
- no horizontal overflow

## SEO STRATEGY

**Primary search intent:**
```
Family-owned catering Bay Area
```

**Secondary:**
- Authentic Eastern European recipes
- Homemade cooking
- Meet Lana Food owner

### Technical SEO

- One semantic H1:
  "Made with Family Care. Made for You."

- "ABOUT LANA FOOD" is an eyebrow/visual label, not the H1.
- Descriptive page title
- Meta description
- Semantic H2/H3 hierarchy
- Crawlable founder story
- Descriptive founder image alt text
- Internal links:
  - Menu
  - Catering
  - Reviews
  - Contact

Meta description:
To be finalized.

Do not invent final SEO copy during implementation.

**Example Person schema:**

Person schema should use only verified information.

Structured data:
- Organization
- Person
- BreadcrumbList

Do not generate Person fields that are not verified.
Do not invent Lana's surname, biography, image URL, etc.

---
## MULTILINGUAL SUPPORT

When Russian is enabled:

- English page: /about
- Russian page: /ru/about
- Translate all user-facing About content
- Localize page title and meta description
- Add appropriate hreflang links
- Localize structured data where applicable

Do not translate:
- Lana Food
- Lana
- San Francisco Bay Area
- other proper names

When Russian is disabled:
- hide the language selector
- do not change the page layout or structure
---

## SITEWIDE UI

Use the global site components:
- Sticky Header
- Mobile fixed Contact Us bar
- Back to Top control
- Global Footer

Do not create About-specific versions of these components.

---

The approved About visual reference supersedes the earlier
About H1 wording from the Information Architecture document.

Current About H1:
"Made with Family Care. Made for You."

See `CLAUDE.md` for all general requirements.
