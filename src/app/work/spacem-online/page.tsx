import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { BrowserFrame } from "@/components/case-study/Media";
import { spacemOnline } from "@/lib/case-studies/spacem-online";

export const metadata: Metadata = {
  title: "Space'M Online — Ifeanyi Uzoma",
  description: spacemOnline.dek,
};

export default function SpacemOnlinePage() {
  return (
    <CaseStudyLayout
      data={spacemOnline}
      heroMedia={
        <BrowserFrame
          url="spacemonline.com"
          src="/uploads/fullpage_snapshot_spacemonline_com_2026-09-06-07-31-40.png"
          alt="Space'M Online homepage"
          caption="Positioning stated plainly in the first screen: international scale, not a generic local SEO pitch."
        />
      }
    />
  );
}
