export function SplitBlock({
  eyebrow,
  title,
  titleAs = "h2",
  children,
}: {
  eyebrow: string;
  title: string;
  titleAs?: "h2" | "h3";
  children: React.ReactNode;
}) {
  const Title = titleAs;
  const titleClass =
    titleAs === "h2"
      ? "max-w-[16ch] text-[length:clamp(24px,3.4vw,38px)] leading-[1.12] tracking-[-0.03em] font-satoshi font-medium text-ink text-pretty"
      : "max-w-[16ch] text-[length:clamp(23px,3.2vw,34px)] leading-[1.14] tracking-[-0.03em] font-satoshi font-medium text-ink text-pretty";

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-x-14 gap-y-5">
      <div className="sticky top-[92px] flex flex-col gap-3.5">
        <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
          {eyebrow}
        </div>
        <Title className={titleClass}>{title}</Title>
      </div>
      <div className="flex max-w-[66ch] flex-col gap-5">{children}</div>
    </div>
  );
}

export function Paras({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p, i) => (
        <p key={i} className="font-sans text-[length:clamp(15px,1.5vw,17px)] leading-[1.7] text-body text-pretty">
          {p}
        </p>
      ))}
    </>
  );
}

export function ListRows({ items }: { items: { n: string; t: string }[] }) {
  return (
    <div className="flex flex-col border-t border-line">
      {items.map((l, i) => (
        <div key={i} className="grid grid-cols-[34px_1fr] gap-3.5 border-b border-line py-4">
          <div className="font-mono text-[13px] font-medium text-muted">{l.n}</div>
          <div className="font-sans text-[15px] leading-[1.6] text-ink">{l.t}</div>
        </div>
      ))}
    </div>
  );
}

export function CalloutBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-ink py-1 pl-5">
      <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-muted uppercase">
        {label}
      </div>
      <div className="text-[length:clamp(17px,2vw,21px)] leading-[1.45] tracking-[-0.015em] font-satoshi font-medium text-ink">
        {text}
      </div>
    </div>
  );
}

export function KVRows({
  rows,
  colWidth = "clamp(76px,9vw,104px)",
}: {
  rows: { k: string; v: string }[];
  colWidth?: string;
}) {
  return (
    <div className="flex flex-col">
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid gap-x-4 gap-y-4 border-t border-line py-[18px]"
          style={{ gridTemplateColumns: `${colWidth} 1fr` }}
        >
          <div className="font-mono text-[10px] font-medium tracking-[0.12em] text-muted uppercase leading-[1.6]">
            {r.k}
          </div>
          <p className="m-0 font-sans text-[length:clamp(15px,1.5vw,17px)] leading-[1.7] text-body text-pretty">
            {r.v}
          </p>
        </div>
      ))}
    </div>
  );
}
