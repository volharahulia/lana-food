"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import type { MenuCardData, MenuSubcategory } from "../_data/types";
import MenuCard from "./MenuCard";
import { slugify } from "./MenuSidebar";
import Grid from "../../_components/ui/Grid";
import { expandControls } from "../_data/menuConfig";

type MenuCategorySectionProps = {
  categorySlug: string;
  subcategory: MenuSubcategory;
  /** True while a search query is active — shows every match instead of the
   * featured/4-card preview, per MENU.md's search behavior. */
  bypassCollapse: boolean;
  /** True when this section contains the active Most-Popular-Dishes deep-link
   * target — forces the full preview open so the target card exists in the
   * DOM to scroll to, per MENU.md deep-link behavior. */
  forceExpanded?: boolean;
  /** `context` is the exact array of cards currently rendered in this
   * section (the 4-card preview, or the full list once expanded) — the
   * modal's Previous/Next navigation set, per MENU.md: navigation stays
   * within "the same set of menu cards the user is currently browsing". */
  onOpenCard: (card: MenuCardData, context: MenuCardData[]) => void;
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
  categorySlug,
  subcategory,
  bypassCollapse,
  forceExpanded = false,
  onOpenCard,
}: MenuCategorySectionProps) {
  const [expanded, setExpanded] = useState(false);
  const { name, cards } = subcategory;

  const canToggle = !bypassCollapse && !forceExpanded && cards.length > 4;
  const showAll = bypassCollapse || forceExpanded || expanded || cards.length <= 4;
  const visible = showAll ? cards : getPreviewCards(cards);

  return (
    <section id={name ? `menu-section-${slugify(name)}` : undefined} className="scroll-mt-[150px]">
      {name && <h2 className="mb-5 font-display text-2xl font-medium text-ink-900">{name}</h2>}

      <Grid columns={{ base: 1, tablet: 2, laptop: 3, desktop: 4 }} gap="sm">
        {visible.map((card) => (
          <MenuCard
            key={card.id}
            card={card}
            categorySlug={categorySlug}
            onOpen={() => onOpenCard(card, visible)}
          />
        ))}
      </Grid>

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
