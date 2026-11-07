import Image from "next/image";

import RollingNumber from "./RollingNumber";

// All copy + media lives here, so converting the section later is a one-place edit

const CONTENT = {
  label: "Our Purpose",
  heading: "Building Odisha's future with AI",
  body: "Odisha has the talent, ideas, and potential to contribute to the future of artificial intelligence. We're bringing people together to learn, build, share knowledge, and create AI solutions that make a difference.",

  image: {
    src: "/purpose.png",
    alt: "People collaborating and building artificial intelligence technology",
  },

  stats: [
    { value: "01", suffix: "", label: ["Growing", "AI Community"] },
    { value: "02", suffix: "", label: ["Knowledge", "Sharing"] },
    { value: "03", suffix: "", label: ["Open Source", "Contributions"] },
    { value: "04", suffix: "", label: ["AI Research", "& Innovation"] },
    { value: "05", suffix: "", label: ["Local Impact", "Through AI"] },
  ],
};


export default function WhySection() {
  return (
    <section id="about" className="w-full bg-forest px-5 py-16 md:px-10 md:py-24 xl:px-15 xl:py-25">
      <div className="mx-auto flex w-full max-w-360 flex-col gap-14">
        {/* Label + content */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          <p className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] text-lime">
            {CONTENT.label}
          </p>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="max-w-140 font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em] text-lime">
                {CONTENT.heading}
              </h2>
              <p className="max-w-[840px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] text-lime lg:text-2xl lg:leading-[34px]">
                {CONTENT.body}
              </p>
            </div>

            <div className="relative aspect-[1680/1200] w-full overflow-hidden">
              <Image
                src={CONTENT.image.src}
                alt={CONTENT.image.alt}
                fill
                sizes="(min-width: 1280px) 864px, (min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {CONTENT.stats.map((s) => (
            <li key={s.label.join(" ")} className="flex flex-col gap-6">
              <RollingNumber value={s.value} suffix={s.suffix} />
              <p className="font-sans text-xl font-normal leading-[1.2] tracking-[-0.02em] text-lime lg:text-2xl">
                {s.label.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
