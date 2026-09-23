import type { Metadata } from "next";
import MenuHero from "./_components/MenuHero";
import MenuExperience from "./_components/MenuExperience";
import { getMenuData } from "./_data/parseMenu";
import { buildMenuSchema } from "./_data/schema";

export const metadata: Metadata = {
  title: "Menu | Lana Food",
  description:
    "Explore our menu of homemade Eastern European dishes. Order from our Everyday Menu, Holiday Menu, Kids' Menu, or custom Gastroboxes.",
  alternates: { canonical: "/menu" },
};

export default async function MenuPage() {
  const categories = await getMenuData();
  const jsonLd = buildMenuSchema(categories);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuHero />
      <MenuExperience categories={categories} />
    </>
  );
}
