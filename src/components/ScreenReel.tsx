"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type ReelScreen = { src: string; label: string };

export default function ScreenReel({ screens }: { screens: ReelScreen[] }) {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + screens.length) % screens.length);
    },
    [screens.length],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const screen = screens[index];

  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border border-line bg-card p-6 sm:p-10">
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors hover:border-ink"
        >
          ←
        </button>

        <div className="flex w-[240px] flex-col items-center gap-4 sm:w-[280px]">
          <div className="w-full overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_24px_50px_-24px_rgba(0,0,0,.35)]">
            <Image
              src={screen.src}
              alt={screen.label}
              width={390}
              height={844}
              className="h-auto w-full"
              unoptimized
              priority
            />
          </div>
          <div className="text-center font-mono text-xs text-muted">
            {index + 1} / {screens.length} — {screen.label}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screen"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors hover:border-ink"
        >
          →
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {screens.map((s, i) => (
          <button
            key={s.src + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to ${s.label}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-ink" : "w-1.5 bg-[#D9D7D1] hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
