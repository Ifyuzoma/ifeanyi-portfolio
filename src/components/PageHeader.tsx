import Link from "next/link";
import Image from "next/image";

type Variant = "home" | "about" | "fun" | "case";

const navLinkBase = "transition-colors";

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? `${navLinkBase} text-ink border-b border-ink pb-[3px]`
          : `${navLinkBase} text-muted-2 hover:text-ink`
      }
    >
      {children}
    </Link>
  );
}

export default function PageHeader({ variant }: { variant: Variant }) {
  const logoHref = variant === "home" ? "#top" : "/";

  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-[1180px] items-center justify-between gap-6 bg-cream py-[26px] md:py-8">
      <Link href={logoHref} className="block">
        <Image
          src="/uploads/UZOMA.png"
          alt="Uzoma"
          width={120}
          height={26}
          style={{ height: "26px", width: "auto" }}
          className="grayscale contrast-[1.15]"
          priority
        />
      </Link>
      <nav className="flex items-center gap-4 font-sans text-[13px] font-medium sm:gap-[30px]">
        {variant === "case" ? (
          <>
            <NavLink href="/#work">Work</NavLink>
            <NavLink href="/fun">Fun</NavLink>
            <NavLink href="/" active>
              ← Back
            </NavLink>
          </>
        ) : (
          <>
            <NavLink href={variant === "home" ? "#work" : "/#work"} active={variant === "home"}>
              Work
            </NavLink>
            <NavLink href="/about" active={variant === "about"}>
              About
            </NavLink>
            <NavLink href="/fun" active={variant === "fun"}>
              Fun
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
