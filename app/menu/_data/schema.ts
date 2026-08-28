import type { MenuCategoryData } from "./types";

// Dynamically derived from the parsed spreadsheet data — never hardcoded
// names/prices/categories (MENU.md "SEO and Structured Data").
export function buildMenuSchema(categories: MenuCategoryData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Lana Food Menu",
    url: "https://lanafood.com/menu",
    hasMenuSection: categories.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      hasMenuSection: category.subcategories.map((subcategory) => ({
        "@type": "MenuSection",
        name: subcategory.name ?? category.name,
        hasMenuItem: subcategory.cards.flatMap((card) =>
          card.variants.map((v) => ({
            "@type": "MenuItem",
            name: v.variant ? `${card.name} — ${v.variant}` : card.name,
            ...(v.description ? { description: v.description } : {}),
            ...(v.price != null
              ? {
                  offers: {
                    "@type": "Offer",
                    priceCurrency: v.currency.toUpperCase(),
                    price: String(v.price),
                    availability: v.available
                      ? "https://schema.org/InStock"
                      : "https://schema.org/OutOfStock",
                  },
                }
              : {}),
          }))
        ),
      })),
    })),
  };
}
