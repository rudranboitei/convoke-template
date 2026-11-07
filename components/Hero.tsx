import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import TicketButton from "@/components/TicketButton";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-dvh w-full items-end overflow-hidden">
      {/* BG image + green duotone + top/bottom fades */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="https://framerusercontent.com/images/RZmKTiTmcDQStSRNVpYxi4aSoEE.png"
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

      {/* Text container: centred on mobile, left/right split on desktop */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-5 pb-16 pt-32 text-center lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:px-0 lg:pb-[100px] lg:text-left">
        {/* Left: meta + headline */}
        <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-6">
          {/* Stacked on mobile, inline on desktop */}
          <div className="flex flex-col items-center gap-3 text-lg text-lime lg:flex-row lg:gap-x-10 lg:text-xl">
            <p className="flex items-center gap-3 font-sans">
              <MapPin className="size-6" strokeWidth={1.5} aria-hidden="true" />
              Los Angeles
            </p>
            <p className="flex items-center gap-3 font-sans">
              <CalendarDays className="size-6" strokeWidth={1.5} aria-hidden="true" />
              <time dateTime="2026-07-01/2026-07-03">1st – 3rd July, 2026</time>
            </p>
          </div>

          <h1 className="font-display text-[clamp(56px,15.5vw,126px)] font-normal uppercase leading-none tracking-[-0.02em] text-lime">
            <span className="block">The future</span>
            <span className="block">arrives</span>
            <span className="block">in person</span>
          </h1>
        </div>

        {/* Right: copy + CTAs */}
        <div className="flex w-full flex-col items-center gap-8 lg:max-w-[690px] lg:items-start">
          <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-lime md:text-xl lg:text-2xl lg:leading-[34px]">
            An immersive exploration of technology, artificial intelligence, and human potential.
            Join the world&apos;s most visionary builders.
          </p>

          {/* Full-width stacked buttons on mobile, side by side on desktop */}
          <div className="flex w-full flex-col items-stretch gap-4 lg:w-auto lg:flex-row lg:items-center">
            <TicketButton className="w-full justify-center lg:w-auto" />
            <Button
              asChild
              variant="outline"
              className="h-auto w-full rounded-[2px] border-[1.2px] border-lime bg-transparent px-5 py-[14px] font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest lg:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
