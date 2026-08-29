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
- **Email** — Email address
- **Service Area** — "San Francisco Bay Area, California"

Each method should be:
- Clearly labeled
- Easy to click/tap on mobile (large touch targets)
- Accessible (links properly formatted)

**Example layout:**

```
☎️ Phone
[+1 (650) XXX-XXXX] — clickable tel: link

💬 WhatsApp  
[Message us on WhatsApp] — clickable link

✉️ Email
[hello@lanafood.com] — clickable mailto: link

📍 Service Area
San Francisco Bay Area, California
```

### 2. Use Cases (Optional)

Brief cards showing different reasons to contact:

- **Order Everyday Food** — "Ready to order delicious homemade meals?"
- **Plan a Catering Event** — "Need food for your celebration?"
- **Ask Questions** — "Have questions about our service?"

Each card may contain a small icon and short CTA.

### 3. Service Area (Detailed)

**Service area:**
```
San Francisco Bay Area, California
```

Include: Natural mention that Lana Food serves the broader Bay Area,
but NOT invented additional locations or detailed delivery zones.

### 4. Response Time

Example:
```
We typically respond to inquiries within 24 hours.
For urgent requests, please call us directly.
```

### 5. FAQ (Optional)

If there are common questions, a mini FAQ section can be helpful:

- "What areas do you deliver to?"
- "How far in advance should I order?"
- "Do you offer gluten-free options?"
- "Can I customize dishes?"

❌ Do NOT invent answers if real information is not available.

---

## INITIAL VERSION

**IMPORTANT:** Initial website is a presentation website WITHOUT backend form.

❌ **Do NOT add:**
- Contact form submission form
- Backend form handling
- Server-side processing

✅ **Do:**
- Direct contact links (tel:, mailto:, WhatsApp)
- Clear communication methods
- Easy-to-find contact information

Form processing can be added later when backend is available.

---

## DESIGN APPROACH

### Layout

Use a clean, minimal layout:

**Desktop:**
- Two-column layout: Contact methods on left, optional map/image on right
- OR: Centered single-column layout with contact cards in grid

**Mobile:**
- Single-column layout
- Large, tappable contact buttons
- Generous spacing
- No horizontal scroll

### Visual Treatment

- Use Phosphor Icons (see `CLAUDE.md` iconography) for each method
- Warm cream/ivory background (from Design System)
- Brand red accents for highlights
- Generous whitespace

### CTAs

**Primary CTA:** Depends on user intent
- "Call Us" (phone)
- "Message on WhatsApp"
- "Send Email"
- "Get Catering Quote" (link to catering page)

---

## MOBILE-SPECIFIC

Mobile contact page should be especially easy to use:

- **Tap-to-call links:** `<a href="tel:+1-650-XXX-XXXX">`
- **Tap-to-text WhatsApp:** `<a href="https://wa.me/16505551234">`
- **Tap-to-email:** `<a href="mailto:hello@lanafood.com">`
- **Large buttons:** minimum 48px height touch targets
- **Full-width buttons:** for primary CTAs on mobile

---

## PERSISTENT CONTACT UI

**Throughout the site:**

- Sticky Header contains Contact CTA
- Fixed bottom Contact bar on mobile (with WhatsApp button if available)
- Footer contains all contact methods

Contact page simply expands these elements with more detailed information.

---

## STRUCTURED DATA

Include appropriate schema for SEO:

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
  "telephone": "+1-650-XXX-XXXX",
  "email": "hello@lanafood.com",
  "areaServed": "San Francisco Bay Area, California",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+1-650-XXX-XXXX",
    "availableLanguage": ["en", "ru"]
  }
}
```

---

## CONTENT REQUIREMENTS

❌ **Do NOT invent:**
- Phone number if real one is not confirmed
- Email address if not available
- Hours if not confirmed
- Additional locations if not authorized

✅ **Use:**
- Only real, verified contact information
- Real business location (Mountain View, California)
- Real service area (San Francisco Bay Area, California)
- Confirmed contact methods

When information is missing — use clearly marked placeholder
or simply omit section with note that information is coming soon.

---

## SEO STRATEGY

**Primary search intent:**
```
Contact Lana Food catering
```

**Secondary:**
- Lana Food phone number
- How to contact Lana Food
- Catering inquiry Bay Area

### Technical SEO

- One H1: "Get in Touch"
- Descriptive page title
- Meta description
- Semantic H2/H3 hierarchy
- Crawlable contact methods (text, not just images)
- Proper link formatting (tel:, mailto:, https://)
- LocalBusiness structured data
- Google Business Profile link (when available)

---

## NAVIGATION

Contact page should be easy to find:

- **Header:** Contact link or fixed Contact Us button
- **Footer:** Contact link
- **Home page:** Contact CTA in Contact section and hero
- **Catering page:** Contact/Quote link for event inquiries
- **Menu pages:** "Order" or "Contact Us" CTA

---

## MULTILINGUAL SUPPORT

Contact page should be available in both languages (when Russian is enabled):

- `/contact` (English)
- `/ru/contact` (Russian)

**Russian version:**

Translate:
- Page title
- H1 and supporting copy
- Label names (Phone, WhatsApp, Email, Service Area)
- FAQ (if present)

**Do NOT translate:**
- Actual contact information (phone, email)
- Location names (Mountain View, San Francisco Bay Area)

Use `hreflang` to link the versions.

---

## MOBILE FIXED CONTACT BAR

On mobile, implement a fixed Contact bar at the bottom of the page containing:

- **WhatsApp button** (when available) — green icon
- **Call button** — red icon
- **Email button** (optional) — grey icon

This should NOT hide main page content (use padding bottom).

See `CLAUDE.md` section "14. PERSISTENT UI" for details.

---

## EXAMPLE LAYOUT (Desktop)

```
Header (sticky)
├─ Logo | Nav | EN/RU | Contact Us

Main Content
├─ Section: Get in Touch
│  ├─ H1 "Get in Touch"
│  └─ Supporting copy
│
├─ Section: Contact Methods (2-column)
│  ├─ Col 1: Phone, WhatsApp, Email
│  └─ Col 2: Service Area, Response Time
│
├─ Section: Use Cases (3-column cards)
│  ├─ Card: Order Food
│  ├─ Card: Plan Catering
│  └─ Card: Ask Questions
│
├─ Section: FAQ (optional)
│  └─ Collapsible Q&A cards

Footer
└─ Contact methods repeated, social links
```

---

## IMPORTANT NOTES

- Contact page is a **presentation page**, not an order form
- Everything should be **mobile-friendly** and **easy to tap**
- Contact information should be **real and verified**
- Layout should be **clean and minimal**, not crowded
- Font, colors, icons should **match Design System** (see `CLAUDE.md`)
- Page should be **accessible** and **SEO-optimized**

See `CLAUDE.md` for all general requirements.
