import {
  BookOpen,
  Briefcase,
  Database,
  Handshake,
  Landmark,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ACTIVITIES = [
  {
    code: "ACT-01",
    tag: "AWARDS & SPOTLIGHT",
    icon: Trophy,
    title: "Celebrating Odia Achievements in AI/ML",
    description:
      "Celebrating the achievements of Odias in AI/ML across research institutions, global technology companies, and emerging deep-tech startups.",
    deliverables: [
      "Annual Community Awards & Research Fellowship Spotlights",
      "Amplification of Odia-authored papers at NeurIPS, CVPR, ACL, and ICLR",
      "Highlighting doctoral dissertations, patents, and technical leadership milestones",
    ],
  },
  {
    code: "ACT-02",
    tag: "PEDAGOGY & CURRICULUM",
    icon: BookOpen,
    title: "Structured Technical Learning Programs",
    description:
      "Enhancing skills through structured learning programs, intensive summer schools, and academic Faculty Development Programs (FDP).",
    deliverables: [
      "20-Session AI Foundation Series spanning linear algebra, calculus, and transformers",
      "Faculty Development Programs (FDP) empowering state university professors",
      "Undergraduate and school outreach hackathons and logic workshops",
    ],
  },
  {
    code: "ACT-03",
    tag: "VENTURE & WORKFORCE",
    icon: Briefcase,
    title: "Entrepreneurial & Career Opportunities",
    description:
      "Creating entrepreneurial and career opportunities through direct industry connections, startup incubation, and venture mentorship.",
    deliverables: [
      "Mentorship circles for engineering graduates seeking AI research and industry roles",
      "Founder-investor pitch reviews and grant advisory for Odia-founded startups",
      "Global referral network linking talents with AI opportunities across tech hubs",
    ],
  },
  {
    code: "ACT-04",
    tag: "POLICY & GOVERNANCE",
    icon: Landmark,
    title: "Catalyzing Statewide AI/ML Adoption",
    description:
      "Catalyzing AI/ML adoption by engaging with policymakers, state administrative bodies, and higher education departments.",
    deliverables: [
      "Advisory sessions on sovereign compute infrastructure and state data policies",
      "Designing citizen-centric AI frameworks for healthcare, agriculture, and civic services",
      "Modernizing undergraduate engineering curricula to match global industry standards",
    ],
  },
  {
    code: "ACT-05",
    tag: "OPEN LINGUISTICS & CODE",
    icon: Database,
    title: "Building an Open AI Knowledge Repository",
    description:
      "Building a knowledge repository in AI/ML with open-access datasets, language benchmarks, dictionaries, and codebases.",
    deliverables: [
      "OdiaNLP language models, dictionaries, monolingual corpora, and spellcheckers",
      "Open-access YouTube lecture archives covering fundamental to advanced deep learning",
      "Instruction-tuned OdiaGenAI checkpoints released under permissive community licenses",
    ],
  },
  {
    code: "ACT-06",
    tag: "GLOBAL DIASPORA NETWORK",
    icon: Handshake,
    title: "Connecting with Global Technology Leaders",
    description:
      "Connecting community members with global technology leaders, lab researchers, engineering executives, and investors worldwide.",
    deliverables: [
      "Direct office-hour sessions with staff engineers and research scientists overseas",
      "Regional chapter networks across Bhubaneswar, Bengaluru, USA, and Europe",
      "Collaborative cross-border research pipelines and industry mentorship",
    ],
  },
];

export default function AboutActivities({ className }: { className?: string }) {
  return (
    <section
      id="activities"
      className={cn(
        "w-full bg-lime px-5 py-16 text-forest md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-12 lg:gap-16">
        {/* 40 / 60 Split */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          {/* Left Column */}
          <div className="flex flex-col gap-5 lg:pr-12">
            <span className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-forest/75 md:text-[32px]">
              How We Help
            </span>
            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Our Activities
            </h2>
            <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-forest/85 md:text-xl md:leading-8">
              A comprehensive operational portfolio designed to elevate skills, build open-source tools,
              and connect Odia talent with global technology networks.
            </p>

            <div className="hidden lg:flex flex-col gap-3 rounded-xs border border-forest/20 bg-forest/5 p-6 mt-2">
              <span className="font-mono text-xs uppercase tracking-wider text-forest/70">
                {"// COMPREHENSIVE PROGRAM COVERAGE"}
              </span>
              <p className="font-sans text-sm text-forest/80 leading-relaxed">
                All 6 core operational initiatives are maintained year-round by volunteer community
                leads, researchers, and mentors with full technical transparency.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Cards in a responsive 2-column grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ACTIVITIES.map((act) => {
              const IconComp = act.icon;
              return (
                <article
                  key={act.code}
                  className="flex flex-col justify-between gap-6 rounded-xs border border-forest/30 bg-forest/5 p-6 md:p-8 transition-colors duration-200 hover:border-forest hover:bg-forest/10"
                >
                  <div className="flex flex-col gap-4">
                    {/* Header: Code + Tag + Icon */}
                    <div className="flex items-center justify-between border-b border-forest/20 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-forest/70">
                          [{act.code}]
                        </span>
                        <span className="font-display text-xs uppercase tracking-wider text-forest/80">
                          {act.tag}
                        </span>
                      </div>
                      <IconComp className="size-4 text-forest/70" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display text-2xl uppercase leading-tight tracking-[-0.02em] text-forest">
                      {act.title}
                    </h3>

                    <p className="font-sans text-base font-semibold leading-relaxed tracking-[-0.02em] text-forest/90">
                      {act.description}
                    </p>

                    {/* In-Page Bulleted Deliverables */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-forest/15">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-forest/60">
                        Core Program Deliverables:
                      </span>
                      <ul className="flex flex-col gap-1.5">
                        {act.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs font-medium text-forest/85 leading-relaxed"
                          >
                            <span className="font-mono text-forest/50 text-[10px] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-forest/15 font-mono text-[11px] uppercase tracking-wider text-forest/65">
                    <span>STATUS: ACTIVE PROGRAM</span>
                    <span>STATEWIDE &amp; GLOBAL</span>
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
