"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { menuSearch } from "../_data/menuConfig";

type MenuSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function MenuSearch({ value, onChange }: MenuSearchProps) {
  const alignClass = menuSearch.align === "center" ? "mx-auto" : "";

  return (
    <div className={`relative w-full max-w-md ${alignClass}`}>
      <label htmlFor="menu-search" className="sr-only">
        Search dishes
      </label>
      {menuSearch.iconPosition === "left" && (
        <MagnifyingGlass
          size={18}
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-500"
        />
      )}
      <input
        id="menu-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={menuSearch.placeholder}
        className={`h-11 w-full rounded-xs border border-border-hairline bg-surface-white font-body text-sm text-ink-900 placeholder:text-ink-500 focus:border-primary-600 ${
          menuSearch.iconPosition === "left" ? "pl-10" : "pl-4"
        } ${value ? "pr-10" : "pr-4"}`}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ink-500 hover:text-primary-600"
        >
          <X size={16} aria-hidden />
        </button>
      )}
    </div>
  );
}
