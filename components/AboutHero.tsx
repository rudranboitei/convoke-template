import { ArrowDown, Globe2, MapPin } from "lucide-react";
import TicketButton from "@/components/TicketButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutHero({ className }: { className?: string }) {
  return (
    <section
      id="hero"
      className={cn(
        "relative w-full bg-forest px-5 pb-16 pt-32 text-lime md:px-10 md:pb-24 md:pt-40 xl:px-15 xl:pb-28 xl:pt-44",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 md:gap-14">
        {/* Editorial Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lime/20 pb-6 text-lime/80">
          <div className="flex items-center gap-6 text-sm md:text-base">
            <span className="flex items-center gap-2 font-sans font-medium">
              <MapPin className="size-4 text-lime" strokeWidth={1.5} aria-hidden="true" />
              Odisha &amp; Worldwide
            </span>
            <span className="hidden h-3 w-px bg-lime/30 sm:block" aria-hidden="true" />
            <span className="hidden items-center gap-2 font-sans font-medium sm:flex">
              <Globe2 className="size-4 text-lime" strokeWidth={1.5} aria-hidden="true" />
              Global Odia AI Collective
            </span>
          </div>

          <p className="font-display text-sm uppercase tracking-[0.04em] text-lime/70 md:text-base">
            Est. 2020 · Roots 2018
          </p>
        </div>

        {/* Main Content: Neo-Editorial Split */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[45%_55%] lg:items-end lg:gap-12">
          {/* Left Column: Label & Mega Headline */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-2xl uppercase leading-none tracking-[-0.02em] text-lime/80 md:text-3xl">
              Who We Are
            </p>
            <h1 className="font-display text-[clamp(56px,11vw,112px)] font-normal uppercase leading-[0.9] tracking-[-0.02em] text-lime">
              About <br />
              Odisha AI
            </h1>
          </div>

          {/* Right Column: Lead copy + Direct CTAs */}
          <div className="flex flex-col items-start gap-8 lg:pb-2">
            <p className="font-sans text-xl font-medium leading-relaxed tracking-[-0.02em] text-lime/90 md:text-2xl md:leading-[34px]">
              The Odisha AI community is a global initiative creating a space for idea sharing,
              fostering collaborations, and increasing the presence of Odia people in the field
              of Artificial Intelligence.
            </p>

            {/* Clean CTAs matching the site design */}
            <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <TicketButton className="w-full justify-center sm:w-auto" />
              <Button
                asChild
                variant="outline"
                className="h-auto w-full rounded-xs border-[1.2px] border-lime bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest sm:w-auto"
              >
                <a href="#journey" className="flex items-center justify-center gap-2">
                  Our Journey
                  <ArrowDown className="size-4 stroke-[2]" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
