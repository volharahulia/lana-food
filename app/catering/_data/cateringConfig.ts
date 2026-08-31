// Editable Catering page content — extends the same page-local content/data
// pattern already used by About/Contact/Menu (see app/about/_data/aboutConfig.ts,
// app/contact/_data/contactConfig.ts, app/menu/_data/menuConfig.ts). Every
// user-facing string, price, and collection lives here; components only
// render it. Descriptions/headings not spelled out verbatim in CATERING.md
// are transcribed from the approved visual reference (public/images/catering-reference.png),
// same as the equivalent gaps were handled for About/Contact.

export type TwoToneHeading = { line1: string; line2: string };

export const cateringHero = {
  eyebrow: "CATERING BY LANA FOOD",
  h1: { line1: "Catering with", line2: "Professional Setup" } as TwoToneHeading,
  decorativeLine: "We create the table. You enjoy the moment.",
  intro:
    "We bring homemade Eastern European flavors, beautiful presentation and elegant decor to your celebration. A complete table setup — from food to flowers.",
  primaryCta: { label: "CONTACT US", href: "/contact" },
  secondaryCta: { label: "VIEW MENU", href: "/menu" },
  image: {
    src: "/images/catering/hero.jpg",
    alt: "Elegant catering table set up by Lana Food with fresh homemade dishes and floral decor",
    objectPosition: undefined as string | undefined,
  },
};

export type TrustIndicator = { label: string; icon: string };

// Same approved icon set as Home's Hero trust indicators (public/images/icons/
// is the single source of truth, CLAUDE.md §33) — kept as Catering's own
// editable content instance rather than importing Home's, so the two pages'
// copy can be edited independently (same principle as Home vs. About using
// separate Lana portrait slots).
export const cateringTrustIndicators: TrustIndicator[] = [
  { label: "Fresh Ingredients", icon: "/images/icons/fresh_ingredients_icon.svg" },
  { label: "Homemade Recipes", icon: "/images/icons/homemade_recipes_icon.svg" },
  { label: "Reliable Service", icon: "/images/icons/reliable_service_icon.svg" },
  { label: "Made with Love", icon: "/images/icons/made_with_love_icon.svg" },
];

export const cateringFeaturesIntro = {
  eyebrow: "WHAT MAKES OUR CATERING SPECIAL",
  heading: {
    line1: "Food. Presentation. Decor.",
    line2: "One Beautiful Experience.",
  } as TwoToneHeading,
};

export type CateringFeature = {
  id: string;
  number: number;
  title: string;
  description: string;
  icon?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  displayOrder: number;
  published: boolean;
};

export const cateringFeatures: CateringFeature[] = [
  {
    id: "beautiful-homemade-food",
    number: 1,
    title: "Beautiful Homemade Food",
    description:
      "Authentic Eastern European dishes made from scratch with fresh, quality ingredients.",
    image: "/images/catering/feature-food.jpg",
    imageAlt: "Beautifully arranged homemade catering dishes",
    displayOrder: 1,
    published: true,
  },
  {
    id: "professional-presentation",
    number: 2,
    title: "Professional Presentation",
    description:
      "Elegant table setup, stylish serving pieces and attention to every detail make your table unforgettable.",
    image: "/images/catering/feature-presentation.jpg",
    imageAlt: "Professionally presented catering table setup",
    displayOrder: 2,
    published: true,
  },
  {
    id: "decor-atmosphere",
    number: 3,
    title: "Decor & Atmosphere",
    description:
      "Fresh florals, coordinated décor and a warm atmosphere create a festive and memorable vibe.",
    image: "/images/catering/feature-decor.jpg",
    imageAlt: "Elegant floral decor and atmosphere at a catered event",
    displayOrder: 3,
    published: true,
  },
];

export const cateringEventsIntro = {
  eyebrow: "PERFECT FOR ANY OCCASION",
  heading: "Celebrations We Cater",
};

export type CateringEventCard = {
  id: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  icon?: string;
  displayOrder: number;
  published: boolean;
};

// Exactly the five approved initial cards (CATERING.md §6). Add/remove/rename/
// reorder/unpublish here — CateringEventTypes.tsx only ever iterates this list.
export const cateringEventCards: CateringEventCard[] = [
  {
    id: "birthdays",
    title: "Birthdays",
    image: "/images/catering/event-birthdays.jpg",
    imageAlt: "Birthday celebration catering table by Lana Food",
    displayOrder: 1,
    published: true,
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    image: "/images/catering/event-baby-showers.jpg",
    imageAlt: "Baby shower catering table by Lana Food",
    displayOrder: 2,
    published: true,
  },
  {
    id: "family-gatherings",
    title: "Family Gatherings",
    image: "/images/catering/event-family-gatherings.jpg",
    imageAlt: "Family gathering catering table by Lana Food",
    displayOrder: 3,
    published: true,
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    image: "/images/catering/event-corporate-events.jpg",
    imageAlt: "Corporate event catering table by Lana Food",
    displayOrder: 4,
    published: true,
  },
  {
    id: "holidays-parties",
    title: "Holidays & Parties",
    image: "/images/catering/event-holidays-parties.jpg",
    imageAlt: "Holiday party catering table by Lana Food",
    displayOrder: 5,
    published: true,
  },
];

// Section heading — visible in the approved reference but not transcribed in
// CATERING.md's text (which only specifies the editable service statement
// below). Sourced from the reference image.
export const cateringProcessIntro = {
  eyebrow: "OUR PROCESS",
  heading: "We Take Care of Everything",
};

// "Lana Food on-site catering service is from $500" — kept as structured
// fields (never a hardcoded string) so price/currency/wording each change
// independently. price/currency are formatted via Intl.NumberFormat in the
// component, not string-concatenated.
export const cateringServiceStatement = {
  prefix: "Lana Food on-site catering service is",
  priceQualifier: "from",
  price: 500,
  currency: "USD",
};

export const cateringIncludesLabel = "Includes:";

export type CateringProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
  displayOrder: number;
  published: boolean;
};

// The five approved supplied SVG assets (public/images/icons/) — referenced
// by path here, never inlined. Replacing an icon file only ever requires
// editing this array, not CateringProcessService.tsx.
export const cateringProcessSteps: CateringProcessStep[] = [
  {
    id: "we-come-to-you",
    title: "We Come to You",
    description: "We arrive at your location on time and ready to set up.",
    icon: "/images/icons/catering-process-we-come-to-you.svg",
    displayOrder: 1,
    published: true,
  },
  {
    id: "set-the-table",
    title: "Set the Table",
    description: "We set up the table, linens, serving pieces and everything needed.",
    icon: "/images/icons/catering-process-set-the-table.svg",
    displayOrder: 2,
    published: true,
  },
  {
    id: "create-the-presentation",
    title: "Create the Presentation",
    description: "We arrange the food beautifully and add decor & florals.",
    icon: "/images/icons/catering-process-create-the-presentation.svg",
    displayOrder: 3,
    published: true,
  },
  {
    id: "you-enjoy",
    title: "You Enjoy",
    description: "You enjoy your event. We're here so you can relax and celebrate.",
    icon: "/images/icons/catering-process-you-enjoy.svg",
    displayOrder: 4,
    published: true,
  },
  {
    id: "we-take-it-away",
    title: "We Take It Away",
    description: "After the event, we remove all decor and take everything away.",
    icon: "/images/icons/catering-process-we-take-it-away.svg",
    displayOrder: 5,
    published: true,
  },
];

// Heading text follows CATERING.md §8 exactly ("Food Delivery") — the
// approved reference shows "Food Delivery Available" plus an eyebrow not
// transcribed in CATERING.md; the eyebrow is kept (compositional, not a
// contradicted fact) but the heading uses CATERING.md's explicit text,
// which takes priority per the source-authority hierarchy.
export const cateringDelivery = {
  eyebrow: "NEED IT SIMPLY & DELICIOUS?",
  heading: "Food Delivery",
  description: "Food delivery — beautifully presented or simply ready-to-eat.",
  pricingNote: "Delivery prices vary by location.",
  image: {
    src: "/images/catering/delivery.jpg",
    alt: "Freshly prepared Lana Food dishes packaged for delivery",
    objectPosition: undefined as string | undefined,
  },
  published: true,
};

export const cateringFinalCta = {
  eyebrow: "LET'S PLAN YOUR EVENT",
  heading: {
    line1: "Planning a celebration?",
    line2: "We’d love to help.",
  } as TwoToneHeading,
  supportingText:
    "Tell us about your event and we’ll create a beautiful catering experience your guests will remember.",
  primaryCta: { label: "CONTACT US", href: "/contact" },
  // WhatsApp label only — the destination is resolved from business.whatsapp
  // in the component (CATERING.md §14: reuse existing configured contact
  // data, never duplicate it in Catering content).
  secondaryCtaLabel: "CALL OR WHATSAPP",
};
