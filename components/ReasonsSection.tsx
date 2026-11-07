import { PixelSparkles } from "./PixelIcons";

// All copy lives here, so converting the section later is a one-place edit
const CONTENT = {
  label: "Values",
  heading: "Some good reasons to attend this Event",
  body: "Join us for a three-day summit designed to spark ideas, forge partnerships, and shape what's next.",
  // title is split into lines to match the design's forced line breaks
  reasons: [
    {
      title: ["Visionary", "talks"],
      body: "Hear from founders, thinkers, and technologists leading the way in sustainable innovation.",
    },
    {
      title: ["Practical", "workshops"],
      body: "Roll up your sleeves in interactive sessions focused on real-world tools and strategies.",
    },
    {
      title: ["Purposeful", "networking"],
      body: "Connect with a like-minded community of entrepreneurs, creatives, and changemakers.",
    },
    {
      title: ["Actionable takeaways"],
      body: "Leave with frameworks, contacts, and ideas you can put to work the moment you're home.",
    },
  ],
};


export default function ReasonsSection() {
  return (
    <section
      id="reasons"
      className="w-full bg-[#6B2B26] px-5 py-16 text-[#FF6F53] md:px-10 md:py-24 lg:py-[100px] xl:px-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 lg:gap-[60px]">
        {/* Top: label on the left, heading + sub on the right (40 / 60) */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          <p className="font-display text-3xl font-normal uppercase leading-none tracking-[-0.02em] md:text-[32px]">
            {CONTENT.label}
          </p>

          {/* heading and sub sit tight together, 4px apart */}
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
              {CONTENT.heading}
            </h2>
            <p className="max-w-[520px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] lg:text-2xl lg:leading-[34px]">
              {CONTENT.body}
            </p>
          </div>
        </div>

        {/* Row: 1 col mobile, 2 tablet, 4 desktop (330px columns, 40px gaps) */}
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CONTENT.reasons.map((r) => (
            <li key={r.title.join(" ")} className="flex flex-col items-start gap-5">
              <PixelSparkles className="size-10 shrink-0" />

              <div className="flex flex-col gap-8">
                <h3 className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[36px] lg:text-[40px] lg:leading-[39px]">
                  {r.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em]">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
