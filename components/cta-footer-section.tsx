import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Countdown } from "./countdown";


// All copy lives here so the section is a one-place edit
const CONTENT = {
  heading: "Book your spot now",
  body: "When you book your ticket to Convoke, you're not just attending an event — you're joining a movement that celebrates design, innovation, and collaboration at scale.",
  cta: { label: "Buy ticket now", href: "/#tickets" },
  // Countdown target (ISO string). Change this to your event start.
  eventDate: "2027-01-30T18:00:00+05:30",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "/#about" },
        { label: "Agenda", href: "/#agenda" },
        { label: "Speakers", href: "/#speakers" },
        { label: "Journal", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Policy",
      links: [
        { label: "Code Of Conduct", href: "/policy/code-of-conduct" },
        { label: "Terms Of Service", href: "/policy/terms-of-service" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "X (Twitter)", href: "https://x.com", external: true },
        { label: "Facebook", href: "https://facebook.com", external: true },
      ],
    },
  ],
  copyright: "© 2026 Convoke. All rights reserved.",
};

// Pixel-style right arrow (pixelarticons "arrow-right")
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5 shrink-0">
      <path d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z" />
    </svg>
  );
}

export default function CtaFooterSection() {
  return (
    <footer
      id="book"
      className="w-full bg-[#22382B] px-5 pb-10 pt-16 text-[#FFFF64] md:px-10 md:pt-20 xl:px-[60px] xl:pt-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        {/* CTA */}
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-display text-[clamp(36px,8vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
              {CONTENT.heading}
            </h2>
            <p className="max-w-[880px] font-sans text-lg font-medium leading-[25px] tracking-[-0.02em] lg:text-2xl lg:leading-[34px]">
              {CONTENT.body}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href={CONTENT.cta.href}
              className={cn(
                buttonVariants(),
                "h-16 gap-3 rounded-[2px] bg-[#FFFF64] px-6 font-display text-2xl font-normal uppercase leading-none tracking-[0.04em] text-[#22382B] hover:bg-[#FFFF64]/90"
              )}
            >
              {CONTENT.cta.label}
              <ArrowRight />
            </Link>
            <Countdown target={CONTENT.eventDate} />
          </div>
        </div>

        <Separator className="mt-20 h-px bg-[#FFFF64]/20" />

        {/* Link columns: stacked on mobile, 3 equal columns on desktop */}
        <nav
          aria-label="Footer"
          className="grid w-full grid-cols-1 gap-10 py-10 text-center lg:grid-cols-3 lg:gap-[42px] lg:items-start"
        >
          {CONTENT.columns.map((col) => (
            <div key={col.title} className="flex flex-col items-center gap-3">
              <h3 className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em]">
                {col.title}
              </h3>
              <ul className="flex flex-col items-center gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-sans text-base font-semibold leading-[1.2] tracking-[-0.02em] text-[#FFFF64]/80 transition-colors hover:text-[#FFFF64]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <Separator className="h-px bg-[#FFFF64]/20" />

        <p className="pt-5 text-center font-sans text-sm leading-[1.3] text-[#FFFF64]">
          {CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
}
