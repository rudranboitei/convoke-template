"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import TicketButton from "@/components/TicketButton";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Conferences", href: "/conferences" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
] as const;


function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5"
      aria-label="Convoke home"
    >
      <Image
        src="/logo.svg"
        alt="Convoke"
        width={150}
        height={40}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}

/** Text that rolls up on hover (the Framer "Navbar" link variant). */
function RollLink({ href, children, onClick }: { href: string; children: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative block overflow-hidden font-sans text-base font-medium uppercase leading-[1.2] tracking-[-0.02em] text-lime outline-offset-4 focus-visible:outline-2 focus-visible:outline-lime"
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none"
      >
        {children}
      </span>
    </Link>
  );
}

const NAV_HEIGHT = 68;
const SCROLL_DELTA = 8; // ignore tiny scroll jitters

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false); // forest background (once past the hero)
  const [hidden, setHidden] = useState(false); // slid out of view while scrolling down
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;

      // Background: transparent over the hero, solid forest after it.
      // Give the hero section id="hero"; otherwise it falls back to one viewport height.
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetHeight - NAV_HEIGHT : window.innerHeight - NAV_HEIGHT;
      setSolid(y > threshold);

      // Visibility: always show at the very top, hide on scroll down, show on scroll up.
      if (y <= 10) {
        setHidden(false);
      } else if (y > lastY.current + SCROLL_DELTA) {
        setHidden(true);
      } else if (y < lastY.current - SCROLL_DELTA) {
        setHidden(false);
      }

      if (Math.abs(y - lastY.current) > SCROLL_DELTA) lastY.current = y;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close the menu if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock page scroll and allow Escape to close while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        aria-label="Main"
        className={`fixed inset-x-0 top-0 z-40 w-full transition-[transform,background-color] duration-300 ease-out motion-reduce:transition-none ${hidden ? "-translate-y-full" : "translate-y-0"
          } ${solid ? "bg-forest" : "bg-transparent"}`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-2.5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-0 lg:py-2.5">
          <Brand />

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <RollLink href={l.href}>{l.label}</RollLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <TicketButton className="hidden lg:inline-flex lg:justify-self-end" />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="size-8 rounded-none text-lime hover:bg-transparent hover:text-lime lg:hidden [&_svg]:!size-8"
          >
            <Menu strokeWidth={1.5} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu: full-screen, fully opaque forest panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="fixed inset-0 z-50 flex flex-col bg-forest animate-in fade-in-0 duration-200 motion-reduce:animate-none lg:hidden"
        >
          <div className="flex items-center justify-between px-5 py-2.5">
            <Brand onClick={close} />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={close}
              className="size-8 rounded-none text-lime hover:bg-transparent hover:text-lime [&_svg]:!size-8"
            >
              <X strokeWidth={1.5} />
            </Button>
          </div>

          <ul className="mt-8 flex flex-col items-center gap-4 text-center">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <RollLink href={l.href} onClick={close}>
                  {l.label}
                </RollLink>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <TicketButton onClick={close} />
          </div>
        </div>
      )}
    </>
  );
}
