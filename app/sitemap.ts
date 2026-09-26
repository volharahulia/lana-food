import type { MetadataRoute } from "next";

const BASE_URL = "https://lanafoodcatering.com";

// Exactly the six routes with a self-referencing canonical (app/page.tsx,
// app/menu/page.tsx, app/catering/page.tsx, app/about/page.tsx,
// app/reviews/page.tsx, app/contact/page.tsx). Deliberately excludes
// /menu?tab=... query-string variants (they canonicalize to /menu) and the
// /menu/holiday|everyday|kids redirect routes (not indexable pages).
const routes = ["/", "/menu", "/catering", "/about", "/reviews", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
  }));
}
