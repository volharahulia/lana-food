// Editable About page content — mirrors the pattern already used for Menu
// (app/menu/_data/menuConfig.ts) and Contact (app/contact/_data/contactConfig.ts):
// change copy, the founder image reference, value icons, or CTA links here
// without touching component markup. Only verified project information is
// used — no invented biographical details (ABOUT.md).

export const aboutFounder = {
  eyebrow: "ABOUT LANA FOOD",
  h1: "Made with Family Care.\nMade for You.",
  intro:
    "Lana Food is a family-owned business built on love, tradition, and the joy of sharing good food.",
  // Approved founder-story copy from the About visual reference — verified
  // project content, not invented. Do not add biographical specifics
  // (surname, dates, birthplace, family members) beyond what's here.
  storyParagraphs: [
    "My name is Svetlana, and l’ve loved cooking since childhood. I made my first soup at the age of six. My culinary journey began as a waiter, and over time, I worked my way up to restaurant manager. A year ago, my life changed dramatically when I moved from Belarus to sunny California. Here, by the ocean, I found my true calling-cooking with love and sharing with you!",
    "This is how LANA FOOD, a home-cooked meal and buffet delivery service, came into being.",
    "I love delighting people with delicious and healthy food, and I believe that real food is made with love. That’s why I created this page to share my culinary masterpieces with you and inspire you to indulge in gastronomic pleasures.",
  ],
  signature: "Lana",
};

export const aboutMission = {
  eyebrow: "OUR MISSION",
  statement:
    "To bring families together through authentic, lovingly prepared meals that taste like home and feel like celebration.",
};

export type AboutValue = {
  key: string;
  icon: string;
  heading: string;
  description: string;
};

// Icons reuse the same approved custom Lana Food icon set already used for
// the Hero trust indicators (app/_components/Hero.tsx) — public/images/icons/
// is the single source of truth (CLAUDE.md §33 / asset audit).
export const aboutValues: AboutValue[] = [
  {
    key: "fresh-ingredients",
    icon: "/images/icons/fresh_ingredients_icon.svg",
    heading: "Fresh Ingredients",
    description:
      "We use high-quality, fresh ingredients to create food that tastes as good as it is wholesome.",
  },
  {
    key: "homemade-recipes",
    icon: "/images/icons/homemade_recipes_icon.svg",
    heading: "Homemade Recipes",
    description: "Traditional Eastern European recipes made from scratch, just like at home.",
  },
  {
    key: "made-with-love",
    icon: "/images/icons/made_with_love_icon.svg",
    heading: "Made with Love",
    description: "Every dish is prepared with care, passion, and attention to every detail.",
  },
  {
    key: "reliable-service",
    icon: "/images/icons/reliable_service_icon.svg",
    heading: "Reliable Service",
    description: "You can count on us for delicious food, delivered on time, every time.",
  },
];

export const aboutFoodSafety = {
  heading: "Food Safety & Compliance",
  supportingText:
    "We take food safety seriously. Our current permit and certification are available to view below.",
};

export const aboutCta = {
  headline: "Ready to Make Your Next Occasion Special?",
  supportText: "We’d love to help make your event delicious and memorable.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "View Menu", href: "/menu" },
};
