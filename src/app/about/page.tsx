import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import LiveClock from "@/components/LiveClock";

export const metadata: Metadata = {
  title: "About — Ifeanyi Uzoma",
  description: "A designer, problem solver, and curious human, making things people actually enjoy using.",
};

const offDuty = [
  { n: "01", t: "discovering new places and going for long walks" },
  { n: "02", t: "exploring new ideas and obsessing over good design" },
  { n: "03", t: "watching football" },
  { n: "04", t: "listening to music" },
];

const shows = [
  { n: "01", t: "Reacher", src: "/uploads/show-reacher.jpg" },
  { n: "02", t: "R.J. Decker", src: "/uploads/show-rj-decker.jpg" },
  { n: "03", t: "Silo", src: "/uploads/show-silo.jpg" },
  { n: "04", t: "The Middle", src: "/uploads/show-the-middle.jpg" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream px-5 sm:px-8 md:px-16">
      <PageHeader variant="about" />
      <main className="mx-auto max-w-[1180px]">
        <section className="pt-10 pb-14 sm:pt-13 sm:pb-20 md:pt-16 md:pb-26">
          <div className="flex items-baseline justify-between gap-5 pb-7 sm:pb-11">
            <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-[#6B6B66] uppercase">
              About
            </div>
            <div className="font-mono text-[11px] font-medium text-[#6B6B66]">Ifeanyi</div>
          </div>

          <h1 className="max-w-[26ch] text-[length:clamp(30px,5.2vw,64px)] leading-[1.06] tracking-[-0.038em] font-satoshi font-medium text-ink text-pretty">
            I&apos;m a designer, problem solver, &amp; curious human, making things people actually enjoy using.
          </h1>

          <div className="flex flex-wrap items-start gap-7 pt-8 sm:gap-16 sm:pt-14">
            <div className="flex min-w-0 max-w-[56ch] flex-1 basis-85 flex-col gap-5.5">
              <p className="m-0 text-[length:clamp(15px,1.55vw,18px)] leading-[1.7] text-body text-pretty">
                I think deeply about people, products, and how technology can make everyday experiences a little
                better. These days, I&apos;m having the most fun exploring the space where design, technology, and
                AI meet.
              </p>
              <p className="m-0 text-[length:clamp(15px,1.55vw,18px)] leading-[1.7] text-body text-pretty">
                Currently open to design opportunities and collaborations. If you&apos;re building something cool,
                let&apos;s chat.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/ifeanyi-uzoma"
                  target="_blank"
                  rel="noopener"
                  className="rounded-full border border-ink px-4 py-2.75 font-mono text-xs text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:Ifeanyiuzo5@gmail.com"
                  className="rounded-full border border-line px-4 py-2.75 font-mono text-xs text-ink transition-colors hover:border-ink"
                >
                  Email me
                </a>
              </div>
              <div className="flex flex-col gap-3.5">
                <div className="text-[length:clamp(15px,1.5vw,17px)] leading-[1.6] text-ink">
                  Outside of pixels, prototypes, and endless Figma tabs, I&apos;m:
                </div>
                <div className="flex flex-col border-t border-line">
                  {offDuty.map((o) => (
                    <div key={o.n} className="grid grid-cols-[34px_1fr] gap-3 border-b border-line py-3.5">
                      <div className="font-mono text-xs font-medium leading-[1.5] text-[#6B6B66]">{o.n}</div>
                      <div className="text-[15px] leading-[1.55] text-body">{o.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-[0_1_300px] flex-col gap-2.5">
              <Image
                src="/uploads/portrait-ifeanyi.jpg"
                alt="Ifeanyi"
                width={300}
                height={375}
                className="aspect-4/5 w-full rounded-md border border-line object-cover object-[50%_32%]"
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-7 pb-14 sm:gap-11 sm:pb-20 md:pb-26">
          <div className="flex items-baseline justify-between gap-5 border-t border-ink pt-6.5 pb-5 sm:pt-10">
            <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-[#6B6B66] uppercase">
              Off the clock
            </div>
            <div className="font-mono text-[11px] font-medium text-[#6B6B66]">Right now</div>
          </div>

          <div className="flex flex-wrap items-stretch gap-4 sm:gap-6">
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-3 rounded-lg border border-line bg-white p-4 sm:p-5">
              <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-[#6B6B66] uppercase">
                Last played
              </div>
              <iframe
                src="https://open.spotify.com/embed/album/6WqlTMTWck54798Lhpv39d?utm_source=generator&theme=0"
                title="Last played on Spotify"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="block h-38 w-full rounded-md border-0"
              />
            </div>

            <div className="flex min-w-0 flex-[0_1_240px] flex-col gap-3 rounded-lg border border-line bg-white p-4 sm:p-5">
              <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-[#6B6B66] uppercase">
                Toronto, Canada
              </div>
              <LiveClock />
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-5 sm:gap-10">
            <div className="flex flex-col gap-3.5">
              <div className="text-[length:clamp(19px,2.2vw,24px)] leading-[1.25] tracking-[-0.025em] font-satoshi font-medium text-ink">
                Shows I watched
              </div>
              <div className="flex flex-col border-t border-line">
                {shows.map((s) => (
                  <div key={s.n} className="grid grid-cols-[34px_44px_1fr] items-center gap-3 border-b border-line py-3">
                    <div className="font-mono text-xs font-medium leading-[1.5] text-[#6B6B66]">{s.n}</div>
                    <Image
                      src={s.src}
                      alt={s.t}
                      width={44}
                      height={66}
                      className="aspect-2/3 w-11 rounded-sm border border-line object-cover"
                      unoptimized
                    />
                    <div className="text-[15px] leading-[1.55] text-body">{s.t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-3.5">
              <div className="text-[length:clamp(19px,2.2vw,24px)] leading-[1.25] tracking-[-0.025em] font-satoshi font-medium text-ink">
                Favourite album
              </div>
              <iframe
                src="https://open.spotify.com/embed/album/7mj5fvMdUDCtTy9HPpjBHr?utm_source=generator&theme=0"
                title="Favourite album on Spotify"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="block h-[clamp(352px,42vw,420px)] w-full rounded-lg border border-line"
              />
            </div>
          </div>
        </section>

        <Link
          href="/#work"
          className="flex items-center justify-between gap-6 border-t border-ink py-7 transition-opacity hover:opacity-70 sm:py-10"
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
