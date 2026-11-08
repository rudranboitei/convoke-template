import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const CHALLENGES = [
  {
    index: "01",
    tag: "LINGUISTIC COMPUTING FRONTIER",
    code: "CHAL-MT-01",
    title: "Shua & Odia Machine Translation",
    challenge:
      "Historically, the Odia language faced severe computational neglect — lacking standardized Unicode parallel datasets, tokenizers, linguistic dictionaries, or functional translation models.",
    resolution:
      "Shua — the spiritual predecessor — helped bring Machine Translation to Odia Language. This pioneering research broke through the initial barrier, proving that modern machine translation could accurately capture Odia grammatical syntax and nuances.",
    extendedImpact:
      "This breakthrough catalyzed the wider OdiaNLP movement: generating multi-million token monolingual corpora, digital spellcheckers, bilingual dictionaries, and direct precursors to modern OdiaGenAI foundation models.",
    bullets: [
      "Pioneered Machine Translation for Odia script",
      "Created open parallel corpora & tokenizer baselines",
      "Direct technical precursor to OdiaNLP and OdiaGenAI",
    ],
  },
  {
    index: "02",
    tag: "DIASPORA & ECOSYSTEM INTEGRATION",
    code: "CHAL-NET-02",
    title: "Uniting the Global Odia AI Ecosystem",
    challenge:
      "Odia engineers, academic researchers, founders, and executives were isolated across disconnected companies and global regions, with no shared conduit to transfer knowledge back into Odisha.",
    resolution:
      "United Odias across the world in AI/ML across professional, academic, investor, entrepreneur, and policymaker levels into a single cohesive global network.",
    extendedImpact:
      "By establishing synchronized annual conferences, 24/7 perpetual hackathon infrastructure, and statewide faculty development partnerships, the community closed the gap between international AI research labs and student builders in Odisha.",
    bullets: [
      "Connected engineers across 15+ countries into active chapters",
      "Bridged university classrooms with global engineering leaders",
      "Formed direct advisory conduits for state policymakers",
    ],
  },
];

export default function AboutMilestones({ className }: { className?: string }) {
  return (
    <section
      id="milestones"
      className={cn(
        "w-full bg-forest px-5 py-16 text-lime border-t border-lime/20 md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-12 lg:gap-16">
        {/* 40 / 60 Split */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:pr-12">
            <span className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-lime/75 md:text-[32px]">
              Milestones
            </span>
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.02em] text-lime md:text-5xl lg:text-6xl">
              Key Challenges Addressed
            </h2>
            <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-lime/80 md:text-xl md:leading-8">
              Documenting the foundational breakthroughs that turned linguistic challenges into
              open-source assets and transformed an unorganized diaspora into an active global collective.
            </p>
          </div>

          {/* Right Column: Challenge Cards */}
          <div className="flex flex-col gap-8">
            {CHALLENGES.map((item) => (
              <article
                key={item.index}
                className="flex flex-col gap-6 rounded-xs border border-lime/20 bg-secondary/35 p-6 md:p-10 transition-colors duration-200 hover:border-lime/40"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lime/15 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-xl text-lime/60">{item.index}</span>
                    <span className="font-mono text-xs font-bold text-lime/70">
                      [{item.code}]
                    </span>
                    <span className="rounded-xs border border-lime/30 bg-lime/10 px-2.5 py-1 font-display text-xs uppercase tracking-[0.04em] text-lime">
                      {item.tag}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-lime/70">
                    <ShieldCheck className="size-3.5" strokeWidth={1.5} />
                    Verified Breakthrough
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl uppercase leading-tight tracking-[-0.02em] text-lime md:text-4xl">
                  {item.title}
                </h3>

                {/* Challenge & Resolution */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-xs bg-forest/70 p-5 border border-lime/15">
                    <span className="font-mono text-xs uppercase tracking-wider text-lime/70 block mb-1.5">
                      {"// THE STRUCTURAL CHALLENGE"}
                    </span>
                    <p className="font-sans text-base font-medium leading-relaxed text-lime/85">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="rounded-xs bg-lime/10 p-5 border border-lime/25">
                    <span className="font-mono text-xs uppercase tracking-wider text-lime block mb-1.5">
                      {"// OUR SYSTEMIC BREAKTHROUGH"}
                    </span>
                    <p className="font-sans text-base font-semibold leading-relaxed text-lime">
                      {item.resolution}
                    </p>
                    <p className="font-sans text-sm font-medium leading-relaxed text-lime/80 mt-2">
                      {item.extendedImpact}
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <ul className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-3 border-t border-lime/10">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-xs font-semibold uppercase tracking-tight text-lime/85"
                    >
                      <CheckCircle2 className="size-3.5 text-lime shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {/* Bottom Community Join Banner (Internal link to Home hero) */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-xs border border-lime bg-lime p-8 text-forest md:flex-row md:items-center">
              <div className="flex flex-col gap-2">
                <span className="font-display text-2xl uppercase tracking-tight text-forest md:text-3xl">
                  Be Part of Odisha&apos;s AI Journey
                </span>
                <p className="max-w-[540px] font-sans text-base font-medium leading-relaxed text-forest/85">
                  Join researchers, students, founders, and community mentors shaping sovereign AI
                  infrastructure and global opportunities.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#hero"
                  className="inline-flex items-center gap-2 rounded-xs bg-forest px-5 py-3 font-display text-base font-normal uppercase leading-none tracking-[0.04em] text-lime transition-transform duration-200 hover:scale-[1.02] motion-reduce:transition-none"
                >
                  Join Community
                  <ArrowUpRight className="size-4 stroke-[2.2]" />
                </Link>
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 rounded-xs border border-forest bg-transparent px-5 py-3 font-display text-base font-normal uppercase leading-none tracking-[0.04em] text-forest transition-colors duration-200 hover:bg-forest hover:text-lime motion-reduce:transition-none"
                >
                  Back to Timeline
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
