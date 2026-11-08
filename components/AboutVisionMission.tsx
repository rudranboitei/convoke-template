import { Compass, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    id: "vision",
    index: "01",
    tag: "STRATEGIC VISION",
    icon: Compass,
    title: "Increasing Odia Presence in Global AI",
    statement:
      "Odias in AI is a global initiative creating a space for idea sharing, fostering collaborations, and discussing initiatives to increase the presence of Odia people in the field of AI. To this end, we run mentoring programs and maintain various fora for fostering partnerships and collaborations with industry and investors.",
    deliverables: [
      {
        title: "Mentoring & Fellowship Pipelines",
        desc: "Connecting university scholars and engineering graduates in Odisha with research leads and staff engineers across global tech institutions.",
      },
      {
        title: "Industry & Venture Collaboration",
        desc: "Curating high-trust forums bridging startups, private capital, and deep-tech founders with roots in the state.",
      },
      {
        title: "Worldwide Diaspora Council",
        desc: "Mobilizing chapter leads across Silicon Valley, Europe, Bengaluru, and Singapore for coordinated technical mentorship.",
      },
    ],
    tags: ["GLOBAL-MENTORSHIP", "VENTURE-PARTNERSHIPS", "ODIA-REPRESENTATION"],
  },
  {
    id: "mission",
    index: "02",
    tag: "OPERATIONAL MISSION",
    icon: Target,
    title: "Leveraging AI for Odisha & Odia Language",
    statement:
      "Odias in AI will help leverage the power of artificial intelligence and machine learning for the overall development of Odisha and Odia language through a platform for collaboration among Odia technologists, academicians, executives, policymakers, and the broader community.",
    deliverables: [
      {
        title: "Sovereign Vernacular AI",
        desc: "Building open-source Odia NLP datasets, tokenizers, spellcheckers, and fine-tuned generative language models to safeguard linguistic heritage.",
      },
      {
        title: "Academic & Faculty Enablement",
        desc: "Upskilling educators via Faculty Development Programs (FDP) and summer schools to modernize computational curricula across state universities.",
      },
      {
        title: "Policy & Public Good Deployment",
        desc: "Advising state policymakers on AI-driven governance, healthcare delivery, agricultural analytics, and educational accessibility.",
      },
    ],
    tags: ["ODIA-NLP-LLM", "FACULTY-UPSKILLING", "GOVERNANCE-AI"],
  },
];

export default function AboutVisionMission({ className }: { className?: string }) {
  return (
    <section
      id="vision-mission"
      className={cn(
        "w-full bg-forest px-5 py-16 text-lime border-t border-lime/20 md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-12 lg:gap-16">
        {/* 40 / 60 Split */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          {/* Left Column */}
          <div className="flex flex-col gap-5 lg:pr-12">
            <span className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-lime/75 md:text-[32px]">
              Our Purpose
            </span>
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.02em] text-lime md:text-5xl lg:text-6xl">
              Vision &amp; Mission
            </h2>
            <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-lime/80 md:text-xl md:leading-8">
              A dual charter focused on advancing individual Odia careers globally while deploying
              sovereign artificial intelligence solutions for the state&apos;s cultural and economic progress.
            </p>

            <div className="hidden lg:flex flex-col gap-3 rounded-xs border border-lime/20 bg-secondary/30 p-6 mt-4">
              <span className="font-mono text-xs uppercase tracking-wider text-lime/70">
                {"// CHARTER PRINCIPLES"}
              </span>
              <p className="font-sans text-sm text-lime/80 leading-relaxed">
                Zero paywalls. Open-source first. Grassroots-to-governance collaboration connecting
                undergraduate classrooms with tier-one AI research labs.
              </p>
            </div>
          </div>

          {/* Right Column: 2 High-Density Pillar Cards */}
          <div className="flex flex-col gap-8">
            {PILLARS.map((p) => {
              const IconComp = p.icon;
              return (
                <article
                  key={p.id}
                  className="flex flex-col gap-6 rounded-xs border border-lime/25 bg-secondary/35 p-6 md:p-10 transition-colors duration-200 hover:border-lime/50"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lime/15 pb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-normal uppercase tracking-tight text-lime/60">
                        {p.index}
                      </span>
                      <span className="rounded-xs bg-lime px-2.5 py-1 font-display text-xs uppercase tracking-[0.04em] text-forest">
                        {p.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-lime/70">
                      <IconComp className="size-3.5" strokeWidth={1.5} />
                      <span>Core Charter</span>
                    </div>
                  </div>

                  {/* Title & Core Statement */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-display text-3xl font-normal uppercase leading-tight tracking-[-0.02em] text-lime md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-lime/90 md:text-xl md:leading-8">
                      {p.statement}
                    </p>
                  </div>

                  {/* Concrete Deliverables Grid */}
                  <div className="grid grid-cols-1 gap-4 border-t border-lime/15 pt-5 sm:grid-cols-3">
                    {p.deliverables.map((d) => (
                      <div key={d.title} className="flex flex-col gap-1.5">
                        <span className="font-display text-sm uppercase tracking-tight text-lime">
                          {d.title}
                        </span>
                        <p className="font-sans text-xs font-medium leading-relaxed text-lime/70">
                          {d.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tag Strip */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-lime/10">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-xs border border-lime/20 bg-forest/80 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-lime/75"
                      >
                        [{t}]
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
