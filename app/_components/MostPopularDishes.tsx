import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import { popularDishes } from "../_data/popularDishes";
import { resolveImage } from "../_data/homeImages";
import { mostPopularDishesContent } from "../_data/homeContent";

export default function MostPopularDishes() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-lg border border-border-hairline bg-surface-white p-5 shadow-xs laptop:p-6">
      <SectionHeading
        title={mostPopularDishesContent.title}
        subtitle={mostPopularDishesContent.subtitle}
        as="h3"
      />

      <ul className="flex flex-col divide-y divide-border-hairline">
        {popularDishes.map((dish) => (
          <li key={dish.name}>
            <Link
              href="/menu"
              className="group flex items-center gap-4 py-2.5 transition-colors hover:text-primary-600"
            >
              {/* Fixed w-14 (56px) at every breakpoint — no responsive variant. */}
              <ImagePlaceholder
                ratio="1:1"
                alt={`${dish.name} thumbnail`}
                radiusClassName="rounded-sm"
                className="w-14 shrink-0"
                src={resolveImage(dish.image)}
                sizes="56px"
              />
              <span className="flex-1 font-display text-base text-ink-900 transition-colors group-hover:text-primary-600">
                {dish.name}
              </span>
              <ArrowRight
                size={18}
                className="shrink-0 text-primary-600 transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={mostPopularDishesContent.cta.href}
        className="inline-flex items-center justify-center gap-1 self-center font-body text-sm font-semibold text-primary-600 hover:underline"
      >
        {mostPopularDishesContent.cta.label}
        <ArrowRight size={16} weight="bold" aria-hidden />
      </Link>
    </div>
  );
}
