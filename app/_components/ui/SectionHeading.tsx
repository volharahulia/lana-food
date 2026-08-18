type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  /** Wraps the title in the fine-line flourish motif used across Home's
   * compact section headers, per the visual reference. */
  flourish?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  flourish = true,
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      <Heading className="flex items-center gap-3 font-display text-2xl font-medium uppercase tracking-[1px] text-ink-900 laptop:text-[32px]">
        {flourish && (
          <span aria-hidden className="h-px w-8 shrink-0 bg-gold-decorative laptop:w-12" />
        )}
        {title}
        {flourish && (
          <span aria-hidden className="h-px w-8 shrink-0 bg-gold-decorative laptop:w-12" />
        )}
      </Heading>
      {subtitle && (
        <p className="max-w-xl font-body text-base text-ink-700 laptop:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
