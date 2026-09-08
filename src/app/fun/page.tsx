import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = {
  title: "Fun — Ifeanyi Uzoma",
  description: "Client work, side concepts, and things made for the craft of it.",
};

const pieces = [
  { src: "/uploads/Portfolio Thumbnails-selection33.png", alt: "Gleamin welcome email" },
  { src: "/uploads/Portfolio Thumbnails-selection22.png", alt: "Gleamin social proof email" },
  { src: "/uploads/Portfolio Thumbnails-selection111.png", alt: "Gleamin last call email" },
  { src: "/uploads/Portfolio Thumbnails-selection11.png", alt: "Gleamin abandoned cart email" },
  { src: "/uploads/Portfolio Thumbnails-selection9.png", alt: "Reggie referral email" },
  { src: "/uploads/Portfolio Thumbnails-selection8.png", alt: "Reggie rewards email" },
  { src: "/uploads/Portfolio Thumbnails-selection77.png", alt: "Reggie rewards onboarding" },
  { src: "/uploads/Portfolio Thumbnails-selection44.png", alt: "Westside Love cart email" },
  { src: "/uploads/Portfolio Thumbnails-selection555.png", alt: "Westside Love store credit emails" },
  { src: "/uploads/Portfolio Thumbnails-selection5.png", alt: "Super Speciosa tea bag emails" },
  { src: "/uploads/Portfolio Thumbnails-selection4.png", alt: "Super Speciosa powder email" },
  { src: "/uploads/Portfolio Thumbnails-selection6.png", alt: "Bomber Safety Eyewear emails" },
  { src: "/uploads/Portfolio Thumbnails-selection3.png", alt: "Feno welcome email" },
  { src: "/uploads/Portfolio Thumbnails-selection2.png", alt: "Travel landing page concept" },
  { src: "/uploads/Portfolio Thumbnails-selection1.png", alt: "Red Devils store concept" },
  { src: "/uploads/Portfolio Thumbnails-selection.png", alt: "Eyewea store concept" },
];

export default function FunPage() {
  return (
    <div className="min-h-screen bg-cream px-5 sm:px-8 md:px-16">
      <PageHeader variant="fun" />
      <main className="mx-auto max-w-[1180px]">
        <section className="pt-10 pb-5 sm:pt-13 sm:pb-8">
          <div className="flex items-baseline justify-between gap-5 pb-6 sm:pb-8.5">
            <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-[#6B6B66] uppercase">Fun</div>
            <div className="font-mono text-[11px] font-medium text-[#6B6B66]">16 pieces</div>
          </div>
          <h1 className="max-w-[24ch] text-[length:clamp(30px,5.2vw,62px)] leading-[1.06] tracking-[-0.038em] font-satoshi font-medium text-ink text-pretty">
            Client work, side concepts, and things made for the craft of it.
          </h1>
          <p className="mt-5.5 max-w-[58ch] text-[length:clamp(15px,1.5vw,17px)] leading-[1.7] text-body text-pretty sm:mt-8">
            Lifecycle email systems, storefront concepts, and marketing pages. Not full case studies, just the
            design work.
          </p>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-5 pt-6 sm:gap-8 sm:pt-10">
          {pieces.map((p, i) => (
            <Image
              key={i}
              src={p.src}
              alt={p.alt}
              width={720}
              height={480}
              className="h-auto w-full rounded-lg border border-line bg-card"
              unoptimized
            />
          ))}
        </section>

        <Link
          href="/#work"
          className="mt-12 flex items-center justify-between gap-6 border-t border-ink py-7 transition-opacity hover:opacity-70 sm:mt-22 sm:py-10"
        >
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-[#6B6B66] uppercase">Next</div>
            <div className="text-[length:clamp(22px,3.2vw,34px)] leading-[1.1] tracking-[-0.03em] font-satoshi font-medium text-ink">
              Selected work
            </div>
          </div>
          <div className="text-[length:clamp(20px,2.6vw,28px)] leading-none">→</div>
        </Link>
      </main>
      <div className="mx-auto max-w-[1180px]">
        <PageFooter />
      </div>
    </div>
  );
}
