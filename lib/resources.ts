export type ResourceCategory =
  | "Language AI"
  | "Learning"
  | "Policy & vision"
  | "Open source";

export interface Resource {
  title: string;
  description: string;
  href: string;
  category: ResourceCategory;
  type: string;
  source: string;
  action: string;
}

export const RESOURCE_CATEGORIES: readonly {
  label: "All" | ResourceCategory;
  short: string;
}[] = [
  { label: "All", short: "Everything" },
  { label: "Learning", short: "Learn" },
  { label: "Language AI", short: "Language" },
  { label: "Open source", short: "Build" },
  { label: "Policy & vision", short: "Policy" },
];

export const RESOURCES: readonly Resource[] = [
  {
    title: "Odisha for AI",
    description:
      "A free, self-paced introduction to artificial intelligence from the Government of Odisha and Intel India. Two short sections, a shareable badge and no background required.",
    href: "https://ai.odisha.gov.in/#/home",
    category: "Learning",
    type: "Self-learning programme",
    source: "Govt. of Odisha · Intel India",
    action: "Start learning",
  },
  {
    title: "AI/ML School",
    description:
      "A community-run school that takes learners from the foundations of machine learning to applied, hands-on practice.",
    href: "https://odisha-ml.github.io/OdishaMLSchool/",
    category: "Learning",
    type: "Open course",
    source: "OdiaML",
    action: "Visit the school",
  },
  {
    title: "Faculty Development Program",
    description:
      "A joint OdiaML and VSSUT programme bringing international academics and industry practitioners to faculty members across Odisha.",
    href: "https://odisha-ml.github.io/FDP/",
    category: "Learning",
    type: "Programme archive",
    source: "OdiaML · VSSUT",
    action: "View the programme",
  },
  {
    title: "Talks & sessions",
    description:
      "Recorded conference talks, lectures and community sessions — a growing archive of AI knowledge, explained by the people building it.",
    href: "https://www.youtube.com/@OdiasInML",
    category: "Learning",
    type: "Video archive",
    source: "YouTube",
    action: "Watch the talks",
  },
  {
    title: "Awesome Odia AI",
    description:
      "A living index of Odia language AI: text, audio, images, datasets, models and research, curated and kept open by the community.",
    href: "https://github.com/odisha-ml/Awesome-Odia-AI/",
    category: "Language AI",
    type: "Curated index",
    source: "GitHub · Community maintained",
    action: "Open the index",
  },
  {
    title: "OdiaGenAI on Hugging Face",
    description:
      "Open models and datasets for generative AI in Odia, published by the community research collective OdiaGenAI.",
    href: "https://huggingface.co/OdiaGenAI",
    category: "Language AI",
    type: "Models & datasets",
    source: "Hugging Face",
    action: "Explore the models",
  },
  {
    title: "OpenOdia",
    description:
      "An open-source Python package for working with Odia text: transliteration, tokenisation, stopwords, dictionaries and more.",
    href: "https://openodia.soumendrak.com/",
    category: "Open source",
    type: "Python package",
    source: "Open source",
    action: "Explore the package",
  },
  {
    title: "OdishaML on GitHub",
    description:
      "The community's open repositories — tools, experiments and datasets that anyone can use, fork or contribute to.",
    href: "https://github.com/odisha-ml",
    category: "Open source",
    type: "Repositories",
    source: "GitHub",
    action: "Browse the repos",
  },
  {
    title: "Odisha AI Policy 2025",
    description:
      "The state's official AI policy framework: its priorities, governance approach and mission to build an inclusive AI ecosystem.",
    href: "https://dowr.odisha.gov.in/sites/default/files/2025-07/Odisha%20AI%20Policy-2025.pdf",
    category: "Policy & vision",
    type: "Policy document",
    source: "Government of Odisha · PDF",
    action: "Read the policy",
  },
  {
    title: "Odisha Vision 2036 & 2047",
    description:
      "The long-term development blueprint for Odisha, and the place of technology, skills and innovation within it.",
    href: "https://vision.odisha.gov.in/website/pdf/Odisha_Vision_Document_English.pdf",
    category: "Policy & vision",
    type: "Vision document",
    source: "Government of Odisha · PDF",
    action: "Read the vision",
  },
] as const;

export const ODISHA_FOR_AI = {
  title: "Odisha for AI",
  label: "Start here",
  heading: "AI, for everyone.",
  summary:
    "A self-paced introduction to artificial intelligence, open to every Odia — no background, no jargon, no barrier.",
  description:
    "Odisha for AI is designed to raise public awareness of artificial intelligence for people from all walks of life: students, parents, professionals, senior citizens and anyone who wants a digital-first mindset. It takes about four hours, and ends with a badge rather than a grade.",
  sections: [
    {
      number: "01",
      title: "AI Aware",
      kicker: "The idea",
      points: [
        "What artificial intelligence is — and what it is not.",
        "How human intelligence differs from machine intelligence.",
        "How to spot AI in everyday machines and unlearn the myths.",
      ],
    },
    {
      number: "02",
      title: "AI Appreciate",
      kicker: "The impact",
      points: [
        "The different domains of AI and where they show up.",
        "How AI is reshaping industries and public services.",
        "The principles of responsible AI and everyday ethics.",
      ],
    },
  ],
  after:
    "After both sections, build your own self-learning plan — choose a domain and keep going at your own pace.",
  facts: [
    { label: "Duration", value: "≈ 4 hours" },
    { label: "Sections", value: "02" },
    { label: "Languages", value: "English · Odia" },
    { label: "Cost", value: "Free" },
  ],
  accessibility:
    "Compatible with screen readers and talkback tools. Badges are shareable, and quizzes can be retaken as often as you like.",
  href: "https://ai.odisha.gov.in/#/home",
};

export const GLOSSARY: readonly {
  term: string;
  definition: string;
}[] = [
  {
    term: "Artificial intelligence",
    definition:
      "The broad field of building machines that can perform tasks we associate with human intelligence — recognising speech, understanding language, making decisions.",
  },
  {
    term: "Machine learning",
    definition:
      "A way of building AI where a system learns patterns from examples and data, rather than being given rules for every possible case.",
  },
  {
    term: "Large language model",
    definition:
      "A model trained on enormous amounts of text to predict and generate language. It is the engine behind most modern chatbots and writing tools.",
  },
  {
    term: "Fine-tuning",
    definition:
      "Taking a model that already understands language and training it further on a smaller, specific dataset — for example, Odia text or a particular task.",
  },
  {
    term: "Speech-to-speech",
    definition:
      "A system that listens to spoken language and responds with speech in another language, preserving meaning and tone along the way.",
  },
  {
    term: "Low-resource language",
    definition:
      "A language with relatively little digital text, audio or labelled data. Odia is one — which is why community datasets matter so much.",
  },
  {
    term: "Dataset",
    definition:
      "A structured collection of examples used to train or evaluate an AI system. Quality and representation decide what the model can learn.",
  },
  {
    term: "Open source",
    definition:
      "Software, models or data released with a licence that lets anyone inspect, use, adapt and share them — the default for most community work here.",
  },
];
