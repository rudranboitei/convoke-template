import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

// All copy lives here so the section is a one-place edit
const CONTENT = {
  heading: ["Hosted in", "Los Angeles, California"],
  image: {
    src: "https://framerusercontent.com/images/7e1R0KZeIRLiE2BpsqoheiDpwmY.jpg",
    alt: "Attendees seated in the City Hall auditorium during a panel on stage",
  },
  location: ["City Hall,", "LA, California"],
  paragraphs: [
    "Our venue is City Hall on Santa Fe Drive, a space that blends indoor stages with open-air areas, built to feel more like a design festival than a corporate conference.",
    "We started as a conference born from a spirit of independent thinking, and that hasn't changed. The talks, the sessions, and the people in the room bring an energy you can only get by being there in person.",
  ],
};

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="w-full bg-[#113F60] px-6 py-16 text-[#CDEEFF] md:px-10 md:py-20 xl:px-[60px] xl:py-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:gap-16">
        <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
          {CONTENT.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Image: portrait-ish on mobile, wide on desktop */}
        <div className="relative w-full overflow-hidden bg-black">
          <AspectRatio ratio={372 / 425} className="lg:hidden">
            <VenueImage />
          </AspectRatio>
          <AspectRatio ratio={1440 / 700} className="hidden lg:block">
            <VenueImage />
          </AspectRatio>

          {/* Dark fade so the caption stays readable on the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent"
          />

          <p className="absolute left-4 top-4 font-sans text-2xl font-semibold leading-[1.3] tracking-[-0.05em] md:left-8 md:top-8">
            {CONTENT.location.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* Body copy: full width on mobile, right 60% on desktop */}
        <div className="flex flex-col gap-5 lg:ml-[40%] lg:max-w-[744px]">
          {CONTENT.paragraphs.map((p) => (
            <p
              key={p}
              className="max-w-[360px] text-pretty font-sans text-xl font-medium leading-[1.3] tracking-[-0.02em] text-[#CDEEFF]/80 md:max-w-none lg:text-2xl lg:leading-[34px]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function VenueImage() {
  return (
    <Image
      src={CONTENT.image.src}
      alt={CONTENT.image.alt}
      fill
      sizes="(min-width: 1536px) 1440px, (min-width: 1280px) calc(100vw - 120px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
      className="object-cover"
    />
  );
}
