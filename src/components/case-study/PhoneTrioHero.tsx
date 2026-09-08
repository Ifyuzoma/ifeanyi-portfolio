import Image from "next/image";

export default function PhoneTrioHero({
  images,
  caption,
}: {
  images: [{ src: string; alt: string }, { src: string; alt: string }, { src: string; alt: string }];
  caption: string;
}) {
  const [left, center, right] = images;
  const sideClass =
    "w-[clamp(88px,15vw,214px)] h-auto rounded-[clamp(10px,1.6vw,24px)] shadow-[0_18px_40px_-18px_rgba(0,0,0,.34)]";
  return (
    <figure className="mt-9 flex flex-col gap-3.5 sm:mt-16">
      <div className="flex flex-wrap items-end justify-center gap-6 rounded-lg bg-card px-4 py-10 sm:gap-11 sm:px-10 sm:py-14">
        <Image src={left.src} alt={left.alt} width={214} height={463} className={sideClass} unoptimized />
        <Image
          src={center.src}
          alt={center.alt}
          width={278}
          height={601}
          className="relative z-[2] h-auto w-[clamp(116px,20vw,278px)] rounded-[clamp(12px,2.2vw,30px)] shadow-[0_26px_54px_-20px_rgba(0,0,0,.4)]"
          unoptimized
        />
        <Image src={right.src} alt={right.alt} width={214} height={463} className={sideClass} unoptimized />
      </div>
      <figcaption className="max-w-[64ch] font-mono text-xs leading-[1.55] text-muted">{caption}</figcaption>
    </figure>
  );
}
