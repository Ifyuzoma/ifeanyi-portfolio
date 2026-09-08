export default function TagsRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-3.5 gap-y-2.5 font-mono text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-3.5">
          {i > 0 && <span aria-hidden>·</span>}
          {t}
        </span>
      ))}
    </div>
  );
}
