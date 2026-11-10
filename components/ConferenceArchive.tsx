"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { PixelCalendar, PixelLocationPin } from "@/components/PixelIcons";
import { CONFERENCES, type ConferenceKind } from "@/lib/conferences";
import { cn } from "@/lib/utils";

type Filter = "all" | ConferenceKind;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All editions" },
  { id: "conference", label: "Conferences" },
  { id: "summit", label: "Summits" },
];

export default function ConferenceArchive({
  className,
}: {
  className?: string;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () =>
      filter === "all"
        ? CONFERENCES
        : CONFERENCES.filter((conference) => conference.kind === filter),
    [filter],
  );

  return (
    <section
      id="archive"
      className={cn(
        "w-full bg-forest px-5 py-16 text-lime md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start lg:pr-12">
            <p className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-lime/70 md:text-[32px]">
              Archive
            </p>
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-lime">
              Every edition.
              <br />
              One continuum.
            </h2>
            <p className="max-w-100 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-lime/65 md:text-lg md:leading-7">
              From a first virtual gathering in 2020 to a three-day global
              programme in 2026 — trace the ideas that brought the community here.
            </p>

            <div className="flex flex-wrap gap-2 pt-2" role="group" aria-label="Filter editions">
              {FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "cursor-pointer rounded-xs border px-3.5 py-2 font-display text-sm uppercase leading-none tracking-[0.04em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime motion-reduce:transition-none",
                    filter === item.id
                      ? "border-lime bg-lime text-forest"
                      : "border-lime/30 bg-transparent text-lime/75 hover:border-lime hover:text-lime",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-lime/40">
              Showing {shown.length.toString().padStart(2, "0")} editions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {shown.map((conference) => (
              <Link
                key={conference.slug}
                href={`/conferences/${conference.slug}`}
                className="group flex flex-col border border-lime/20 bg-secondary/25 outline-offset-4 transition-colors duration-200 hover:border-lime/70 focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={conference.image}
                    alt={conference.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                    style={{ objectPosition: conference.imagePosition }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span
                      className={cn(
                        "rounded-xs px-2.5 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em]",
                        conference.status === "Upcoming"
                          ? "bg-lime text-forest"
                          : "border border-lime/30 bg-forest/70 text-lime/80",
                      )}
                    >
                      {conference.status}
                    </span>
                    <span className="rounded-xs border border-lime/20 bg-forest/60 px-2 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-lime/70">
                      {conference.kind}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
                    <span className="font-display text-[44px] font-normal uppercase leading-none tracking-[-0.04em] text-lime">
                      {conference.year}
                    </span>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-xs bg-lime text-forest transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none">
                      <ArrowUpRight className="size-4 stroke-[2]" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs font-semibold tracking-[-0.01em] text-lime/50">
                      <span className="flex items-center gap-1.5">
                        <PixelCalendar className="size-3.5 shrink-0" />
                        {conference.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <PixelLocationPin className="size-3.5 shrink-0" />
                        {conference.location}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-normal uppercase leading-[1.02] tracking-[-0.02em] text-lime md:text-[28px]">
                      {conference.title}
                    </h3>
                  </div>

                  <p className="line-clamp-2 font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-lime/60">
                    {conference.theme}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
