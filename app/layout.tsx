import type { Metadata, Viewport } from "next";
import { Albert_Sans, Anton } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/SiteHeader";
import SmoothScroll from "@/components/SmoothScroll";
import CtaFooterSection from "@/components/cta-footer-section";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-albert-sans",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Convoke",
  description: "Convoke event",
};

// Browser status/address bar color. Same value as --color-forest in globals.css.
// (Metadata can't read CSS variables, so the hex is repeated here.)
export const viewport: Viewport = {
  themeColor: "#22382b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${anton.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <CtaFooterSection />
      </body>
    </html>
  );
}
