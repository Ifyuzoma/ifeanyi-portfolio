import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { BrowserFrame } from "@/components/case-study/Media";
import { ceoCreative } from "@/lib/case-studies/ceo-creative";

export const metadata: Metadata = {
  title: "The CEO Creative — Ifeanyi Uzoma",
  description: ceoCreative.dek,
};

export default function CeoCreativePage() {
  return (
    <CaseStudyLayout
      data={ceoCreative}
      heroMedia={
        <BrowserFrame
          url="theceocreative.com"
          src="/uploads/New CEO homepage.jpg"
          alt="New CEO Creative homepage"
          caption="The shipped homepage: NET30 leads, the catalog is organized into named categories, and trust signals close the page."
        />
      }
    />
  );
}
