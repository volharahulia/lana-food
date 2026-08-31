import Image from "next/image";
import { aboutValues } from "../_data/aboutConfig";

// Section 3 — Four Core Values. Same bg-cream-500 band as AboutMission
// (visually continuous, per the reference), one row of four on desktop with
// thin dividers between columns, stacked on mobile.
export default function AboutValues() {
  return (
    <section className="bg-cream-500 pt-6 pb-10 laptop:pt-10 laptop:pb-16">
      <h2 className="sr-only">Our Values</h2>
      <ul className="container-page flex flex-col gap-8 laptop:flex-row laptop:divide-x laptop:divide-border-hairline">
        {aboutValues.map((value) => (
          <li
            key={value.key}
            className="flex flex-1 flex-col items-center gap-3 text-center laptop:px-6"
          >
            <Image src={value.icon} alt="" width={64} height={64} aria-hidden />
            <h3 className="font-display text-lg font-medium text-primary-700">{value.heading}</h3>
            <p className="max-w-[240px] font-body text-sm leading-[1.6] text-ink-700">
              {value.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
