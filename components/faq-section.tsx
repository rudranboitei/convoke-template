import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// All copy lives here. Each answer is an array of paragraphs.

const CONTENT = {
  heading: "Frequently asked questions",
  body: "Everything you need to know about Odisha AI.",
  items: [
    {
      q: "What is Odisha AI?",
      a: [
        "Odisha AI is a community bringing together people from Odisha who are passionate about artificial intelligence. It's a space to learn, share ideas, explore research, build projects, and contribute to the growing AI ecosystem.",
      ],
    },
    {
      q: "Who Can Join the Community?",
      a: [
        "Anyone interested in artificial intelligence is welcome. Whether you're a student, developer, researcher, educator, entrepreneur, or simply curious about AI, there's a place for you in the community.",
      ],
    },
    {
      q: "Do I Need Prior AI Experience to Participate?",
      a: [
        "Not at all. You can join whether you're just starting to explore AI or already working on advanced machine learning and research. We believe learning and building together makes the community stronger.",
      ],
    },
    {
      q: "How Can I Contribute to AI in Odisha?",
      a: [
        "There are many ways to contribute. You can work on open-source projects, explore AI research, develop solutions for local challenges, contribute to Odia language technologies, share knowledge, or collaborate with other builders.",
      ],
    },
    {
      q: "What Are the Odisha AI Conferences About?",
      a: [
        "Our conferences create opportunities for AI enthusiasts, developers, researchers, and innovators to exchange ideas, discuss emerging technologies, share research, and connect with people working on AI. Check the Conferences page for announcements and details.",
      ],
    },
    {
      q: "Where Can I Find AI Learning Resources?",
      a: [
        "Explore our Resources section for learning materials, research papers, tutorials, documentation, and useful tools covering artificial intelligence, machine learning, deep learning, and generative AI.",
      ],
    },
    {
      q: "Why Is AI Important for Odisha?",
      a: [
        "AI presents opportunities to address real challenges across Odisha, including agriculture, healthcare, education, disaster management, and public services. Developing AI capabilities for Odia and tribal languages can also help make technology more accessible and inclusive.",
      ],
    }
  ],
};

// Same pixel-style plus as the reference (pixelarticons "plus"), drawn at 34px.
// Turns into an × when the trigger is expanded (aria-expanded is set by the accordion).
function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="size-8.5 shrink-0 transition-transform duration-300 ease-out group-aria-expanded/faq:rotate-45"
    >
      <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z" />
    </svg>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faqs"
      className="w-full bg-[#F5F2EC] px-6 py-16 text-brown md:px-10 md:py-20 xl:px-15 xl:py-25"
    >
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-10 lg:grid-cols-[40fr_60fr] lg:gap-0">
        {/* Heading + sub. Narrow max-widths force the same line breaks as the reference. */}
        <div className="flex flex-col gap-2">
          <h2 className="max-w-100 font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.97] tracking-[-0.03em]">
            {CONTENT.heading}
          </h2>
          <p className="max-w-72.5 font-sans text-xl font-medium leading-7 tracking-[-0.02em] lg:text-2xl lg:leading-8.5">
            {CONTENT.body}
          </p>
        </div>

        {/* shadcn Accordion, used as in the docs. No defaultValue, so every item starts closed. */}
        <Accordion className="w-full">
          {CONTENT.items.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="border-b border-brown last:border-b"
            >
              {/* The built-in chevron icons are hidden and replaced with the plus. */}
              <AccordionTrigger className="group/faq relative w-full cursor-pointer items-start rounded-none py-6 pr-12 font-display text-[32px] font-normal uppercase leading-[1.2] tracking-normal transition-[padding] duration-300 ease-out hover:no-underline aria-expanded:pb-5 focus-visible:ring-[#41351E]/40 **:data-[slot=accordion-trigger-icon]:hidden [&>svg]:hidden">
                <span className="text-left">{item.q}</span>
                <span className="absolute right-0 top-6 flex h-9.5 items-center">
                  <PlusIcon />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 font-sans text-lg font-medium leading-7 tracking-normal text-brown/50 [&_p:not(:last-child)]:mb-7">
                {item.a.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
