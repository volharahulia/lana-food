import type { MenuSearchCategoryResult } from "../_data/search";
import type { MenuCardData } from "../_data/types";
import Grid from "../../_components/ui/Grid";
import MenuCard from "./MenuCard";

type MenuSearchResultsProps = {
  query: string;
  results: MenuSearchCategoryResult[];
  onOpenCard: (card: MenuCardData) => void;
};

// Renders global search results grouped by Menu Category (Holiday, Everyday,
// Kids', Gastroboxes order — already applied by searchMenu). Reuses the same
// MenuCard/Grid presentation as normal browsing; no separate result-card design.
export default function MenuSearchResults({ query, results, onOpenCard }: MenuSearchResultsProps) {
  const total = results.reduce((sum, r) => sum + r.cards.length, 0);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className="font-display text-2xl font-medium text-ink-900">
          Search results for &ldquo;{query}&rdquo;
        </h2>
        <p className="mt-1 font-body text-sm text-ink-700">
          {total} {total === 1 ? "dish" : "dishes"} found
        </p>
      </div>

      {results.map((category) => (
        <section key={category.slug}>
          <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-border-hairline pb-2">
            <h3 className="font-body text-sm font-semibold uppercase tracking-[0.4px] text-ink-900">
              {category.name}
            </h3>
            <span className="shrink-0 font-body text-sm text-ink-500">
              {category.cards.length} {category.cards.length === 1 ? "result" : "results"}
            </span>
          </div>

          <Grid columns={{ base: 1, tablet: 2, laptop: 3, desktop: 4 }} gap="sm">
            {category.cards.map((card) => (
              <MenuCard key={card.id} card={card} onOpen={() => onOpenCard(card)} />
            ))}
          </Grid>
        </section>
      ))}
    </div>
  );
}
