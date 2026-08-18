import Link from "next/link";

type StubPageProps = {
  title: string;
  description: string;
};

// Minimal navigation stub — CLAUDE.md §6 allows scaffolding routes for
// navigation without building full secondary-page content yet.
export default function StubPage({ title, description }: StubPageProps) {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-4 py-20 tablet:px-8 laptop:px-12 laptop:py-28 desktop:px-20">
      <h1 className="font-display text-3xl font-semibold text-ink-900 laptop:text-5xl">
        {title}
      </h1>
      <p className="max-w-xl font-body text-base text-ink-700">{description}</p>
      <Link
        href="/"
        className="font-body text-sm font-semibold text-primary-600 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
