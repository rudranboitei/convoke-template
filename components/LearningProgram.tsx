import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { PixelClock, PixelGlobe, PixelSparkles, PixelUser } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { ODISHA_FOR_AI } from "@/lib/resources";
import { cn } from "@/lib/utils";

export default function LearningProgram({ className }: { className?: string }) {
  return (
    <section
      id="start"
      className={cn(
        "w-full bg-lime px-5 py-16 text-forest md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-6 border-b border-forest/25 pb-7 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2.5 font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-forest/60 md:text-[32px]">
              <PixelSparkles className="size-6" />
              {ODISHA_FOR_AI.label}
            </p>
            <h2 className="max-w-190 font-display text-[clamp(40px,8vw,72px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-forest">
              {ODISHA_FOR_AI.heading}
            </h2>
          </div>
          <p className="max-w-105 font-sans text-base font-medium leading-6 tracking-[-0.02em] text-forest/65 md:text-lg md:leading-7">
            {ODISHA_FOR_AI.summary}
          </p>
        </div>

        <div className="grid overflow-hidden border border-forest/25 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col gap-8 p-6 md:p-9 xl:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-xs bg-forest px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-lime">
                Government of Odisha
              </span>
              <span className="rounded-xs border border-forest/30 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-forest/70">
                Intel India
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-[clamp(38px,6vw,60px)] font-normal uppercase leading-[0.92] tracking-[-0.03em] text-forest">
                {ODISHA_FOR_AI.title}
              </h3>
              <p className="max-w-150 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-forest/85 md:text-xl md:leading-8">
                {ODISHA_FOR_AI.description}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 border-y border-forest/20 py-5">
              {ODISHA_FOR_AI.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-forest/50">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-xl uppercase leading-none tracking-[-0.01em] text-forest">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3 font-sans text-sm font-semibold leading-6 tracking-[-0.02em] text-forest/65">
              <span className="flex items-start gap-2.5">
                <PixelUser className="mt-0.5 size-4 shrink-0" />
                Built for students, parents, professionals and senior citizens.
              </span>
              <span className="flex items-start gap-2.5">
                <PixelGlobe className="mt-0.5 size-4 shrink-0" />
                {ODISHA_FOR_AI.accessibility}
              </span>
            </div>

            <Button
              asChild
              className="h-auto w-fit justify-center gap-2.5 rounded-xs bg-forest px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-forest motion-reduce:transition-none"
            >
              <a
                href={ODISHA_FOR_AI.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the programme
                <ArrowUpRight className="size-4 stroke-[2]" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
          </div>

          <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-forest p-6 text-lime md:p-9 xl:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-4 select-none font-display text-[180px] uppercase leading-none tracking-[-0.06em] text-lime/5"
            >
              AI
            </span>

            <div className="relative flex items-center justify-between gap-4 border-b border-lime/20 pb-4">
              <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-lime/70">
                The programme
              </p>
              <p className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.05em] text-lime/50">
                <PixelClock className="size-4" />
                Self-paced
              </p>
            </div>

            <ol className="relative flex flex-col gap-7">
              {ODISHA_FOR_AI.sections.map((section) => (
                <li key={section.number} className="flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-[40px] uppercase leading-[0.8] tracking-[-0.03em] text-lime/25">
                      {section.number}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="font-display text-xs uppercase tracking-[0.08em] text-lime/45">
                        {section.kicker}
                      </p>
                      <h4 className="font-display text-2xl uppercase leading-none tracking-[-0.01em] text-lime md:text-[28px]">
                        {section.title}
                      </h4>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 pl-14">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 font-sans text-sm font-medium leading-6 tracking-[-0.01em] text-lime/65"
                      >
                        <Check
                          className="mt-1 size-3.5 shrink-0 text-lime/45"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="relative flex items-start gap-3 border-t border-lime/20 pt-5">
              <Sparkles
                className="mt-0.5 size-4 shrink-0 text-lime/60"
                aria-hidden="true"
              />
              <p className="font-sans text-sm font-medium leading-6 tracking-[-0.01em] text-lime/60">
                {ODISHA_FOR_AI.after}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
