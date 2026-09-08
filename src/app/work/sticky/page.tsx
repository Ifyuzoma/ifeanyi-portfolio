import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { HeroGrid3 } from "@/components/case-study/Media";
import { sticky } from "@/lib/case-studies/sticky";

export const metadata: Metadata = {
  title: "Sticky — Ifeanyi Uzoma",
  description: sticky.dek,
};

export default function StickyPage() {
  return (
    <CaseStudyLayout
      data={sticky}
      heroMedia={
        <HeroGrid3
          images={[
            { src: "/uploads/div/div-14.png", alt: "One thing" },
            { src: "/uploads/div/div-21.png", alt: "Sticky desk" },
            { src: "/uploads/div/div-7.png", alt: "Voice dump" },
          ]}
          caption="Tasks as physical-feeling notes on a desk, not rows in a list."
        />
      }
    />
  );
}
