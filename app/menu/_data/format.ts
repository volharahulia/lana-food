import type { MenuVariant } from "./types";

export function formatQuantity(v: MenuVariant): string | undefined {
  if (v.quantity == null || !v.quantityUnit) return undefined;
  return `${v.quantity} ${v.quantityUnit}`;
}

export function formatWeight(v: MenuVariant): string | undefined {
  if (v.weight == null || !v.weightUnit) return undefined;
  return `${v.weight} ${v.weightUnit}`;
}

export function formatPrice(v: MenuVariant): string | undefined {
  if (v.price == null) return undefined;
  return `${v.price} ${v.currency.toUpperCase()}`;
}
