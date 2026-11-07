import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import TicketButton from "@/components/TicketButton";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // Side padding lives on the section (outside the 1440 container), same as the other sections
    <section
      id="hero"
      className="relative isolate flex min-h-dvh w-full items-end overflow-hidden px-5 md:px-10 xl:px-15"
    >
      {/* BG image + green duotone + top/bottom fades */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
        />

        {/* 1. green duotone over the whole photo */}
        <div className="absolute inset-0 bg-[#a8c9b5] mix-blend-multiply" />

        {/* 2. overall deepening so the photo sits in the forest palette */}
        <div className="absolute inset-0 bg-forest/45" />

        {/* 3. top fade (blends into the navbar) + bottom fade (into the next section) */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,56,43,0.9)_0%,rgba(34,56,43,0)_22%,rgba(34,56,43,0)_32%,rgba(34,56,43,0.75)_70%,var(--color-forest)_96%)]" />
      </div>

      {/*
        mobile  (< md):  centred, everything stacked
        tablet  (md–xl): left-aligned, stacked, buttons side by side
        desktop (xl+):   left block + right block in one row
      */}
      <div className="mx-auto flex w-full max-w-360 flex-col items-center gap-10 pb-19 pt-32 text-center md:items-start md:gap-14 md:pb-25 md:text-left xl:flex-row xl:items-end xl:justify-between xl:gap-10">
        {/* Left: meta + headline */}
        <div className="flex flex-col items-center gap-5 md:items-start md:gap-6 xl:shrink-0">
          {/* Stacked on mobile, inline from tablet up */}
          <div className="flex flex-col items-center gap-3 text-base text-lime md:flex-row md:gap-x-10 md:text-lg xl:text-xl">
            <p className="flex items-center gap-3 font-sans">
              <MapPin className="size-6" strokeWidth={1.5} aria-hidden="true" />
              Los Angeles
            </p>
            <p className="flex items-center gap-3 font-sans">
              <CalendarDays className="size-6" strokeWidth={1.5} aria-hidden="true" />
              <time dateTime="2026-07-01/2026-07-03">1st – 3rd July, 2026</time>
            </p>
          </div>

          {/* 3 lines on mobile and desktop, 2 lines on tablet ("arrives in person" joins up) */}
          <h1 className="font-display text-[clamp(56px,15.5vw,126px)] font-normal uppercase leading-none tracking-[-0.02em] text-lime md:text-[clamp(80px,10vw,126px)]">
            <span className="block">The future</span>
            <span className="block md:max-xl:inline">arrives</span>{" "}
            <span className="block md:max-xl:inline">in person</span>
          </h1>
        </div>

        {/* Right: copy + CTAs */}
        <div className="flex w-full flex-col items-center gap-8 md:max-w-172.5 md:items-start xl:flex-1">
          <p className="max-w-85 font-sans text-lg font-medium leading-6.5 tracking-[-0.02em] text-lime md:max-w-none md:text-2xl md:leading-8.5">
            An immersive exploration of technology, artificial intelligence, and human potential.
            Join the world&apos;s most visionary builders.
          </p>

          {/* Full-width stacked buttons on mobile, side by side from tablet up */}
          <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:items-center">
            <TicketButton className="w-full justify-center md:w-auto" />
            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded-xs border-[1.2px] border-lime bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest md:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
