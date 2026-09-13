"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { menuSearch } from "../_data/menuConfig";

type MenuSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function MenuSearch({ value, onChange }: MenuSearchProps) {
  const alignClass = menuSearch.align === "center" ? "mx-auto" : "";
  const inputRef = useRef<HTMLInputElement>(null);

  // Filtering already happens live via onChange — this input isn't in a
  // <form>, so Enter/the mobile keyboard's Search key never triggers a
  // submit event. Blurring on Enter is what actually closes the mobile
  // keyboard once the user signals they're done typing; the query and
  // results are untouched.
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  }

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
        ref={inputRef}
        id="menu-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={menuSearch.placeholder}
        // text-base (16px), not text-sm — below 16px, iOS Safari auto-zooms
        // the page on focus, which is what breaks the layout while the
        // keyboard is open. appearance-none strips iOS's own search-field
        // chrome (rounded pill + reserved icon inset) so it doesn't fight
        // the custom icon/clear button positioned below.
        className={`h-11 w-full appearance-none rounded-xs border border-border-hairline bg-surface-white font-body text-base text-ink-900 placeholder:text-ink-500 focus:border-primary-600 ${
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
