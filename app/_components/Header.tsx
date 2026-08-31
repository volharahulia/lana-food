"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { List, MagnifyingGlass, CaretDown, X } from "@phosphor-icons/react";
import Button from "./ui/Button";
import MobileNav from "./MobileNav";
import { primaryNav, menuDropdown, MULTILINGUAL_ENABLED } from "../_data/navigation";
import { business } from "../_data/business";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/menu?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  }

  const linkClass =
    "font-body text-[15px] font-medium leading-5 text-ink-900 transition-colors duration-150 hover:text-primary-600 data-[active]:text-primary-600";

  return (
    <header className="sticky top-0 z-40 border-b border-border-hairline bg-surface-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4 laptop:h-[72px]">
        <Link href="/" className="relative h-12 w-20 shrink-0 laptop:h-14 laptop:w-24" aria-label="Lana Food, go to homepage">
          {/* w-20 (80px) below laptop, w-24 (96px) from laptop up. */}
          <Image
            src={business.logo}
            alt="Lana Food"
            fill
            sizes="(min-width: 1024px) 96px, 80px"
            className="object-contain object-center"
            priority
          />
        </Link>

        <NavigationMenu.Root className="relative hidden laptop:block">
          <NavigationMenu.List className="flex items-center gap-6 desktop:gap-8">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild active={pathname === "/"}>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="relative">
              <div className="flex items-center">
                {/* Main Menu link */}
                <NavigationMenu.Link asChild active={pathname === "/menu"}>
                  <Link href="/menu" className={linkClass}>
                    Menu
                  </Link>
                </NavigationMenu.Link>

                {/* Dropdown trigger */}
                <NavigationMenu.Trigger
                  aria-label="Open Menu categories"
                  className={`group ml-1 inline-flex h-8 w-6 items-center justify-center bg-transparent text-ink-900`}
                >
                  <CaretDown
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="absolute left-0 top-full mt-2 min-w-[200px] rounded-md border border-border-hairline bg-surface-white p-2 shadow-md">
                  <ul className="flex flex-col">
                    {menuDropdown.map((item) => (
                      <li key={item.href}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href={item.href}
                            className="block rounded-xs px-3 py-2 text-sm text-ink-900 transition-colors hover:bg-cream-500 hover:text-primary-600"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </div>
            </NavigationMenu.Item>

            {primaryNav.slice(1).map((item) => (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild active={pathname === item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2 tablet:gap-3">
          <div className="hidden items-center tablet:flex">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <label htmlFor="site-search" className="sr-only">
                  Search dishes
                </label>
                <input
                  id="site-search"
                  type="search"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search dishes…"
                  className="h-9 w-40 rounded-xs border border-border-hairline bg-surface-white px-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-primary-600"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="flex h-11 w-11 items-center justify-center text-ink-700 hover:text-primary-600"
                >
                  <X size={20} aria-hidden />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search dishes"
                className="flex h-11 w-11 items-center justify-center text-ink-700 transition-colors hover:text-primary-600"
              >
                <MagnifyingGlass size={20} aria-hidden />
              </button>
            )}
          </div>

          {MULTILINGUAL_ENABLED && (
            <div className="hidden items-center gap-1 rounded-full border border-border-hairline px-1 py-1 text-xs font-medium tablet:flex">
              <button className="rounded-full bg-primary-600 px-2 py-1 text-cream-300">EN</button>
              <button className="rounded-full px-2 py-1 text-ink-700">RU</button>
            </div>
          )}

          <Button href="/contact" size="md" className="hidden laptop:inline-flex">
            Contact Us
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center text-ink-900 laptop:hidden"
          >
            <List size={24} aria-hidden />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}
