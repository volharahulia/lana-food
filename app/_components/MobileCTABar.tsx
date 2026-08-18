import Button from "./ui/Button";

// Fixed bottom Contact Us bar (CLAUDE.md §8/§35) — always visible on mobile,
// never hidden behind the hamburger menu. Sits below Back to Top in the
// z-index/position stack (see BackToTop.tsx).
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border-hairline bg-surface-white p-3 laptop:hidden">
      <Button href="/contact" className="w-full">
        Contact Us
      </Button>
    </div>
  );
}
