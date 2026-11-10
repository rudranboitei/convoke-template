import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GLOSSARY } from "@/lib/resources";
import { cn } from "@/lib/utils";

export default function GlossarySection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      id="glossary"
      className={cn(
        "w-full bg-forest px-5 py-16 text-lime md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          <div className="flex flex-col gap-5 lg:pr-12">
            <p className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-lime/60 md:text-[32px]">
              Field notes
            </p>
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.94] tracking-[-0.02em] text-lime">
              AI, in plain
              <br />
              words.
            </h2>
            <p className="max-w-100 font-sans text-base font-medium leading-6.5 tracking-[-0.02em] text-lime/65 md:text-lg md:leading-7">
              A shared vocabulary makes better conversations. These are the terms
              that come up most often when the community talks about building AI
              for Odia.
            </p>
            <Link
              href="#start"
              className="flex w-fit items-center gap-2 border-b border-lime/30 pb-1 font-display text-sm uppercase tracking-[0.05em] text-lime outline-offset-4 transition-colors duration-200 hover:border-lime/70 hover:text-lime/70 focus-visible:outline-2 focus-visible:outline-lime motion-reduce:transition-none"
            >
              Start with the basics
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {GLOSSARY.map((item) => (
              <div
                key={item.term}
                className="flex flex-col gap-2 border-t border-lime/15 py-5"
              >
                <dt className="font-display text-xl uppercase leading-[1.02] tracking-[-0.01em] text-lime md:text-[22px]">
                  {item.term}
                </dt>
                <dd className="font-sans text-sm font-medium leading-6 tracking-[-0.01em] text-lime/60">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
