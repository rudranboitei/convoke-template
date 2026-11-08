
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// All copy lives here so the section is a one-place edit
const CONTENT = {
  heading: "Let's build the future of AI together.",
  body: "Odisha's AI community brings together developers, researchers, students, and curious minds to learn, experiment, share knowledge, contribute to open source, and build meaningful AI solutions together.",
  cta: { label: "Join the Community", href: "/#join-community" },
  columns: [
    {
      title: "Community",
      links: [
        { label: "Conferences", href: "/conferences" },
        { label: "Initiatives", href: "/initiatives" },
        { label: "Resources", href: "/resources" },
        { label: "About Us", href: "/about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Community Guidelines", href: "/code-of-conduct" },
        { label: "Terms Of Service", href: "/terms-of-service" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "X (Twitter)", href: "https://x.com", external: true },
        { label: "GitHub", href: "https://github.com", external: true },
      ],
    },
  ],
  copyright: "© 2026 Odisha AI. Built by the community, for the community.",
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
      className="w-full bg-forest px-5 pb-10 pt-16 text-lime md:px-10 md:pt-20 xl:px-15 xl:pt-25"
    >
      <div className="mx-auto flex w-full max-w-360 flex-col items-center">
        {/* CTA */}
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-display text-[clamp(36px,8vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
              {CONTENT.heading}
            </h2>
            <p className="max-w-220 font-sans text-lg font-medium leading-6.25 tracking-[-0.02em] lg:text-2xl lg:leading-8.5">
              {CONTENT.body}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href={CONTENT.cta.href}
              className={cn(
                buttonVariants(),
                "h-16 gap-3 rounded-xs bg-lime px-6 font-display text-2xl font-normal uppercase leading-none tracking-[0.04em] text-forest hover:bg-lime/90"
              )}
            >
              {CONTENT.cta.label}
              <ArrowRight />
            </Link>
          </div>
        </div>

        <Separator className="mt-20 h-px bg-lime/20" />

        {/* Link columns: stacked on mobile, 3 equal columns on desktop */}
        <nav
          aria-label="Footer"
          className="grid w-full grid-cols-1 gap-10 py-10 text-center lg:grid-cols-3 lg:gap-10.5 lg:items-start"
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
                      className="font-sans text-base font-semibold leading-[1.2] tracking-[-0.02em] text-lime/80 transition-colors hover:text-lime"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <Separator className="h-px bg-lime/20" />

        <p className="pt-5 text-center font-sans text-sm leading-[1.3] text-lime">
          {CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
}
