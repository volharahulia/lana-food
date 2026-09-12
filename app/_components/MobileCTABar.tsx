import Button from "./ui/Button";

// Fixed bottom Contact Us bar (CLAUDE.md §8/§35) — always visible on mobile,
// never hidden behind the hamburger menu. Sits below Back to Top in the
// z-index/position stack (see BackToTop.tsx). pb adds env(safe-area-inset-
// bottom) on top of the normal p-3 (never replacing it) so the bar clears the
// home-indicator gesture area on notched devices — resolves to 0, i.e. plain
// 0.75rem, on any device without a bottom inset.
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 w-full border-t border-border-hairline bg-surface-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] laptop:hidden">
      <Button href="/contact" className="w-full">
        Contact Us
      </Button>
    </div>
  );
}
