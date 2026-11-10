import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, Sparkles } from "lucide-react";

import { PixelGlobe, PixelSparkles } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { ODISHA_FOR_AI } from "@/lib/resources";
import { cn } from "@/lib/utils";

const CONTENT = {
  label: "Resources",
  kicker: "Knowledge for the curious",
  headline: ["The", "knowledge", "layer."],
  body: "The documents, tools, programmes and plain-language explainers that make AI in Odisha easier to understand — and easier to build with.",
  stats: [
    { label: "Resources", value: "10" },
    { label: "Collections", value: "04" },
    { label: "Languages", value: "02" },
    { label: "Access", value: "Open" },
  ],
};

const PREVIEW = [
  {
    number: "01",
    title: "AI Aware",
    detail: "What AI is, and what it isn't.",
  },
  {
    number: "02",
    title: "AI Appreciate",
    detail: "Where it shows up, and how to use it well.",
  },
  {
    number: "03",
    title: "Your learning plan",
    detail: "Choose a domain and keep going.",
  },
];

export default function ResourcesHero({ className }: { className?: string }) {
  return (
    <section
      id="hero"
      className={cn(
        "relative isolate overflow-hidden bg-forest px-5 pb-14 pt-32 text-lime md:px-10 md:pb-20 md:pt-40 xl:px-15 xl:pb-24 xl:pt-44",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-8 select-none font-display text-[34vw] uppercase leading-none tracking-[-0.06em] text-lime/5 md:bottom-0"
      >
        AI
      </span>

      <div className="relative mx-auto flex w-full max-w-360 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lime/20 pb-6">
          <p className="font-display text-sm uppercase leading-none tracking-[0.04em] text-lime/80 md:text-base">
            {CONTENT.label}
          </p>
          <p className="font-sans text-sm font-medium leading-none tracking-[-0.02em] text-lime/60 md:text-base">
            Curated by the community
          </p>
        </div>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-end lg:gap-16">
          <div className="flex flex-col items-start gap-7 md:gap-9">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2.5 font-display text-xl uppercase leading-none tracking-[0.04em] text-lime/70 md:text-2xl">
                <PixelSparkles className="size-5" />
                {CONTENT.kicker}
              </p>
              <h1 className="font-display text-[clamp(56px,11vw,120px)] font-normal uppercase leading-[0.88] tracking-[-0.03em] text-lime">
                {CONTENT.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            <p className="max-w-150 font-sans text-lg font-medium leading-6.5 tracking-[-0.02em] text-lime/80 md:text-xl md:leading-8">
              {CONTENT.body}
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-auto justify-center gap-2.5 rounded-xs bg-lime px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-forest shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-lime motion-reduce:transition-none"
              >
                <a href="#library">
                  Browse the library
                  <ArrowDownRight className="size-4 stroke-[2]" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto justify-center gap-2.5 rounded-xs border-[1.2px] border-lime bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest motion-reduce:transition-none"
              >
                <a href="#start">
                  Start here
                  <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-125 lg:mx-0 lg:justify-self-end">
            <div className="border border-lime/30 bg-secondary/35">
              <div className="flex items-center justify-between gap-4 bg-lime px-5 py-2.5 text-forest md:px-6">
                <span className="font-display text-xs uppercase leading-none tracking-[0.06em]">
                  Free · Open to all
                </span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.04em] text-forest/60">
                  No prerequisites
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-lime/20 p-5 md:p-6">
                <div className="flex flex-col gap-1.5">
                  <p className="font-display text-2xl uppercase leading-none tracking-[-0.01em] text-lime">
                    {ODISHA_FOR_AI.title}
                  </p>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.04em] text-lime/50">
                    Govt. of Odisha × Intel India
                  </p>
                </div>
                <span className="shrink-0 rounded-xs border border-lime/25 px-2 py-1 font-display text-[11px] uppercase leading-none tracking-[0.05em] text-lime/65">
                  ≈ 4 hrs
                </span>
              </div>

              <ul className="divide-y divide-lime/15">
                {PREVIEW.map((item) => (
                  <li
                    key={item.number}
                    className="flex items-start gap-4 p-5 md:px-6"
                  >
                    <span className="font-display text-2xl uppercase leading-none tracking-[-0.02em] text-lime/25">
                      {item.number}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="font-display text-lg uppercase leading-none tracking-[-0.01em] text-lime">
                        {item.title}
                      </p>
                      <p className="font-sans text-xs font-medium leading-5 tracking-[-0.01em] text-lime/55">
                        {item.detail}
                      </p>
                    </div>
                    {item.number === "03" ? (
                      <Sparkles
                        className="ml-auto size-4 shrink-0 text-lime/45"
                        aria-hidden="true"
                      />
                    ) : (
                      <Check
                        className="ml-auto size-4 shrink-0 text-lime/70"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-4 border-t border-lime/20 px-5 py-4 md:px-6">
                <span className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.04em] text-lime/55">
                  <PixelGlobe className="size-4 shrink-0" />
                  Self-paced · 2 languages
                </span>
                <Link
                  href="#start"
                  className="flex items-center gap-1.5 font-display text-xs uppercase tracking-[0.05em] text-lime outline-offset-4 transition-colors duration-200 hover:text-lime/70 focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none"
                >
                  How it works
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-lime/20 pt-7 sm:grid-cols-4 md:mt-20">
          {CONTENT.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-lime/50">
                {stat.label}
              </dt>
              <dd className="font-display text-[34px] font-normal uppercase leading-none tracking-[-0.02em] text-lime md:text-[42px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
