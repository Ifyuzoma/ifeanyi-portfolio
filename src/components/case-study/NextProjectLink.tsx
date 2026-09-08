import Link from "next/link";

export default function NextProjectLink({
  label = "Next project",
  title,
  href,
}: {
  label?: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="mt-14 flex items-center justify-between gap-6 border-t border-ink py-8 transition-opacity hover:opacity-70 sm:mt-20 md:mt-28"
    >
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[10px] font-medium tracking-[0.14em] text-muted uppercase">
          {label}
        </div>
        <div className="text-[length:clamp(22px,3.2vw,34px)] leading-[1.1] tracking-[-0.03em] font-satoshi font-medium text-ink">
          {title}
        </div>
      </div>
      <div className="text-[length:clamp(20px,2.6vw,28px)] leading-none">→</div>
    </Link>
  );
}
