
import { PixelCalendar, PixelLocationPin, PixelUser } from "@/components/PixelIcons";

// All copy lives here, so converting the section later is a one-place edit
const CONTENT = {
  label: "What We Do",
  heading: ["A community built", "around the future of AI"],
  body: "Bringing Odisha's AI enthusiasts together to learn, experiment, collaborate, and contribute to the future of artificial intelligence.",

  items: [
    {
      icon: PixelCalendar,
      question: "Learn & Explore",
      answer: ["Discover", "AI Together"],
    },
    {
      icon: PixelLocationPin,
      question: "Build & Contribute",
      answer: ["Create", "Real Impact"],
    },
    {
      icon: PixelUser,
      question: "Connect & Collaborate",
      answer: ["Grow As", "A Community"],
    },
  ],
};

export default function ScheduleSection() {
  return (
    <section id="what-we-do" className="w-full bg-cream px-5 py-16 md:px-10 md:py-24 xl:px-[60px] xl:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
        <p className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] text-brown">
          {CONTENT.label}
        </p>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em] text-brown">
              {CONTENT.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="max-w-[480px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] text-brown lg:text-2xl lg:leading-[34px]">
              {CONTENT.body}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {CONTENT.items.map(({ icon: Icon, question, answer }) => (
              <li key={question} className="flex flex-col gap-6">
                <Icon className="size-8 text-brown" />
                <div className="flex flex-col gap-1.5">
                  <p className="font-sans text-xl font-medium leading-6 tracking-[-0.02em] text-brown/50">
                    {question}
                  </p>
                  <h3 className="font-display text-4xl font-normal uppercase leading-[1.1] tracking-[-0.02em] text-brown">
                    {answer.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
