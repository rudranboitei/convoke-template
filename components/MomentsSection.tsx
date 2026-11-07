import Image from "next/image";

const BASE = "https://framerusercontent.com/images";

// All copy lives here, so converting the section later is a one-place edit.
// Alternating tall / square, same order as the original ticker.
const CONTENT = {
  heading: "Moments that made the room",
  body: "A glimpse into the conversations, connections, and energy from the last edition.",
  images: [
    { file: "ys7k6YRpiZU3XPBCa2looOu8.png", tall: true, alt: "" },
    { file: "uAuLpu1L6KQ7dV5DaoPk3dJI82Q.png", tall: false, alt: "" },
    { file: "m0WXYb6fhIDa0YQpAMYg6i5GETQ.png", tall: true, alt: "" },
    { file: "PIu7NV2nm7esQX0OQlgckAI29xM.png", tall: false, alt: "" },
    { file: "IU5eYgnroqojG3hL8w342Go09s.jpg", tall: true, alt: "man in black suit standing in front of people" },
    { file: "aWidFrqiIwWINdmsHKbo3pXJAw.jpg", tall: false, alt: "woman in black tank top" },
  ],
};

export default function MomentsSection() {
  // Two copies side by side; the animation moves exactly one copy's width, so the loop is seamless
  const track = [...CONTENT.images, ...CONTENT.images];

  return (
    <section id="moments" className="w-full overflow-hidden bg-[#F5F2EC] py-16 md:py-24 lg:py-[100px]">
      {/* Heading + sub, centred */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-1 px-5 text-center text-[#41351E] md:px-10 xl:px-[60px]">
        <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
          {CONTENT.heading}
        </h2>
        <p className="max-w-[900px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] lg:text-2xl lg:leading-[34px]">
          {CONTENT.body}
        </p>
      </div>

      {/* Full-bleed ticker. Items are centred vertically so tall and square cards alternate. */}
      <div className="mt-12 h-[340px] w-full overflow-hidden md:h-[540px] lg:mt-[60px]">
        <ul className="flex h-full w-max animate-marquee items-center motion-reduce:animate-none">
          {track.map((img, i) => (
            <li
              key={`${img.file}-${i}`}
              // second copy is a duplicate for the loop, so hide it from assistive tech
              aria-hidden={i >= CONTENT.images.length}
              // margin instead of flex gap so the -50% loop distance is exact
              className={`relative mr-5 shrink-0 overflow-hidden ${img.tall
                ? "h-85 w-63 md:h-135 md:w-100"
                : "h-65 w-65 md:h-90 md:w-90"
                }`}
            >
              <Image
                src={`${BASE}/${img.file}`}
                alt={img.alt}
                fill
                sizes={img.tall ? "(min-width: 768px) 400px, 252px" : "(min-width: 768px) 360px, 260px"}
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
