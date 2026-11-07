"use client";

import { useEffect, useRef, useState } from "react";

const DIGIT_H = 62.5; // px, matches the 50px Anton counter box in the original
const STRIP_LEN = 9;  // how many digits roll past before landing on the target

/** Deterministic filler digits (no Math.random, so SSR and client markup match). */
function buildStrip(target: number, col: number) {
  const out: number[] = [];
  for (let i = 0; i < STRIP_LEN - 1; i++) out.push((i * 7 + col * 3 + target * 5 + 3) % 10);
  out.push(target);
  return out;
}

function Digit({ target, col, go }: { target: number; col: number; go: boolean }) {
  const strip = buildStrip(target, col);
  return (
    <span className="relative inline-flex h-[62.5px] w-[25px] justify-center overflow-hidden [mask-image:linear-gradient(transparent_0%,black_20%,black_80%,transparent_100%)]">
      <span
        className="absolute w-full transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          transform: go ? `translateY(-${(strip.length - 1) * DIGIT_H}px)` : "none",
          transitionDelay: `${col * 120}ms`,
        }}
      >
        {strip.map((d, i) => (
          <span key={i} className="flex h-[62.5px] items-center justify-center leading-none">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

/** Odometer-style counter that rolls to its value when scrolled into view. */
export default function RollingNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGo(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`${value}${suffix}`}
      className="inline-flex cursor-default items-center font-display text-[50px] font-normal leading-none tracking-normal text-lime tabular-nums"
    >
      {value.split("").map((c, i) => (
        <Digit key={i} target={Number(c)} col={i} go={go} />
      ))}
      {suffix && <span className="ml-[3px] leading-none">{suffix}</span>}
    </div>
  );
}
