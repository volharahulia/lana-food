import { redirect } from "next/navigation";

// The Menu page is now a single tabbed route (MENU.md "Architecture: Single
// Tabbed Page") — this URL is kept as a redirect so existing links/bookmarks
// still land on the right tab instead of 404ing.
export default function EverydayMenuRedirect() {
  redirect("/menu?tab=everyday");
}
