import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import Surface from "./ui/Surface";
import { getMenuData } from "../menu/_data/parseMenu";
import { getPopularDishes, menuCardRef } from "../menu/_data/menuTarget";
import { mostPopularDishesContent } from "../_data/homeContent";

// Fully data-driven from the same Excel-backed menu data Menu itself reads
// (app/menu/_data/parseMenu.ts) — no hardcoded dish list. Which items appear
// here is controlled entirely by the spreadsheet's Popular Dish column (see
// MENU.md); this component only renders whatever getPopularDishes returns.
export default async function MostPopularDishes() {
  const categories = await getMenuData();
  const popularDishes = getPopularDishes(categories);

  return (
    <Surface tone="white" className="flex h-full flex-col gap-3 p-4 laptop:p-5">
      <SectionHeading
        title={mostPopularDishesContent.title}
        subtitle={mostPopularDishesContent.subtitle}
        as="h3"
      />

      <ul className="flex flex-col divide-y divide-border-hairline">
        {popularDishes.map(({ categorySlug, card }) => {
          const ref = menuCardRef(categorySlug, card.id);
          return (
            <li key={ref}>
              <Link
                // Deep-links into the exact Menu card — MenuExperience
                // resolves ?item=, activates its Category/Subcategory,
                // scrolls to it, and opens its modal automatically.
                href={`/menu?${new URLSearchParams({ item: ref })}`}
                className="group flex items-center gap-4 py-1 transition-colors hover:text-primary-600"
              >
                {/* Fixed w-14 (56px) at every breakpoint — no responsive variant. */}
                <ImagePlaceholder
                  ratio="1:1"
                  alt={`${card.name} thumbnail`}
                  radiusClassName="rounded-sm"
                  className="w-14 shrink-0"
                  src={card.photo}
                  sizes="56px"
                />
                <span className="flex-1 font-display text-base text-ink-900 transition-colors group-hover:text-primary-600">
                  {card.name}
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-primary-600 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={mostPopularDishesContent.cta.href}
        className="inline-flex items-center justify-center gap-1 self-center font-body text-sm font-semibold text-primary-600 hover:underline"
      >
        {mostPopularDishesContent.cta.label}
        <ArrowRight size={16} weight="bold" aria-hidden />
      </Link>
    </Surface>
  );
}
