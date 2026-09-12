"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "@phosphor-icons/react";

// The Menu page's Back to Top target — see the matching id/scroll-mt on
// MenuTabs.tsx. Every other route falls back to the page top below.
const MENU_TABS_ANCHOR_ID = "menu-tabs";

// Positioned above the fixed mobile Contact Us bar (never overlapping it),
// per the stacking order defined in the Design System §3.6.
export default function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  // On /menu, the Hero is only introductory — the Tabs are the page's
  // primary working area, so Back to Top returns there instead of all the
  // way to the top (MenuTabs' own scroll-mt-* keeps it clear of the sticky
  // header). Every other page keeps the normal scroll-to-top behavior.
  function handleClick() {
    if (pathname === "/menu") {
      const tabs = document.getElementById(MENU_TABS_ANCHOR_ID);
      if (tabs) {
        tabs.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      // bottom offset (mobile only) tracks env(safe-area-inset-bottom) so it
      // stays clear of MobileCTABar even when that bar grows taller on
      // notched devices — never a hardcoded per-device pixel value.
      className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-30 flex h-11 w-11 items-center justify-center rounded-full bg-surface-white text-ink-900 shadow-md transition-colors hover:text-primary-600 laptop:bottom-6"
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  );
}
