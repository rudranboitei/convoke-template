"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { PixelCalendar } from "@/components/PixelIcons";
import {
  INITIATIVES,
  INITIATIVE_CATEGORIES,
  type InitiativeCategory,
} from "@/lib/initiatives";
import { cn } from "@/lib/utils";

type Filter = "All" | InitiativeCategory;

export default function InitiativeLibrary({
  className,
}: {
  className?: string;
}) {
  const [filter, setFilter] = useState<Filter>("All");

  const shown = useMemo(
    () =>
      filter === "All"
        ? INITIATIVES
        : INITIATIVES.filter((initiative) => initiative.category === filter),
    [filter],
  );

  return (
    <section
      id="library"
      className={cn(
        "w-full bg-cream px-5 py-16 text-brown md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start lg:pr-12">
            <p className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-brown/60 md:text-[32px]">
              The library
            </p>
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-brown">
              Find your
              <br />
              way in.
            </h2>
            <p className="max-w-100 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-brown/65 md:text-lg md:leading-7">
              Filter by the kind of work you want to do. Every initiative has a
              place to start — no gatekeeping, no barrier to entry.
            </p>

            <div
              className="flex flex-wrap gap-2 pt-2"
              role="group"
              aria-label="Filter initiatives"
            >
              {INITIATIVE_CATEGORIES.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  aria-pressed={filter === category.label}
                  onClick={() => setFilter(category.label)}
                  className={cn(
                    "cursor-pointer rounded-xs border px-3.5 py-2 font-display text-sm uppercase leading-none tracking-[0.04em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown motion-reduce:transition-none",
                    filter === category.label
                      ? "border-forest bg-forest text-lime"
                      : "border-brown/30 bg-transparent text-brown/65 hover:border-brown hover:text-brown",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-brown/40">
              Showing {shown.length.toString().padStart(2, "0")} initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {shown.map((initiative) => (
              <Link
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className="group flex flex-col border border-brown/25 bg-cream outline-offset-4 transition-colors duration-200 hover:border-brown focus-visible:outline-2 focus-visible:outline-brown motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={initiative.cardImage ?? initiative.image}
                    alt={initiative.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                    style={{ objectPosition: initiative.imagePosition }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span className="rounded-xs bg-lime px-2.5 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-forest">
                      {initiative.category}
                    </span>
                    <span className="rounded-xs border border-lime/30 bg-forest/65 px-2 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-lime/80">
                      {initiative.status}
                    </span>
                  </div>

                  <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-xs bg-lime text-forest transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none">
                    <ArrowUpRight className="size-4 stroke-[2]" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-normal uppercase leading-[1.0] tracking-[-0.02em] text-brown md:text-[28px]">
                      {initiative.title}
                    </h3>
                    <p className="line-clamp-2 font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/60">
                      {initiative.summary}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-brown/15 pt-3">
                    <span className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-[-0.01em] text-brown/45">
                      <PixelCalendar className="size-3.5 shrink-0" />
                      {initiative.date}
                    </span>
                    <span className="flex flex-wrap gap-1.5">
                      {initiative.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-xs border border-brown/20 px-1.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.04em] text-brown/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
