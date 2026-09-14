import { menuCategoryInfo } from "../_data/menuConfig";

type MenuCategoryInfoProps = {
  categorySlug: string;
};

// Shared across every category tab (MENU.md "Category-Specific Information
// Blocks") — renders nothing when the active category has no configured
// content, so most tabs are unaffected by this component's presence.
export default function MenuCategoryInfo({ categorySlug }: MenuCategoryInfoProps) {
  const content = menuCategoryInfo[categorySlug];
  if (!content) return null;

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-md border border-border-hairline bg-cream-500 p-5 laptop:p-6">
      {content.heading && (
        <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
          {content.heading}
        </p>
      )}
      <p className="font-body text-sm text-ink-700">{content.note}</p>
      {content.boxes && content.boxes.length > 0 && (
        <ul className="flex flex-wrap gap-4">
          {content.boxes.map((box) => (
            <li
              key={box.label}
              className="flex items-baseline gap-2 rounded-full bg-surface-white px-4 py-2 shadow-xs"
            >
              <span className="font-body text-sm text-ink-900">{box.label}</span>
              <span className="font-body text-sm font-semibold text-primary-600">
                {box.price} {box.currency}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
