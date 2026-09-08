# CONTACT PAGE SPECIFICATION

Complete documentation for developing the Contact page for Lana Food.

**See also:** `CLAUDE.md` for general project requirements.

---

## CONTACT PAGE (`/contact`)

The Contact page provides direct ways to reach Lana Food.

---

## CONTENT STRATEGY

**Page Title:**
```
Contact Lana Food | Catering & Homemade Food Bay Area
```

**H1:**
```
Get in Touch
```

**Supporting copy:**
```
Ready to order homemade Eastern European food or plan your catering event?
We'd love to hear from you. Contact us using the methods below.
```

---

## SECTION STRUCTURE

Contact page should contain the following sections in this order:

### 1. Contact Methods (Main)

Display primary contact methods in a simple, scannable format.

**Methods to include (when available):**

- **Phone** — Direct call number
- **WhatsApp** — WhatsApp link with number
- **Instagram** — Instagram profile link
- **Facebook** — Facebook profile link

Each method should be:

- Clearly labeled
- Easy to click/tap on mobile (large touch targets)
- Accessible (links properly formatted)

**Example layout:**

☎️ Phone
[+1 (650) XXX-XXXX] — clickable `tel:` link

💬 WhatsApp
[Message us on WhatsApp] — clickable WhatsApp link

Instagram
[Instagram profile] — clickable Instagram link

Facebook
[Facebook profile] — clickable Facebook link

---

### 2. FAQ

The Contact page includes a FAQ section with common questions about ordering,
delivery, catering and other customer inquiries.

The FAQ content must be fully editable so that questions and answers can be
updated without changing the component structure.

Initial FAQ content may be defined later by the project owner.

Possible topics include:

- Ordering lead times
- Delivery
- Catering
- Menu customization
- Other common customer questions

Do NOT invent FAQ questions or answers as final production content.

The FAQ component must support:

- editable question and answer text
- multiple FAQ items
- expand/collapse interaction
- accessible keyboard interaction
- visible focus states
- appropriate `aria-expanded` / accordion semantics
- Design System styling and spacing

If no FAQ content has been provided yet, keep the FAQ component/data structure
ready for content and do not display fabricated answers.

---

## INITIAL VERSION

**IMPORTANT:** Initial website is a presentation website WITHOUT backend form.

❌ **Do NOT add:**

- Contact form submission form
- Backend form handling
- Server-side processing

✅ **Do:**

- Direct contact links (`tel:`, WhatsApp, Instagram, Facebook)
- Clear communication methods
- Easy-to-find contact information
- FAQ section with editable content

Form processing can be added later when backend is available.

---

## DESIGN APPROACH

### Layout

Use a clean, minimal layout.

**Desktop:**

- Two-column layout: Contact methods on the left, compact map/location block
  on the right
- FAQ displayed below the main contact section

**Mobile:**

- Single-column layout
- Large, tappable contact actions
- Generous spacing
- No horizontal scroll
- FAQ displayed as an accessible accordion

### Visual Treatment

- Use Phosphor Icons (see `CLAUDE.md` iconography) for contact methods
- Warm cream/ivory background (from Design System)
- Brand red accents for highlights
- Generous whitespace
- Follow the provided Contact visual reference

### CTAs

Use direct contact actions where the corresponding real contact information
is available:

- "Call Us"
- "Message on WhatsApp"
- "Instagram"
- "Facebook"

Do NOT include an email CTA unless a real email address is confirmed.

---

## MOBILE-SPECIFIC

Mobile contact page should be especially easy to use:

- **Tap-to-call links:** `<a href="tel:+1-650-XXX-XXXX">`
- **Tap-to-WhatsApp links:** `<a href="https://wa.me/16505551234">`
- **Instagram:** clickable link to the confirmed Instagram profile
- **Facebook:** clickable link to the confirmed Facebook profile
- **Large touch targets:** minimum 48px height
- **Full-width contact actions:** where appropriate on mobile

Only use real, verified contact information.
Do not use placeholder contact data in production.

---

## PERSISTENT CONTACT UI

**Throughout the site:**

- Sticky Header contains Contact CTA
- Fixed bottom Contact bar on mobile
- Footer contains available contact methods

The mobile fixed Contact bar should provide the most useful direct actions,
using only contact methods for which real information is available.

Contact page expands these direct contact options with more detailed
information and FAQ content.

---

## STRUCTURED DATA

Include appropriate schema for SEO.

Use only real, verified business information.

The LocalBusiness structured data may include:

- business name
- description
- primary business location
- telephone, when confirmed
- email, when confirmed
- `areaServed`
- `contactPoint`, when applicable
- available languages

Example structure:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lana Food",
  "description": "Family-owned homemade Eastern European catering",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mountain View",
    "addressRegion": "California",
    "addressCountry": "USA"
  },
  "areaServed": "San Francisco Bay Area, California",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["en", "ru"]
  }
}
```
Do not add telephone or email values until the real values are confirmed.

Do not use placeholder values such as +1-650-XXX-XXXX or
hello@lanafood.com as production structured-data values.

---

## CONTENT REQUIREMENTS

❌ **Do NOT invent:**

- Phone number if real one is not confirmed
- Email address if not available
- Hours if not confirmed
- Social media handles if not confirmed
- Social media URLs if not confirmed
- Additional locations if not authorized
- Google Maps URLs if not confirmed

✅ **Use:**

- Only real, verified contact information
- Real business location: Mountain View, California
- Real broader service area: San Francisco Bay Area, California
- Confirmed contact methods

**Current Contact methods:**

- Phone
- WhatsApp
- Instagram
- Facebook

Email is not displayed as a Contact page method.

Service Area is not displayed as a separate Contact page section.

When information is missing, omit it rather than inventing a value.

---

## SEO STRATEGY

**Primary search intent:**

`Contact Lana Food catering`

**Secondary:**

- Lana Food phone number
- How to contact Lana Food
- Catering inquiry Bay Area

### Technical SEO

- One H1
- Descriptive page title
- Meta description
- Semantic H2/H3 hierarchy
- Crawlable contact methods
- Proper link formatting:
  - `tel:`
  - WhatsApp URL
  - Instagram URL
  - Facebook URL
- LocalBusiness structured data
- Google Business Profile link when available
- FAQ structured data when FAQ content is provided

Do not include `mailto:` unless a real email address is confirmed and email is
actually enabled as a project contact method.

---

## NAVIGATION

Contact page should be easy to find:

- **Header:** Contact link / Contact Us CTA
- **Footer:** Contact link
- **Home page:** Contact CTA
- **Catering page:** Contact / Quote link for event inquiries
- **Menu pages:** Contact Us CTA

Follow the approved navigation and CTA terminology from `CLAUDE.md`.

---

## MULTILINGUAL SUPPORT

Contact page should be available in both languages when Russian is enabled:

- `/contact` — English
- `/ru/contact` — Russian

**Russian version should translate:**

- Page title
- H1
- Supporting copy
- Contact method labels
- FAQ questions and answers

Contact method labels include:

- Phone
- WhatsApp
- Instagram
- Facebook

**Do NOT translate:**

- Actual contact information
- Brand name
- Location names such as Mountain View and San Francisco Bay Area

Use `hreflang` to connect the language versions.

---

## MOBILE FIXED CONTACT BAR

On mobile, implement the fixed Contact bar at the bottom of the page.

Show direct contact actions only when real contact information is available:

- **WhatsApp** — when a real WhatsApp number is available
- **Call** — when a real phone number is available

Do not add an Email button.

The bar must not hide main page content.

Provide sufficient bottom padding so the final content remains accessible.

See `CLAUDE.md` persistent UI requirements for positioning and interaction
with Back to Top and other persistent controls.

---

## EXAMPLE LAYOUT (Desktop)

```text
Header (sticky)
├─ Logo | Nav | EN/RU | Contact Us

Main Content
├─ Contact Introduction
│  ├─ Eyebrow
│  ├─ H1
│  └─ Supporting copy
│
├─ Contact Section
│  ├─ Col 1: Phone, WhatsApp, Instagram, Facebook
│  └─ Col 2: Compact Google Map / Mountain View, CA
│
├─ FAQ
│  └─ Collapsible Q&A items
│
└─ Small closing decorative band

Footer
└─ Available contact methods + navigation
```

---

## IMPORTANT NOTES

- Contact page is a **presentation page**, not an order form
- No contact submission form in the initial version
- Contact methods are: **Phone, WhatsApp, Instagram, Facebook**
- No Email contact block
- No separate Service Area section
- FAQ is included and its content is editable
- Google Map should show **Mountain View, California**
- Map should be compact and clickable
- Everything should be mobile-friendly and easy to tap
- Contact information must be real and verified
- Layout should be clean and minimal, not crowded
- Font, colors and icons must match the Design System
- Page should be accessible and SEO-optimized

See `CLAUDE.md` for general project requirements.
