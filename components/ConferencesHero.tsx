import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { PixelCalendar, PixelLocationPin } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { UPCOMING_CONFERENCE } from "@/lib/conferences";
import { cn } from "@/lib/utils";

const CONTENT = {
  label: "Conferences & Summits",
  headline: ["Where Odisha", "meets the", "frontier."],
  body: "Seven editions. One continuous conversation about what AI can do for Odisha — and what Odisha can contribute to AI.",
  stats: [
    { label: "Editions", value: "07" },
    { label: "Years", value: "2020—26" },
    { label: "Days in 2026", value: "03" },
    { label: "Sessions", value: "60+" },
  ],
};

export default function ConferencesHero({ className }: { className?: string }) {
  const upcoming = UPCOMING_CONFERENCE;

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
        className="pointer-events-none absolute -right-10 bottom-10 select-none font-display text-[34vw] uppercase leading-none tracking-[-0.06em] text-lime/5 md:bottom-0"
      >
        2026
      </span>

      <div className="relative mx-auto flex w-full max-w-360 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lime/20 pb-6">
          <p className="font-display text-sm uppercase leading-none tracking-[0.04em] text-lime/80 md:text-base">
            {CONTENT.label}
          </p>
          <p className="font-sans text-sm font-medium leading-none tracking-[-0.02em] text-lime/60 md:text-base">
            A global home for Odias in AI
          </p>
        </div>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div className="flex flex-col items-start gap-7 md:gap-9">
            <div className="flex flex-col gap-4">
              <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-lime/70 md:text-2xl">
                Since 2020
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
                <Link href="/conferences/2026">
                  Explore 2026
                  <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto justify-center gap-2.5 rounded-xs border-[1.2px] border-lime bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest motion-reduce:transition-none"
              >
                <a href="#archive">
                  All editions
                  <ArrowDownRight className="size-4 stroke-[2]" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          {upcoming ? (
            <div className="relative mx-auto w-full max-w-125 lg:mx-0 lg:justify-self-end">
              <div className="absolute -left-3 top-6 z-10 hidden rounded-xs bg-lime px-3 py-2 font-display text-sm uppercase leading-none tracking-[0.06em] text-forest sm:block">
                Next up
              </div>

              <div className="relative aspect-[4/5] overflow-hidden border border-lime/30 bg-secondary">
                <Image
                  src={upcoming.image}
                  alt={upcoming.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: upcoming.imagePosition }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-x border-b border-lime/20 px-4 py-3 text-lime/65">
                <span className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.04em]">
                  <PixelCalendar className="size-4 shrink-0" />
                  {upcoming.date}
                </span>
                <span className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.04em]">
                  <PixelLocationPin className="size-4 shrink-0" />
                  Hybrid
                </span>
                <span className="font-display text-sm uppercase tracking-[0.04em]">
                  {upcoming.hashtag}
                </span>
              </div>
            </div>
          ) : null}
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
