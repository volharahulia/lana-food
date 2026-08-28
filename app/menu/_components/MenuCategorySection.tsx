"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import type { MenuCardData, MenuSubcategory } from "../_data/types";
import MenuCard from "./MenuCard";
import { slugify } from "./MenuSidebar";
import { expandControls } from "../_data/menuConfig";

type MenuCategorySectionProps = {
  subcategory: MenuSubcategory;
  /** True while a search query is active — shows every match instead of the
   * featured/4-card preview, per MENU.md's search behavior. */
  bypassCollapse: boolean;
  onOpenCard: (card: MenuCardData) => void;
};

// Featured items (preserving their own Display Order) fill the preview first;
// remaining preview slots are filled by the next cards in overall Display
// Order, then the *whole* preview is rendered back in Display Order — so
// featured items don't visually jump ahead of unfeatured ones between them.
function getPreviewCards(cards: MenuCardData[]): MenuCardData[] {
  if (cards.length <= 4) return cards;
  const previewIds = new Set(
    cards
      .filter((c) => c.featured)
      .slice(0, 4)
      .map((c) => c.id)
  );
  if (previewIds.size < 4) {
    for (const c of cards) {
      if (previewIds.size >= 4) break;
      previewIds.add(c.id);
    }
  }
  return cards.filter((c) => previewIds.has(c.id));
}

export default function MenuCategorySection({
  subcategory,
  bypassCollapse,
  onOpenCard,
}: MenuCategorySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const { name, cards } = subcategory;

  const canToggle = !bypassCollapse && cards.length > 4;
  const showAll = bypassCollapse || expanded || cards.length <= 4;
  const visible = showAll ? cards : getPreviewCards(cards);

  return (
    <section id={name ? `menu-section-${slugify(name)}` : undefined} className="scroll-mt-[150px]">
      {name && <h2 className="mb-5 font-display text-2xl font-medium text-ink-900">{name}</h2>}

      <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
        {visible.map((card) => (
          <MenuCard key={card.id} card={card} onOpen={() => onOpenCard(card)} />
        ))}
      </div>

      {canToggle && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-primary-600 hover:underline"
        >
          {expanded ? expandControls.collapseLabel : expandControls.expandLabel}
          <CaretDown
            size={16}
            weight="bold"
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      )}
    </section>
  );
}
