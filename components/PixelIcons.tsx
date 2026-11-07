import type { SVGProps } from "react";

/**
 * Exact icons used by the Framer template:
 *  - calendar-2, user, globe  -> pixelarticons
 *  - location-pin             -> "pixel" icon set (Pixel Icon Library)
 * All are 24x24 and use currentColor, so size/color come from className.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export function PixelCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h14v2H5zm0 16h14v2H5zM3 10h2v10H3zm0-4h2v2H3zm16 0h2v2h-2zm0 4h2v10h-2zM3 8h18v2H3zm12-6h2v2h-2zM7 2h2v2H7zm0 10h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2z" />
    </svg>
  );
}

export function PixelUser(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 2h6v2H9zm0 8h6v2H9zm6-6h2v6h-2zM7 4h2v6H7zM4 18h2v4H4zm14 0h2v4h-2zM8 14h8v2H8zm-2 2h2v2H6zm10 0h2v2h-2z" />
    </svg>
  );
}

export function PixelLocationPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 8v2h-1v1h-1v1h-2v-1h-1v-1H9V8h1V7h1V6h2v1h1v1z" />
      <path d="M19 6V4h-1V3h-1V2h-2V1H9v1H7v1H6v1H5v2H4v6h1v2h1v1h1v2h1v1h1v2h1v1h1v2h2v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1V6zm-2 6v2h-1v1h-1v2h-1v1h-1v2h-2v-2h-1v-1H9v-2H8v-1H7v-2H6V6h1V4h2V3h6v1h2v2h1v6z" />
    </svg>
  );
}

export function PixelGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2h12v2H6zm0 18h12v2H6zM4 4h2v2H4zm5 0h2v2H9zm0 14h2v2H9zm4 0h2v2h-2zM7 6h2v12H7zm8 0h2v12h-2zm-2-2h2v2h-2zm7 0h-2v2h2zM2 6h2v12H2zm20 0h-2v12h2zM4 18h2v2H4zm16 0h-2v2h2z" />
      <path d="M3 11h18v2H3z" />
    </svg>
  );
}

export function PixelClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2h12v2H6zM2 6h2v12H2zm18 0h2v12h-2zm-2-2h2v2h-2zM4 4h2v2H4zm2 18h12v-2H6zm12-2h2v-2h-2zM4 20h2v-2H4zm7-14h2v7h-2zm2 7h2v2h-2zm2 2h2v2h-2z" />
    </svg>
  );
}


// Approximation of pixelarticons "sparkles". For the exact glyph, move the real one into
// your PixelIcons file and import it from there instead of using this.
export function PixelSparkles({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      {/* big star */}
      <rect x="10" y="4" width="2" height="2" />
      <rect x="10" y="6" width="2" height="2" />
      <rect x="8" y="8" width="6" height="2" />
      <rect x="4" y="10" width="14" height="2" />
      <rect x="8" y="12" width="6" height="2" />
      <rect x="10" y="14" width="2" height="2" />
      <rect x="10" y="16" width="2" height="2" />
      {/* small plus, top right */}
      <rect x="19" y="1" width="2" height="2" />
      <rect x="17" y="3" width="6" height="2" />
      <rect x="19" y="5" width="2" height="2" />
      {/* dots, bottom left */}
      <rect x="2" y="16" width="2" height="2" />
      <rect x="4" y="18" width="2" height="2" />
      <rect x="2" y="20" width="2" height="2" />
    </svg>
  );
}
