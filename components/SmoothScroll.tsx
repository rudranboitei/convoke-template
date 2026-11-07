"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // lower = smoother and slower (0.05 to 0.15 is the usual range)
        smoothWheel: true,
        anchors: true, // makes /#agenda style links glide instead of jumping
      }}
    >
      {children}
    </ReactLenis>
  );
}
