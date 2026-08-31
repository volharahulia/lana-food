import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import SectionHeading from "./ui/SectionHeading";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import { menuCategories } from "../_data/menuCategories";
import { resolveImage } from "../_data/homeImages";
import { featuredMenuCategoriesContent } from "../_data/homeContent";

export default function FeaturedMenuCategories() {
  return (
    <section className="container-page py-10 laptop:py-16">
      <SectionHeading
        title={featuredMenuCategoriesContent.title}
        subtitle={featuredMenuCategoriesContent.subtitle}
      />

      <div className="mt-8 grid grid-cols-1 gap-5 tablet:grid-cols-3">
        {menuCategories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group flex flex-col overflow-hidden rounded-md border border-border-hairline bg-surface-white shadow-xs transition-shadow duration-200 hover:shadow-sm"
          >
            {/* 1 column (full width) below tablet; 3 columns with a 20px
                gap from tablet up, capped once the shared container hits
                its 1440px max at ~1600px viewport. */}
            <ImagePlaceholder
              ratio="16:9"
              alt={`${category.name} photography`}
              radiusClassName="rounded-none"
              className="transition-transform duration-250 group-hover:scale-[1.02]"
              src={resolveImage(category.image)}
              sizes="(min-width: 1600px) 467px, (min-width: 1280px) calc((100vw - 200px) / 3), (min-width: 1024px) calc((100vw - 136px) / 3), (min-width: 768px) calc((100vw - 104px) / 3), calc(100vw - 40px)"
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
