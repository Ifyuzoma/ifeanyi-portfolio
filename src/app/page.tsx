import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const projects = [
  {
    href: "/work/pantrypal",
    title: "PantryPal: one home for a household's grocery routine",
    meta: "iOS · Solo · 2026",
    media: { type: "video" as const, src: "/uploads/PantryPal Prototype Thumbnail.mp4" },
  },
  {
    href: "/work/ceo-creative",
    title: "The CEO Creative, a storefront rebuilt around what it sells",
    meta: "E-commerce UX · Shipped 2025",
    media: { type: "image" as const, src: "/uploads/ceo-homepage-thumbnail-3c.png", alt: "The CEO Creative homepage" },
  },
  {
    href: "/work/tripwise",
    title: "TripWise, a travel app built around readiness",
    meta: "Mobile app · In development 2026",
    media: { type: "video" as const, src: "/uploads/Tripwise Thumbnail.mp4" },
  },
  {
    href: "/work/lumina-clinic",
    title: "Lumina Clinic, both sides of a booking relationship",
    meta: "Mobile + dashboard · In development 2026",
    media: { type: "video" as const, src: "/uploads/LC Dashboard Prototype Thumbnail.mp4" },
  },
  {
    href: "/work/sticky",
    title: "Sticky, a to-do app built around one note at a time",
    meta: "Mobile + Watch · In development 2026",
    media: { type: "video" as const, src: "/uploads/Sticky Prototype Thumbnail.mp4" },
  },
  {
    href: "/work/spacem-online",
    title: "Space'M Online, an SEO site built to be verified",
    meta: "B2B marketing site · Shipped 2026",
    media: { type: "image" as const, src: "/uploads/space-thumbnail-4c.png", alt: "Space'M Online homepage" },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream px-5 sm:px-8 md:px-[clamp(24px,6vw,88px)]">
      <PageHeader variant="home" />
      <main id="top" className="mx-auto max-w-[1180px]">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-22">
          <h1 className="max-w-[15ch] text-[length:clamp(40px,7.4vw,86px)] leading-[1.02] tracking-[-0.04em] font-satoshi font-medium text-ink text-pretty">
            I&apos;m Ifeanyi, a product designer who engineers.
          </h1>
        </section>

        <section id="work" className="scroll-mt-26 pb-18 sm:pb-24 md:pb-31">
          <div className="flex items-baseline justify-between gap-5 border-b border-ink pb-6.5">
            <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              Selected work
            </div>
            <div className="font-mono text-[11px] font-medium text-muted">06</div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-x-7 gap-y-12 pt-10 sm:gap-x-12 sm:gap-y-16 md:pt-16">
            {projects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                data-cursor="case-study"
                className="flex flex-col gap-5 transition-opacity hover:opacity-80"
              >
                <div className="aspect-16/10 overflow-hidden rounded-md border border-[#E4E2DD] bg-card">
                  {p.media.type === "video" ? (
                    <video
                      src={p.media.src}
                      title={p.title}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={p.media.src}
                      alt={p.media.alt ?? p.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover object-[50%_0]"
                      unoptimized
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[length:clamp(19px,2.2vw,24px)] leading-[1.25] tracking-[-0.025em] font-satoshi font-medium text-ink text-pretty">
                    {p.title}
                  </div>
                  <div className="font-mono text-xs text-[#6B6B66]">{p.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <div className="mx-auto max-w-[1180px]">
        <PageFooter border="ink" />
      </div>
    </div>
  );
}
