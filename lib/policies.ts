export type PolicySection = {
  heading: string;
  level: 2 | 3; // 2 = main section, 3 = sub-section
  paragraphs: string[];
};

export type Policy = {
  slug: string;
  title: string;
  updatedAt: string; // ISO date
  updatedLabel: string;
  sections: PolicySection[];
};

export const codeOfConduct: Policy = {
  slug: "code-of-conduct",
  title: "Code of Conduct",
  updatedAt: "2026-07-28",
  updatedLabel: "July 28, 2026",
  sections: [
    {
      heading: "Our standards",
      level: 2,
      paragraphs: [
        "We are committed to creating a welcoming, respectful, and inclusive community. Everyone who participates in our events, spaces, and conversations is expected to act with care and professionalism.",
        "Harassment, discrimination, threats, intimidation, and disruptive behavior are not tolerated. If you experience or witness conduct that violates these standards, please contact the organizers so we can respond promptly and fairly.",
      ],
    },
    {
      heading: "Respectful participation",
      level: 3,
      paragraphs: [
        "Please communicate with patience and assume good intent while remaining accountable for your impact. Critique ideas and work thoughtfully; do not target people. Give others room to contribute, and respect boundaries, privacy, and differing experiences.",
        "This standard applies across in-person gatherings, online channels, direct messages, presentations, and any other space connected with our community. It applies equally to attendees, speakers, partners, volunteers, and organizers.",
      ],
    },
    {
      heading: "Reporting and response",
      level: 3,
      paragraphs: [
        "Reports are handled as sensitively as possible. We may ask for additional context, speak with relevant people, and take proportionate action. Retaliation against anyone who raises a concern in good faith is not acceptable.",
      ],
    },
  ],
};

export const termsOfService: Policy = {
  slug: "terms-of-service",
  title: "Terms of Service",
  updatedAt: "2026-07-30",
  updatedLabel: "July 30, 2026",
  sections: [
    {
      heading: "Using this site",
      level: 2,
      paragraphs: [
        "This site and its materials are provided to help you learn about our work, programs, and events. You may use the site for lawful, personal, and informational purposes.",
        "You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or use its content in a way that violates applicable law or the rights of others.",
      ],
    },
    {
      heading: "Content and intellectual property",
      level: 3,
      paragraphs: [
        "Unless otherwise noted, the site’s text, identity, graphics, layouts, and other materials belong to their respective owners. You may view and share links to the site, but you may not reproduce, modify, distribute, or commercially exploit protected materials without permission.",
        "Any feedback or materials you choose to send us should be lawful and should not contain confidential information belonging to someone else. By sending feedback, you allow us to use it to improve our programs and services.",
      ],
    },
    {
      heading: "Availability and changes",
      level: 3,
      paragraphs: [
        "We work to keep information accurate and the site available, but we do not promise that every page will always be complete, current, or uninterrupted. We may change, suspend, or discontinue parts of the site and may revise these terms when our services or obligations change.",
      ],
    },
  ],
};

export const policies = {
  "code-of-conduct": codeOfConduct,
  "terms-of-service": termsOfService,
} as const;
