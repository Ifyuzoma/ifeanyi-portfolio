import type { Chapter, Decision, Closer, Media as MediaT } from "@/lib/types";
import { SplitBlock, Paras, ListRows, CalloutBlock, KVRows } from "./SplitBlock";
import { MediaGroup, MediaWide, MediaCards } from "./Media";

function MediaByKind({ media }: { media?: MediaT }) {
  if (!media) return null;
  if (media.kind === "wide") return <MediaWide shots={media.shots} caption={media.caption} />;
  if (media.kind === "cards") return <MediaCards shots={media.shots} caption={media.caption} />;
  return (
    <MediaGroup
      shots={media.shots}
      caption={media.caption}
      bordered={media.bordered ?? true}
      itemSize={media.itemSize}
    />
  );
}

export function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section className="pt-14 sm:pt-20 md:pt-28">
      <SplitBlock eyebrow={chapter.n} title={chapter.title}>
        <Paras items={chapter.paras} />
        {chapter.list && <ListRows items={chapter.list} />}
        {chapter.callout && <CalloutBlock label={chapter.callout.label} text={chapter.callout.text} />}
      </SplitBlock>
      <MediaByKind media={chapter.media} />
    </section>
  );
}

export function DecisionsSection({
  heading,
  decisions,
  colWidth,
}: {
  heading: string;
  decisions: Decision[];
  colWidth?: string;
}) {
  const count = decisions.length.toString().padStart(2, "0");
  return (
    <section className="pt-14 sm:pt-20 md:pt-28">
      <div className="flex items-baseline justify-between gap-5 border-b border-ink pb-5">
        <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
          {heading}
        </div>
        <div className="font-mono text-[11px] font-medium text-muted">01–{count}</div>
      </div>
      {decisions.map((d, i) => (
        <div key={i} className="border-b border-line py-9 sm:py-14 md:py-18">
          <SplitBlock eyebrow={d.n} title={d.title} titleAs="h3">
            <KVRows rows={d.rows} colWidth={colWidth} />
          </SplitBlock>
          <MediaByKind media={d.media} />
        </div>
      ))}
    </section>
  );
}

export function CloserSection({ closer }: { closer: Closer }) {
  return (
    <section className="pt-12 sm:pt-16 md:pt-24">
      <SplitBlock eyebrow={closer.n} title={closer.title}>
        <Paras items={closer.paras} />
        {closer.rows && <KVRows rows={closer.rows} colWidth="clamp(90px,11vw,132px)" />}
      </SplitBlock>
    </section>
  );
}

export { MediaByKind };
