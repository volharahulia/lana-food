"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import type { MenuCardData } from "../_data/types";
import { formatPrice, formatQuantity, formatWeight } from "../_data/format";
import MenuPhoto from "./MenuPhoto";

type MenuCardModalProps = {
  card: MenuCardData | null;
  onOpenChange: (open: boolean) => void;
};

export default function MenuCardModal({ card, onOpenChange }: MenuCardModalProps) {
  return (
    <Dialog.Root open={card !== null} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-900/50 data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[90vw] max-w-[960px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-surface-white p-6 shadow-lg tablet:p-8">
          {card && (
            <>
              <div className="flex items-start justify-between gap-4">
                <Dialog.Title className="font-display text-2xl font-medium text-ink-900">
                  {card.name}
                </Dialog.Title>
                <Dialog.Close
                  aria-label="Close"
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-ink-700 hover:text-primary-600"
                >
                  <X size={22} aria-hidden />
                </Dialog.Close>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 tablet:grid-cols-[minmax(0,280px)_1fr]">
                <MenuPhoto
                  src={card.photo}
                  alt={card.name}
                  unavailable={!card.available}
                  sizes="(min-width: 768px) 280px, 80vw"
                  className="tablet:max-w-[280px]"
                />

                <div className="flex flex-col divide-y divide-border-hairline">
                  {card.variants.map((v, i) => (
                    <div key={i} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
                      {v.variant && (
                        <h4 className="font-display text-lg font-medium text-ink-900">
                          {v.variant}
                        </h4>
                      )}

                      {v.description && (
                        <p className="font-body text-sm text-ink-700">{v.description}</p>
                      )}

                      {v.ingredients && (
                        <p className="font-body text-sm text-ink-700">
                          <span className="font-semibold text-ink-900">Ingredients: </span>
                          {v.ingredients}
                        </p>
                      )}

                      {v.allergens && (
                        <p className="font-body text-sm text-ink-700">
                          <span className="font-semibold text-ink-900">Allergens: </span>
                          {v.allergens}
                        </p>
                      )}

                      {(formatQuantity(v) || formatWeight(v)) && (
                        <p className="font-body text-sm text-ink-500">
                          {[formatQuantity(v), formatWeight(v)].filter(Boolean).join(" · ")}
                        </p>
                      )}

                      <div className="flex items-center justify-between gap-4 pt-1">
                        {formatPrice(v) && (
                          <p className="font-body text-lg font-semibold text-primary-600">
                            {formatPrice(v)}
                          </p>
                        )}
                        {!v.available && (
                          <span className="rounded-full bg-cream-500 px-2.5 py-1 font-body text-xs font-semibold text-ink-700">
                            Currently Unavailable
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
