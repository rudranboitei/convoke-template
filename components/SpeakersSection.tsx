import Image from "next/image";

// All copy lives here, so converting the section later is a one-place edit
const CONTENT = {
  heading: ["Architects of tomorrow,", "speaking today"],
  body: "Nine voices leading the shift toward smarter, more sustainable technology.",
  speakers: [
    { name: "Daniel Reyes", role: "Co-Founder,", company: "Verdant Labs", img: "iv9b3CXPkyYOp412CYZZ4kQ3kw" },
    { name: "Emma Sorensen", role: "VP of Product,", company: "NovaGrid", img: "xOn3QwXdQevsS9oH9TMeeSvd8" },
    { name: "Aiden Cho", role: "Head of AI Research,", company: "Lumen Systems", img: "5AdM8nvqRHCqkQWaSkrSbPZRkU" },
    { name: "Mei Lin Tan", role: "Director of Sustainability,", company: "EcoWorks", img: "oRb6j8uJw1330Qi8k95OW1x3yiA" },
    { name: "Marcus Bell", role: "Founder,", company: "GreenPath Ventures", img: "zE81ljCpJNDHUyCnGgg3IXtQl0" },
    { name: "Sana Chen", role: "Lead Designer,", company: "Studio Northbound", img: "NTjDedFz0Qg2wkMHTtaYERShYyw" },
    { name: "Jonas Park", role: "CTO,", company: "ClimateStack", img: "jyxBS8j8Wc4Si2zEjbrdTEtPq7I" },
    { name: "Isabelle Cruz", role: "Partner,", company: "Horizon Capital", img: "1ojfzsjQsQYrhFYT7dCxS8doM4" },
    { name: "Tom Whitfield", role: "Founder,", company: "Circuit & Soil", img: "XxQGrFsyRghmQhuwAiIBASCcZFQ" },
  ],
};

const LINKEDIN = "https://linkedin.com";

export default function SpeakersSection() {
  return (
    // id is lowercase so the navbar's "/#speakers" link scrolls here
    <section id="speakers" className="w-full bg-[#F5F2EC] px-5 py-16 md:px-10 md:py-24 xl:px-[60px] xl:py-[112px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        {/* Heading + sub */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em] text-[#41351E]">
            {CONTENT.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="max-w-[760px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] text-[#41351E] lg:text-2xl lg:leading-[34px]">
            {CONTENT.body}
          </p>
        </div>

        {/* Grid: 1320px max, centred. 2 cols mobile, 3 tablet, 4 laptop, 5 desktop (5 + 4 centred).
            flex-wrap + justify-center keeps a short last row centred. */}
        <ul className="mx-auto mt-12 flex w-full max-w-[1320px] flex-wrap justify-center gap-x-5 gap-y-8 lg:mt-[72px]">
          {CONTENT.speakers.map((s) => (
            <li
              key={s.name}
              className="w-[calc((100%-20px)/2)] md:w-[calc((100%-40px)/3)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-80px)/5)]"
            >
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#41351E]"
              >
                {/* Square photo area. The arch sits behind the cut-out photo and fills the lower 63%.
                    On hover the arch grows to the full square and turns light blue, and the photo goes colour. */}
                <div className="relative aspect-square w-full">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[63%] rounded-t-[40px] bg-[#EAE4D7] transition-[height,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full group-hover:bg-[#C5E9FF] group-focus-visible:h-full group-focus-visible:bg-[#C5E9FF] motion-reduce:transition-none md:rounded-t-[60px]"
                  />
                  <Image
                    src={`https://framerusercontent.com/images/${s.img}.png`}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 248px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0 group-focus-visible:grayscale-0 motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-3 flex flex-col gap-2.5">
                  <p className="font-display text-2xl font-normal leading-none text-[#41351E]">{s.name}</p>
                  <div className="font-sans text-base font-medium leading-6 tracking-[-0.02em] text-[#41351E]/50 md:text-lg md:leading-7">
                    <p>{s.role}</p>
                    <p>{s.company}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
