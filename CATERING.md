# CATERING PAGE SPECIFICATION

Production-ready, Catering-specific specification for the Lana Food
Catering page at `/catering`.

**Global references**

-   `CLAUDE.md` --- project-wide implementation, architecture,
    accessibility, SEO, navigation, and quality requirements.
-   `Lana-Food-UI-Design-System.docx` --- typography, colors, grid,
    spacing, components, iconography, photography, responsive, and
    visual-system rules.
-   `03_Information_Architecture.docx` --- required Catering information
    and user journey.
-   `01_Product_Brief.docx` --- confirmed business positioning and
    service model.
-   `02_Website_Strategy.docx` --- business/content strategy.
-   Approved Catering visual reference --- authoritative for the
    composition and visual treatment of the Catering page.

**Rule:** This document defines only Catering-specific requirements. It
does not duplicate or redefine global project rules.

------------------------------------------------------------------------

## 1. PAGE PURPOSE

The Catering page explains Lana Food's catering service, what the
service includes, how the service works, suitable celebration types,
available delivery information, and how to contact Lana Food.

Primary audience: Event Host planning a celebration.

Secondary audience: Busy Parent planning a children's celebration or
gathering.

Route:

`/catering`

------------------------------------------------------------------------

## 2. SOURCE AUTHORITY & RESOLVED DECISIONS

### 2.1 Visual composition vs. IA

The IA defines information the visitor needs. It does not require every
information category to become a separate visual section.

The approved Catering visual reference defines the page composition.

Therefore:

-   required IA information must be preserved;
-   information may be incorporated into another approved section;
-   no additional visual section should be created solely because an IA
    category exists.

### 2.2 Delivery

The approved visual reference contains a Food Delivery block, and
delivery is confirmed as an available service.

**Final decision:**

The Catering page includes one standalone `Food Delivery` section.

The section is informational/service-description content only.

It must NOT contain:

-   `Order Delivery`
-   `Order Now`
-   checkout
-   cart
-   payment flow
-   delivery booking flow

The initial copy is:

`Food delivery — beautifully presented or simply ready-to-eat.`

Separate pricing note:

`Delivery prices vary by location.`

Both are editable.

No delivery fee, radius, minimum, or other unsupported pricing may be
invented.

### 2.3 On-site Catering service

The current approved service statement is:

`Lana Food on-site catering service is $500`

Currency: `USD`.

This statement is editable content/data.

The section also contains:

`Includes:`

followed by the five approved process/service items defined in Section
7.

### 2.4 Process: four vs. five steps

Older IA material describes four conceptual stages.

The approved Catering visual reference and current project decision use
five customer-facing steps:

1.  We Come to You
2.  Set the Table
3.  Create the Presentation
4.  You Enjoy
5.  We Take It Away

The initial rendered state contains exactly these five steps.

The process is data-driven so the business can edit, reorder,
publish/unpublish, or replace steps without changing component
structure.

### 2.5 Event types

Older IA contains a broader event taxonomy.

The approved initial visual set contains exactly five cards:

1.  Birthdays
2.  Baby Showers
3.  Family Gatherings
4.  Corporate Events
5.  Holidays & Parties

These five are the initial rendered content.

The event collection remains editable and can be extended, reduced,
renamed, reordered, or unpublished without changing component structure.

### 2.6 Trust content

The Hero contains four compact trust indicators:

-   Fresh Ingredients
-   Homemade Recipes
-   Reliable Service
-   Made with Love

`What Makes Our Catering Special` contains three detailed feature cards:

-   Beautiful Homemade Food
-   Professional Presentation
-   Decor & Atmosphere

These are different content groups and must not be merged.

There is no additional standalone `Why Choose Lana Food` section.

### 2.7 Gallery

There is no standalone Catering Gallery section.

Photography remains fully data-driven and is integrated into the
approved page sections.

Removing the Gallery section does NOT make photography static.

### 2.8 Pricing section

There is no standalone visually dominant Pricing section.

The confirmed `from $500 USD` on-site catering price remains editable service
data and is presented in the On-Site Catering Service / Process section.

Do not invent additional pricing tiers, per-person prices, fees,
deposits, gratuity, taxes, or unsupported packages.

### 2.9 CTA hierarchy

The Hero uses Catering-specific conversion actions:

-   `REQUEST A QUOTE` → `/contact`
-   `VIEW MENU` → `/menu`

The final CTA uses:

-   `CONTACT US` → `/contact`
-   `CALL OR WHATSAPP` → configured phone/WhatsApp destination, only
    when configured

`REQUEST A QUOTE` and `CONTACT US` are intentionally different
contextual labels.

Do not replace the Hero CTA with `Contact Us`.

Do not create `Order Delivery`.

------------------------------------------------------------------------

## 3. APPROVED PAGE STRUCTURE

The rendered page contains exactly:

1.  Sticky Header
2.  Catering Hero
3.  What Makes Our Catering Special
4.  Celebrations We Cater
5.  Our Process / On-Site Catering Service
6.  Food Delivery
7.  Final Planning CTA
8.  Site Footer

Do not add separate visual sections for:

-   Catering Overview
-   What's Included
-   Why Choose Lana Food
-   Gallery
-   Pricing
-   Menu Exploration

Their required information is represented in the approved sections
and/or data model.

Reuse the existing site Header and Footer. Do not create
Catering-specific versions of sitewide components.

------------------------------------------------------------------------

## 4. HERO

### Purpose

Introduce the catering service immediately, establish the emotional
benefit, and provide the two primary Catering actions.

### Initial content

Eyebrow:

`CATERING BY LANA FOOD`

H1:

`Catering with Professional Setup`

Decorative supporting line:

`We create the table. You enjoy the moment.`

Hero copy:

`We bring homemade Eastern European flavors, beautiful presentation, and elegant decor to your celebration. A complete table setup — from food to flowers.`

All visible text is editable.

### CTAs

Primary:

`REQUEST A QUOTE`

Destination:

`/contact`

Secondary:

`VIEW MENU`

Destination:

`/menu`

CTA labels and destinations are editable data.

### Trust indicators

Render:

-   Fresh Ingredients
-   Homemade Recipes
-   Reliable Service
-   Made with Love

Each indicator supports editable label and icon reference.

### Photography

Use one editable production image.

Desktop composition:

-   text/cream area on the left;
-   large catering photography on the right;
-   soft fade/blur transition into the cream area;
-   sharp subject with the blend limited to the transition.

Photography container uses the approved reference composition and
responsive crop.

Mobile uses the approved mobile composition with a portrait-oriented
crop.

The exact photography treatment, container/grid behavior, typography,
spacing, colors, and responsive rules come from the Design System and
approved reference; do not redefine global tokens here.

------------------------------------------------------------------------

## 5. WHAT MAKES OUR CATERING SPECIAL

### Initial content

Eyebrow:

`WHAT MAKES OUR CATERING SPECIAL`

Heading:

`Food. Presentation. Decor.`

Supporting heading line:

`One Beautiful Experience.`

Initial feature cards:

1.  `Beautiful Homemade Food`
2.  `Professional Presentation`
3.  `Decor & Atmosphere`

Each feature supports:

-   `id`
-   `number`
-   `title`
-   `description`
-   `icon` (only if an approved icon is assigned)
-   `image`
-   `imageAlt`
-   `objectPosition`
-   `displayOrder`
-   `published`

All user-facing fields and asset references are editable.

Use the approved reference for composition and image treatment.

Do not create another trust/values section.

------------------------------------------------------------------------

## 6. CELEBRATIONS WE CATER

### Initial content

Eyebrow:

`PERFECT FOR ANY OCCASION`

Heading:

`Celebrations We Cater`

Initial five cards:

1.  Birthdays
2.  Baby Showers
3.  Family Gatherings
4.  Corporate Events
5.  Holidays & Parties

The initial rendered state contains exactly five cards.

Each event supports:

-   `id`
-   `title`
-   `description` (optional)
-   `image`
-   `imageAlt`
-   `objectPosition`
-   `icon` (only if an approved icon is assigned)
-   `displayOrder`
-   `published`

The component must render the collection from data.

Adding, removing, renaming, reordering, or hiding an event must not
require component restructuring.

Do not automatically add older IA-only event types to the initial
rendered state.

------------------------------------------------------------------------

## 7. OUR PROCESS / ON-SITE CATERING SERVICE

### Purpose

Communicate the confirmed on-site catering service, price, and what the
service includes.

### Editable service header

Initial content:

`Lana Food on-site catering service is from $500`

Currency:

`USD`

Immediately below:

`Includes:`

The heading, price, currency, and Includes label are editable.

The `from $500` value must not be hardcoded inside JSX/TSX.

### Five initial service/process items

1.  **We Come to You**
2.  **Set the Table**
3.  **Create the Presentation**
4.  **You Enjoy**
5.  **We Take It Away**

Each item supports:

-   `id`
-   `title`
-   `description`
-   `icon`
-   `displayOrder`
-   `published`

All titles, descriptions, order, visibility, and icon references are
editable.

The initial data contains exactly five approved items.

The component must iterate over the collection.

Do not create separate hardcoded JSX blocks for the five items.

### Process icons

The five approved Catering Process icons will be supplied as SVG files
in the project assets folder.

These exact supplied SVG assets are the approved icons for the five
initial process items.

Requirements:

-   use the supplied SVG files;
-   keep them as SVG assets;
-   reference them through editable content/data;
-   preserve their aspect ratio;
-   do not redraw them;
-   do not replace them with generic icons;
-   do not replace them with Phosphor icons;
-   do not convert them to PNG;
-   do not duplicate their SVG path data inline in JSX;
-   replacing an SVG asset must not require component changes.

The general site icon rules remain governed by the Design System. These
five bespoke process SVGs are the approved assets for this specific
section.

### Service accuracy

Do not add unsupported service claims such as:

-   waitstaff
-   bartenders
-   event planning
-   venue management
-   rentals
-   unsupported staffing
-   unsupported packages

Do not imply that `from $500` includes anything not supported by the approved
service content.

------------------------------------------------------------------------

## 8. FOOD DELIVERY

### Purpose

Describe delivery as an available service option.

### Initial content

Heading:

`Food Delivery`

Description:

`Food delivery — beautifully presented or simply ready-to-eat.`

Separate pricing note:

`Delivery prices vary by location.`

Heading, description, and pricing note are editable.

### CTA rule

There is no Delivery ordering CTA.

Do not add:

-   `Order Delivery`
-   `Order Now`
-   checkout
-   cart
-   payment
-   booking flow

The section is informational/service-description content.

Do not invent delivery prices, fees, radius, minimums, or other business
conditions.

### Data

Delivery content supports:

-   `heading`
-   `description`
-   `pricingNote`
-   `published`

Do not add unnecessary delivery fields unless supported by confirmed
business requirements.

------------------------------------------------------------------------

## 9. FINAL PLANNING CTA

### Initial content

Eyebrow:

`LET'S PLAN YOUR EVENT`

Heading:

`Planning a celebration? We'd love to help.`

Primary CTA:

`CONTACT US`

Destination:

`/contact`

Secondary CTA:

`CALL OR WHATSAPP`

Only render the WhatsApp action when a valid configured WhatsApp
destination exists.

All text and CTA configuration are editable.

Do not create a separate quote form or catering-specific backend form.

------------------------------------------------------------------------

## 10. CONTENT & ASSET EDITABILITY

This is a non-negotiable requirement.

All user-facing Catering content must be separated from presentation
components.

Editable content includes:

-   headings
-   eyebrow text
-   supporting text
-   body copy
-   CTA labels
-   CTA destinations
-   trust labels
-   feature content
-   event content
-   service price
-   currency
-   Includes label
-   process titles
-   process descriptions
-   process order
-   delivery copy
-   delivery pricing note
-   final CTA content

Editable assets include:

-   Hero photography
-   Special Feature photography
-   Event photography
-   Final CTA photography
-   five process SVG icons
-   any other approved Catering icon references

Images must support at minimum:

-   source
-   alt text
-   object position/focal positioning
-   published state

Collections should support display order where applicable.

Changing content or replacing an asset must not require
component-structure changes.

No user-facing business content may exist only inside JSX/TSX.

### Content source

Use the project's existing content/data architecture.

Do NOT prescribe a new JSON file, CMS, helper file, database, or other
storage mechanism in this page specification unless that mechanism
already exists in the project architecture.

Do not create unnecessary abstractions.

The implementation must remain compatible with future external/CMS
content without restructuring the presentation components.

------------------------------------------------------------------------

## 11. PHOTOGRAPHY

The approved page uses integrated photography rather than a standalone
gallery.

Initial image slots:

-   Hero: 1
-   Special Features: 3
-   Celebrations: 5
-   Final CTA: 1

Each image is independently replaceable.

Do not use:

-   screenshots as production photography;
-   stock photography;
-   generated photography as a substitute for real production assets.

Use the existing project image pipeline and Design System photography
rules.

Image cropping/focal positioning must be data/configuration driven
rather than solved with arbitrary transforms or breakpoint-specific
offsets.

------------------------------------------------------------------------

## 12. VISUAL IMPLEMENTATION

The approved Catering visual reference is the authority for the
composition of the retained sections.

The implementation must:

-   preserve the visual hierarchy;
-   preserve the intended text/image relationship;
-   preserve the photography-led character;
-   use the existing Lana Food visual language;
-   use the existing Design System;
-   avoid generic catering-template styling.

Global visual rules MUST be inherited from:

`Lana-Food-UI-Design-System.docx`

Do not redefine or duplicate:

-   typography tokens;
-   color tokens;
-   grid tokens;
-   spacing tokens;
-   radius tokens;
-   shadows/elevation;
-   global breakpoints;
-   global button styles;
-   global icon rules;
-   global accessibility rules.

If a Catering-specific requirement conflicts with the Design System,
flag the conflict instead of silently overriding the Design System.

------------------------------------------------------------------------

## 13. RESPONSIVE REQUIREMENTS

The page is mobile-first and must follow the existing project responsive
system.

Catering-specific requirements:

### Hero

-   preserve text-first hierarchy;
-   stack/adapt photography according to the approved mobile reference;
-   preserve image focal point;
-   CTA layout must remain usable on small screens.

### Special Features

-   preserve the three feature items;
-   adapt their layout without duplicating content.

### Celebrations

-   preserve the initial five events;
-   adapt the card layout to available width;
-   do not remove cards merely to fit a breakpoint.

### Process

-   preserve all five process items;
-   preserve their order;
-   use the existing responsive grid/stacking behavior.

### Delivery

-   preserve heading, description, and separate pricing note;
-   no ordering CTA appears at any breakpoint.

### Final CTA

-   preserve both CTA actions when their destinations are configured;
-   maintain accessible touch targets.

Do not create a separate mobile content model.

Do not use breakpoint-specific hacks to reproduce the reference.

------------------------------------------------------------------------

## 14. LINKS & CONVERSION BEHAVIOR

Catering internal links:

-   Hero `REQUEST A QUOTE` → `/contact`
-   Hero `VIEW MENU` → `/menu`
-   Final `CONTACT US` → `/contact`

Phone/WhatsApp actions must use the existing configured contact data.

Do not duplicate contact numbers in Catering components.

Do not create a Catering-specific form-processing system.

------------------------------------------------------------------------

## 15. SEO / METADATA

Use the project's global SEO rules from `CLAUDE.md` and existing page
architecture.

Catering-specific initial metadata:

Title:

`Catering Services | Lana Food | Bay Area California`

Meta description:

`Homemade Eastern European catering for birthdays, celebrations, and family gatherings in the San Francisco Bay Area. Professional setup, beautiful presentation, and fresh ingredients.`

These values are editable.

The page must have one H1:

`Catering with Professional Setup`

Do not duplicate or redefine global structured-data architecture in this
document.

Any relevant Catering structured data must use the existing project
schema implementation and current business data.

Do not invent business address, phone, service radius, ratings, reviews,
awards, or other unsupported claims.

------------------------------------------------------------------------

## 16. ACCESSIBILITY

Follow the global accessibility requirements in `CLAUDE.md` and the
Design System.

Catering-specific checks:

-   one H1;
-   logical heading hierarchy;
-   meaningful alt text for informative images;
-   decorative process SVGs must not create redundant screen-reader
    content;
-   all CTAs and controls are keyboard accessible;
-   touch targets follow the global minimum;
-   no information depends on color alone;
-   responsive content remains accessible.

Do not create a separate accessibility system for Catering.

------------------------------------------------------------------------

## 17. IMPLEMENTATION GUIDANCE

Create focused components that correspond to the approved rendered
sections.

Suggested structure:

``` text
/app/catering/page.tsx

/components/catering/
  CateringHero.tsx
  CateringSpecialFeatures.tsx
  CateringEventTypes.tsx
  CateringProcessService.tsx
  CateringDelivery.tsx
  CateringFinalCta.tsx
```

This is a component-organization suggestion, not a requirement to create
files that do not fit the existing project architecture.

Reuse existing shared components where appropriate.

Do not create:

-   `/data/catering-content.json` unless the project already uses that
    architecture;
-   `/lib/catering-helpers.ts` unless actual reusable logic requires it;
-   unnecessary abstraction layers;
-   duplicate global components.

Server Components are the default according to `CLAUDE.md`.

Use Client Components only where actual interaction requires them.

------------------------------------------------------------------------

## 18. NO CSS / LAYOUT HACKS

Follow the global implementation quality rules.

Do not solve visual mismatches with:

-   arbitrary transforms;
-   negative margins used as compensation;
-   random absolute positioning;
-   duplicated markup;
-   screenshot reconstruction;
-   arbitrary per-breakpoint offsets;
-   arbitrary font sizes;
-   arbitrary colors.

If an element does not align with the reference, first inspect:

-   container;
-   grid;
-   flex relationship;
-   component sizing;
-   aspect ratio;
-   spacing token;
-   image focal position.

The approved reference is a visual target, not an instruction to
reconstruct a screenshot through hacks.

------------------------------------------------------------------------

# 19. TRACEABILITY MATRIX

Every Catering-specific requirement must be traceable to its source.

Use:

  ---------------------------------------------------------------------------------------
  ID         Requirement   Source     Status     Editable   Implementation   Acceptance
                                                            implication      
  ---------- ------------- ---------- ---------- ---------- ---------------- ------------

  ---------------------------------------------------------------------------------------

### Core traceability

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ID         Requirement                                                       Source            Status      Editable   Implementation     Acceptance
                                                                                                                        implication        
  ---------- ----------------------------------------------------------------- ----------------- ----------- ---------- ------------------ ---------------------------
  CAT-001    Catering route is `/catering`                                     IA / project      CONFIRMED   No         Implement page at  Route resolves correctly
                                                                               routing                                  route              

  CAT-002    Approved visual reference defines retained page composition       Approved Catering CURRENT     No         Compose page       Rendered page follows
                                                                               reference         APPROVED               according to       reference
                                                                                                 DECISION               reference          

  CAT-003    IA content requirements are preserved without forcing separate    IA + current      CURRENT     No         Map information    No required IA information
             visual sections                                                   project decision  APPROVED               into approved      is lost
                                                                                                 DECISION               sections/data      

  CAT-004    Hero H1 is `Catering with Professional Setup`                     Approved          CURRENT     Yes        Store in content   H1 can change without
                                                                               reference /       APPROVED               data               component edit
                                                                               current project   DECISION                                  
                                                                               decision                                                    

  CAT-005    Hero primary CTA is `REQUEST A QUOTE` → `/contact`                Current Catering  CURRENT     Yes        Configured CTA     Correct destination/label
                                                                               decision          APPROVED                                  
                                                                                                 DECISION                                  

  CAT-006    Hero secondary CTA is `VIEW MENU` → `/menu`                       Current Catering  CURRENT     Yes        Configured CTA     Correct destination/label
                                                                               decision          APPROVED                                  
                                                                                                 DECISION                                  

  CAT-007    Hero contains four trust indicators                               Approved          CONFIRMED   Yes        Render trust       Four initial indicators
                                                                               reference                                collection         appear

  CAT-008    Special Features contains three detailed feature cards            Approved          CONFIRMED   Yes        Render feature     Three initial features
                                                                               reference                                collection         appear

  CAT-009    No separate Why Choose section                                    Current project   CURRENT     No         Do not create      No duplicate trust section
                                                                               decision          APPROVED               duplicate section  
                                                                                                 DECISION                                  

  CAT-010    Initial event set contains five cards                             Approved          CURRENT     Yes        Render event       Five initial cards appear
                                                                               reference /       APPROVED               collection         
                                                                               current decision  DECISION                                  

  CAT-011    Event collection is editable                                      Content           CONFIRMED   Yes        Data-driven        Add/remove/rename/reorder
                                                                               architecture                             collection         without component
                                                                               requirement                                                 restructuring

  CAT-012    On-site catering price is `from $500 USD`                              Current business  CONFIRMED   Yes        Store in service   Price changes without
                                                                               requirement                              data               component edit

  CAT-013    Service displays `Includes:`                                      Current Catering  CURRENT     Yes        Editable service   Label can be changed
                                                                               decision          APPROVED               field              without component edit
                                                                                                 DECISION                                  

  CAT-014    Process contains five initial steps                               Approved          CURRENT     Yes        Render process     Five initial steps appear
                                                                               reference /       APPROVED               collection         
                                                                               current decision  DECISION                                  

  CAT-015    Process steps are data-driven                                     Maintainability   CONFIRMED   Yes        Iterate over       Step edits do not require
                                                                               requirement                              array/collection   component restructuring

  CAT-016    Five approved SVG process icons are used                          Approved Catering CURRENT     Yes        Asset references   Supplied SVGs render
                                                                               assets            APPROVED               in process data    
                                                                                                 DECISION                                  

  CAT-017    Process SVGs remain replaceable assets                            Content/asset     CURRENT     Yes        Reference asset    Replacing SVG requires no
                                                                               requirement       APPROVED               path/file from     component change
                                                                                                 DECISION               data               

  CAT-018    Food Delivery section is present                                  Current project   CURRENT     Yes        Render one         Section is visible
                                                                               decision +        APPROVED               Delivery section   
                                                                               approved service  DECISION                                  
                                                                               content                                                     

  CAT-019    Delivery description is                                           Current project   CURRENT     Yes        Editable content   Exact initial copy appears
             `Food delivery — beautifully presented or simply ready-to-eat.`   decision          APPROVED               field              
                                                                                                 DECISION                                  

  CAT-020    Delivery pricing note is `Delivery prices vary by location.`      Current project   CURRENT     Yes        Separate editable  Exact initial note appears
                                                                               decision          APPROVED               field              separately
                                                                                                 DECISION                                  

  CAT-021    No Delivery ordering CTA                                          Current project   CURRENT     No         Exclude            No ordering CTA exists
                                                                               decision          APPROVED               order/checkout UI  
                                                                                                 DECISION                                  

  CAT-022    Final CTA is `CONTACT US` → `/contact`                            Sitewide CTA      CURRENT     Yes        Configured CTA     Correct destination/label
                                                                               strategy /        APPROVED                                  
                                                                               current Catering  DECISION                                  
                                                                               decision                                                    

  CAT-023    Final WhatsApp action is conditional                              Contact data /    CURRENT     Yes        Render only when   No broken WhatsApp action
                                                                               current decision  APPROVED               configured         
                                                                                                 DECISION                                  

  CAT-024    No standalone Gallery                                             Approved          CURRENT     No         Integrate          No Catering Gallery section
                                                                               reference /       APPROVED               photography into   
                                                                               current decision  DECISION               retained sections  

  CAT-025    Integrated Catering photography is editable                       Content/asset     CONFIRMED   Yes        Image references   Photos replace without
                                                                               requirement                              in data            component restructuring

  CAT-026    All user-facing Catering text is editable                         Content           CONFIRMED   Yes        Separate           Text edits require no
                                                                               architecture                             content/data from  component changes
                                                                               requirement                              presentation       

  CAT-027    No standalone Pricing section                                     Current project   CURRENT     No         Present price      No duplicate pricing
                                                                               decision          APPROVED               within service     section
                                                                                                 DECISION               section            

  CAT-028    Design System remains global source of truth                      Design System /   CONFIRMED   No         Reference global   No duplicated conflicting
                                                                               CLAUDE.md                                rules              tokens

  CAT-029    No unnecessary content storage mechanism is prescribed            Project           CURRENT     No         Use existing       No unjustified
                                                                               architecture      APPROVED               content            JSON/CMS/helper layer
                                                                               principle         DECISION               architecture       

  CAT-030    No CSS/layout hacks                                               CLAUDE.md /       CONFIRMED   No         Use structural     No compensation hacks
                                                                               project quality                          layout fixes       
                                                                               rules                                                       
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 20. ACCEPTANCE CRITERIA

### Structure

-   [ ] Header is the existing sitewide Header.
-   [ ] Hero matches the approved Catering composition.
-   [ ] What Makes Our Catering Special is present.
-   [ ] Celebrations We Cater is present.
-   [ ] On-Site Catering Service / Process is present.
-   [ ] Food Delivery is present.
-   [ ] Final Planning CTA is present.
-   [ ] Footer is the existing sitewide Footer.
-   [ ] No separate Gallery.
-   [ ] No separate Pricing.
-   [ ] No separate Why Choose.
-   [ ] No separate Menu Exploration section.

### Hero

-   [ ] H1 is present once.
-   [ ] Request a Quote → `/contact`.
-   [ ] View Menu → `/menu`.
-   [ ] Four trust indicators are present.
-   [ ] Hero photography is editable.

### On-Site Catering / Process

-   [ ] `Lana Food on-site catering service is from $500` is the initial
    service statement.
-   [ ] Price is editable.
-   [ ] Currency is USD.
-   [ ] `Includes:` is present and editable.
-   [ ] Exactly five initial process items are rendered.
-   [ ] Five supplied SVG icons are used.
-   [ ] SVG icon references are editable.
-   [ ] Process titles/descriptions are editable.
-   [ ] Process order is editable.
-   [ ] No process item is hardcoded as a separate JSX block.

### Food Delivery

-   [ ] Food Delivery section is present.
-   [ ] Initial description is
    `Food delivery — beautifully presented or simply ready-to-eat.`
-   [ ] `Delivery prices vary by location.` appears as a separate line.
-   [ ] Delivery copy is editable.
-   [ ] No `Order Delivery` CTA exists.
-   [ ] No checkout/order/payment flow exists.
-   [ ] No invented delivery pricing exists.

### Events

-   [ ] Exactly five initial event cards are rendered.
-   [ ] Event names are editable.
-   [ ] Event photos are editable.
-   [ ] Events can be added/removed/reordered without component
    restructuring.

### Photography

-   [ ] Hero image is editable.
-   [ ] Three feature images are editable.
-   [ ] Five event images are editable.
-   [ ] Final CTA image is editable.
-   [ ] Alt text is editable.
-   [ ] Focal/object position is editable.
-   [ ] No screenshot is used as production photography.
-   [ ] No standalone gallery is implemented.

### Content architecture

-   [ ] No user-facing business content exists only inside JSX/TSX.
-   [ ] `from $500` is not hardcoded in a component.
-   [ ] Delivery copy is not hardcoded in a component.
-   [ ] Process content is data-driven.
-   [ ] Event content is data-driven.
-   [ ] CTA labels/destinations are data-driven where the existing
    architecture supports this.
-   [ ] No unnecessary JSON/helper/CMS abstraction is introduced.

### Visual / responsive

-   [ ] Existing Lana Food Design System is used as the global visual
    source of truth.
-   [ ] Catering does not redefine global typography/color/grid tokens.
-   [ ] Approved Catering reference composition is followed.
-   [ ] Mobile composition follows the approved mobile reference.
-   [ ] No horizontal overflow.
-   [ ] No CSS/layout hacks.

------------------------------------------------------------------------

## 21. MAINTAINABILITY TEST

The implementation passes only if the following can be changed without
modifying component structure:

1.  Hero H1
2.  Hero copy
3.  Hero image
4.  Hero image focal position
5.  One feature image
6.  One feature description
7.  Event name
8.  Event image
9.  Add an event
10. Remove an event
11. Process step 3 title
12. Process step 3 description
13. Process step 3 SVG icon
14. Reorder process steps
15. `from $500` price
16. Delivery description
17. Delivery pricing note
18. Final CTA copy
19. Final CTA image

If any of these require restructuring a React component, the
content/asset architecture must be corrected before the page is
considered complete.

------------------------------------------------------------------------

## 22. FINAL IMPLEMENTATION RULE

This document is the Catering-specific source of truth for the
implementation.

Global project rules remain in `CLAUDE.md`.

Global visual rules remain in `Lana-Food-UI-Design-System.docx`.

Do not duplicate global rules here.

Do not invent business information.

Do not invent technical storage mechanisms.

Do not remove editable content to simplify implementation.

Do not replace approved SVG assets.

Do not create a standalone Delivery ordering flow.

Do not create a standalone Gallery, Pricing, Why Choose, or Menu
Exploration section.

The final implementation must be visually faithful, content-driven,
asset-driven, maintainable, and consistent with the existing Lana Food
website.
