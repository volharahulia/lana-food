import type { MetadataRoute } from "next";

// No private/admin/draft routes exist on the public site (CLAUDE.md scope) —
// nothing to Disallow. Domain matches metadataBase in app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lanafoodcatering.com/sitemap.xml",
  };
}
