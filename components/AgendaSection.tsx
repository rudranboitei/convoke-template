
import AgendaTabs from "@/components/AgendaTabs";

// Community pathways inspired by Odisha AI's initiatives
const LEARN_SESSIONS = [
  {
    title: "AI Foundation Series",
    body: "Build a strong understanding of artificial intelligence, from linear algebra and statistics to neural networks, machine learning, and transformers.",
    time: "LEARNING",
  },
  {
    title: "AI/ML Lecture Series",
    body: "Explore machine learning concepts, emerging research, and practical applications through knowledge-sharing sessions.",
    time: "RESEARCH",
  },
  {
    title: "AI/ML Summer School",
    body: "Explore hands-on AI and machine learning learning opportunities, develop practical skills, and connect with fellow learners.",
    time: "HANDS-ON",
  },
];

const BUILD_SESSIONS = [
  {
    title: "Rathathon",
    body: "A continuous hackathon focused on building real-world AI applications. Bring an idea, experiment with technology, and turn it into something useful.",
    time: "ONGOING",
  },
  {
    title: "Odia Generative AI",
    body: "Explore generative AI and large language models for Odia and other Indic languages, helping make AI more accessible through local languages.",
    time: "LANGUAGE AI",
  },
  {
    title: "OpenOdia",
    body: "Contribute to open-source Odia language technology through Python tools for transliteration, tokenization, dictionaries, and more.",
    time: "OPEN SOURCE",
  },
];

const CONTRIBUTE_SESSIONS = [
  {
    title: "Build for Odia Languages",
    body: "Help improve language technology by contributing datasets, language resources, research, and tools for Odia and other Indic languages.",
    time: "CONTRIBUTE",
  },
  {
    title: "Share Knowledge & Research",
    body: "Share what you're learning, publish your work, exchange ideas, and help others explore artificial intelligence.",
    time: "COLLABORATE",
  },
  {
    title: "Connect Through Conferences",
    body: "Take part in AI conferences and community discussions that bring together researchers, developers, educators, and AI enthusiasts.",
    time: "COMMUNITY",
  },
];

const CONTENT = {
  heading: "Explore the AI ecosystem",
  body: "From learning the fundamentals to building real-world solutions, discover how you can be part of Odisha's AI journey.",

  days: [
    {
      id: "learn",
      label: "Learn & Explore",
      sessions: LEARN_SESSIONS,
    },
    {
      id: "build",
      label: "Build & Experiment",
      sessions: BUILD_SESSIONS,
    },
    {
      id: "contribute",
      label: "Connect & Contribute",
      sessions: CONTRIBUTE_SESSIONS,
    },
  ],
};

export default function AgendaSection() {
  return (
    <section id="agenda" className="w-full bg-lime px-5 py-16 md:px-10 md:py-24 xl:px-[60px] xl:py-[112px]">
      {/* 60px between the intro and the tabs on mobile, 40/60 split on desktop */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
        {/* Left: heading + copy */}
        <div className="flex flex-col gap-2.5 md:gap-5">
          <h2 className="max-w-[500px] font-display text-[clamp(30px,8.2vw,40px)] font-normal uppercase leading-none tracking-[-0.02em] text-forest md:text-[64px]">
            {CONTENT.heading}
          </h2>
          <p className="max-w-[440px] font-sans text-lg font-medium leading-[26px] tracking-[-0.02em] text-forest md:text-xl md:leading-7 lg:text-2xl lg:leading-[34px]">
            {CONTENT.body}
          </p>
        </div>

        {/* Right: community pathways + timeline */}
        <AgendaTabs days={CONTENT.days} />
      </div>
    </section>
  );
}
