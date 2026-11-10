import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PixelCalendar, PixelSparkles } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { FEATURED_INITIATIVE } from "@/lib/initiatives";
import { cn } from "@/lib/utils";

const FACTS = [
  { label: "Demo day", value: "14 June 2026" },
  { label: "Prize pool", value: "$1,000" },
  { label: "Top award", value: "$100 × 10" },
  { label: "Access", value: "Community only" },
];

export default function FeaturedInitiative({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      id="open-call"
      className={cn(
        "w-full bg-lime px-5 py-16 text-forest md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10">
        <div className="flex flex-col gap-6 border-b border-forest/25 pb-7 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2.5 font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-forest/60 md:text-[32px]">
              <PixelSparkles className="size-6" />
              Open call
            </p>
            <h2 className="max-w-190 font-display text-[clamp(40px,8vw,72px)] font-normal uppercase leading-[0.92] tracking-[-0.03em] text-forest">
              Build the next Odia AI breakthrough.
            </h2>
          </div>
          <p className="max-w-100 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-forest/65 md:text-right md:text-lg">
            A Request for Software, open to the people already learning and
            building inside the community.
          </p>
        </div>

        <div className="grid overflow-hidden border border-forest/25 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="flex flex-col gap-8 p-6 md:p-9 xl:p-12">
            <div className="flex flex-wrap gap-2">
              {FEATURED_INITIATIVE.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xs border border-forest/30 px-2.5 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-forest/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="max-w-140 font-display text-[clamp(38px,6vw,60px)] font-normal uppercase leading-[0.92] tracking-[-0.03em] text-forest">
                {FEATURED_INITIATIVE.title}
              </h3>
              <p className="max-w-150 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-forest/85 md:text-xl md:leading-8">
                {FEATURED_INITIATIVE.tagline}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 border-y border-forest/20 py-5">
              {FACTS.map((fact) => (
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

            <div className="flex flex-col gap-3 font-sans text-sm font-semibold tracking-[-0.02em] text-forest/65 sm:flex-row sm:items-center sm:gap-x-6">
              <span className="flex items-center gap-2">
                <PixelCalendar className="size-4 shrink-0" />
                Submissions close on demo day
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-forest" aria-hidden="true" />
                Odia speech → English, Mandarin, Hindi
              </span>
            </div>

            <Button
              asChild
              className="h-auto w-fit justify-center gap-2.5 rounded-xs bg-forest px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-forest motion-reduce:transition-none"
            >
              <Link href={`/initiatives/${FEATURED_INITIATIVE.slug}`}>
                Explore the challenge
                <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="relative min-h-100 overflow-hidden bg-secondary lg:min-h-full">
            <Image
              src={FEATURED_INITIATIVE.image}
              alt={FEATURED_INITIATIVE.imageAlt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
              style={{ objectPosition: FEATURED_INITIATIVE.imagePosition }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
