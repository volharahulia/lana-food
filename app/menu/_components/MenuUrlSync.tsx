"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export type MenuUrlParams = {
  tab: string | null;
  q: string;
  item: string | null;
};

type MenuUrlSyncProps = {
  onChange: (params: MenuUrlParams) => void;
};

// Renders nothing — its only job is isolating the page's one useSearchParams()
// read into its own leaf. useSearchParams() forces whatever component calls
// it out of static prerendering unless wrapped in <Suspense>; keeping that
// boundary around this empty leaf (MenuExperience.tsx wraps it locally),
// instead of around the actual menu content as before, is what lets /menu
// stay a static route while all four categories' markup still renders into
// the initial HTML, and the page still reacts to ?tab=/?q=/?item= changes
// (including a Header search landing on an already-mounted /menu).
export default function MenuUrlSync({ onChange }: MenuUrlSyncProps) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const q = searchParams.get("q") ?? "";
  const item = searchParams.get("item");

  useEffect(() => {
    onChange({ tab, q, item });
  }, [tab, q, item, onChange]);

  return null;
}
