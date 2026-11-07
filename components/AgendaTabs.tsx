"use client";

import { useEffect, useRef, useState } from "react";

import { PixelCalendar, PixelClock } from "@/components/PixelIcons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type Session = { title: string; body: string; time: string };
export type Day = { id: string; label: string; sessions: Session[] };

type Pos = { left: number; top: number; width: number; height: number };

// Pill and its inner lime labels MUST share the same timing so they stay aligned
const SLIDE =
  "transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export default function AgendaTabs({ days }: { days: Day[] }) {
  const [value, setValue] = useState(days[0].id);
  const [rects, setRects] = useState<Record<string, Pos> | null>(null);
  const [animate, setAnimate] = useState(false);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const list = useRef<HTMLDivElement>(null);

  const pos = rects?.[value] ?? null;

  // Measure every tab so the pill (and its lime label copies) can be placed exactly
  useEffect(() => {
    const measure = () => {
      const next: Record<string, Pos> = {};
      for (const d of days) {
        const el = triggers.current[d.id];
        if (!el) return;
        next[d.id] = {
          left: el.offsetLeft,
          top: el.offsetTop,
          width: el.offsetWidth,
          height: el.offsetHeight,
        };
      }
      setRects(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (list.current) ro.observe(list.current);
    Object.values(triggers.current).forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [days]);

  // Turn transitions on only after the first placement, so the pill doesn't fly in on load
  useEffect(() => {
    if (!rects || animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [rects, animate]);

  return (
    <Tabs value={value} onValueChange={setValue} className="gap-0">
      <TabsList
        ref={list}
        data-ready={rects !== null}
        className="group/list relative h-auto w-full flex-wrap justify-start gap-2.5 rounded-none bg-transparent p-0"
      >
        {days.map((d) => (
          <TabsTrigger
            key={d.id}
            value={d.id}
            ref={(el) => {
              triggers.current[d.id] = el;
            }}
            // Text is ALWAYS forest here. The pill (above) covers the active tab and shows lime text.
            // The active styles below only apply before the first measurement (SSR / first paint).
            className="relative h-auto flex-none cursor-pointer gap-2.5 rounded-[2px] border border-forest bg-transparent px-5 py-4 font-display text-xl font-normal uppercase leading-none tracking-[0.02em] text-forest shadow-none transition-colors duration-150 hover:bg-forest/10 hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest motion-reduce:transition-none data-[state=active]:bg-transparent data-[state=active]:text-forest data-[state=active]:shadow-none group-data-[ready=false]/list:data-[state=active]:bg-forest group-data-[ready=false]/list:data-[state=active]:text-lime"
          >
            <PixelCalendar className="size-5" />
            {d.label}
          </TabsTrigger>
        ))}

        {/* Sliding pill: sits ABOVE the tabs, opaque forest, clips a lime copy of the labels */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-0 z-20 overflow-hidden rounded-[2px] bg-forest ${animate ? `${SLIDE} [transition-property:transform,width,height]` : ""
            }`}
          style={{
            width: pos?.width ?? 0,
            height: pos?.height ?? 0,
            transform: `translate(${pos?.left ?? 0}px, ${pos?.top ?? 0}px)`,
            opacity: pos ? 1 : 0,
          }}
        >
          {/* Counter-translate so the lime labels line up with the real tabs underneath */}
          <span
            className={`absolute left-0 top-0 block ${animate ? SLIDE : ""}`}
            style={{
              transform: `translate(${-(pos?.left ?? 0)}px, ${-(pos?.top ?? 0)}px)`,
            }}
          >
            {days.map((d) => {
              const r = rects?.[d.id];
              if (!r) return null;
              return (
                <span
                  key={d.id}
                  className="absolute flex items-center justify-center gap-2.5 whitespace-nowrap border border-transparent px-5 py-4 font-display text-xl font-normal uppercase leading-none tracking-[0.02em] text-lime"
                  style={{ left: r.left, top: r.top, width: r.width, height: r.height }}
                >
                  <PixelCalendar className="size-5" />
                  {d.label}
                </span>
              );
            })}
          </span>
        </span>
      </TabsList>

      {days.map((d) => (
        <TabsContent
          key={d.id}
          value={d.id}
          // fade + slight rise on the whole container whenever a day becomes active
          className="mt-12 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-3 data-[state=active]:duration-300 data-[state=active]:ease-out motion-reduce:animate-none lg:mt-[68px]"
        >
          <ol>
            {d.sessions.map((s, i) => (
              <li
                key={s.title}
                style={{ animationDelay: `${i * 60}ms` }}
                className="group relative grid animate-in grid-cols-[14px_1fr] gap-x-[22px] pb-14 duration-500 ease-out fade-in-0 slide-in-from-bottom-4 fill-mode-backwards last:pb-0 motion-reduce:animate-none md:grid-cols-[14px_1fr_auto] lg:pb-[72px]"
              >
                <span aria-hidden="true" className="mt-[9px] size-[14px] rounded-[2px] bg-forest" />
                <span
                  aria-hidden="true"
                  className="absolute bottom-[3px] left-[6.5px] top-[33px] w-px bg-forest group-last:hidden"
                />

                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-[28px] font-normal uppercase leading-[1.05] tracking-[-0.02em] text-forest md:text-[32px]">
                    {s.title}
                  </h3>
                  <p className="max-w-[620px] font-sans text-lg font-medium leading-[28px] tracking-[-0.02em] text-forest md:text-xl md:leading-[31px]">
                    {s.body}
                  </p>
                </div>

                <p className="col-start-2 mt-4 flex items-center gap-2.5 whitespace-nowrap font-display text-xl uppercase leading-none tracking-[-0.01em] text-forest md:col-start-3 md:row-start-1 md:mt-0">
                  <PixelClock className="size-5 shrink-0" />
                  {s.time}
                </p>
              </li>
            ))}
          </ol>
        </TabsContent>
      ))}
    </Tabs>
  );
}
