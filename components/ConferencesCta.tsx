import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PixelSparkles } from "@/components/PixelIcons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ConferencesCta({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "w-full bg-lime px-5 py-16 text-forest md:px-10 md:py-20 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-10">
        <div className="flex flex-col gap-8 border-y border-forest/25 py-10 md:py-14 lg:grid lg:grid-cols-[40%_60%] lg:items-end lg:gap-0">
          <div className="flex items-center gap-3">
            <PixelSparkles className="size-8 text-forest" />
            <p className="font-display text-xl uppercase leading-none tracking-[0.04em] text-forest/70">
              The next chapter
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <p className="max-w-190 font-display text-[clamp(38px,8vw,70px)] font-normal uppercase leading-[0.94] tracking-[-0.03em] text-forest">
              From Odisha to the world.
              <br />
              From vision to impact.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-auto justify-center gap-2.5 rounded-xs bg-forest px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-forest motion-reduce:transition-none"
              >
                <Link href="/conferences/2026">
                  Join the 2026 edition
                  <ArrowRight className="size-4 stroke-[2]" aria-hidden="true" />
                </Link>
              </Button>
              <p className="max-w-80 font-sans text-sm font-semibold leading-6 tracking-[-0.02em] text-forest/60">
                Explore the programme, the vision and the people building
                Odisha&apos;s AI future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
