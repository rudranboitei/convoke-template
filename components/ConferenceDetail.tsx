import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

import {
  PixelCalendar,
  PixelClock,
  PixelGlobe,
  PixelLocationPin,
  PixelUser,
} from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import {
  getAdjacentConferences,
  type Conference,
  type ConferencePerson,
} from "@/lib/conferences";
import { cn } from "@/lib/utils";

function PeopleBlock({
  label,
  people,
}: {
  label: string;
  people: readonly ConferencePerson[];
}) {
  if (people.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5 border-b border-brown/20 pb-3">
        <PixelUser className="size-4 text-brown/60" />
        <h2 className="font-display text-xl uppercase leading-none tracking-[0.04em] text-brown/70">
          {label}
        </h2>
      </div>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {people.map((person) => (
          <li
            key={`${person.name}-${person.org}`}
            className="flex flex-col gap-1 border-l-2 border-brown/25 pl-4"
          >
            <p className="font-display text-xl uppercase leading-[1.05] tracking-[-0.01em] text-brown">
              {person.name}
            </p>
            <p className="font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/55">
              {person.org}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ConferenceDetail({
  conference,
  className,
}: {
  conference: Conference;
  className?: string;
}) {
  const { previous, next } = getAdjacentConferences(conference.slug);

  return (
    <article className={cn("w-full", className)}>
      {/* Detail hero */}
      <section
        id="hero"
        className="relative isolate overflow-hidden bg-forest px-5 pb-14 pt-32 text-lime md:px-10 md:pb-20 md:pt-40 xl:px-15 xl:pb-24 xl:pt-44"
      >
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src={conference.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 grayscale"
            style={{ objectPosition: conference.imagePosition }}
          />
          <div className="absolute inset-0 bg-forest/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/75 to-forest/90" />
        </div>

        <div className="mx-auto flex w-full max-w-360 flex-col gap-8">
          <Link
            href="/conferences"
            className="flex w-fit items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.04em] text-lime/60 outline-offset-4 transition-colors duration-200 hover:text-lime focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none"
          >
            <ArrowLeft className="size-4 stroke-[1.8]" aria-hidden="true" />
            All conferences
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-xs px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em]",
                conference.status === "Upcoming"
                  ? "bg-lime text-forest"
                  : "border border-lime/30 bg-forest/70 text-lime/80",
              )}
            >
              {conference.status}
            </span>
            <span className="rounded-xs border border-lime/30 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-lime/75">
              {conference.kind}
            </span>
            <span className="rounded-xs border border-lime/30 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-lime/75">
              {conference.edition}
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:gap-16">
            <div className="flex flex-col gap-5">
              <h1 className="max-w-230 font-display text-[clamp(46px,8.5vw,100px)] font-normal uppercase leading-[0.9] tracking-[-0.03em] text-lime">
                {conference.title}
              </h1>
              <p className="max-w-170 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-lime/85 md:text-xl md:leading-8">
                {conference.theme}
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-lime/25 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <p className="flex items-center gap-2.5 font-sans text-sm font-semibold tracking-[-0.02em] text-lime/80">
                <PixelCalendar className="size-4 shrink-0" />
                {conference.date}
              </p>
              <p className="flex items-center gap-2.5 font-sans text-sm font-semibold tracking-[-0.02em] text-lime/80">
                <PixelLocationPin className="size-4 shrink-0" />
                {conference.location}
              </p>
              {conference.hashtag ? (
                <p className="flex items-center gap-2.5 font-sans text-sm font-semibold tracking-[-0.02em] text-lime/60">
                  <PixelGlobe className="size-4 shrink-0" />
                  {conference.hashtag}
                </p>
              ) : null}
            </div>
          </div>

          {conference.schedule ? (
            <Button
              asChild
              className="mt-2 h-auto w-fit justify-center gap-2.5 rounded-xs bg-lime px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-forest shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-lime motion-reduce:transition-none"
            >
              <a href="#programme">
                Jump to programme
                <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </div>
      </section>

      {/* Quick facts */}
      <section className="w-full bg-lime px-5 py-8 text-forest md:px-10 md:py-10 xl:px-15">
        <dl className="mx-auto grid w-full max-w-360 grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {conference.highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-forest/50">
                {item.label}
              </dt>
              <dd className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em] text-forest md:text-[28px]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Main story */}
      <section className="w-full bg-cream px-5 py-16 text-brown md:px-10 md:py-24 xl:px-15 xl:py-25">
        <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div className="flex min-w-0 flex-col gap-12 md:gap-16">
            {conference.sections ? (
              conference.sections.map((section) => (
                <div key={section.kicker} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-brown/55">
                      {section.kicker}
                    </p>
                    <h2 className="max-w-180 font-display text-[clamp(32px,5vw,48px)] font-normal uppercase leading-[0.98] tracking-[-0.02em] text-brown">
                      {section.heading}
                    </h2>
                  </div>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-170 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-brown/85 md:text-xl md:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.callout ? (
                    <blockquote className="max-w-170 border-l-4 border-brown bg-brown/5 p-5 font-display text-2xl uppercase leading-[1.08] tracking-[-0.01em] text-brown md:p-7 md:text-3xl">
                      {section.callout}
                    </blockquote>
                  ) : null}

                  {section.flow ? (
                    <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
                      {section.flow.map((step, index) => (
                        <li key={step} className="flex items-center gap-3">
                          <span className="rounded-xs bg-brown px-3 py-2 font-display text-lg uppercase leading-none tracking-[0.04em] text-lime">
                            {step}
                          </span>
                          {index < section.flow!.length - 1 ? (
                            <ArrowRight className="size-4 text-brown/40" aria-hidden="true" />
                          ) : null}
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {section.after?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-170 font-sans text-base font-medium leading-7 tracking-[-0.02em] text-brown/70 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.steps ? (
                    <ol className="flex max-w-170 flex-col border-l-2 border-brown/20 pl-5">
                      {section.steps.map((step, index) => (
                        <li
                          key={step}
                          className="flex items-start gap-4 border-b border-brown/15 py-3 last:border-b-0"
                        >
                          <span className="font-display text-sm leading-6 tracking-[0.04em] text-brown/40">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-sans text-base font-semibold leading-6 tracking-[-0.02em] text-brown md:text-lg md:leading-7">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {section.items ? (
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li
                          key={item.title}
                          className="flex flex-col gap-1.5 border-t border-brown/20 pt-4"
                        >
                          <h3 className="font-display text-xl uppercase leading-[1.05] tracking-[-0.01em] text-brown md:text-2xl">
                            {item.title}
                          </h3>
                          <p className="font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/60">
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-brown/55">
                    About the edition
                  </p>
                  <h2 className="max-w-180 font-display text-[clamp(32px,5vw,48px)] font-normal uppercase leading-[0.98] tracking-[-0.02em] text-brown">
                    {conference.tagline}
                  </h2>
                </div>
                {conference.about.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-170 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-brown/85 md:text-xl md:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {conference.organizers ? (
              <PeopleBlock label="Organisers" people={conference.organizers} />
            ) : null}

            {conference.speakers ? (
              <PeopleBlock label="Speakers" people={conference.speakers} />
            ) : null}

            {conference.closing ? (
              <div className="flex flex-col gap-5 bg-forest p-6 text-lime md:p-10">
                <h2 className="max-w-190 font-display text-[clamp(32px,5vw,50px)] font-normal uppercase leading-[0.96] tracking-[-0.02em] text-lime">
                  {conference.closing.heading}
                </h2>
                {conference.closing.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-160 font-sans text-base font-medium leading-7 tracking-[-0.02em] text-lime/70 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                {conference.closing.highlight ? (
                  <p className="max-w-190 border-t border-lime/20 pt-5 font-display text-2xl uppercase leading-[1.05] tracking-[-0.01em] text-lime md:text-3xl">
                    {conference.closing.highlight}
                  </p>
                ) : null}
                {conference.closing.meta ? (
                  <p className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.06em] text-lime/50">
                    <PixelClock className="size-4" />
                    {conference.closing.meta}
                  </p>
                ) : null}
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
                    Date
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-brown">
                    {conference.date}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-brown/15 pt-3">
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-brown/45">
                    Location
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-brown">
                    {conference.location}
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-brown/15 pt-3">
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-brown/45">
                    Format
                  </dt>
                  <dd className="font-sans text-sm font-semibold text-brown">
                    {conference.status} · {conference.edition}
                  </dd>
                </div>
                {conference.hashtag ? (
                  <div className="flex flex-col gap-1 border-t border-brown/15 pt-3">
                    <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-brown/45">
                      Hashtag
                    </dt>
                    <dd className="font-sans text-sm font-semibold text-brown">
                      {conference.hashtag}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <p className="border-t border-brown/15 pt-4 font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-brown/65">
                {conference.theme}
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="h-auto justify-center rounded-xs border-[1.2px] border-brown bg-transparent px-4 py-3 font-display text-lg font-normal uppercase leading-none tracking-[0.04em] text-brown shadow-none transition-colors duration-200 hover:bg-brown hover:text-lime motion-reduce:transition-none"
            >
              <Link href="/conferences">Back to all editions</Link>
            </Button>
          </aside>
        </div>
      </section>

      {/* Programme */}
      {conference.schedule ? (
        <section
          id="programme"
          className="w-full scroll-mt-24 bg-forest px-5 py-16 text-lime md:px-10 md:py-24 xl:px-15 xl:py-25"
        >
          <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
            <div className="flex flex-col gap-8 border-b border-lime/20 pb-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
              <p className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-lime/70 md:text-[32px]">
                Programme
              </p>
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-lime">
                  Three days.
                  <br />
                  One conversation.
                </h2>
                <p className="max-w-150 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-lime/65 md:text-lg md:leading-7">
                  The 2026 programme follows the sun — from the first light on
                  Earth to the last. Expand a day to read the full running order.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {conference.schedule.map((day, index) => (
                <details
                  key={day.day}
                  open={index === 0}
                  className="group border-b border-lime/20 first:border-t"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 outline-offset-4 focus-visible:outline-2 focus-visible:outline-lime [&::-webkit-details-marker]:hidden">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em] text-lime md:text-3xl">
                        {day.day}
                      </h3>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-lime/45">
                        {day.items.length} sessions
                      </p>
                    </div>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xs border border-lime/30 text-lime transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none">
                      <ChevronDown className="size-4" aria-hidden="true" />
                    </span>
                  </summary>

                  <ol className="flex flex-col pb-6">
                    {day.items.map(([time, title], itemIndex) => (
                      <li
                        key={`${time}-${title}-${itemIndex}`}
                        className="grid grid-cols-[76px_1fr] gap-4 border-t border-lime/10 py-3.5 sm:grid-cols-[100px_1fr] sm:gap-6"
                      >
                        <span className="font-display text-sm uppercase leading-5 tracking-[0.04em] text-lime/55">
                          {time}
                        </span>
                        <span className="font-sans text-sm font-medium leading-5.5 tracking-[-0.02em] text-lime/85 sm:text-base sm:leading-6">
                          {title}
                        </span>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Previous / next */}
      <section className="w-full bg-lime px-5 py-10 text-forest md:px-10 md:py-14 xl:px-15">
        <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-4 border-y border-forest/25 py-8 md:grid-cols-2">
          {previous ? (
            <Link
              href={`/conferences/${previous.slug}`}
              className="group flex flex-col gap-2 outline-offset-4 focus-visible:outline-2 focus-visible:outline-forest"
            >
              <span className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-forest/50">
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Previous
              </span>
              <span className="font-display text-2xl uppercase leading-none tracking-[-0.02em] text-forest transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none md:text-3xl">
                {previous.shortTitle}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {next ? (
            <Link
              href={`/conferences/${next.slug}`}
              className="group flex flex-col gap-2 outline-offset-4 focus-visible:outline-2 focus-visible:outline-forest md:items-end md:text-right"
            >
              <span className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-forest/50">
                Next
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl uppercase leading-none tracking-[-0.02em] text-forest transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transition-none md:text-3xl">
                {next.shortTitle}
              </span>
            </Link>
          ) : null}
        </div>
      </section>
    </article>
  );
}
