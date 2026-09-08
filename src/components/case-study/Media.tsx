import Image from "next/image";
import type { Shot } from "@/lib/types";

function Caption({ children }: { children: React.ReactNode }) {
  return <figcaption className="max-w-[64ch] font-mono text-xs leading-[1.55] text-muted">{children}</figcaption>;
}

export function MediaGroup({
  shots,
  caption,
  itemSize = "clamp(140px,20vw,250px)",
  bordered = true,
}: {
  shots: Shot[];
  caption: string;
  itemSize?: string;
  bordered?: boolean;
}) {
  return (
    <figure className="mt-7 flex flex-col gap-3.5 sm:mt-10">
      <div
        className={`flex flex-wrap items-start justify-center gap-4 rounded-lg bg-card p-5 sm:gap-9 sm:p-12 ${
          bordered ? "border border-line" : ""
        }`}
      >
        {shots.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-3" style={{ flex: `0 1 ${itemSize}` }}>
            <Image
              src={s.src}
              alt={s.alt ?? s.label}
              width={500}
              height={1000}
              className={`h-auto w-full rounded-[clamp(12px,1.8vw,24px)] shadow-[0_20px_44px_-20px_rgba(0,0,0,.36)] ${
                s.imgClassName ?? ""
              }`}
              unoptimized
            />
            <div className="text-center font-mono text-[11px] leading-[1.4] text-muted">{s.label}</div>
          </div>
        ))}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function MediaWide({ shots, caption }: { shots: Shot[]; caption: string }) {
  return (
    <figure className="mt-7 flex flex-col gap-4 sm:mt-10">
      {shots.map((s, i) => (
        <div key={i} className="flex flex-col gap-2.5">
          <Image
            src={s.src}
            alt={s.alt ?? s.label}
            width={1200}
            height={700}
            className="h-auto w-full rounded-lg border border-line shadow-[0_18px_40px_-24px_rgba(0,0,0,.22)]"
            unoptimized
          />
          <div className="font-mono text-[11px] leading-[1.4] text-muted">{s.label}</div>
        </div>
      ))}
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function MediaCards({ shots, caption }: { shots: Shot[]; caption: string }) {
  return (
    <figure className="mt-7 flex flex-col gap-3.5 sm:mt-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {shots.map((s, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
            <div className="border-b border-line bg-card-alt px-3.5 py-2.5 font-mono text-[10px] tracking-[0.06em] text-muted">
              {s.label}
            </div>
            <div className="h-[clamp(220px,26vw,320px)] overflow-hidden">
              <Image
                src={s.src}
                alt={s.alt ?? s.label}
                width={1200}
                height={800}
                className={`h-auto w-full ${s.imgClassName ?? ""}`}
                style={s.imgStyle}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function BrowserFrame({
  url,
  src,
  alt,
  caption,
}: {
  url: string;
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="mt-9 flex flex-col gap-3.5 sm:mt-16">
      <div className="overflow-hidden rounded-lg border border-line bg-card">
        <div className="flex items-center gap-1.5 border-b border-line bg-card-alt px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-dot" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot" />
          <span className="ml-3 font-mono text-[11px] text-muted">{url}</span>
        </div>
        <div className="max-h-[clamp(420px,64vh,720px)] overflow-hidden bg-white">
          <Image src={src} alt={alt} width={1600} height={2400} className="h-auto w-full" unoptimized />
        </div>
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

export function HeroGrid3({ images, caption }: { images: { src: string; alt: string }[]; caption: string }) {
  return (
    <figure className="mt-9 flex flex-col gap-3.5 sm:mt-16">
      <div className="grid grid-cols-3 items-end justify-items-center gap-4 rounded-lg bg-card p-8 sm:gap-12 sm:p-15">
        {images.map((im, i) => (
          <Image
            key={i}
            src={im.src}
            alt={im.alt}
            width={400}
            height={800}
            className="h-auto w-full max-w-[230px]"
            unoptimized
          />
        ))}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}
