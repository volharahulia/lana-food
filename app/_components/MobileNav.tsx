"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import Button from "./ui/Button";
import { primaryNav, menuDropdown, MULTILINGUAL_ENABLED } from "../_data/navigation";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-900/40 data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col gap-8 overflow-y-auto bg-surface-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-lg font-medium text-ink-900">
              Menu
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center text-ink-900 hover:text-primary-600"
            >
              <X size={24} aria-hidden />
            </Dialog.Close>
          </div>

          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => onOpenChange(false)}
              className="rounded-xs px-2 py-3 font-body text-base font-medium text-ink-900 hover:text-primary-600"
            >
              Home
            </Link>

            <div className="px-2 py-3">
              <Link
                href="/menu"
                onClick={() => onOpenChange(false)}
                className="font-body text-base font-medium text-ink-900 hover:text-primary-600"
              >
                Menu
              </Link>
              <div className="mt-2 flex flex-col gap-1 border-l border-border-hairline pl-4">
                {menuDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className="py-2 font-body text-[15px] text-ink-700 hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {primaryNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onOpenChange(false)}
                className="rounded-xs px-2 py-3 font-body text-base font-medium text-ink-900 hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {MULTILINGUAL_ENABLED && (
            <div className="flex items-center gap-2 px-2">
              <button className="rounded-full bg-primary-600 px-3 py-1 text-sm text-cream-300">
                EN
              </button>
              <button className="rounded-full px-3 py-1 text-sm text-ink-700">RU</button>
            </div>
          )}

          <Button href="/contact" onClick={() => onOpenChange(false)} className="mt-auto">
            Contact Us
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
