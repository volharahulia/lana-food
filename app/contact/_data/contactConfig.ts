// Editable Contact page content. Change copy, method microcopy, the closing
// message, or FAQ items here without touching component markup — mirrors the
// editability pattern already used for Menu content (see
// app/menu/_data/menuConfig.ts). Contact/social values themselves (phone,
// WhatsApp, Instagram, Facebook, Google Maps URL) live in app/_data/business.ts,
// the single source of truth for confirmed business facts.

export const contactIntro = {
  eyebrow: "GET IN TOUCH",
  h1: "We’d Love to Hear From You",
  intro:
    "Have a question about our menu, catering, or placing an order? We’re here to help! Reach out and we’ll get back to you as soon as possible.",
};

// Per-method label + supporting copy. Visibility of each method is decided
// separately by whether the matching field in business.ts is populated.
export const contactMethodsCopy = {
  phone: {
    label: "Phone",
    description: "Call us for menu inquiries, catering details, or any questions.",
  },
  whatsapp: {
    label: "WhatsApp",
    linkLabel: "Message us on WhatsApp",
    description: "Message us on WhatsApp for a quick response.",
  },
  // No linkLabel here: Instagram/Facebook display their real business.ts URL
  // as the link text (formatProfileUrl in ContactMethods.tsx) instead of
  // generic CTA copy.
  instagram: {
    label: "Instagram",
  },
  facebook: {
    label: "Facebook",
  },
};

export const contactClosing = {
  message: "We look forward to hearing from you!",
};

export type FaqItem = {
  question: string;
  answer: string;
};

// Provided by the project owner. Do not add placeholder questions/answers
// here — ContactFaq renders nothing while this stays empty (CLAUDE.md: never
// invent content).
export const contactFaq: FaqItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "Lana Food serves customers across the San Francisco Bay Area, California.",
  },
  {
    question: "Can I request a custom menu?",
    answer:
      "Yes. Custom requests are welcome. Contact us to discuss your event, menu, and any special requirements.",
  },
  {
    question: "Can you accommodate dietary requirements?",
    answer:
      "Dietary accommodations may be available upon request. Please contact us to discuss your specific requirements.",
  },
  {
    question: "How does catering work?",
    answer:
      "Start by contacting Lana Food to discuss your event and menu. Your food is then freshly prepared, with delivery and optional setup available.",
  },
];
