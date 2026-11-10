"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import {
  RESOURCES,
  RESOURCE_CATEGORIES,
  type ResourceCategory,
} from "@/lib/resources";
import { cn } from "@/lib/utils";

type Filter = "All" | ResourceCategory;

export default function ResourceLibrary({
  className,
}: {
  className?: string;
}) {
  const [filter, setFilter] = useState<Filter>("All");

  const shown = useMemo(
    () =>
      filter === "All"
        ? RESOURCES
        : RESOURCES.filter((resource) => resource.category === filter),
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
              Where to
              <br />
              go next.
            </h2>
            <p className="max-w-100 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-brown/65 md:text-lg md:leading-7">
              Learn the basics, find Odia language data, read the policy or start
              building. Filter by what you need today — every resource is free to
              access.
            </p>

            <div
              className="flex flex-wrap gap-2 pt-2"
              role="group"
              aria-label="Filter resources"
            >
              {RESOURCE_CATEGORIES.map((category) => (
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

            <div className="flex flex-col gap-1 pt-1">
              <p
                aria-live="polite"
                className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-brown/40"
              >
                Showing {shown.length.toString().padStart(2, "0")} resources
              </p>
              <p className="font-sans text-xs font-medium tracking-[-0.01em] text-brown/40">
                Links open in a new tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {shown.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-brown/25 bg-cream outline-offset-4 transition-colors duration-200 hover:border-brown focus-visible:outline-2 focus-visible:outline-brown motion-reduce:transition-none"
              >
                <div className="flex items-center justify-between gap-3 border-b border-brown/15 px-5 py-4">
                  <span className="rounded-xs bg-forest px-2.5 py-1 font-display text-[11px] uppercase leading-none tracking-[0.06em] text-lime">
                    {resource.category}
                  </span>
                  <span className="text-right font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-brown/45">
                    {resource.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="font-display text-[26px] font-normal uppercase leading-[1.0] tracking-[-0.02em] text-brown">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/60">
                    {resource.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-t border-brown/15 pt-4">
                    <span className="font-sans text-[11px] font-semibold tracking-[-0.01em] text-brown/45">
                      {resource.source}
                    </span>
                    <span className="flex items-center gap-1.5 font-display text-sm uppercase leading-none tracking-[0.04em] text-brown transition-colors duration-200 group-hover:text-forest/70">
                      {resource.action}
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
