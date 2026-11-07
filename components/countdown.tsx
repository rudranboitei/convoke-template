"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

// Shows DD:HH:MM:SS until `target`. Renders "--" until mounted to avoid a hydration mismatch.
export function Countdown({ target }: { target: string }) {
  const [msLeft, setMsLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setMsLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const s = msLeft === null ? null : Math.floor(msLeft / 1000);
  const parts =
    s === null
      ? ["--", "--", "--", "--"]
      : [
        Math.floor(s / 86400),
        Math.floor((s % 86400) / 3600),
        Math.floor((s % 3600) / 60),
        s % 60,
      ].map((n) => String(n).padStart(2, "0"));

  return (
    <div
      role="timer"
      aria-label="Time left until the event"
      className="flex items-center gap-3 font-display text-2xl font-normal leading-[1.1] tabular-nums text-[#FFFF64]"
    >
      <Timer className="size-6" strokeWidth={2} aria-hidden />
      <div className="flex items-center gap-1">
        {parts.map((p, i) => (
          <span key={i} className="flex items-center gap-1">
            <span>{p}</span>
            {i < parts.length - 1 && <span aria-hidden>:</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
