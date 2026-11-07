import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Primary CTA: shadcn Button rendered as a Next Link (asChild). */
export default function TicketButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto gap-2 rounded-xs bg-lime px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-forest shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-lime motion-reduce:transition-none",
        className,
      )}
    >
      <Link href="/#tickets" onClick={onClick} className="flex justify-center items-center gap-2">
        Join Community
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4! fill-none stroke-forest stroke-[2.2]">
          <path d="M2 8h11M9 3.5 13.5 8 9 12.5" strokeLinecap="square" />
        </svg>
      </Link>
    </Button>
  );
}
