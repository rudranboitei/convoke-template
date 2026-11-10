export type InitiativeCategory =
  | "Education"
  | "Hackathon"
  | "Research"
  | "Open Source"
  | "Community";

export interface InitiativeSection {
  heading: string;
  emoji: string;
  content: string;
}

export interface InitiativeLead {
  name: string;
  role: string;
}

export interface InitiativeSponsor {
  name: string;
  desc: string;
}

export interface Initiative {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  date: string;
  status: string;
  category: InitiativeCategory;
  tags: readonly string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  cardImage?: string;
  sections: readonly InitiativeSection[];
  features?: readonly string[];
  highlight?: InitiativeLead;
  sponsor?: InitiativeSponsor;
  featured?: boolean;
}

export const INITIATIVES: readonly Initiative[] = [
  {
    slug: "rfs-s2s",
    title: "RFS: Speech-to-Speech",
    tagline:
      "A new Request for Software, open exclusively to the AI Fundamentals S2S community.",
    summary:
      "Build an Odia speech translation system for English, Mandarin and Hindi.",
    date: "Open · 2026",
    status: "Open call",
    category: "Research",
    tags: ["rfs", "hackathon", "odia"],
    image: "/media/initiatives/rfs-s2s.png",
    imageAlt:
      "Open call artwork for the Odisha AI speech-to-speech translation challenge.",
    imagePosition: "center 28%",
    cardImage: "/media/initiatives/rfs-s2s-wide.webp",
    featured: true,
    sections: [
      {
        heading: "About the RFS",
        emoji: "🎤",
        content:
          "A new Request for Software (RFS) is now open, exclusive to the S2S vehicle of the AI Fundamentals Series and the Odisha AI Community.\n\nRFS stands for Request for Software — it is a formal call to builders within the Odisha AI ecosystem to create a specific software solution. This RFS is accessible only to participants of the AI Fundamentals Series (S2S track) and members of the Odisha AI community.",
      },
      {
        heading: "The Challenge",
        emoji: "🧑‍💻",
        content:
          "Build a speech translation system that takes Odia speech as an input language and converts it into English, Mandarin and Hindi.\n\nThe system should be capable of real-time or near-real-time translation, preserving tone and meaning across all three output languages. Teams are encouraged to leverage open-source models, fine-tuned Odia speech datasets and any AI frameworks of their choice.",
      },
      {
        heading: "Demo Day — June 14th 2026",
        emoji: "🏆",
        content:
          "All teams must submit a working demonstration by Demo Day on June 14th 2026.\n\n• Top 10 teams will each receive a $100 award — total prize pool of $1,000.\n• The Top 1 team will receive investor interest with an investment of $1,000 into their product.\n• Enquiries of sponsorship are welcome — reach out to the community team to discuss sponsorship opportunities.",
      },
      {
        heading: "Who Can Participate",
        emoji: "🌐",
        content:
          "This RFS is exclusive to:\n\n• Participants currently enrolled in the Odisha AI Fundamentals Series (S2S vehicle)\n• Members of the Odisha AI Community\n\nIf you are not yet a member, join the community and the AI Foundation Series to become eligible.",
      },
    ],
  },
  {
    slug: "rathathon",
    title: "Rathathon",
    tagline: "A perpetual hackathon focused on AI and its applications.",
    summary:
      "A 24/7, barrier-free hackathon where builders ship real AI products together.",
    date: "27 June 2025",
    status: "Always on",
    category: "Hackathon",
    tags: ["hackathon", "event", "education"],
    image: "/media/initiatives/rathathon.webp",
    imageAlt:
      "Rathathon artwork with the Odisha AI perpetual hackathon title, chariot wheel and builders.",
    imagePosition: "center 34%",
    sponsor: {
      name: "Deep Surge AI",
      desc: "This perpetual hackathon is made possible by the generous support and sponsorship of Deep Surge AI.",
    },
    sections: [
      {
        heading: "About the Initiative",
        emoji: "🚀",
        content:
          "Rathathon is a perpetual hackathon focused on AI and its applications. It is designed to provide a continuous platform for developers, data scientists and AI enthusiasts to collaborate, innovate and build AI solutions that can address real-world challenges. A coding platform remains open to Odisha AI participants all the time, 24/7.\n\nPerpetual Hackathon is a special technology vehicle created by the students of the Odisha AI Foundation Series, to streamline their vehicles of choice to collaborate and work together. Designed as a continuum to encourage builders to build their desired products in inspired ways — no barrier to entry, no barrier to exit, socially intelligent, building value for builders, Odisha, India and the globe.",
      },
      {
        heading: "How to Apply / Join",
        emoji: "📝",
        content:
          "The platform is open in a no-barrier-to-entry manner to every willing coder and wannabe builder in AI. The floor anchors are responsible for communications and are reachable through the community team.\n\nIn the unlikely case of no response within 48 hours, the community team can use the open request resolution channel to help.",
      },
      {
        heading: "Benefits",
        emoji: "🎯",
        content:
          "Participants get an opportunity to build AI products, services and platforms of their own, in a friendly, Odia-speaking, no-judgment, socially intelligent community that believes in the \"build to finish\" motto — oftentimes solving the problems they are facing or the opportunity they are creating.",
      },
      {
        heading: "Partners",
        emoji: "🤝",
        content: "Deep Surge AI has sponsored this initiative for Odisha AI.",
      },
    ],
  },
  {
    slug: "ai-foundation-series",
    title: "AI Foundation Series",
    tagline:
      "A 20-session continuum covering every aspect of AI fundamentals, from theory to practice.",
    summary:
      "Twenty-session learning series, from linear algebra to transformers and beyond.",
    date: "15 February 2025",
    status: "Recurring",
    category: "Education",
    tags: ["education", "event"],
    image: "/media/initiatives/ai-foundation-series.webp",
    imageAlt:
      "AI Foundation Series artwork with learners at laptops and a programme overview.",
    imagePosition: "center 34%",
    sponsor: {
      name: "Deep Surge AI",
      desc: "This continuous educational program is made possible by the generous support and sponsorship of Deep Surge AI.",
    },
    sections: [
      {
        heading: "About the Initiative",
        emoji: "📚",
        content:
          "To build AI skills in the Odia community in a no-barrier-to-entry fashion, the AI Foundation Series was started. It runs in a continuum, with each series consisting of 20 sessions covering different aspects of AI fundamentals — from linear algebra and statistics to neural networks and transformers.",
      },
      {
        heading: "How to Apply / Join",
        emoji: "📝",
        content:
          "Every series beginning is advertised in the Odisha AI community, on social media and in other channels. Interested participants can register for the series through the provided links when a new series is announced.",
      },
      {
        heading: "Benefits",
        emoji: "🎓",
        content:
          "At the end of each series, completing participants are given a completion certificate and given the choice to be on board in a designated vehicle to specialize and hone their learnt skills towards industry usage.",
      },
      {
        heading: "Partners",
        emoji: "🤝",
        content: "Deep Surge AI has sponsored this AI fundamentals series for Odisha AI.",
      },
    ],
  },
  {
    slug: "odiagenai",
    title: "Odia Generative AI",
    tagline:
      "A collaborative initiative to conduct research on GenAI and LLMs for Indic languages.",
    summary:
      "Community research and open models that make generative AI work for Odia.",
    date: "22 March 2023",
    status: "Active",
    category: "Research",
    tags: ["odia", "genai"],
    image: "/media/initiatives/odiagenai.webp",
    imageAlt:
      "Odia Generative AI circular badge featuring a turtle wearing sunglasses and using a laptop.",
    highlight: {
      name: "Dr. Shantipriya Parida",
      role: "Project Lead",
    },
    sections: [
      {
        heading: "About the Project",
        emoji: "🧠",
        content:
          "Post the revolution of Generative AI by ChatGPT, community members led by Dr. Shantipriya Parida started a project to create a community around Generative AI in Odia.\n\nThe project is called Odia Generative AI (OdiaGenAI) and is a community of AI enthusiasts, researchers and developers who are passionate about exploring the potential of Generative AI in the Odia language.",
      },
      {
        heading: "Mission",
        emoji: "🎯",
        content:
          "OdiaGenAI aims to utilize the power of AI in building Generative AI and LLM-based technologies and solutions for the overall development of Odisha and the Odia language through collaboration among Odia technologists.",
      },
    ],
  },
  {
    slug: "openodia",
    title: "OpenOdia PyPI Package",
    tagline:
      "An open-source Odia Python package with powerful tools for Odia language processing.",
    summary:
      "Transliteration, tokenization, dictionaries and more — built for Odia in Python.",
    date: "19 September 2021",
    status: "Open source",
    category: "Open Source",
    tags: ["tools", "python", "odia"],
    image: "/media/initiatives/openodia.webp",
    imageAlt: "OpenOdia open-source Python package artwork.",
    imagePosition: "center 36%",
    features: [
      "Odia alphabets",
      "Generate random Odia names",
      "Detect Odia language",
      "Word tokenizer",
      "Remove stopwords",
      "Google Translate",
      "Automatic extractive text summarization",
      "Offline dictionary",
    ],
    sections: [
      {
        heading: "About the Project",
        emoji: "🐍",
        content:
          "OpenOdia is an open-source Python programming language package built for the Odia language. Developed by Soumendra Kumar Sahoo and Abhijeet Parida, it provides a comprehensive toolkit for working with Odia text programmatically.",
      },
    ],
  },
  {
    slug: "fdp",
    title: "AI/ML Faculty Development Program",
    tagline:
      "A joint collaboration of OdiaML and VSSUT bringing international experts to enrich faculty members with AI/ML skills.",
    summary:
      "Hands-on AI/ML training for faculty members, built with OdiaML and VSSUT.",
    date: "29 October 2022",
    status: "Completed",
    category: "Education",
    tags: ["event", "education"],
    image: "/media/initiatives/fdp.webp",
    imageAlt: "AI/ML Faculty Development Program artwork.",
    imagePosition: "center 35%",
    highlight: {
      name: "Dr. Shantipriya Parida",
      role: "Program Lead",
    },
    sponsor: {
      name: "Deep Surge AI",
      desc: "This faculty development program was made possible by the generous support and sponsorship of Deep Surge AI.",
    },
    sections: [
      {
        heading: "About the Program",
        emoji: "🎓",
        content:
          "On the 29th of October 2022, the Odisha AI community organized a faculty development program to teach the faculties of Odisha about AI/ML. At AI for Global Goals, we (Odias in AI/ML) aim to provide nextGEN participants with best-in-class training on a broad range of advanced topics and developments in AI and ML — including deep learning.\n\nThe Faculty Development Program (FDP) is a joint collaboration of OdiaML and VSSUT bringing international experts from academics and industries, aiming to enrich faculty members of any stream with AI/ML skills. This FDP focused on the hands-on implementation of various subjects in terms of mini-projects exercised by the participants and the assigned mentors.",
      },
    ],
  },
  {
    slug: "summer-school",
    title: "AI/ML Summer School",
    tagline: "Practical, hands-on AI/ML learning for students.",
    summary:
      "A structured summer programme taking students from fundamentals to real applications.",
    date: "2022",
    status: "Completed",
    category: "Education",
    tags: ["education"],
    image: "/media/initiatives/summer_school.webp",
    imageAlt: "AI/ML Summer School artwork.",
    imagePosition: "center 34%",
    sections: [
      {
        heading: "About the Program",
        emoji: "☀️",
        content:
          "The AI/ML Summer School is a structured educational program designed for students to learn AI/ML in a practical, hands-on manner. The school brings together students from Odisha and other regions to learn from industry experts and researchers, covering topics from machine learning fundamentals to advanced deep learning and real-world applications.",
      },
    ],
  },
  {
    slug: "ml-lecture-series",
    title: "AI/ML Lecture Series",
    tagline:
      "A curated series of lectures on machine learning, from foundations to frontier research.",
    summary:
      "Global experts break down machine learning for the Odia community.",
    date: "2021",
    status: "Archive",
    category: "Education",
    tags: ["education"],
    image: "/media/initiatives/lectures.webp",
    imageAlt: "AI/ML Lecture Series artwork.",
    imagePosition: "center 34%",
    sections: [
      {
        heading: "About the Series",
        emoji: "🎤",
        content:
          "The AI/ML Lecture Series is a curated series of lectures on Machine Learning, featuring talks from global experts in academia and industry. The series covers a wide range of topics from foundational ML concepts to cutting-edge research, making advanced AI knowledge accessible to the Odia community.",
      },
    ],
  },
  {
    slug: "childrens-day",
    title: "Children's Day 2021 Special Event",
    tagline: "A special event to educate children about AI/ML.",
    summary:
      "A playful introduction to artificial intelligence for the next generation.",
    date: "2021",
    status: "Archive",
    category: "Community",
    tags: ["event", "education"],
    image: "/media/initiatives/sishu_divas_2021.webp",
    imageAlt: "Children's Day 2021 AI/ML special event artwork.",
    imagePosition: "center 34%",
    sections: [
      {
        heading: "About the Event",
        emoji: "🧒",
        content:
          "The Children's Day 2021 Special Event was organized by the Odisha AI community to educate and inspire children about AI/ML. The event aimed to spark curiosity in young minds about technology and artificial intelligence, presenting concepts in a fun, engaging and age-appropriate way to encourage the next generation of AI innovators.",
      },
    ],
  },
  {
    slug: "twitter-spaces",
    title: "Twitter Spaces Series in AI/ML",
    tagline:
      "A series of live audio discussions on the latest trends and research in AI/ML.",
    summary:
      "Open, live conversations with Odia AI practitioners and researchers.",
    date: "2021",
    status: "Archive",
    category: "Community",
    tags: ["discussion", "twitter"],
    image: "/media/initiatives/podcasts.webp",
    imageAlt: "Twitter Spaces AI/ML audio series artwork.",
    imagePosition: "center 34%",
    sections: [
      {
        heading: "About the Series",
        emoji: "🎙️",
        content:
          "The Twitter Spaces Series in AI/ML is a series of live audio discussions on the latest trends, research and developments in Artificial Intelligence and Machine Learning. These sessions bring together Odia AI practitioners, researchers and thought leaders for open, engaging conversations that are accessible to the entire community.",
      },
    ],
  },
] as const;

export const INITIATIVE_CATEGORIES: readonly {
  label: "All" | InitiativeCategory;
  short: string;
}[] = [
  { label: "All", short: "Everything" },
  { label: "Education", short: "Learn" },
  { label: "Hackathon", short: "Build" },
  { label: "Research", short: "Research" },
  { label: "Open Source", short: "Open source" },
  { label: "Community", short: "Community" },
];

export const FEATURED_INITIATIVE =
  INITIATIVES.find((initiative) => initiative.featured) ?? INITIATIVES[0];

export function getInitiative(slug: string): Initiative | undefined {
  return INITIATIVES.find((initiative) => initiative.slug === slug);
}

export function getRelatedInitiatives(slug: string, limit = 3) {
  const current = getInitiative(slug);

  if (!current) return INITIATIVES.slice(0, limit);

  const sameCategory = INITIATIVES.filter(
    (initiative) =>
      initiative.slug !== slug && initiative.category === current.category,
  );
  const rest = INITIATIVES.filter(
    (initiative) =>
      initiative.slug !== slug &&
      !sameCategory.some((item) => item.slug === initiative.slug),
  );

  return [...sameCategory, ...rest].slice(0, limit);
}
