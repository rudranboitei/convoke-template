import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PixelGlobe, PixelSparkles, PixelUser } from "@/components/PixelIcons";
import { cn } from "@/lib/utils";

const WAYS = [
  {
    number: "01",
    icon: PixelSparkles,
    kicker: "Learn",
    title: "Start with the fundamentals",
    description:
      "Join a 20-session AI Foundation Series and build the base — from linear algebra to transformers.",
    href: "/initiatives/ai-foundation-series",
    link: "AI Foundation Series",
  },
  {
    number: "02",
    icon: PixelGlobe,
    kicker: "Build",
    title: "Ship something real",
    description:
      "Enter Rathathon or answer an open Request for Software. Build at your pace, with people who want you to finish.",
    href: "/initiatives/rathathon",
    link: "Rathathon",
  },
  {
    number: "03",
    icon: PixelUser,
    kicker: "Lead",
    title: "Bring the next idea",
    description:
      "Research, teach, open-source a tool or start a chapter. The community is built by people who show up.",
    href: "/about",
    link: "About the community",
  },
];

export default function InitiativesWays({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "w-full bg-forest px-5 py-16 text-lime md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-8 border-b border-lime/20 pb-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          <p className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-lime/70 md:text-[32px]">
            Get involved
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-lime">
              There is a way in.
            </h2>
            <p className="max-w-150 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-lime/65 md:text-lg md:leading-7">
              You do not need a title, a lab or a perfect idea. Pick the track
              that fits where you are today.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {WAYS.map((way) => {
            const Icon = way.icon;

            return (
              <li key={way.number}>
                <Link
                  href={way.href}
                  className="group flex h-full flex-col gap-6 border border-lime/20 p-6 outline-offset-4 transition-colors duration-200 hover:border-lime/70 hover:bg-secondary/25 focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none md:p-7"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-lime/15 pb-5">
                    <span className="font-display text-sm uppercase tracking-[0.06em] text-lime/40">
                      {way.number}
                    </span>
                    <Icon className="size-7 text-lime" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-lime/55">
                      {way.kicker}
                    </p>
                    <h3 className="font-display text-2xl font-normal uppercase leading-[1.02] tracking-[-0.02em] text-lime md:text-[28px]">
                      {way.title}
                    </h3>
                    <p className="font-sans text-sm font-medium leading-6 tracking-[-0.02em] text-lime/60">
                      {way.description}
                    </p>
                  </div>

                  <span className="mt-auto flex items-center gap-2 border-t border-lime/15 pt-4 font-sans text-xs font-bold uppercase tracking-[0.06em] text-lime/70 transition-colors group-hover:text-lime">
                    {way.link}
                    <ArrowRight
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
