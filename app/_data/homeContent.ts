// Editable Home page copy — extends the same content/data-layer pattern
// already used for Menu/Contact/About (app/menu/_data/menuConfig.ts,
// app/contact/_data/contactConfig.ts, app/about/_data/aboutConfig.ts) to
// Home, which previously had section headings, supporting copy, and CTA
// labels written directly in JSX. Structural things (layout, card lists
// already in their own _data files) are unaffected — this only covers the
// literal text/links each Home section used to hardcode.

export const heroContent = {
  eyebrow: "California Catering",
  h1: "Homemade Eastern European Cuisine for Life’s Best Moments",
  intro:
    "From family gatherings to corporate events, we bring authentic homemade flavors, beautiful presentation, and warm hospitality to your table.",
  primaryCta: { label: "Contact Us", href: "/contact" },
  secondaryCta: { label: "View Menu", href: "/menu" },
};

export type TrustIndicator = { label: string; icon: string };

// Approved custom Lana Food icon set — public/images/icons/ is the single
// source of truth (CLAUDE.md §33).
export const trustIndicators: TrustIndicator[] = [
  { label: "Fresh Ingredients", icon: "/images/icons/fresh_ingredients_icon.svg" },
  { label: "Homemade Recipes", icon: "/images/icons/homemade_recipes_icon.svg" },
  { label: "Reliable Service", icon: "/images/icons/reliable_service_icon.svg" },
  { label: "Made with Love", icon: "/images/icons/made_with_love_icon.svg" },
];

export const featuredMenuCategoriesContent = {
  title: "Explore Our Menus",
  subtitle: "Choose the perfect menu for your occasion.",
};

export const mostPopularDishesContent = {
  title: "Most Popular Dishes",
  subtitle: "Customer favorites made with love.",
  cta: { label: "View Full Menu", href: "/menu" },
};

export const cateringOverviewContent = {
  title: "Catering with Professional Setup",
  subtitle: "Complete catering service for any event.",
  cta: { label: "Explore Catering", href: "/catering" },
};

export const meetLanaContent = {
  title: "Meet Lana",
  body: "At Lana Food, every dish starts in a home kitchen, not a factory line. We prepare each order the way we’d cook for our own family — from scratch, with fresh ingredients and no artificial anything. It’s homemade Eastern European cooking, made with love, for your table across the San Francisco Bay Area.",
  cta: { label: "Learn More About Us", href: "/about" },
};

export const reviewsPreviewContent = {
  title: "Customer Reviews",
  // Home's own intended compact card count (CLAUDE.md §14: "Desktop should
  // display three review cards at a time"), independent of how many entries
  // actually exist in the shared app/_data/reviews.ts list — ReviewsPreview
  // slices to this number rather than rendering the full list.
  visibleCount: 3,
};

export const contactCtaContent = {
  heading: "Ready to Plan Your Celebration?",
  subtitle: "We’d love to help make your next gathering special.",
  cta: { label: "Contact Us", href: "/contact" },
};
