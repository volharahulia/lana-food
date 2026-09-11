"use client";

import * as Tabs from "@radix-ui/react-tabs";

type MenuTabsProps = {
  categories: { slug: string; name: string }[];
  active: string;
  onChange: (slug: string) => void;
};

// Sticky directly under the fixed site header (h-16 / laptop:h-[72px] in
// Header.tsx) so category switching stays reachable while scrolling long
// menu content, per MENU.md "Sticky Behavior". The sticky/background band is
// full-bleed, but its content sits inside .container-page — the same shared
// container every other Menu section uses — so the tabs align with the
// search field and card grid below instead of starting flush at the edge.
export default function MenuTabs({ categories, active, onChange }: MenuTabsProps) {
  return (
    <Tabs.Root value={active} onValueChange={onChange}>
      {/* id + scroll-mt is the Menu page's Back to Top target (BackToTop.tsx)
          — scroll-mt reserves exactly the sticky header's own height so the
          tabs land fully visible below it, not hidden behind it, the same
          technique already used for MenuCard's deep-link scroll-mt-[150px]. */}
      <div
        id="menu-tabs"
        className="sticky top-16 z-30 scroll-mt-16 border-b border-border-hairline bg-ivory/95 backdrop-blur-sm laptop:top-[72px] laptop:scroll-mt-[72px]"
      >
        <Tabs.List
          aria-label="Menu categories"
          className="container-page flex gap-6 overflow-x-auto laptop:gap-8"
        >
          {categories.map((category) => (
            <Tabs.Trigger
              key={category.slug}
              value={category.slug}
              className="shrink-0 whitespace-nowrap border-b-2 border-transparent py-4 font-body text-sm font-semibold uppercase tracking-[0.4px] text-ink-700 transition-colors duration-150 hover:text-primary-600 data-[state=active]:border-primary-600 data-[state=active]:text-primary-600"
            >
              {category.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
    </Tabs.Root>
  );
}
