import Image from "next/image";

const BASE = "https://framerusercontent.com/images";

// All copy lives here, so converting the section later is a one-place edit
const CONTENT = {
  heading: ["What People from Past", "Events Are Saying"],
  body: "Real feedback from founders and leaders who joined us last year.",
  items: [
    {
      name: "Aiden Cho",
      role: "Head of AI Research, Lumen Systems",
      img: "5AdM8nvqRHCqkQWaSkrSbPZRkU",
      quote:
        "“Attending this conference was transformative. The hands-on sessions were highly relevant, and the networking opportunities were invaluable. The well-organized event offered fresh perspectives and innovative ideas.”",
      // sticky offset on desktop, measured from the reference screenshots
      stick: "lg:top-[243px]",
    },
    {
      name: "Isabelle Cruz",
      role: "Partner, Horizon Capital",
      img: "1ojfzsjQsQYrhFYT7dCxS8doM4",
      quote:
        '"I walked in expecting talks and walked out with a network. The conversations between sessions were just as valuable as the content on stage — genuinely one of the best-run events I\'ve been to."',
      stick: "lg:top-[369px]",
    },
    {
      name: "Tom Whitfield",
      role: "Founder, Circuit & Soil",
      img: "XxQGrFsyRghmQhuwAiIBASCcZFQ",
      quote:
        '"As a founder in the sustainability space, finding a room full of people who actually get the mission is rare. This conference delivered real connections, not just business cards."',
      stick: "lg:top-[369px]",
    },
  ],
};

export default function TestimonialsSection() {
  return (
    // No overflow-hidden on this section or any ancestor: it would break position: sticky
    <section
      id="testimonials"
      className="w-full bg-[#F5F2EC] px-6 py-16 text-[#41351E] md:px-10 md:py-24 lg:pb-[68px] lg:pt-[100px] xl:px-[60px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading: pinned on desktop, but z-0 keeps it BELOW the rows,
            so the last card slides up over it (see z-10 on the rows). */}
        <div className="z-0 flex flex-col gap-1 bg-[#F5F2EC] pb-12 lg:sticky lg:top-0 lg:pb-14 lg:pt-5">
          <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
            {CONTENT.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="max-w-[300px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] md:max-w-none lg:text-2xl lg:leading-[34px]">
            {CONTENT.body}
          </p>
        </div>

        {/* Rows: each is sticky, opaque and z-10, so the next one covers the previous
            and all of them cover the heading when they scroll up */}
        <ul>
          {CONTENT.items.map((t) => (
            <li
              key={t.name}
              className={`z-10 border-t border-[#41351E] bg-[#F5F2EC] py-8 lg:sticky ${t.stick}`}
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[33fr_18fr_49fr] lg:gap-0">
                {/* Name + role */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[36px] lg:text-[40px]">
                    {t.name}
                  </h3>
                  <p className="font-sans text-lg font-medium leading-6 tracking-[-0.02em] text-[#41351E]/50">
                    {t.role}
                  </p>
                </div>

                {/* Portrait (beige backdrop shows behind the cut-out) */}
                <div className="relative aspect-[13/16] w-full bg-[#EAE4D7] lg:max-w-[260px]">
                  <Image
                    src={`${BASE}/${t.img}.png`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Quote */}
                <p className="mt-4 max-w-[360px] text-pretty font-sans text-xl font-medium leading-7 tracking-[-0.02em] md:max-w-[665px] lg:mt-0 lg:pl-10 lg:text-2xl lg:leading-[34px]">
                  {t.quote}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
