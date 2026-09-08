import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import { HeroGrid3 } from "@/components/case-study/Media";
import { luminaClinic, heroShots } from "@/lib/case-studies/lumina-clinic";

export const metadata: Metadata = {
  title: "Lumina Clinic — Ifeanyi Uzoma",
  description: luminaClinic.dek,
};

export default function LuminaClinicPage() {
  return (
    <CaseStudyLayout
      data={luminaClinic}
      heroMedia={
        <HeroGrid3
          images={heroShots.map((s) => ({ src: s.src, alt: s.label }))}
          caption="One relationship, two sides. This is what the client sees: alerts, the booking flow, and the visit itself."
        />
      }
    />
  );
}
