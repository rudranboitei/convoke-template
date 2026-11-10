import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PixelCalendar, PixelClock, PixelLocationPin } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { UPCOMING_CONFERENCE } from "@/lib/conferences";
import { cn } from "@/lib/utils";

const FOCUS_AREAS = [
  "Sovereign AI",
  "Frontier research",
  "Startups & industry",
  "Society & policy",
];

export default function ConferenceSpotlight({
  className,
}: {
  className?: string;
}) {
  if (!UPCOMING_CONFERENCE) return null;

  return (
    <section
      id="next-conference"
      className={cn(
        "w-full bg-cream px-5 py-16 text-brown md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-6 border-b border-brown/25 pb-7 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-brown/60 md:text-[32px]">
              Next up
            </p>
            <h2 className="max-w-190 font-display text-[clamp(40px,8vw,72px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-brown">
              The 2026 conference
            </h2>
          </div>
          <p className="max-w-105 font-sans text-base font-medium leading-6 tracking-[-0.02em] text-brown/60 md:text-lg md:leading-7">
            Three days of ideas, research, products and policy — built around one
            question: how does AI become real impact?
          </p>
        </div>

        <div className="grid overflow-hidden border border-brown/25 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col gap-8 bg-cream p-6 md:p-9 xl:p-12">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-xs bg-forest px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-lime">
                {UPCOMING_CONFERENCE.status}
              </span>
              <span className="rounded-xs border border-brown/30 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-brown/75">
                {UPCOMING_CONFERENCE.edition}
              </span>
              <span className="rounded-xs border border-brown/30 px-2.5 py-1 font-display text-xs uppercase leading-none tracking-[0.06em] text-brown/75">
                {UPCOMING_CONFERENCE.hashtag}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="max-w-150 font-display text-[clamp(40px,7vw,64px)] font-normal uppercase leading-[0.92] tracking-[-0.02em] text-brown">
                Vision to Impact.
              </h3>
              <p className="max-w-150 font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-brown/85 md:text-xl md:leading-8">
                {UPCOMING_CONFERENCE.about[0]}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 border-y border-brown/20 py-5 sm:grid-cols-2">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 font-sans text-base font-semibold tracking-[-0.02em] text-brown"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-xs bg-brown text-lime">
                    <Check className="size-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  {area}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 font-sans text-sm font-semibold tracking-[-0.02em] text-brown/75 sm:flex-row sm:flex-wrap sm:gap-x-7">
              <span className="flex items-center gap-2">
                <PixelCalendar className="size-4 shrink-0" />
                {UPCOMING_CONFERENCE.date}
              </span>
              <span className="flex items-center gap-2">
                <PixelLocationPin className="size-4 shrink-0" />
                Hybrid · Bhubaneswar
              </span>
              <span className="flex items-center gap-2">
                <PixelClock className="size-4 shrink-0" />
                First light to last light
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-auto justify-center gap-2.5 rounded-xs bg-forest px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-forest motion-reduce:transition-none"
              >
                <Link href={`/conferences/${UPCOMING_CONFERENCE.slug}`}>
                  Conference details
                  <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto justify-center rounded-xs border-[1.2px] border-brown bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-brown shadow-none transition-colors duration-200 hover:bg-brown hover:text-lime motion-reduce:transition-none"
              >
                <Link href={`/conferences/${UPCOMING_CONFERENCE.slug}#programme`}>
                  Full programme
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-100 overflow-hidden bg-secondary lg:min-h-full">
            <Image
              src={
                UPCOMING_CONFERENCE.spotlightImage ??
                UPCOMING_CONFERENCE.image
              }
              alt={UPCOMING_CONFERENCE.imageAlt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
              style={{ objectPosition: UPCOMING_CONFERENCE.imagePosition }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
