import Image from "next/image";
import {
  cateringIncludesLabel,
  cateringProcessIntro,
  cateringProcessSteps,
  cateringServiceStatement,
} from "../_data/cateringConfig";

// Section 5 — Our Process / On-Site Catering Service. The critical section:
// the $500 statement and all five steps are entirely data-driven (CATERING.md
// §7) — price/currency are formatted here, never string-concatenated in data,
// so either can change independently without touching this component.
export default function CateringProcessService() {
  const steps = cateringProcessSteps
    .filter((s) => s.published)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: cateringServiceStatement.currency,
    maximumFractionDigits: 0,
  }).format(cateringServiceStatement.price);

  return (
    <section className="container-page py-10 laptop:py-16">
      <div className="rounded-lg border border-border-hairline bg-gradient-to-br from-cream-500 to-cream-300 p-5 laptop:p-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[2px] text-primary-600">
            {cateringProcessIntro.eyebrow}
          </p>
          <h2 className="font-display text-2xl font-medium text-ink-900 laptop:text-[32px]">
            {cateringProcessIntro.heading}
          </h2>
          <p className="max-w-xl font-body text-base text-ink-700 laptop:text-lg">
            {cateringServiceStatement.prefix} {cateringServiceStatement.priceQualifier}{" "}
            <span className="font-semibold text-primary-600">{formattedPrice}</span>
          </p>
          <p className="font-body text-sm font-semibold uppercase tracking-[1px] text-ink-900">
            {cateringIncludesLabel}
          </p>
        </div>

        {steps.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-6 tablet:grid-cols-3 laptop:grid-cols-5">
            {steps.map((step) => (
              <li key={step.id} className="flex flex-col items-center gap-2 text-center">
                <span
                  aria-hidden
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-border-hairline bg-surface-white"
                >
                  <Image src={step.icon} alt="" width={32} height={32} />
                </span>
                <span className="font-body text-sm font-semibold text-ink-900">
                  {step.title}
                </span>
                <p className="font-body text-xs leading-[1.5] text-ink-700">{step.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
