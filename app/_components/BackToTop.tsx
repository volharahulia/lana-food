"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

// Positioned above the fixed mobile Contact Us bar (never overlapping it),
// per the stacking order defined in the Design System §3.6.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed right-4 bottom-20 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-surface-white text-ink-900 shadow-md transition-colors hover:text-primary-600 laptop:bottom-6"
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  );
}
