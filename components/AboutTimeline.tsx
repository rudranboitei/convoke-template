import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  year: string;
  code: string;
  tag: string;
  title: string;
  description: string;
  details: string;
  upcoming?: boolean;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "2018-first-steps",
    year: "2018",
    code: "OAI.01",
    tag: "ORIGINS // NMT",
    title: "First Steps in Machine Translation",
    description:
      "Odia, an initiative to bring machine translation for the Odia language, started.",
    details:
      "Early open computational linguistics experiments aimed at standardizing Odia Unicode corpora, testing tokenization schemes, and training statistical and neural machine translation baselines for the language.",
  },
  {
    id: "2020-global-community",
    year: "2020",
    code: "OAI.02",
    tag: "GLOBAL COALITION",
    title: "Odias in ML Worldwide Launch",
    description:
      "Odias in ML started as a global community of Odias interested in machine learning worldwide.",
    details:
      "Established initial chapters connecting engineers, researchers, and university faculty across India, North America, Europe, and Southeast Asia to share research papers, job leads, and open-source contributions.",
  },
  {
    id: "2020-first-conference",
    year: "2020",
    code: "OAI.03",
    tag: "CONFERENCE // ANNUAL",
    title: "1st Global Virtual Conference",
    description:
      "The annual global virtual conference of the Odias in ML community started.",
    details:
      "Inaugural multi-track virtual gathering featuring keynotes from Odia technologists at Fortune 500 tech companies and research universities, establishing an annual cadence for global knowledge exchange.",
  },
  {
    id: "2020-odia-nlp",
    year: "2020",
    code: "OAI.04",
    tag: "OPEN SOURCE // NLP",
    title: "OdiaNLP Project Inception",
    description:
      "OdiaNLP project started, contributing language models, NMT, dictionary, monolingual news corpus, and spell checker for Odia.",
    details:
      "A flagship technical breakthrough yielding the first public digital Odia spellchecker, unified dictionaries, multi-million token monolingual corpora, and open-source neural machine translation checkpoints on Hugging Face and GitHub.",
  },
  {
    id: "2021-twitter-spaces",
    year: "2021",
    code: "OAI.05",
    tag: "COMMUNITY INTERACTION",
    title: "Twitter Spaces & Shabarasa Word Game",
    description:
      "Twitter Spaces were organized where respected guests were invited to discuss AI/ML topics. Shabarasa, an Odia Wordle game, started from here.",
    details:
      "Weekly live audio technical discussions demystifying machine learning concepts for students, alongside the release of Shabarasa — a viral Odia linguistic puzzle that engaged tens of thousands of native speakers in wordplay.",
  },
  {
    id: "2021-second-conference",
    year: "2021",
    code: "OAI.06",
    tag: "CONFERENCE // ANNUAL",
    title: "2nd Global Annual Conference",
    description: "The second global annual conference was organized.",
    details:
      "Expanded curriculum covering computer vision, biomedical signal processing, Indic speech systems, and career transition pathways for early-career developers entering machine learning.",
  },
  {
    id: "2021-lecture-series",
    year: "2021",
    code: "OAI.07",
    tag: "EDUCATION // OUTREACH",
    title: "AI/ML Lecture Series & Children's Day Events",
    description:
      "AI/ML lecture series on YouTube and events on Children's Day for kids started.",
    details:
      "Published structured YouTube video modules explaining deep learning architectures from scratch, paired with interactive Children's Day logic workshops introducing middle and high school students to computational thinking.",
  },
  {
    id: "2022-summer-school",
    year: "2022",
    code: "OAI.08",
    tag: "ACADEMIA // PEDAGOGY",
    title: "Summer School & Faculty Development Program",
    description:
      "A summer school workshop program for students and a faculty development program for faculties have been conducted.",
    details:
      "Rigorous multi-week training cohorts enabling professors from technical institutes across Odisha to integrate modern PyTorch and ML pipelines into university coursework, while students built capstone projects.",
  },
  {
    id: "2022-third-conference",
    year: "2022",
    code: "OAI.09",
    tag: "CONFERENCE // HYBRID",
    title: "3rd Global Conference & Chapter Leads",
    description:
      "3rd annual global conference with a hybrid model was organized. Chapter leads have been introduced in the community.",
    details:
      "Pioneered a synchronized hybrid event format combining physical gathering nodes with global livestreams, while formally designating regional chapter leads in Bhubaneswar, Bengaluru, the US, and Europe.",
  },
  {
    id: "2023-odiagenai",
    year: "2023",
    code: "OAI.10",
    tag: "GENAI // LLM",
    title: "OdiaGenAI Project Initiative",
    description:
      "After the Generative AI revolution, a few community members started a project around Generative AI development in Odia and other languages.",
    details:
      "Focused on adapting large language models (LLMs) for the Odia script via LoRA fine-tuning, Indic instruction tuning, vernacular synthetic data generation, and evaluation benchmarks for cultural nuance.",
  },
  {
    id: "2023-fourth-conference",
    year: "2023",
    code: "OAI.11",
    tag: "RECORD // 11 HOURS",
    title: "4th Global Conference (11 Hours Non-Stop)",
    description:
      "The fourth and longest continuous (11 hrs) global conference has been organized.",
    details:
      "A landmark continuous broadcast uniting 35+ speakers across 12 time zones, featuring deep-dive technical sessions on multimodal models, AI startup governance, and the future of Indic computing.",
  },
  {
    id: "2024-foundation-series",
    year: "2024",
    code: "OAI.12",
    tag: "CURRICULUM // 20 SESSIONS",
    title: "AI Foundation Series (Deep Surge AI)",
    description:
      "AI Foundation Series launched — a 20-session continuum covering AI fundamentals from linear algebra to transformers, sponsored by Deep Surge AI.",
    details:
      "A 20-week end-to-end technical continuum delivering live lectures, assignments, and mentorship spanning vector calculus, probability, neural network optimization, attention mechanisms, and transformer deployment.",
  },
  {
    id: "2024-fifth-conference",
    year: "2024",
    code: "OAI.13",
    tag: "CONFERENCE // ANNUAL",
    title: "5th Annual Odisha AI Conference",
    description:
      "Fifth annual Odisha AI Conference — an all-day global congregation of Odias in AI, academicians, policy makers, and industry practitioners.",
    details:
      "A consolidated congregation exploring state-level AI policy, semiconductor and computing infrastructure, vernacular health-tech solutions, and enterprise adoption roadmaps.",
  },
  {
    id: "2025-rathathon",
    year: "2025",
    code: "OAI.14",
    tag: "HACKATHON // PERPETUAL",
    title: "Rathathon — Perpetual 24/7 AI Hackathon",
    description:
      "Rathathon — a perpetual 24/7 AI hackathon — launched to build real-world AI products in a barrier-free, community-driven environment.",
    details:
      "An always-active, non-stop hackathon platform where builders submit PRs, receive automated evaluations, collaborate with mentors asynchronously, and ship open-source production AI solutions around the clock.",
  },
  {
    id: "2025-ai-summit",
    year: "2025",
    code: "OAI.15",
    tag: "UPCOMING // LANDMARK",
    title: "Odisha AI Summit 2025 in Bhubaneswar",
    description:
      "Odisha AI Summit 2025 in Bhubaneshwar — a landmark gathering of educators, policy makers, entrepreneurs, and investors charting Odisha's AI future.",
    details:
      "The flagship physical summit convening state leadership, venture capital partners, international research scientists, and academic leaders to codify Odisha's decade-long sovereign AI strategy.",
    upcoming: true,
  },
];

export default function AboutTimeline({ className }: { className?: string }) {
  return (
    <section
      id="journey"
      className={cn(
        "w-full bg-cream px-5 py-16 text-brown md:px-10 md:py-24 xl:px-15 xl:py-25",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-360 flex-col gap-12 lg:gap-16">
        {/* 40 / 60 Split */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
          {/* Left Column: Sticky Label and Context */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start lg:pr-12">
            <div className="flex flex-col gap-2">
              <span className="font-display text-[28px] font-normal uppercase leading-none tracking-[-0.02em] text-brown/70 md:text-[32px]">
                Our Journey
              </span>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="rounded-xs bg-[#41351E] px-2.5 py-1 font-display text-xs uppercase tracking-[0.04em] text-[#FFFF64]">
                  Since 2020
                </span>
                <span className="rounded-xs border border-brown/30 px-2.5 py-1 font-display text-xs uppercase tracking-[0.04em] text-brown">
                  Odias in ML
                </span>
              </div>
            </div>

            <h2 className="font-display text-4xl uppercase leading-none tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Odias in AI/ML Journey
            </h2>

            <p className="font-sans text-lg font-medium leading-7 tracking-[-0.02em] text-brown/80 md:text-xl md:leading-8">
              A community timeline of milestones, initiatives, and conferences charting Odisha&apos;s
              AI future — from initial machine translation experiments in 2018 to an 11-hour
              continuous global summit and 24/7 perpetual hackathons.
            </p>

            {/* In-page Timeline Overview Box (Self-contained, no external links) */}
            <div className="flex flex-col gap-4 rounded-xs border border-brown/25 bg-brown/5 p-6">
              <span className="font-mono text-xs uppercase tracking-wider text-brown/75">
                {"// TIMELINE DOSSIER [15 MILESTONES]"}
              </span>

              <div className="grid grid-cols-2 gap-3 border-t border-brown/15 pt-4">
                <div className="flex flex-col">
                  <span className="font-display text-2xl uppercase text-brown">2018</span>
                  <span className="font-sans text-xs text-brown/70">Machine Translation</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl uppercase text-brown">05</span>
                  <span className="font-sans text-xs text-brown/70">Global Conferences</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl uppercase text-brown">20 Wks</span>
                  <span className="font-sans text-xs text-brown/70">Foundation Continuum</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl uppercase text-brown">24/7</span>
                  <span className="font-sans text-xs text-brown/70">Rathathon Active</span>
                </div>
              </div>

              <p className="font-sans text-xs leading-relaxed text-brown/75 border-t border-brown/15 pt-3">
                All 15 community milestones are fully archived below with complete technical context
                and deliverables.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline Chronology */}
          <div className="flex flex-col">
            <ol className="relative flex flex-col">
              {TIMELINE_DATA.map((item, idx) => (
                <li
                  key={item.id}
                  id={item.id}
                  className={cn(
                    "group relative flex flex-col gap-4 border-t border-brown/20 py-8 transition-colors duration-200",
                    item.upcoming && "bg-lime/20 border-brown px-6 py-8 rounded-xs my-3 border shadow-none",
                  )}
                >
                  {/* Meta Bar: Year Badge + Code + Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={cn(
                          "rounded-xs px-3 py-1 font-display text-base font-normal uppercase leading-none tracking-[0.04em]",
                          item.upcoming
                            ? "bg-forest text-lime"
                            : "bg-brown text-[#FFFF64]",
                        )}
                      >
                        {item.year}
                      </span>

                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brown/70">
                        [{item.code}]
                      </span>

                      <span className="rounded-xs border border-brown/20 px-2 py-0.5 font-sans text-xs font-semibold uppercase tracking-wider text-brown/75">
                        {item.tag}
                      </span>
                    </div>

                    {item.upcoming ? (
                      <span className="rounded-xs bg-forest px-2.5 py-1 font-display text-xs uppercase tracking-[0.04em] text-lime">
                        Upcoming Landmark Summit
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-brown/40">
                        Index #{String(idx + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Title & Core Description */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl uppercase leading-tight tracking-[-0.02em] md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base font-semibold leading-relaxed tracking-[-0.02em] text-brown md:text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Expanded In-Page Details */}
                  <div className="rounded-xs border border-brown/15 bg-brown/5 p-4 mt-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brown/60 block mb-1">
                      Technical Impact &amp; Context:
                    </span>
                    <p className="font-sans text-sm font-medium leading-relaxed text-brown/80">
                      {item.details}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
