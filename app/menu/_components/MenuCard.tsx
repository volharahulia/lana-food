import { CaretRight } from "@phosphor-icons/react/ssr";
import type { MenuCardData } from "../_data/types";
import { formatPrice, formatQuantity, formatWeight } from "../_data/format";
import { menuCardDomId } from "../_data/menuTarget";
import MenuPhoto from "./MenuPhoto";

type MenuCardProps = {
  card: MenuCardData;
  categorySlug: string;
  onOpen: () => void;
};

export default function MenuCard({ card, categorySlug, onOpen }: MenuCardProps) {
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
    // No longer the click target itself (a dish with multiple photos needs
    // the photo area's taps for photo navigation instead — see
    // MenuPhoto.tsx) — "open this dish" now lives on two inner <button>s
    // (the photo, only while it has a single/no photo; and the text
    // column, always), never nested inside each other. group/hover/
    // focus-within here still lift+shadow the whole card the same as
    // before, whichever inner control triggers it.
    <div
      id={menuCardDomId(categorySlug, card.id)}
      className="group block h-full scroll-mt-[150px] overflow-hidden rounded-md border border-border-hairline bg-surface-white text-left shadow-xs transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm focus-within:-translate-y-0.5 focus-within:shadow-sm"
    >
      {/* Below tablet: compact horizontal browsing row — small portrait
          thumbnail + info + a caret affordance, one card per row. Tapping
          still opens the exact same modal via the shared onOpen handler. */}
      <div className="flex items-stretch gap-3 p-3 tablet:hidden">
        <MenuPhoto
          photos={card.photos}
          alt={card.name}
          unavailable={!card.available}
          showBadge={false}
          sizes="96px"
          className="w-24 shrink-0"
          onOpenDish={onOpen}
          aspect="square"
        />

        <button type="button" onClick={onOpen} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <h3 className="line-clamp-2 font-display text-base font-medium text-ink-900">
              {card.name}
            </h3>

            {description && (
              <p className="line-clamp-2 font-body text-xs text-ink-700">{description}</p>
            )}

            {variantNames.length > 1 && (
              <p className="line-clamp-1 font-body text-xs text-ink-500">
                {variantNames.join(" · ")}
              </p>
            )}

            {(quantity || weight) && (
              <p className="font-body text-xs text-ink-500">
                {[quantity, weight].filter(Boolean).join(" · ")}
              </p>
            )}

            <div className="mt-auto flex items-center gap-2 pt-1">
              {priceLabel && (
                <span className="font-body text-sm font-semibold text-primary-600">
                  {priceLabel}
                </span>
              )}
              {!card.available && (
                <span className="rounded-full bg-cream-500 px-2 py-0.5 font-body text-[11px] font-semibold text-ink-700">
                  Currently Unavailable
                </span>
              )}
            </div>
          </div>

          <CaretRight
            size={18}
            weight="bold"
            className="shrink-0 self-center text-ink-500/70 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      </div>

      {/* Tablet and up: existing full vertical card — unchanged. */}
      <div className="hidden h-full tablet:flex tablet:flex-col">
        <MenuPhoto
          photos={card.photos}
          alt={card.name}
          unavailable={!card.available}
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 768px) 40vw, 90vw"
          onOpenDish={onOpen}
          aspect="square"
        />

        <button type="button" onClick={onOpen} className="flex flex-1 flex-col gap-2 p-4 text-left">
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
        </button>
      </div>
    </div>
  );
}
