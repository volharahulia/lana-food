import type { MenuCardData } from "../_data/types";
import Grid from "../../_components/ui/Grid";
import MenuCard from "./MenuCard";

type MenuSearchResultsProps = {
  query: string;
  categorySlug: string;
  cards: MenuCardData[];
  onOpenCard: (card: MenuCardData, context: MenuCardData[]) => void;
};

// Search results within the currently active category only (MENU.md "Search
// Scope") — reuses the same MenuCard/Grid presentation as normal browsing,
// no separate result-card design. Modal Previous/Next browses this same
// filtered set (`cards` doubles as both the render list and the context).
export default function MenuSearchResults({ query, categorySlug, cards, onOpenCard }: MenuSearchResultsProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-2xl font-medium text-ink-900">
          Search results for &ldquo;{query}&rdquo;
        </h2>
        <p className="mt-1 font-body text-sm text-ink-700">
          {cards.length} {cards.length === 1 ? "dish" : "dishes"} found
        </p>
      </div>

      <Grid columns={{ base: 1, tablet: 2, laptop: 3, desktop: 4 }} gap="sm">
        {cards.map((card) => (
          <MenuCard
            key={card.id}
            card={card}
            categorySlug={categorySlug}
            onOpen={() => onOpenCard(card, cards)}
          />
        ))}
      </Grid>
    </div>
  );
}
