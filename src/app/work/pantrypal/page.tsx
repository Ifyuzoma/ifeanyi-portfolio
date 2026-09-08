import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import PhoneTrioHero from "@/components/case-study/PhoneTrioHero";
import { pantrypal } from "@/lib/case-studies/pantrypal";

export const metadata: Metadata = {
  title: "PantryPal — Ifeanyi Uzoma",
  description: pantrypal.dek,
};

export default function PantryPalPage() {
  return (
    <CaseStudyLayout
      data={pantrypal}
      heroMedia={
        <>
          <PhoneTrioHero
            images={[
              { src: "/uploads/Pantry.png", alt: "Pantry" },
              { src: "/uploads/Home screen.png", alt: "PantryPal home screen" },
              { src: "/uploads/Item detail - freshness timeline.png", alt: "Item detail" },
            ]}
            caption='One home screen answers "what needs my attention today" instead of three separate apps.'
          />
          <Link
            href="/work/pantrypal/reel"
            className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            Flip through every screen in the prototype ↗
          </Link>
        </>
      }
    />
  );
}
