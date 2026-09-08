import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import PhoneTrioHero from "@/components/case-study/PhoneTrioHero";
import { tripwise } from "@/lib/case-studies/tripwise";

export const metadata: Metadata = {
  title: "TripWise — Ifeanyi Uzoma",
  description: tripwise.dek,
};

export default function TripWisePage() {
  return (
    <CaseStudyLayout
      data={tripwise}
      heroMedia={
        <PhoneTrioHero
          images={[
            { src: "/uploads/Trips.png", alt: "Trip readiness" },
            { src: "/uploads/Home-127885ad.png", alt: "TripWise home screen" },
            { src: "/uploads/Travel doc.png", alt: "Travel documents" },
          ]}
          caption="The core idea in one screen: not just a trip plan, a readiness score."
        />
      }
    />
  );
}
