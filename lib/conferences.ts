export type ConferenceKind = "conference" | "summit";
export type ConferenceStatus = "Upcoming" | "Past";

export type ScheduleItem = readonly [time: string, title: string];

export interface ScheduleDay {
  day: string;
  items: readonly ScheduleItem[];
}

export interface ConferenceItem {
  title: string;
  desc: string;
}

export interface ConferenceSection {
  kicker: string;
  heading: string;
  paragraphs?: readonly string[];
  callout?: string;
  after?: readonly string[];
  flow?: readonly string[];
  steps?: readonly string[];
  items?: readonly ConferenceItem[];
}

export interface ConferencePerson {
  name: string;
  org: string;
}

export interface Conference {
  slug: string;
  title: string;
  shortTitle: string;
  kind: ConferenceKind;
  edition: string;
  year: string;
  date: string;
  location: string;
  status: ConferenceStatus;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  spotlightImage?: string;
  theme: string;
  tagline: string;
  preview: string;
  about: readonly string[];
  highlights: readonly { label: string; value: string }[];
  hashtag?: string;
  schedule?: readonly ScheduleDay[];
  sections?: readonly ConferenceSection[];
  closing?: {
    heading: string;
    paragraphs: readonly string[];
    highlight?: string;
    meta?: string;
  };
  organizers?: readonly ConferencePerson[];
  speakers?: readonly ConferencePerson[];
}

export const CONFERENCES: readonly Conference[] = [
  {
    slug: "2026",
    title: "2026 Odisha AI Conference",
    shortTitle: "2026 Conference",
    kind: "conference",
    edition: "7th Edition",
    year: "2026",
    date: "10 October 2026",
    location: "Hybrid · Bhubaneswar, Odisha",
    status: "Upcoming",
    image: "/media/conferences/2026-hero.webp",
    imageAlt:
      "Poster for the 2026 Odisha AI Conference, showing the conference title over a sunrise sky and Odisha landmarks.",
    imagePosition: "center 38%",
    spotlightImage: "/media/conferences/2026-square.webp",
    theme: "Vision to Impact — Making Odisha the Intellectual AI Capital of the World",
    tagline: "From Odisha to the world. From vision to impact.",
    preview:
      "A three-day global platform exploring how AI can transform Odisha, India and the world.",
    about: [
      "A global platform bringing together visionaries, innovators, entrepreneurs, researchers, businesses, policymakers and young minds to explore how Artificial Intelligence can transform Odisha, India and the world.",
      "The programme connects global technology conversations with Odisha's own aspirations, talent and opportunities — creating a platform for ideas that can move from vision to execution and ultimately to impact.",
    ],
    highlights: [
      { label: "Edition", value: "7th annual" },
      { label: "Format", value: "Hybrid" },
      { label: "Duration", value: "3 days" },
      { label: "Focus", value: "Vision to Impact" },
    ],
    hashtag: "#OAIConf2026",
    schedule: [
      {
        day: "Friday, 9 October",
        items: [
          ["9:00 PM", "Prayers at the Sree Jagannatha Temple"],
          ["9:13 PM", "Program Begins — First Ray on Earth"],
          ["9:15 PM", "Mun Sei Kalinga"],
          [
            "9:18 PM",
            "Making Odisha AI the Intellectual AI Capital of the World",
          ],
          ["9:30 PM", "Keynote 1: End to End AI — Sovereign AI"],
          ["10:30 PM", "End to End AI — Big Business"],
          ["11:30 PM", "End to End AI — Small Business"],
        ],
      },
      {
        day: "Saturday, 10 October",
        items: [
          ["12:30 AM", "End to End AI — Startups"],
          ["1:30 AM", "End to End AI — Science"],
          ["2:30 AM", "International — End to End AI: Frontier Tech"],
          ["3:30 AM", "International — End to End AI: Usage Tech"],
          ["4:30 AM", "International — End to End AI: Society"],
          ["5:30 AM", "Puri: Mangala Alati"],
          ["6:30 AM", "Keynote 2"],
          [
            "6:31 AM",
            "From the Gateway of India: Making Odisha AI the Intellectual AI Capital of the World",
          ],
          ["7:30 AM", "International — Europe: Sofia & Germany Panel"],
          ["8:30 AM", "International Panel — AI for Children"],
          [
            "8:55 AM",
            "Odisha Districts — Angul: Making Odisha the Intellectual AI Capital of the World",
          ],
          ["9:00 AM", "Odisha Districts — Angul"],
          ["9:30 AM", "End to End AI — Frontier Tech Research"],
          ["10:00 AM", "End to End AI — Use Case to Unicorn Case"],
          [
            "10:05 AM",
            "Vision: Odisha as AI Capital — Digital Infrastructure Along Corridors to Support AI Growth",
          ],
          [
            "10:40 AM",
            "AI for a Climate-Resilient Odisha: From Local Knowledge to Global Implements",
          ],
          ["11:25 AM", "End to End AI — Stories: Feeds from Fields"],
          ["11:35 AM", "AI: Upskilling and Upscaling"],
          ["11:50 AM", "Intelligence Management at Scale, Leveraging AI"],
          ["12:05 PM", "Transformations in Civil Engineering"],
          ["12:05 PM", "Panel: Emerging Superhighways in AI Times"],
          ["12:25 PM", "Energy Intelligence"],
          ["12:35 PM", "AI: Manufacturing in Chemical Industries"],
          ["12:35 PM", "Transition: Feeds from Fields"],
          ["1:00 PM", "National — Transforming the Talent Pool"],
          ["1:10 PM", "Odisha — Engineering: VSSUT"],
          ["1:20 PM", "Specialization: End to End AI — Math"],
          ["3:30 PM", "National — Feeds from Fields"],
          [
            "3:33 PM",
            "International — Netherlands: AI Expressway, Angul to Amsterdam",
          ],
          [
            "4:00 PM",
            "International — Netherlands: The Superhighway Design Details",
          ],
          ["4:30 PM", "National Session"],
          [
            "4:45 PM",
            "Odisha Districts — Balangir: Making Odisha the Intellectual AI Capital of the World",
          ],
          ["5:00 PM", "Jajpur: AI Vision for Odisha from the Jajpur Soccer Field"],
          ["5:05 PM", "Jajpur Representatives"],
          ["5:30 PM", "Odisha Districts — Representatives"],
          [
            "5:31 PM",
            "From Marine Drive, Mumbai: Making Odisha the Intellectual AI Capital of the World",
          ],
          ["6:30 PM", "Odisha Hackathon Feeds"],
          ["7:30 PM", "Odisha Districts — Hackathon Feeds"],
          ["8:30 PM", "Odisha — Ministerial Messages"],
          ["9:30 PM", "International — Dubai Panel"],
          [
            "10:30 PM",
            "Keynote 3: Engineering Superintelligence Superhighways from Odisha to Everywhere in the World",
          ],
          ["11:30 PM", "International — UK"],
        ],
      },
      {
        day: "Sunday, 11 October",
        items: [
          ["12:30 AM", "International — Hawaii & Africa"],
          [
            "1:30 AM",
            "International — USA: Engineering AI Superhighways from Odisha to USA with Love",
          ],
          [
            "2:30 AM",
            "International — Sweden: Making Odisha the Intellectual AI Capital of the World",
          ],
          ["3:30 AM", "International — Dubai Panel"],
          ["4:30 AM", "International — Singapore Panel"],
          ["5:16 AM", "Odisha — Day First Light: Building Unicorns from Odisha"],
          ["5:30 AM", "Keynote 4: Superhighways to Superintelligence and Abundance"],
          ["5:30 AM", "International — South America Panel"],
          ["6:30 AM", "International — Europe 3 Panel"],
          ["7:30 AM", "International — Australia & NZ Panel"],
          ["8:30 AM", "National — Delhi: The Policy Paradigms from the Capital"],
          ["9:30 AM", "National Session"],
          [
            "10:30 AM",
            "General Body Meeting — Impact and Scoping the Future of Odisha AI",
          ],
          ["10:44 AM", "Conclusion — Vote of Thanks · Last Ray on Earth"],
        ],
      },
    ],
    sections: [
      {
        kicker: "About the Conference",
        heading: "From Vision to Impact",
        paragraphs: [
          "Artificial Intelligence is reshaping how the world builds, discovers, works and lives.",
          "Vision to Impact is a conference built around a larger question:",
        ],
        callout:
          "How do we transform AI from an emerging technology into meaningful impact for people, businesses, science and society?",
        after: [
          "The conference brings together perspectives from Odisha, India and the international technology ecosystem to explore the complete AI landscape — from sovereign AI and frontier research to startups, enterprises, industries and society.",
          "The program connects global technology conversations with Odisha's own aspirations, talent and opportunities — creating a platform for ideas that can move from vision to execution and ultimately to impact.",
        ],
      },
      {
        kicker: "The Vision",
        heading: "Making Odisha the Intellectual AI Capital of the World",
        paragraphs: [
          "The conference looks beyond simply adopting AI.",
          "It asks how Odisha can become a place where AI ideas are imagined, researched, built, deployed and scaled.",
          "From young students and researchers to entrepreneurs, businesses and policymakers, the conference aims to create a broader ecosystem around AI.",
        ],
      },
      {
        kicker: "From Odisha to the World",
        heading: "A Global AI Conversation with Odisha at the Centre",
        paragraphs: ["The conference connects multiple levels of participation:"],
        flow: ["Odisha", "India", "Global"],
        after: [
          "The program includes dedicated sessions for Odisha districts, national perspectives and international participation, creating a platform where local ideas can connect with national and global technology ecosystems.",
        ],
      },
      {
        kicker: "Who Should Attend?",
        heading: "Built for the whole AI ecosystem",
        items: [
          {
            title: "Students & Young Minds",
            desc: "Discover opportunities in AI, research, entrepreneurship and technology.",
          },
          {
            title: "Founders & Startups",
            desc: "Explore AI applications, opportunities, partnerships and the path from use case to scalable company.",
          },
          {
            title: "Businesses",
            desc: "Understand how AI is transforming enterprises, industries and business models.",
          },
          {
            title: "Researchers & Scientists",
            desc: "Connect AI with scientific discovery and frontier research.",
          },
          {
            title: "Technology Leaders",
            desc: "Engage with conversations around sovereign AI, deep tech and the future of intelligent systems.",
          },
          {
            title: "Policymakers & Institutions",
            desc: "Explore how AI can contribute to national, state and societal transformation.",
          },
          {
            title: "Global Technology Community",
            desc: "Connect international expertise with India's and Odisha's emerging AI ecosystem.",
          },
        ],
      },
      {
        kicker: "Why This Conference Matters",
        heading: "The future is not just about AI. It's about what we do with it.",
        paragraphs: [
          "The real opportunity lies beyond algorithms and models. It lies in:",
        ],
        steps: [
          "Ideas becoming research.",
          "Research becoming technology.",
          "Technology becoming businesses.",
          "Businesses creating opportunities.",
          "Innovation reaching communities.",
          "And technology creating measurable impact.",
        ],
        after: ["That is the journey from Vision to Impact."],
      },
    ],
    closing: {
      heading: "From Odisha to the World. From Vision to Impact.",
      paragraphs: [
        "The next chapter of AI will not be written by technology alone.",
        "It will be shaped by the people who imagine new possibilities, build new systems, create new businesses, advance scientific discovery and apply technology to real problems.",
        "Vision to Impact brings these conversations together with one ambitious aspiration:",
      ],
      highlight: "Make Odisha the Intellectual AI Capital of the World.",
      meta: "10 October 2026 · Hybrid",
    },
  },
  {
    slug: "summit",
    title: "Odisha AI Summit 2025",
    shortTitle: "2025 Summit",
    kind: "summit",
    edition: "Inaugural Summit",
    year: "2025",
    date: "21–22 December 2025",
    location: "Bhubaneswar, Odisha, India",
    status: "Past",
    image: "/media/conferences/summit.webp",
    imageAlt:
      "The Odisha AI Summit 2025 stage and exhibition floor in Bhubaneswar.",
    imagePosition: "center 42%",
    theme: "Odisha and the Odia community for success in an AI-first, AI-everywhere era",
    tagline: "A landmark gathering charting Odisha's AI implementation path.",
    preview:
      "A landmark gathering of educators, policymakers, industry leaders and investors charting Odisha's AI path.",
    about: [
      "The global journey of Odisha AI reaches a crescendo in Bhubaneswar, enriched by the annual first-light-of-the-day-to-the-last-light conference and the regional summits across Odisha.",
      "The Higher Education division of The Odisha Society of the Americas, together with the Odisha AI community, presents Odisha AI Summit 2025 — setting up Odisha and the Odia community for success in an inevitable AI-first, AI-everywhere time.",
      "A gathering of educators, policy makers, industry practitioners, entrepreneurs and investors met to chart out Odisha's AI implementation path aligned with Odisha AI policy, Odisha Vision, India AI policy priorities and global realities.",
    ],
    highlights: [
      { label: "Edition", value: "Inaugural summit" },
      { label: "Format", value: "In person" },
      { label: "Duration", value: "2 days" },
      { label: "Host", value: "Bhubaneswar" },
    ],
    hashtag: "#OAISummit2025",
    organizers: [
      { name: "Prof. Prashant Mohapatra", org: "University of South Florida, USA" },
      { name: "Prof. Ashutosh Dutta", org: "Johns Hopkins University, USA" },
      { name: "Prof. Abani Patra", org: "TUFTS, USA" },
      { name: "Prof. Durga Madhab Mishra", org: "NJIT, USA" },
      { name: "Prof. Prasant Panigrahi", org: "SOA, Odisha, India" },
      { name: "Dr. Sukanta Mohapatra", org: "NIST, Odisha, India" },
      { name: "Dr. Ajay Kumar Mohanty", org: "Deloitte (Retired), Washington DC, USA" },
      { name: "Mr. Anjan Kumar Panda", org: "Odisha AI, Dublin AI, San Francisco, USA" },
    ],
    speakers: [
      { name: "Prof. Chitta Baral", org: "Arizona State University, Tempe, Arizona" },
      { name: "Dr. Dhanada Mishra", org: "RaSpect AI, Hong Kong" },
      { name: "Pranav Khaitan", org: "Google, Mountain View, California, USA" },
    ],
  },
  {
    slug: "regional-summit",
    title: "Odisha AI Regional Summit Series 2025",
    shortTitle: "Regional Summit Series",
    kind: "summit",
    edition: "Regional Series",
    year: "2025",
    date: "14 November 2025",
    location: "Multiple cities, Odisha",
    status: "Past",
    image: "/media/conferences/regional-summit-series.png",
    imageAlt:
      "Promotional artwork for the Odisha AI Regional Summit Series across multiple cities in Odisha.",
    imagePosition: "center 32%",
    theme: "Bringing the AI summit experience to every corner of Odisha",
    tagline: "The summit experience, closer to home.",
    preview:
      "Regional summits bringing the AI conference experience closer to communities across Odisha.",
    about: [
      "The Odisha AI Regional Summit Series 2025 brought the conference experience closer to communities across Odisha, making AI conversations accessible to more people in more places.",
      "A precursor to the Odisha AI Summit 2025, the regional summit series consisted of events held across multiple cities in Odisha, enabling local participation and grassroots AI engagement.",
    ],
    highlights: [
      { label: "Edition", value: "Regional series" },
      { label: "Format", value: "Multi-city" },
      { label: "Duration", value: "One day" },
      { label: "Host", value: "Odisha" },
    ],
  },
  {
    slug: "2025",
    title: "2025 Odisha AI Conference",
    shortTitle: "2025 Conference",
    kind: "conference",
    edition: "6th Edition",
    year: "2025",
    date: "11 October 2025",
    location: "Online + Odisha, India",
    status: "Past",
    image: "/media/conferences/2025.webp",
    imageAlt:
      "Artwork for the 2025 Odisha AI Conference showing a futuristic Odisha city and temple architecture.",
    theme: "Imagining Odisha as the intellectual AI capital of the globe",
    tagline: "From the first light of the day to the last.",
    preview:
      "Sixth annual international congregation — from the first light of the day to the last.",
    about: [
      "Odisha AI Conference 2025 is the sixth annual international congregation of Odias in AI, academicians, policymakers, linguists, business executives, investors, entrepreneurs and those working towards positively intervening in people's lives through AI.",
      "Conference date: 11th October, 2025. Time: from the first light of the day to the last.",
    ],
    highlights: [
      { label: "Edition", value: "6th annual" },
      { label: "Format", value: "Hybrid" },
      { label: "Duration", value: "One day" },
      { label: "Focus", value: "Global AI capital" },
    ],
    hashtag: "#OAIConf2025",
  },
  {
    slug: "2024",
    title: "2024 Odisha AI Conference",
    shortTitle: "2024 Conference",
    kind: "conference",
    edition: "5th Edition",
    year: "2024",
    date: "2024",
    location: "Hybrid · Online + Odisha",
    status: "Past",
    image: "/media/conferences/2024.webp",
    imageAlt: "Artwork for the 2024 Odisha AI Conference.",
    theme: "Practical AI: From Research to Real-World Applications",
    tagline: "Moving research out of the lab and into the real world.",
    preview:
      "Fifth annual conference on practical AI applications and community building.",
    about: [
      "The 2024 Odisha AI Conference was the fifth edition of the annual international gathering of Odias in AI.",
      "The event brought together researchers, practitioners, policymakers and entrepreneurs to discuss the latest trends in AI and how they can benefit Odisha and the broader Odia community.",
    ],
    highlights: [
      { label: "Edition", value: "5th annual" },
      { label: "Format", value: "Hybrid" },
      { label: "Duration", value: "One day" },
      { label: "Focus", value: "Practical AI" },
    ],
    hashtag: "#OAIConf2024",
  },
  {
    slug: "2023",
    title: "2023 Odisha AI Conference",
    shortTitle: "2023 Conference",
    kind: "conference",
    edition: "4th Edition",
    year: "2023",
    date: "2023",
    location: "Hybrid · Online + Odisha",
    status: "Past",
    image: "/media/conferences/2023.webp",
    imageAlt: "Artwork for the 2023 Odisha AI Conference.",
    theme: "AI for Odia Language: NLP, Machine Translation, and Beyond",
    tagline: "Deep dives into language, research and the Odia AI ecosystem.",
    preview:
      "Deep dives into ML research, NLP for the Odia language, and AI innovation.",
    about: [
      "The 2023 Odisha AI Conference featured deep dives into ML research, NLP for the Odia language and innovation in AI.",
      "The conference also highlighted the growing ecosystem of Odia AI projects and startups.",
    ],
    highlights: [
      { label: "Edition", value: "4th annual" },
      { label: "Format", value: "Hybrid" },
      { label: "Duration", value: "11 hours" },
      { label: "Focus", value: "Odia language AI" },
    ],
    hashtag: "#OAIConf2023",
  },
  {
    slug: "2022",
    title: "2022 Odisha AI Conference",
    shortTitle: "2022 Conference",
    kind: "conference",
    edition: "3rd Edition",
    year: "2022",
    date: "2022",
    location: "Virtual",
    status: "Past",
    image: "/media/conferences/2022.webp",
    imageAlt: "Artwork for the 2022 Odisha AI Conference.",
    theme: "Exploring the AI/ML Frontier",
    tagline: "Trends, startups and opportunities for Odias worldwide.",
    preview:
      "Exploring AI/ML trends, the startup ecosystem, and opportunities for Odias worldwide.",
    about: [
      "The 2022 Odisha AI Conference explored AI/ML trends, the startup ecosystem and opportunities for Odias worldwide.",
      "The event featured panel discussions, workshops and networking sessions.",
    ],
    highlights: [
      { label: "Edition", value: "3rd annual" },
      { label: "Format", value: "Virtual" },
      { label: "Duration", value: "One day" },
      { label: "Focus", value: "AI/ML frontier" },
    ],
    hashtag: "#OAIConf2022",
  },
  {
    slug: "2021",
    title: "2021 Odisha AI Conference",
    shortTitle: "2021 Conference",
    kind: "conference",
    edition: "2nd Edition",
    year: "2021",
    date: "2021",
    location: "Virtual",
    status: "Past",
    image: "/media/conferences/2021.png",
    imageAlt: "Artwork for the 2021 Odisha AI Conference.",
    theme: "Building the Odia AI Community",
    tagline: "Mentorship, talks and cross-industry collaboration.",
    preview:
      "Community-building milestone with mentorship, talks, and cross-industry collaboration.",
    about: [
      "The 2021 Odisha AI Conference was a community-building milestone featuring mentorship sessions, inspiring talks and cross-industry collaboration opportunities.",
      "It helped cement the Odisha AI community as a global movement.",
    ],
    highlights: [
      { label: "Edition", value: "2nd annual" },
      { label: "Format", value: "Virtual" },
      { label: "Duration", value: "One day" },
      { label: "Focus", value: "Community building" },
    ],
    hashtag: "#OAIConf2021",
  },
  {
    slug: "2020",
    title: "2020 Odisha AI Conference",
    shortTitle: "2020 Conference",
    kind: "conference",
    edition: "1st Edition",
    year: "2020",
    date: "2020",
    location: "Virtual",
    status: "Past",
    image: "/media/conferences/2020.webp",
    imageAlt: "Artwork for the inaugural 2020 Odisha AI Conference.",
    theme: "The Beginning of a Global Movement",
    tagline: "The first time Odias in AI gathered under one banner.",
    preview:
      "The inaugural Odisha AI conference — the beginning of a global movement.",
    about: [
      "The inaugural Odisha AI Conference in 2020 marked the beginning of what would become a global movement of Odias in AI.",
      "Held virtually, it brought together Odia AI practitioners and enthusiasts from around the world for the very first time under a unified banner.",
    ],
    highlights: [
      { label: "Edition", value: "Inaugural" },
      { label: "Format", value: "Virtual" },
      { label: "Duration", value: "One day" },
      { label: "Focus", value: "A global movement" },
    ],
    hashtag: "#OAIConf2020",
  },
] as const;

export const UPCOMING_CONFERENCE = CONFERENCES.find(
  (conference) => conference.status === "Upcoming",
);

export const ARCHIVE_CONFERENCES = CONFERENCES.filter(
  (conference) => conference.status === "Past",
);

export function getConference(slug: string): Conference | undefined {
  return CONFERENCES.find((conference) => conference.slug === slug);
}

export function getAdjacentConferences(slug: string) {
  const index = CONFERENCES.findIndex((conference) => conference.slug === slug);

  return {
    previous: index > 0 ? CONFERENCES[index - 1] : undefined,
    next:
      index >= 0 && index < CONFERENCES.length - 1
        ? CONFERENCES[index + 1]
        : undefined,
  };
}
