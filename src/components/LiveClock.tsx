"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(t);
  }, []);

  if (!now) return null;

  const tz = { timeZone: "America/Toronto" };
  const clock = now
    .toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", ...tz })
    .replace(":", " ");
  const today = now.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", ...tz });

  return (
    <div className="mt-auto flex flex-col gap-1.5">
      <div className="text-[length:clamp(28px,3.4vw,40px)] leading-none tracking-[-0.02em] font-mono font-medium text-ink">
        {clock}
      </div>
      <div className="font-sans text-[13px] text-body">{today}</div>
    </div>
  );
}
