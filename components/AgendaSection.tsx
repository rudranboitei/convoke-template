import AgendaTabs from "@/components/AgendaTabs";

// All copy lives here, so converting the section later is a one-place edit
const SESSIONS = [
  {
    title: "Opening keynote",
    body: "The architects of tomorrow take the stage. A rare moment where the people shaping technology share what they're building right now, unfiltered and direct.",
    time: "09:00 AM - 10:00 AM",
  },
  {
    title: "The Future of AI in Everyday Products",
    body: "Explore how AI is transforming digital experiences & what it means for product teams.",
    time: "10:30 AM – 11:30 AM",
  },
  {
    title: "Designing for a Sustainable Planet",
    body: "A look at how climate-conscious thinking is reshaping product design, from materials to manufacturing.",
    time: "01:00 PM – 02:00 PM",
  },
];

// Placeholder sessions for Days 2 and 3 (the Framer template only ships Day 1). Replace with real ones.
const DAY_2_SESSIONS = [
  {
    title: "Workshop: Building with AI",
    body: "A hands-on session where teams prototype real features with the latest AI tools, from first prompt to working demo.",
    time: "09:30 AM - 11:00 AM",
  },
  {
    title: "Sustainable Tech in Practice",
    body: "Case studies from teams that cut emissions without slowing down, and the trade-offs they had to make.",
    time: "11:30 AM – 12:30 PM",
  },
  {
    title: "Investor Fireside Chat",
    body: "Investors share what they look for in early-stage companies, and the mistakes they see founders repeat.",
    time: "02:00 PM – 03:00 PM",
  },
];

const DAY_3_SESSIONS = [
  {
    title: "Product Teardown Live",
    body: "Designers and engineers pick apart real products on stage, and explain what they would change.",
    time: "10:00 AM - 11:00 AM",
  },
  {
    title: "Community Networking Hour",
    body: "An open session to meet speakers, trade contacts, and find collaborators for what comes next.",
    time: "12:00 PM – 01:00 PM",
  },
  {
    title: "Closing Keynote: What Comes Next",
    body: "The final word on where technology and sustainability are heading, and how to take the ideas home.",
    time: "03:30 PM – 04:30 PM",
  },
];

const CONTENT = {
  heading: "What’s Happening and When",
  body: "Three days of ideas, conversations, and connections shaping the future of technology and sustainability.",
  days: [
    { id: "day-1", label: "1st July, 2027", sessions: SESSIONS },
    { id: "day-2", label: "2nd July, 2027", sessions: DAY_2_SESSIONS },
    { id: "day-3", label: "3rd July, 2027", sessions: DAY_3_SESSIONS },
  ],
};

export default function AgendaSection() {
  return (
    <section id="agenda" className="w-full bg-lime px-5 py-16 md:px-10 md:py-24 xl:px-[60px] xl:py-[112px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
        {/* Left: heading + copy */}
        <div className="flex flex-col gap-5">
          <h2 className="max-w-[500px] font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em] text-forest">
            {CONTENT.heading}
          </h2>
          <p className="max-w-[440px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] text-forest lg:text-2xl lg:leading-[34px]">
            {CONTENT.body}
          </p>
        </div>

        {/* Right: day tabs + timeline (client component) */}
        <AgendaTabs days={CONTENT.days} />
      </div>
    </section>
  );
}
