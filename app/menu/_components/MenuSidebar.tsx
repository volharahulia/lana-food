type MenuSidebarProps = {
  subcategories: string[];
  active: string | null;
  onSelect: (name: string) => void;
};

// Desktop/laptop: sticky vertical list beside the card grid, per the Menu
// reference. Below laptop there isn't room for a side rail, so the same
// subcategory set becomes a horizontal scrollable pill row above the grid —
// reusing the tab/pill pattern already established on this page rather than
// introducing a new mobile navigation pattern.
export default function MenuSidebar({ subcategories, active, onSelect }: MenuSidebarProps) {
  return (
    <>
      <nav
        aria-label="Menu sections"
        className="hidden laptop:sticky laptop:top-[132px] laptop:block laptop:max-h-[calc(100vh-160px)] laptop:w-56 laptop:shrink-0 laptop:overflow-y-auto"
      >
        <ul className="flex flex-col gap-1">
          {subcategories.map((name) => (
            <li key={name}>
              <a
                href={`#menu-section-${slugify(name)}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(name);
                }}
                aria-current={active === name}
                className={`block rounded-xs px-3 py-2 font-body text-sm transition-colors ${
                  active === name
                    ? "bg-primary-100 font-semibold text-primary-600"
                    : "text-ink-700 hover:bg-cream-500 hover:text-primary-600"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Menu sections" className="flex gap-2 overflow-x-auto pb-1 laptop:hidden">
        {subcategories.map((name) => (
          <a
            key={name}
            href={`#menu-section-${slugify(name)}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(name);
            }}
            aria-current={active === name}
            className={`flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border px-3.5 font-body text-sm transition-colors ${
              active === name
                ? "border-primary-600 bg-primary-100 font-semibold text-primary-600"
                : "border-border-hairline text-ink-700"
            }`}
          >
            {name}
          </a>
        ))}
      </nav>
    </>
  );
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
