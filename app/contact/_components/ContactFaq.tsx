"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import SectionHeading from "../../_components/ui/SectionHeading";
import Section from "../../_components/ui/Section";
import { contactFaq } from "../_data/contactConfig";

// Built on Radix Accordion per the Design System (§3.13/§4.2: "build
// accordions... on top of Radix UI primitives... guarantees the
// keyboard/ARIA behavior... without reinventing it") — same approach already
// used for tabs (MenuTabs.tsx) and the mobile nav dialog. Renders nothing
// until the project owner populates contactFaq — never invented Q&A.
export default function ContactFaq() {
  if (contactFaq.length === 0) return null;

  return (
    <Section spacing="compact">
      <SectionHeading title="Frequently Asked Questions" align="center" />

      <Accordion.Root
        type="single"
        collapsible
        className="mx-auto mt-8 flex max-w-2xl flex-col divide-y divide-border-hairline border-y border-border-hairline"
      >
        {contactFaq.map((item, index) => (
          <Accordion.Item key={item.question} value={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left font-body text-base font-medium text-ink-900 transition-colors hover:text-primary-600 focus-visible:text-primary-600">
                {item.question}
                <CaretDown
                  size={18}
                  aria-hidden
                  className="shrink-0 text-ink-500 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary-600"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="pb-4 font-body text-sm leading-[1.6] text-ink-700">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Section>
  );
}
