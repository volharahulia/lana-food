"use client";

import { useState } from "react";
import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react";
import SectionHeading from "../../_components/ui/SectionHeading";
import Surface from "../../_components/ui/Surface";
import Grid from "../../_components/ui/Grid";
import { aboutFoodSafety } from "../_data/aboutConfig";
import { aboutDocuments, type AboutDocument } from "../_data/aboutDocuments";
import DocumentViewerModal from "./DocumentViewerModal";

// Section 4 — Food Safety & Compliance (ABOUT.md), between Our Values and
// the closing CTA. Same bg-cream-500 band as Mission/Values so it reads as
// one continuous warm section rather than a disconnected embedded widget.
// A calm trust signal, not a certification banner: two document cards,
// each opening the real source document (PDF or image) in one shared modal.
export default function AboutFoodSafety() {
  const [openDocument, setOpenDocument] = useState<AboutDocument | null>(null);

  return (
    <section className="bg-cream-500 pt-6 pb-10 laptop:pt-10 laptop:pb-16">
      <div className="container-page flex flex-col items-center gap-8 laptop:gap-10">
        <SectionHeading title={aboutFoodSafety.heading} subtitle={aboutFoodSafety.supportingText} align="center" />

        <Grid columns={{ base: 1, tablet: 2 }} gap="lg" className="w-full max-w-3xl">
          {aboutDocuments.map((doc) => (
            <Surface key={doc.id} tone="white" className="flex h-full flex-col overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenDocument(doc)}
                aria-label={doc.actionLabel}
                className="relative aspect-[3/4] w-full shrink-0 bg-cream-500"
              >
                <Image
                  src={doc.preview}
                  alt={doc.previewAlt}
                  fill
                  sizes="(min-width: 768px) 320px, 90vw"
                  className="object-contain p-4"
                />
              </button>

              <div className="flex flex-1 flex-col gap-2 p-5 tablet:p-6">
                <h3 className="font-display text-lg font-medium text-ink-900">{doc.title}</h3>
                <p className="font-body text-sm text-ink-700">{doc.issuedBy}</p>
                <button
                  type="button"
                  onClick={() => setOpenDocument(doc)}
                  className="mt-auto inline-flex min-h-11 w-fit items-center gap-1.5 pt-2 font-body text-sm font-semibold text-primary-600 hover:underline"
                >
                  {doc.actionLabel}
                  <CaretRight size={16} weight="bold" aria-hidden />
                </button>
              </div>
            </Surface>
          ))}
        </Grid>
      </div>

      <DocumentViewerModal document={openDocument} onOpenChange={(open) => !open && setOpenDocument(null)} />
    </section>
  );
}
