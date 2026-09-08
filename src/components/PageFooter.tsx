const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ifeanyi-uzoma" },
  { label: "GitHub", href: "https://github.com/Ifyuzoma" },
  { label: "Behance", href: "https://www.behance.net/uzomaifeanyi" },
  { label: "Email", href: "mailto:Ifeanyiuzo5@gmail.com" },
];

export default function PageFooter({ border = "line" }: { border?: "ink" | "line" | "none" }) {
  const borderClass =
    border === "ink" ? "border-t border-ink" : border === "line" ? "border-t border-line" : "";
  return (
    <footer
      id="contact"
      className={`mx-auto flex max-w-[1180px] scroll-mt-[88px] flex-wrap items-end justify-between gap-6 py-6 ${borderClass}`}
    >
      <div className="font-mono text-[11px] text-muted">Designed + coded by Ifeanyi · 2026</div>
      <div className="flex flex-wrap gap-[18px] font-mono text-xs">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener" : undefined}
            className="text-[#3A3A3A] transition-colors hover:text-ink"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
