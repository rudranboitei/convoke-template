import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { PixelCalendar, PixelSparkles, PixelUser } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import {
  getRelatedInitiatives,
  type Initiative,
  type InitiativeSection,
} from "@/lib/initiatives";
import { cn } from "@/lib/utils";

function SectionContent({ section }: { section: InitiativeSection }) {
  const blocks = section.content.split("\n\n");

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const bullets = lines.filter((line) => line.startsWith("•"));

        if (bullets.length > 0) {
          const intro = lines
            .filter((line) => !line.startsWith("•"))
            .join(" ");

          return (
            <div key={`${section.heading}-${index}`} className="flex flex-col gap-3">
              {intro ? (
                <p className="max-w-165 font-sans text-base font-medium leading-7 tracking-[-0.02em] text-brown/75 md:text-lg">
                  {intro}
                </p>
              ) : null}
              <ul className="flex flex-col gap-2 border-l-2 border-brown/20 pl-5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 font-sans text-base font-medium leading-7 tracking-[-0.02em] text-brown/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brown/50"
                    />
                    {bullet.replace(/^•\s*/, "")}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <p
            key={`${section.heading}-${index}`}
            className="max-w-165 font-sans text-base font-medium leading-7 tracking-[-0.02em] text-brown/80 md:text-lg md:leading-8"
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default function InitiativeDetail({
  initiative,
  className,
}: {
  initiative: Initiative;
  className?: string;
}) {
  const related = getRelatedInitiatives(initiative.slug, 3);

  return (
    <article className={cn("w-full", className)}>
      {/* Hero */}
      <section
        id="hero"
        className="relative isolate overflow-hidden bg-forest px-5 pb-14 pt-32 text-lime md:px-10 md:pb-20 md:pt-40 xl:px-15 xl:pb-24 xl:pt-44"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 bottom-0 select-none font-display text-[30vw] uppercase leading-none tracking-[-0.06em] text-lime/5"
        >
          {initiative.category.slice(0, 2)}
        </span>

        <div className="relative mx-auto flex w-full max-w-360 flex-col gap-8">
          <Link
            href="/initiatives"
            className="flex w-fit items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.04em] text-lime/60 outline-offset-4 transition-colors duration-200 hover:text-lime focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none"
          >
            <ArrowLeft className="size-4 stroke-[1.8]" aria-hidden="true" />
            All initiatives
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-end lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-xs bg-lime px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-forest">
                  {initiative.category}
                </span>
                <span className="rounded-xs border border-lime/30 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-lime/75">
                  {initiative.status}
                </span>
                {initiative.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xs border border-lime/20 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-lime/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="max-w-200 font-display text-[clamp(46px,8vw,96px)] font-normal uppercase leading-[0.9] tracking-[-0.03em] text-lime">
                {initiative.title}
              </h1>

              <p className="max-w-155 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-lime/80 md:text-xl md:leading-8">
                {initiative.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-lime/20 pt-5 font-sans text-sm font-semibold tracking-[-0.02em] text-lime/65">
                <span className="flex items-center gap-2">
                  <PixelCalendar className="size-4 shrink-0" />
                  {initiative.date}
                </span>
                <span className="flex items-center gap-2">
                  <PixelSparkles className="size-4 shrink-0" />
                  Built by the community
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/11] w-full overflow-hidden border border-lime/30 bg-secondary lg:justify-self-end">
              <Image
                src={initiative.image}
                alt={initiative.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
                style={{ objectPosition: initiative.imagePosition }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="w-full bg-lime px-5 py-8 text-forest md:px-10 md:py-10 xl:px-15">
        <dl className="mx-auto grid w-full max-w-360 grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          <div className="flex flex-col gap-1">
            <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-forest/50">
              Started
            </dt>
            <dd className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em] text-forest md:text-[28px]">
              {initiative.date}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-forest/50">
              Focus
            </dt>
            <dd className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em] text-forest md:text-[28px]">
              {initiative.category}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-forest/50">
              Status
            </dt>
            <dd className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em] text-forest md:text-[28px]">
              {initiative.status}
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-forest/50">
              Access
            </dt>
            <dd className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em] text-forest md:text-[28px]">
              Open to all
            </dd>
          </div>
        </dl>
      </section>

      {/* Story */}
      <section className="w-full bg-cream px-5 py-16 text-brown md:px-10 md:py-24 xl:px-15 xl:py-25">
        <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-12 md:gap-14">
            {initiative.sections.map((section, index) => (
              <div key={section.heading} className="flex flex-col gap-5">
                <div className="flex items-start gap-4 border-b border-brown/20 pb-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xs bg-forest font-display text-sm uppercase leading-none tracking-[0.04em] text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <p className="font-display text-xs uppercase tracking-[0.08em] text-brown/45">
                      {initiative.category}
                    </p>
                    <h2 className="font-display text-[clamp(30px,4.5vw,44px)] font-normal uppercase leading-[0.98] tracking-[-0.02em] text-brown">
                      {section.heading}
                    </h2>
                  </div>
                </div>

                <SectionContent section={section} />
              </div>
            ))}

            {initiative.features ? (
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-[clamp(30px,4.5vw,44px)] font-normal uppercase leading-[0.98] tracking-[-0.02em] text-brown">
                  What is inside
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {initiative.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 border-t border-brown/20 pt-3 font-sans text-base font-semibold leading-6 tracking-[-0.02em] text-brown/80"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs bg-brown text-lime">
                        <Check className="size-3.5 stroke-[2.5]" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {initiative.highlight ? (
              <div className="flex items-center gap-4 border border-brown/25 bg-brown/5 p-5 md:p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest font-display text-xl uppercase leading-none text-lime">
                  {initiative.highlight.name.charAt(0)}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-display text-xl uppercase leading-none tracking-[-0.01em] text-brown">
                    {initiative.highlight.name}
                  </p>
                  <p className="font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/55">
                    {initiative.highlight.role}
                  </p>
                </div>
                <PixelUser className="ml-auto size-5 shrink-0 text-brown/35" />
              </div>
            ) : null}

            {initiative.sponsor ? (
              <div className="flex flex-col gap-3 border-t border-brown/20 pt-7">
                <p className="font-display text-xs uppercase tracking-[0.08em] text-brown/45">
                  Supported by
                </p>
                <p className="font-display text-3xl uppercase leading-none tracking-[-0.02em] text-brown">
                  {initiative.sponsor.name}
                </p>
                <p className="max-w-150 font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/60">
                  {initiative.sponsor.desc}
                </p>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-5 border border-brown/25 bg-brown/5 p-6">
              <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-brown/60">
                At a glance
              </p>

              <dl className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 border-t border-brown/15 pt-3">
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-brown/45">
                    Category
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-brown">
                    {initiative.category}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-brown/15 pt-3">
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-brown/45">
                    Started
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-brown">
                    {initiative.date}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-brown/15 pt-3">
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-brown/45">
                    Status
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-brown">
                    {initiative.status}
                  </dd>
                </div>
              </dl>

              <p className="border-t border-brown/15 pt-4 font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/65">
                {initiative.summary}
              </p>
            </div>

            <div className="flex flex-col gap-3 border border-brown/25 p-5">
              <p className="font-display text-lg uppercase leading-none tracking-[0.04em] text-brown/60">
                More initiatives
              </p>
              <ul className="flex flex-col">
                {related.map((item) => (
                  <li key={item.slug} className="border-t border-brown/15 first:border-t-0">
                    <Link
                      href={`/initiatives/${item.slug}`}
                      className="group flex items-start justify-between gap-3 py-3 outline-offset-4 focus-visible:outline-2 focus-visible:outline-brown"
                    >
                      <span className="flex flex-col gap-1">
                        <span className="font-display text-base uppercase leading-[1.05] tracking-[-0.01em] text-brown">
                          {item.title}
                        </span>
                        <span className="font-sans text-xs font-medium uppercase tracking-[0.04em] text-brown/45">
                          {item.category}
                        </span>
                      </span>
                      <ArrowRight
                        className="mt-1 size-3.5 shrink-0 text-brown/35 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              variant="outline"
              className="h-auto justify-center rounded-xs border-[1.2px] border-brown bg-transparent px-4 py-3 font-display text-lg font-normal uppercase leading-none tracking-[0.04em] text-brown shadow-none transition-colors duration-200 hover:bg-brown hover:text-lime motion-reduce:transition-none"
            >
              <Link href="/initiatives">Back to the library</Link>
            </Button>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-lime px-5 py-10 text-forest md:px-10 md:py-14 xl:px-15">
        <div className="mx-auto flex w-full max-w-360 flex-col gap-6 border-y border-forest/25 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-display text-xs uppercase tracking-[0.08em] text-forest/50">
              Keep exploring
            </p>
            <p className="max-w-150 font-display text-2xl uppercase leading-[1.02] tracking-[-0.02em] text-forest md:text-3xl">
              There is more being built in the open.
            </p>
          </div>
          <Button
            asChild
            className="h-auto w-fit justify-center gap-2.5 rounded-xs bg-forest px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-forest motion-reduce:transition-none"
          >
            <Link href="/initiatives">
              All initiatives
              <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
