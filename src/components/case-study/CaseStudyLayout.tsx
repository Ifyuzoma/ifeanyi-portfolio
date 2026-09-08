import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import CaseHero from "./CaseHero";
import FactsGrid from "./FactsGrid";
import { ChapterSection, DecisionsSection, CloserSection, MediaByKind } from "./Sections";
import NextProjectLink from "./NextProjectLink";
import type { CaseStudyData } from "@/lib/types";

export default function CaseStudyLayout({
  data,
  heroMedia,
  decisionColWidth,
}: {
  data: CaseStudyData;
  heroMedia?: React.ReactNode;
  decisionColWidth?: string;
}) {
  return (
    <div className="min-h-screen bg-cream px-5 sm:px-8 md:px-16">
      <PageHeader variant="case" />
      <main className="mx-auto max-w-[1180px]">
        <CaseHero tags={data.tags} title={data.title} dek={data.dek} liveUrl={data.liveUrl} />
        <FactsGrid facts={data.facts} />
        {heroMedia}
        {data.chapters.map((c, i) => (
          <ChapterSection key={i} chapter={c} />
        ))}
        <DecisionsSection
          heading={data.decisionsHeading}
          decisions={data.decisions}
          colWidth={decisionColWidth}
        />
        {data.closers.map((c, i) => (
          <CloserSection key={i} closer={c} />
        ))}
        <MediaByKind media={data.finalShots} />
        <NextProjectLink
          label={data.nextProject.label}
          title={data.nextProject.title}
          href={data.nextProject.href}
        />
      </main>
      <div className="mx-auto max-w-[1180px]">
        <PageFooter />
      </div>
    </div>
  );
}
