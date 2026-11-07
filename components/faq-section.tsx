import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// All copy lives here. Each answer is an array of paragraphs.
const CONTENT = {
  heading: "Frequently asked questions",
  body: "Everything you need to know before you register.",
  items: [
    {
      q: "What if I can’t join the summit live?",
      a: [
        "No problem at all…that’s exactly why we created the VIP Pass.",
        "Once you sign up, you’ll have the option to upgrade to VIP, which gives you on-demand access to all of the sessions from the Summit. That includes the deep-dive workshops with 7- and 8-figure founders, expert walkthroughs, Q&As, and behind-the-scenes strategies that attendees rave about.",
        "So even if life gets in the way and you can’t make it live, you’ll never miss a single insight when you sign up and upgrade to VIP. You can watch (and rewatch) everything on your own schedule, as many times as you want.",
      ],
    },
    {
      q: "What’s the Summit About?",
      a: [
        "Our summit brings together founders, leaders, and technologists to explore what's next at the intersection of technology and sustainability — through keynotes, workshops, and honest conversations, not just slide decks.",
      ],
    },
    {
      q: "Who Should Attend?",
      a: [
        "Founders, product leaders, engineers, designers, and investors working in or curious about sustainable technology. If you're building something meant to last, this is built for you.",
      ],
    },
    {
      q: "What Will I Learn?",
      a: [
        "Practical frameworks for building sustainably at speed, real case studies from founders who've done it, and direct access to the people shaping AI and climate tech today.",
      ],
    },
    {
      q: "How Much and How to Register?",
      a: [
        "Pricing and registration details are available on our tickets section, with both in-person and VIP options depending on how you'd like to attend.",
      ],
    },
    {
      q: "When is the Summit?",
      a: ["The summit runs from 1st to 3rd July, 2026, in Los Angeles, California."],
    },
    {
      q: "Will I Get Summit Materials Later?",
      a: [
        "Yes — all attendees receive a recap with key takeaways, and VIP Pass holders get full session recordings to revisit anytime.",
      ],
    },
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
      className="size-[34px] shrink-0 transition-transform duration-300 ease-out group-aria-expanded/faq:rotate-45"
    >
      <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z" />
    </svg>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faqs"
      className="w-full bg-[#F5F2EC] px-6 py-16 text-[#41351E] md:px-10 md:py-20 xl:px-[60px] xl:py-[100px]"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[40fr_60fr] lg:gap-0">
        {/* Heading + sub. Narrow max-widths force the same line breaks as the reference. */}
        <div className="flex flex-col gap-2">
          <h2 className="max-w-[400px] font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-[0.97] tracking-[-0.03em]">
            {CONTENT.heading}
          </h2>
          <p className="max-w-[290px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] lg:text-2xl lg:leading-[34px]">
            {CONTENT.body}
          </p>
        </div>

        {/* shadcn Accordion, used as in the docs. No defaultValue, so every item starts closed. */}
        <Accordion className="w-full">
          {CONTENT.items.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="border-b border-[#41351E] last:border-b"
            >
              {/* The built-in chevron icons are hidden and replaced with the plus. */}
              <AccordionTrigger className="group/faq relative w-full cursor-pointer items-start rounded-none py-6 pr-12 font-display text-[32px] font-normal uppercase leading-[1.2] tracking-normal transition-[padding] duration-300 ease-out hover:no-underline aria-expanded:pb-5 focus-visible:ring-[#41351E]/40 [&_[data-slot=accordion-trigger-icon]]:hidden [&>svg]:hidden">
                <span className="text-left">{item.q}</span>
                <span className="absolute right-0 top-6 flex h-[38px] items-center">
                  <PlusIcon />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-[24px] font-sans text-lg font-medium leading-7 tracking-normal text-[#41351E]/50 [&_p:not(:last-child)]:mb-7">
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
