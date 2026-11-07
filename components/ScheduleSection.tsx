import { PixelCalendar, PixelLocationPin, PixelUser } from "@/components/PixelIcons";

// All copy lives here, so converting the section later is a one-place edit
const CONTENT = {
  label: "Schedule",
  heading: ["When, Where, and Who", "can participate"],
  body: "Three days of insight, connection, and ideas that shape the future of sustainable tech.",
  items: [
    { icon: PixelCalendar, question: "When?", answer: ["1st July - 3rd July, 2026"] },
    { icon: PixelLocationPin, question: "Where?", answer: ["Los Angeles, California"] },
    { icon: PixelUser, question: "Who can join?", answer: ["Founders &", "Leaders"] },
  ],
};

export default function ScheduleSection() {
  return (
    <section id="schedule" className="w-full bg-cream px-5 py-16 md:px-10 md:py-24 xl:px-[60px] xl:py-[100px]">
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
