import type { MenuCardData } from "../_data/types";
import { formatPrice, formatQuantity, formatWeight } from "../_data/format";
import MenuPhoto from "./MenuPhoto";

type MenuCardProps = {
  card: MenuCardData;
  onOpen: () => void;
};

export default function MenuCard({ card, onOpen }: MenuCardProps) {
  const primary = card.variants[0];
  const description = card.variants.find((v) => v.description)?.description;
  const quantity = formatQuantity(primary);
  const weight = formatWeight(primary);

  const pricedVariants = card.variants.filter((v) => v.price != null);
  const prices = pricedVariants.map((v) => v.price!);
  const priceLabel =
    pricedVariants.length === 0
      ? undefined
      : prices.every((p) => p === prices[0])
        ? formatPrice(pricedVariants[0])
        : `from ${Math.min(...prices)} ${pricedVariants[0].currency.toUpperCase()}`;

  const variantNames = card.variants.map((v) => v.variant).filter((v): v is string => !!v);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border-hairline bg-surface-white text-left shadow-xs transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm focus-visible:-translate-y-0.5"
    >
      <MenuPhoto
        src={card.photo}
        alt={card.name}
        unavailable={!card.available}
        sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 768px) 40vw, 90vw"
      />

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-lg font-medium text-ink-900">{card.name}</h3>

        {description && (
          <p className="line-clamp-2 font-body text-sm text-ink-700">{description}</p>
        )}

        {variantNames.length > 1 && (
          <p className="font-body text-xs text-ink-500">{variantNames.join(" · ")}</p>
        )}

        {(quantity || weight) && (
          <p className="font-body text-xs text-ink-500">
            {[quantity, weight].filter(Boolean).join(" · ")}
          </p>
        )}

        {priceLabel && (
          <p className="mt-auto pt-1 font-body text-base font-semibold text-primary-600">
            {priceLabel}
          </p>
        )}
      </div>
    </button>
  );
}
