# MENU PAGE SPECIFICATION — `/menu`
 
Complete documentation for developing the Menu page for Lana Food.
 
**See also:** `CLAUDE.md` for general project requirements and design system standards.
 
---
 
## OVERVIEW
 
The Menu page is a **single unified page** (`/menu`) that displays all of Lana Food's menu offerings through a tabbed interface. The page is **completely data-driven**, with all menu content sourced from structured data in `docs/lanafood_menu.xlsx`.
 
The page presents four menu categories as tabs:
1. Holiday Menu
2. Everyday Menu
3. Kids' Menu
4. Gastroboxes
Within each category, menu items are organized into optional subcategories, with support for grouped variants (e.g., Blinchiki with different fillings).
 
---
 
## ARCHITECTURE: SINGLE TABBED PAGE
 
### Route
 
`/menu` — single page that displays all menu content
 
### Page Composition
 
The Menu page follows this vertical structure:
 
1. **Site Header** — persistent global header
2. **Menu Hero** — hero section with title, intro copy, and food photography
3. **Menu Tabs** — four tabs for category selection (Holiday Menu | Everyday Menu | Kids' Menu | Gastroboxes)
4. **Search Field** — live search to filter menu items in the current category
5. **Menu Content Area**
   - **Left sidebar:** clickable category/subcategory navigation
   - **Right side:** menu item cards organized by subcategory
6. **Back to Top** — appears after scroll
7. **Site Footer** — persistent global footer
---
 
## PAGE METADATA
 
**Page Title:**
```
Menu | Lana Food
```
 
**Meta Description:**
```
Explore our menu of homemade Eastern European dishes. Order from our Everyday Menu, Holiday Menu, Kids' Menu, or custom Gastroboxes.
```
 
---
 
## MENU HERO

A welcoming hero section that establishes the warmth and authenticity of Lana Food's menu.

### Structure

- **Background:** warm cream/ivory background with food photography, following the attached Menu visual reference.
- **Content:** centered alignment for the Hero content, including the heading, supporting text, icons/visual accents and CTAs, following the current approved Lana Food visual direction.
- **Heading:** H1. The text must be stored as editable content and must not be hardcoded into the layout.
- **Intro text:** optional supporting text. The field must remain editable and may be empty.
- **Icons / visual accents:** if used in the Hero, they must be configurable/editable rather than hardcoded into the component.
- **CTA labels:** editable content fields.
- **Visual style:** follows the Lana Food Design System and the attached Menu visual reference.

### Content

The Hero content must be configurable so that the following can be changed without changing the component structure:

- H1 text
- supporting/intro text
- CTA labels
- icons or visual accents
- alignment, where required by the approved design

The initial alignment should match the approved reference: **centered**.

Use only approved copy. Do not invent or fabricate final Hero text.

The Hero must not introduce product information or individual menu content. It is primarily atmospheric and contextual.
 
---
 
## MENU TABS
 
Immediately below the hero, display four category tabs:
 
```
HOLIDAY MENU | EVERYDAY MENU | KIDS' MENU | GASTROBOXES
```
 
### Tab Behavior
 
- **Default active tab:** Holiday Menu
- **Tab order:** left-to-right as shown above
- **Tab selection:** clicking/tapping a tab switches the menu content area to display that category
- **Visual indicator:** active tab is visually prominent using the approved Lana Food tab treatment (underline, background highlight, or approved variant from Design System)
- **Inactive tabs:** subdued but clickable

### Keyboard and Touch
 
- **Keyboard navigation:** tabs are focusable and keyboard-accessible (Tab key, arrow keys where appropriate)
- **Visible focus state:** compliant with CLAUDE.md accessibility requirements
- **Mobile:** tabs remain horizontally scrollable/swipeable if needed on smaller screens
- **Active tab visibility:** ensure the active tab is always visible; if horizontal scrolling, scroll to keep active tab in view

### Sticky Behavior
 
The tabs remain sticky near the top as the user scrolls through menu content, allowing quick category switching without returning to page top. Follow the Lana Food Design System for sticky positioning and z-index.

---
 
## SEARCH FIELD
 
Positioned directly below the tabs.
 
### Appearance
 
- **Placeholder text:** "Search dishes…"
- **Visual style:** consistent with Lana Food Design System search input
- **Icon:** search icon (Phosphor Icons, Regular), positioned according to the attached Menu reference

### Configurable visual properties

The following visual properties should be defined in a clear, easily editable configuration/location in the component:

- search field alignment;
- search icon position;
- placeholder text.

Default values must match the attached visual reference.

### Behavior
 
- **Scope:** search filters the menu items within the currently active category/tab
- **Search targets:** search input should be applied to:
  - Dish name
  - Variant names
  - Description
  - Ingredients
  - Any other searchable text fields present in the data
- **Real-time filtering:** results update as the user types
- **Empty results state:** if no dishes match the search query, display an approved warm empty-state message (e.g., "No dishes found matching your search")
- **Clear search:** provide a clear/cancel mechanism (icon or button) to reset the search

### Implementation Notes
 
The search implementation can be refined during development, but must support live client-side filtering without page reload.
 
---
 
## MENU CONTENT AREA
 
### Layout Structure
 
**Desktop / Laptop:**
- **Left sidebar:** clickable subcategory navigation for the currently selected Category. Its positioning and width should follow the attached Menu reference.
- **Right side:** menu content area (remaining width)
- **Gap:** appropriate horizontal spacing between sidebar and content
**Tablet:**
- **Adapt the two-column layout** to tablet viewport
- **Maintain readable navigation** and card sizes
- **Preserve visual hierarchy** of the desktop layout
**Mobile:**
- **Single-column layout**
- **Category/subcategory navigation:** adapt the desktop sidebar to a mobile-friendly interaction following the attached mobile reference. Do not introduce a new navigation pattern unless required by the existing design system or responsive constraints.
- **Menu cards** stack responsibly
- **No horizontal page overflow**

### Visual Reference
 
Follow the visual composition shown in the attached Menu reference images for proportions, spacing, and responsive behavior.
 
---
 
## DATA SOURCE: EXCEL SPREADSHEET
 
All menu content originates from `docs/lanafood_menu.xlsx`.
 
This spreadsheet is the **single source of truth** for:
- menu categories
- subcategories
- dish names and descriptions
- pricing
- serving sizes and weights
- ingredients and allergens
- availability and publish status
- featured status
- Home "Most Popular Dishes" inclusion
- dish grouping and variants
- display order
- photo filenames

### Excel Columns and Purposes
 
| Column | Purpose |
|--------|---------|
| **Category** | English Menu Category. Each Category corresponds to one Menu tab (e.g., "Holiday Menu", "Everyday Menu", "Kids' Menu", "Gastroboxes"). Determines which tab the item belongs to. Required for all items. |
| **Subcategory** | English subcategory within a category (e.g., "Rolls", "Salads", "Main Dishes"). May be empty. An empty value is valid; do not display a label or placeholder. |
| **Name** | English dish/item name (e.g., "Red Caviar Canapes", "Blinchiki"). Required. |
| **Group** | Boolean (true/false). If true, this item participates in grouped-card presentation. If false, it is a standalone dish. |
| **Group ID** | Identifier for grouping related variants. Items with the same Group ID belong to one menu card with multiple variants. May be empty. |
| **Variant** | English variant name (e.g., "with Meat", "with Apples"). May be empty. Do not display empty variant labels. |
| **Quantity** | Numeric quantity (e.g., 10, 20, 40). May be empty. |
| **Quantity Unit** | Unit of quantity (e.g., "pcs", "platter", "serving"). May be empty. Display together with Quantity only when both values are present. |
| **Weight** | Numeric weight value (e.g., 1.5, 2). May be empty. |
| **Weight Unit** | Unit of weight (e.g., "lb", "oz", "g"). May be empty. Display together with Weight only when both values are present. |
| **Price** | Numeric price. Required. Do not invent prices. |
| **Currency** | Currency code (e.g., "USD"). Required. Use this value in price display; do not hardcode $ as the only currency symbol. |
| **Description** | English dish description. May be empty. Do not display if empty. |
| **Ingredients** | English ingredient list (comma-separated or formatted as provided). May be empty. Do not display if empty. |
| **Allergens** | Reserved for future use; may indicate allergenic ingredients. Currently may be empty. Do not display if empty. |
| **Photo** | Filename/path of the dish image (e.g., "syrniki.jpg"). May be empty. All photos are stored in a common images directory. If empty, use approved Lana Food fallback/placeholder treatment. |
| **Display Order in Subcategory** | Integer controlling the order of items within their subcategory. Required. Respect this order; do not sort alphabetically. |
| **Published** | Boolean (true/false). If false, do not display on the public menu page. Keep unpublished items in the data; do not delete. |
| **Featured** | Boolean (true/false). Determines which items appear in the initial collapsed/preview view of a subcategory. See section "Featured Items and Expand/Collapse" below. |
| **Available** | Boolean (true/false). If true, item is available. If false, apply the unavailable state defined by the Design System. Do not remove unavailable items; display them with appropriate styling. |
| **Popular Dish** | Boolean (true/false). If true, this item/group appears in the Home page "Most Popular Dishes" section (see HOMEPAGE.md). For a grouped card (see **Group**/**Group ID** below), true on any one member row is enough — the whole rendered group card appears. Does not affect the Menu page itself. Defaults to false. |
| **Category RU** | Russian translation of Category. Reserved for future localization. Ignore in English mode. |
| **Subcategory RU** | Russian translation of Subcategory. Reserved for future localization. Ignore in English mode. |
| **Name RU** | Russian translation of Name. Reserved for future localization. Ignore in English mode. |
| **Description RU** | Russian translation of Description. Reserved for future localization. Ignore in English mode. |
| **Ingredients RU** | Russian translation of Ingredients. Reserved for future localization. Ignore in English mode. |
| **Variant RU** | Russian translation of Variant. Reserved for future localization. Currently not populated. Ignore in English mode. |
 
---

## MENU CATEGORIES AND TABS
 
### Categories in Order
 
The menu contains four primary categories, displayed as tabs in this left-to-right order:
 
1. **Holiday Menu**
   - Purpose: traditional dishes for celebrations
   - Default active tab when page loads
2. **Everyday Menu**
   - Homemade meals for daily life
3. **Kids' Menu**
   - Child-friendly wholesome options
4. **Gastroboxes**
   - Custom bruschetta/assorted boxes

### Dynamic Tabs

The system must allow additional categories/tabs to be added in the future without changing the page structure.

The `Category` column determines which tab an item belongs to.

The tab order must follow the approved category order defined by the menu data/configuration. Do not hardcode the category order inside React components.
 
---
 
## SUBCATEGORIES
 
### General Subcategory Behavior
 
Each menu category may contain optional subcategories.
 
The spreadsheet determines:
- which subcategories exist within each category
- the order of subcategories (derive from first occurrence of each subcategory in the data)
- which items belong to each subcategory
- the display order of items within subcategories

### Empty Subcategories
 
A category may have no subcategories. If all items in a category have an empty Subcategory field, display items directly without creating artificial subcategory groupings.
 
Do not create an artificial subcategory container simply to force every category into the same structure.
 
### Future Expansion
 
The data model must support adding subcategories later without changing the page architecture. If a category currently has no subcategories but gains them later via spreadsheet data, the UI should automatically use the new structure.
 
---
 
## SPECIAL CASE: KIDS' MENU
 
The Kids' Menu currently does not use subcategories.
 
### Design Constraints

- The Kids' Menu must work correctly without subcategories
- Do not display empty subcategory navigation
- Display Kids' Menu items directly as menu cards without subcategory sections
- The data model must still support subcategories in the future

### Automatic Adaptation
 
If the Kids' Menu data is later updated to include subcategories, the UI should automatically render them without requiring code changes.
 
---
 
## SPECIAL CASE: GASTROBOXES
 
Gastroboxes use a different content structure than standard menu items.
 
### Information Block

Before the Gastrobox menu cards, display an information block with the following approved content:

```text
Minimum order for one type of bruschetta: 10 pcs

Gastrobox — 20 pcs: $90 USD

Gastrobox — 40 pcs: $170 USD
```
 
The information block should be implemented as clearly identifiable editable content/configuration so that the wording and values can be updated without changing the component structure.
 
### Menu Cards
 
Below this information block, display the relevant Gastrobox/bruschetta menu items using the same clickable card pattern as other menu sections.
 
### Data-Driven Structure
 
The Gastroboxes tab must remain data-driven so that individual Gastrobox items (with descriptions, ingredients, photos, variants, etc.) can be added, updated, or removed by modifying the spreadsheet without code changes.
 
Do not hardcode individual Gastrobox dish content.
 
---

## SIDEBAR NAVIGATION: SUBCATEGORIES

The left sidebar contains clickable navigation for the Subcategories within the currently active Category/tab.

### Structure

**For Categories with Subcategories:**

```text
Subcategory 1
Subcategory 2
Subcategory 3
Subcategory 4
```
 
***For categories without subcategories:**

Do not display a subcategory sidebar navigation. Display the menu cards directly in the content area.
 
### Behavior
 
- **Click on a subcategory:** jump/scroll to that subcategory section on the right side
- **Visual indicator:** highlight the currently visible/active subcategory
- **Scroll synchronization:** as the user scrolls the right-side content, update the sidebar highlight to show which subcategory is currently in view
- **Mobile adaptation:** adapt the subcategory navigation to the mobile interaction pattern shown in the attached Menu reference. Do not introduce a different navigation pattern unless required by the existing design system.

### Visual Style
 
Follow the Lana Food Design System for navigation styling:
- Use approved typography and colors
- Ensure sufficient contrast
- Provide clear visual hierarchy between category and subcategory levels
- Use Phosphor Icons if needed for expansion/collapse toggles
---
 
## MENU ITEM CARDS

All menu items are displayed as clickable cards.

### Card Layout

Each card displays the following information only when the corresponding data is present:

- **Photo** — 4:5 portrait image
- **Dish Name** — always present
- **Variant** — optional
- **Description** — optional; display the description provided in the data
- **Serving Information** — optional; Quantity + Quantity Unit when both are present
- **Weight Information** — optional; Weight + Weight Unit when both are present
- **Price + Currency** — display when price data is present
- **Availability State** — if `Available = false`, apply the unavailable styling from the Design System

### Critical Rule: Empty Fields
 
**Do NOT display:**
- empty field labels or placeholders
- "N/A", "Not available", "Coming soon", or explanatory text for missing data
- placeholder values or contrived descriptions
**Example:**
 
If a dish has no Description, simply omit the description area entirely. The card should remain visually balanced.
 
If a dish has no Weight, do not display a weight label or "0 lb" or "Not specified".
 
**Only display what is actually present in the data.**
 
### Photo Handling
 
**If Photo is present:**
- Load the image from the common images directory
- Maintain 4:5 portrait aspect ratio
- Use next/image for optimization
**If Photo is empty:**
- Do not invent or use another food image
- Use the approved Lana Food logo as the fallback
- Maintain the 4:5 card image ratio and consistent spacing

### Availability State
 
If Available = false:
- Apply the approved "unavailable" or "sold-out" visual treatment from the Design System
- Do not remove the item from the page
- Keep the item clickable so the user can open its details in the modal.

---

## GROUPED CARDS AND VARIANTS
 
Menu items can be grouped to show multiple variants as a single card.
 
### Grouping Rules
 
**Group = true** indicates the item participates in grouped presentation.
 
**Group ID** identifies the group. Items with the same Group ID belong to one menu card.
 
**Example:**
 
```
Group ID: "blinchiki-group"
├── Name: "Blinchiki", Variant: "with Meat"
├── Name: "Blinchiki", Variant: "with Apples"
└── Name: "Blinchiki", Variant: "with Cottage Cheese"
```
 
These render as one card showing:
- Card title: "Blinchiki"
- Variants listed inside the card

### Variant Display

For grouped items:

- Render one card for the group
- Display the common dish name once
- Display the available variants within the card
- Preserve the Display Order of the variants
- The modal should also display the available variants and their relevant data
- Do not duplicate the dish name for each variant

### Non-Grouped Items
 
Items with Group = false are standalone dishes, each rendered as an individual card.
 
### Implementation Notes
 
The grouping logic must be generic and derived from the data; do not hardcode grouping for specific dishes.
 
---
 
## FEATURED ITEMS AND EXPAND/COLLAPSE
 
### Collapsed Initial View

When a subcategory contains more than four published items:

1. Show exactly up to 4 published items in the initial collapsed view.
2. Items with `Featured = true` are prioritized.
3. Featured items retain their relative Display Order.
4. If fewer than 4 items are Featured, fill the remaining preview slots with non-featured published items according to Display Order.
5. If no items are Featured, use the first published items according to Display Order.
6. Display an expand control when additional published items exist.

### Expanded View
 
When the user clicks the expand control:
 
1. **Show all published items** in the subcategory (all items where Published = true)
2. **Preserve order:** Maintain the Display Order throughout
3. **Collapse control:** Display a collapse control (e.g., "Show Less") using approved Design System wording
4. **Multiple expansions:** Allow multiple subcategories to be expanded simultaneously

### Edge Cases

- **4 or fewer published items:** display all items; do not show expand/collapse.
- **Fewer than 4 featured items:** fill the remaining preview slots with non-featured published items according to Display Order.
- **No featured items:** use the first published items according to Display Order.
- **Categories without subcategories:** apply the same preview/expand logic directly to the Category.
For grouped items, the preview count is based on rendered menu cards/groups, not individual spreadsheet rows belonging to the same Group ID.

### Interaction Pattern
 
Follow the Lana Food Design System accordion/expandable pattern:
- Subtle transition animation
- Clear visual indication of current state
- Accessible focus management
- Keyboard support where appropriate
---
 
## MENU CARD MODAL / POPUP
 
Clicking/tapping a menu card opens a modal/popup with full details.
 
### Modal Content
 
Display only fields that have data in the spreadsheet. Do not display empty fields, labels, or placeholders.
 
Possible modal content:
 
- Photo (same 4:5 image)
- **Dish name** — use the appropriate semantic heading level
- Variant (if applicable)
- Description
- Ingredients (if present)
- Allergens (if present and available)
- Quantity + Unit (if present)
- Weight + Unit (if present)
- Price + Currency
- Availability state

For grouped cards, the modal must display the group name and all available variants belonging to that Group ID.
When grouped variants have different values for price, quantity, weight, description, ingredients or other fields, preserve and display the values belonging to each specific variant.

### Critical Rule
 
**Do NOT display:**
- empty fields
- "N/A", "Not available", "Coming soon"
- explanatory text or labels for missing data
- placeholder values
If a field is empty in the data, omit it completely from the modal.
 
### Modal Behavior
 
- **Close button:** Visible close icon or button (X)
- **Escape key:** Pressing Escape closes the modal
- **Click outside:** Clicking outside the modal may close it (follow Design System pattern)
- **Focus trap:** Focus remains within the modal while open
- **Return focus:** After closing, return focus to the triggering card
- **Keyboard accessible:** All modal controls are accessible via keyboard

### Visual Style
 
Follow the Lana Food Design System for modal styling:
- Warm, welcoming appearance
- Generous whitespace
- Clear typography hierarchy
- Appropriate padding and spacing
- Subtle shadow/backdrop treatment

---
 
## SEARCH AND FILTERING
 
### Search Scope
 
Search filters the currently selected menu category (active tab).
 
Search does not filter across tabs; when a tab changes, reset the search.
 
### Searchable Fields
 
The search should be applied to the following English user-facing fields:

- Dish name
- Variant names
- Description
- Ingredients

### Empty Results
 
If the search returns no matching items:
- Display an approved warm empty-state message
- Suggest clearing the search
- Maintain visual consistency with the Lana Food Design System

### Search UX
 
- Real-time filtering as the user types
- Clear/reset button to return to the unfiltered list
- Do not require page reload
- Maintain scroll position or reset appropriately
---
 
## BACK TO TOP
 
After the user scrolls approximately 400px down the page:
 
- Display the approved Back to Top control
- Use the Lana Food Design System styling and positioning
- On mobile, position above the fixed Contact Us bar and WhatsApp button when WhatsApp is available, to avoid overlap.
- When clicked, smoothly scroll to page top
- The control should be keyboard accessible
---
 
## RESPONSIVE DESIGN
 
Follow the Lana Food Design System breakpoints and spacing.
 
### Desktop (1200px and up)
 
- Two-column layout: left subcategory navigation positioned according to the attached Menu reference; content area on the right
- 4-card grid for menu items
- Tabs remain horizontal without wrapping
- Full hero composition

### Tablet (768px to 1199px)
 
- Adapt the two-column layout to fit tablet viewport
- Maintain readable sidebar and cards
- 2–3 card grid where appropriate
- Tabs may wrap or scroll horizontally

### Mobile (below 768px)
 
- Single-column layout
- - Subcategory navigation adapts to the mobile interaction pattern shown in the attached Menu reference
- Menu cards stack vertically, appropriate card width for mobile
- Tabs remain on a single horizontal row and scroll horizontally when they do not fit the available width
- Search field full width
- No horizontal page overflow
- All touch targets at least 44×44px (Design System minimum)

### Mobile-First Principle
 
The website is mobile-first. The mobile experience is the primary design, and desktop is an enhanced responsive version of the same structure.
 
---
 
## EMPTY DATA HANDLING
 
This is a critical rule throughout the implementation.
 
When a spreadsheet field is empty:
 
- **Do NOT display the field or label**
- **Do NOT display** "N/A", "Not available", "Coming soon", or explanatory text
- **Do NOT display** placeholder values
- **Simply omit the information** from the UI
The card must remain visually balanced even with missing optional information.
 
The data model must nevertheless preserve all fields so they can be populated later without requiring code changes.
 
This applies to:
- Description
- Ingredients
- Allergens
- Photo (use the approved Lana Food logo fallback if missing)
- Quantity
- Quantity Unit
- Weight
- Weight Unit
- Variant (do not display if empty)
- Russian fields
---
 
## SEO AND STRUCTURED DATA
 
### Page-Level SEO
 
- One clear H1 (e.g., "Explore Our Menus")
- Descriptive page title (already defined)
- Descriptive meta description using approved final copy
- Semantic heading hierarchy (H1, H2 for categories/subcategories, H3 for dish names)

### Content
 
- Menu content rendered as searchable HTML, not images or PDFs
- Dish names, descriptions, and ingredients are crawlable
- Internal links to related pages (e.g., /catering, /contact)

### Image Alt Text
 
- Meaningful alt text for each dish photo
- Decorative/fallback images marked appropriately
- Alt text includes dish name and key information where relevant

### Structured Data
 
The example below is illustrative only. Do not use example names, descriptions, prices, or categories as production data.
Generate structured data dynamically from the published menu data. Do not hardcode Menu, MenuSection, MenuItem, names, prices, descriptions, or categories in the structured data.
 
```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Holiday Menu",
  "url": "https://lanafood.com/menu",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Rolls",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Red Caviar Canapes",
          "description": "Lightly salted red caviar on buttered toast with cream cheese.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "32"
          }
        }
      ]
    }
  ]
}
```
 
Include structured data for all published menu items.
 
---
 
## DATA-DRIVEN ARCHITECTURE
 
The Menu page must remain completely data-driven. The following changes should be possible by modifying the spreadsheet without touching React component code:
 
- Add a menu tab (new Category)
- Change tab order (order Categories in data)
- Add/remove Menu Categories/tabs
- Change Menu Category/tab order according to the approved menu data configuration
- Add/remove Subcategories within a Category/tab
- Change Subcategory order
- Add/remove dishes
- Change dish display order
- Publish/unpublish a dish (Published column)
- Mark a dish Featured (Featured column)
- Mark a dish Available/Unavailable (Available column)
- Add/remove photos
- Add/update descriptions
- Add/update ingredients
- Add/update allergens
- Add/update quantities and weights
- Change prices and currency
- Add/update variants
- Create grouped cards
No structural code changes should be required for normal menu content updates.
 
---
 
## DO NOT INVENT DATA
 
Do not create fake or fabricated:
- Dish names or descriptions
- Subcategory names or organization
- Categories or tab names
- Prices or currency
- Ingredients or allergen information
- Photos or image filenames
- Variant names
- Availability states
- Serving sizes or weights
Use only:
- Data from the Excel spreadsheet
- Explicitly approved project information (e.g., Gastroboxes info block)
- Approved page copy provided for the project
If information is missing or incomplete, keep the field supported in the data model but do not fabricate content.
 
---
 
## VISUAL DESIGN AND CONSISTENCY
 
### Design System Compliance
 
The Menu page must follow the Lana Food UI Design System:
 
- **Typography:** Fraunces (headings), Karla (body/UI), no script fonts for body text
- **Colors:** Warm cream/ivory backgrounds, Lana Red (#B3272C) for primary actions, warm ink colors, restrained gold accents
- **Spacing and grid:** 12-column desktop grid, consistent rhythm, generous whitespace
- **Components:** Tabs, search field, cards, modals, expand/collapse from the Design System
- **Card styling:** 16px border radius, subtle warm shadows, 4:5 image ratio
- **Focus states:** Visible keyboard focus for all interactive elements
- **Motion:** Subtle, restrained transitions (no excessive animation)

### Visual Reference Adherence
 
The attached Menu reference images define the intended visual composition. The implementation should closely match the reference for:
 
- Overall page layout and proportions
- Hero section composition
- Tabs position and treatment
- Search field placement
- Sidebar and content area proportions
- Card grid density and spacing
- Responsive behavior and mobile stacking
- Typography hierarchy and alignment
- Visual balance and whitespace
The reference is the visual source of truth. Do not treat it as loose inspiration; reproduce the composition closely using the Design System components.
 
---
 
## COMPONENT ARCHITECTURE SUGGESTION
 
```
app/
  menu/
    _components/
      MenuHero.tsx
      MenuTabs.tsx
      MenuSearch.tsx
      MenuSidebar.tsx
      MenuContent.tsx
      MenuCardGrid.tsx
      MenuCard.tsx
      MenuCardModal.tsx
      EmptyState.tsx
      BackToTop.tsx
    page.tsx (main /menu page)
    layout.tsx
```
 
**Important:** This is a suggested structure. Do not treat it as a requirement. Adapt the component architecture to match your project's needs and coding patterns.
 
---
 
## ACCESSIBILITY
 
All interactive elements must be keyboard accessible and screen-reader friendly:
 
- Tabs: Tab key navigation, arrow keys for tab switching
- Search: Proper label and input semantics
- Cards: keyboard accessible using appropriate semantic interactive elements
- Modal: Focus trap, Escape to close, return focus after close
- Sidebar: Proper list semantics, skip links if needed
- Expand/collapse: Proper aria-expanded state
Follow the Lana Food Design System accessibility requirements.
 
---
 
## IMPLEMENTATION CHECKLIST
 
Before considering the Menu page complete:
 
- [ ] All content is data-driven from the Excel spreadsheet
- [ ] Four tabs (Holiday Menu, Everyday Menu, Kids' Menu, Gastroboxes) display in correct order
- [ ] Holiday Menu is the default active tab on page load
- [ ] Subcategories display correctly for categories that have them
- [ ] Kids' Menu displays without artificial subcategory structure
- [ ] Gastroboxes information block appears and contains approved wording
- [ ] Menu cards display only fields that have data (no empty labels or placeholders)
- [ ] Photos display with 4:5 aspect ratio; approved Lana Food logo fallback is used when photo is missing
- [ ] Prices display with correct currency from the data
- [ ] Grouped cards (variants) render correctly and do not duplicate
- [ ] Featured items appear in collapsed view; expand/collapse works
- [ ] Published=false items are hidden from the public page
- [ ] Available=false items display with appropriate unavailable styling
- [ ] Clicking a card opens a modal with full details (only populated fields)
- [ ] Search filters by dish name, variant, description, ingredients
- [ ] Popular Dish=true items/groups are the ones sourced into Home's "Most Popular Dishes" (see HOMEPAGE.md); navigating from one activates the correct Category/Subcategory, scrolls to and opens that exact card
- [ ] Sidebar navigation shows Subcategories for the currently active Category and responds to scroll
- [ ] Mobile layout adapts correctly; no horizontal overflow
- [ ] Back to Top appears after scroll and positions correctly
- [ ] All interactive elements are keyboard accessible
- [ ] Page title and meta description are correct
- [ ] Structured data (Menu/MenuItem schema) is implemented
- [ ] Visual design matches the provided Menu reference
- [ ] Design System typography, colors, spacing are used
- [ ] Empty data fields are handled correctly throughout
---
 
## FINAL NOTES
 
**Source of Truth:**
- `docs/lanafood_menu.xlsx` — all menu content
- Attached Menu reference images — visual composition and proportions
- `docs/Lana-Food-UI-Design-System.docx` — typography, colors, components, spacing
- `CLAUDE.md` — project constraints and standards
**Do Not:**
- Hardcode menu items, categories, or prices
- Invent missing data
- Use stock photography
- Redesign the information architecture
- Deviate from the visual reference without reason
**Do:**
- Keep all content data-driven
- Follow the Design System rigorously
- Use the visual reference as the implementation target
- Handle empty fields gracefully
- Test responsive behavior at the required desktop, tablet and mobile viewport sizes
- Verify keyboard accessibility
- Compare final render against the visual reference
---
 
**Page Status:** Specification ready for review
**Date Updated:** 2026-08-28
**Reference Artifacts:** Menu visual reference images, lanafood_menu.xlsx data file

---

# CONTENT EDITABILITY REQUIREMENT

All user-facing Menu page content must remain editable without changing the component structure.

This includes, where applicable:

- headings;
- supporting text;
- labels;
- CTA text;
- icons;
- category names;
- subcategory names;
- menu item names;
- variants;
- descriptions;
- ingredients;
- allergens;
- prices;
- quantities;
- weights;
- availability;
- images;
- display order.

Menu data such as categories, subcategories, menu items, variants, prices, availability and display order must be managed through the structured menu data source.

Other page-level content such as Hero copy, CTA labels, icons and visual configuration should be stored in a clearly identifiable editable configuration/location rather than scattered through the component markup.

If a content field is empty, do not display an empty placeholder, label, or explanatory text.

The goal is to make normal content changes possible without requiring changes to the UI component structure.

### Configurable Layout Properties

Visual properties that may require manual adjustment during development should be exposed in a clear, easily identifiable configuration or component-level constant rather than hidden inside scattered CSS values.

This includes, where applicable:

- text alignment;
- content alignment;
- icon position;
- image object position;
- spacing adjustments;
- component width;
- CTA alignment.

The initial values must match the approved visual reference.

Do not use multiple local offsets, arbitrary transforms, or one-off CSS hacks to compensate for incorrect component structure or asset sizing.