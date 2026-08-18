import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import { menuCategories } from "../_data/menuCategories";
import { resolveImage } from "../_data/homeImages";

export default function FeaturedMenuCategories() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-10 tablet:px-6 laptop:px-8 laptop:py-16 desktop:px-12">
      <SectionHeading
        title="Explore Our Menus"
        subtitle="Choose the perfect menu for your occasion."
      />

      <div className="mt-8 grid grid-cols-1 gap-5 tablet:grid-cols-3">
        {menuCategories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group flex flex-col overflow-hidden rounded-md border border-border-hairline bg-surface-white shadow-xs transition-shadow duration-200 hover:shadow-sm"
          >
            <ImagePlaceholder
              ratio="16:9"
              alt={`${category.name} photography`}
              radiusClassName="rounded-none"
              className="transition-transform duration-250 group-hover:scale-[1.02]"
              src={resolveImage(category.image)}
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-display text-xl font-medium text-ink-900">
                {category.name}
              </h3>
              <p className="font-body text-sm text-ink-700">{category.description}</p>
              <span className="mt-2 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary-600">
                View Menu
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
