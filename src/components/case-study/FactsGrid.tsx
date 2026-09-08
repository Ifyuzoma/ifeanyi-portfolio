import type { Fact } from "@/lib/types";

export default function FactsGrid({ facts }: { facts: Fact[] }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-9 gap-y-9 border-t border-ink border-b border-b-line py-6 md:py-8">
      {facts.map((f, i) => (
        <div key={i} className="flex flex-col gap-2.5 pt-3.5">
          <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-muted uppercase">
            {f.k}
          </div>
          <div className="font-sans text-sm text-ink">{f.v}</div>
        </div>
      ))}
    </section>
  );
}
