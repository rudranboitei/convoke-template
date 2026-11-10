import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { PixelSparkles } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { FEATURED_INITIATIVE, INITIATIVES } from "@/lib/initiatives";
import { cn } from "@/lib/utils";

const CONTENT = {
  label: "Initiatives",
  headline: ["Build. Learn.", "Ship. Repeat."],
  body: "Hackathons, learning series, research projects and open-source tools — all made by the community, all open to the community.",
  stats: [
    { label: "Initiatives", value: "10" },
    { label: "Tracks", value: "05" },
    { label: "Hackathon", value: "24/7" },
    { label: "Access", value: "Open" },
  ],
};

export default function InitiativesHero({ className }: { className?: string }) {
  const rathathon = INITIATIVES.find((initiative) => initiative.slug === "rathathon");
  const foundation = INITIATIVES.find(
    (initiative) => initiative.slug === "ai-foundation-series",
  );

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
        className="pointer-events-none absolute -right-8 bottom-8 select-none font-display text-[32vw] uppercase leading-none tracking-[-0.06em] text-lime/5 md:bottom-0"
      >
        10
      </span>

      <div className="relative mx-auto flex w-full max-w-360 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lime/20 pb-6">
          <p className="font-display text-sm uppercase leading-none tracking-[0.04em] text-lime/80 md:text-base">
            {CONTENT.label}
          </p>
          <p className="font-sans text-sm font-medium leading-none tracking-[-0.02em] text-lime/60 md:text-base">
            Community-built. Open to all.
          </p>
        </div>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col items-start gap-7 md:gap-9">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2.5 font-display text-xl uppercase leading-none tracking-[0.04em] text-lime/70 md:text-2xl">
                <PixelSparkles className="size-5" />
                The work behind the community
              </p>
              <h1 className="font-display text-[clamp(56px,11vw,118px)] font-normal uppercase leading-[0.88] tracking-[-0.03em] text-lime">
                {CONTENT.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            <p className="max-w-145 font-sans text-lg font-medium leading-6.5 tracking-[-0.02em] text-lime/80 md:text-xl md:leading-8">
              {CONTENT.body}
            </p>

            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-auto justify-center gap-2.5 rounded-xs bg-lime px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-forest shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-lime motion-reduce:transition-none"
              >
                <a href="#library">
                  Explore the library
                  <ArrowDownRight className="size-4 stroke-[2]" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto justify-center gap-2.5 rounded-xs border-[1.2px] border-lime bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest motion-reduce:transition-none"
              >
                <Link href={`/initiatives/${FEATURED_INITIATIVE.slug}`}>
                  See the open call
                  <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-140 flex-col gap-3 lg:mx-0 lg:justify-self-end">
            <Link
              href={`/initiatives/${FEATURED_INITIATIVE.slug}`}
              className="group relative block aspect-[16/10] overflow-hidden border border-lime/30 bg-secondary outline-offset-4 focus-visible:outline-2 focus-visible:outline-lime"
            >
              <Image
                src={
                  FEATURED_INITIATIVE.cardImage ?? FEATURED_INITIATIVE.image
                }
                alt={FEATURED_INITIATIVE.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                style={{ objectPosition: FEATURED_INITIATIVE.imagePosition }}
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
                <span className="rounded-xs bg-lime px-2.5 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-forest">
                  {FEATURED_INITIATIVE.status}
                </span>
                <span className="rounded-xs border border-lime/30 bg-forest/60 px-2 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-lime/75">
                  {FEATURED_INITIATIVE.category}
                </span>
              </div>
              <span className="absolute bottom-4 right-4 flex size-8 shrink-0 items-center justify-center rounded-xs bg-lime text-forest transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none">
                <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
              </span>
            </Link>

            <div className="grid grid-cols-2 gap-3">
              {[rathathon, foundation].map((initiative) =>
                initiative ? (
                  <Link
                    key={initiative.slug}
                    href={`/initiatives/${initiative.slug}`}
                    className="group relative aspect-[3/2] overflow-hidden border border-lime/25 bg-secondary outline-offset-4 focus-visible:outline-2 focus-visible:outline-lime"
                  >
                    <Image
                      src={initiative.image}
                      alt={initiative.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 275px, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transform-none motion-reduce:transition-none"
                      style={{ objectPosition: initiative.imagePosition }}
                    />
                  </Link>
                ) : null,
              )}
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
