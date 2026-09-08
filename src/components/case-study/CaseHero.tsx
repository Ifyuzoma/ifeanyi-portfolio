import Link from "next/link";
import TagsRow from "./TagsRow";

export default function CaseHero({
  tags,
  title,
  dek,
  liveUrl,
}: {
  tags: string[];
  title: string;
  dek: string;
  liveUrl?: string;
}) {
  return (
    <section className="pt-12 pb-8 sm:pt-20 sm:pb-13 md:pt-26">
      <TagsRow items={tags} />
      <h1 className="mt-5 max-w-[20ch] text-[length:clamp(34px,6.2vw,72px)] leading-[1.04] tracking-[-0.04em] font-satoshi font-medium text-ink text-pretty sm:mt-8">
        {title}
      </h1>
      <p className="mt-6 max-w-[62ch] text-[length:clamp(16px,1.6vw,19px)] leading-[1.6] text-body text-pretty sm:mt-9">
        {dek}
      </p>
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center gap-2.5 self-start rounded-full bg-ink px-[22px] py-3.5 font-sans text-[13px] font-medium tracking-[-0.005em] text-cream transition-colors hover:bg-[#2A2A2A] sm:mt-8"
        >
          View website <span className="font-mono text-xs">↗</span>
        </Link>
      )}
    </section>
  );
}
