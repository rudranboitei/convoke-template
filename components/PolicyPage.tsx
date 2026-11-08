import type { Policy } from "@/lib/policies";

export default function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <main className="w-full bg-forest px-5 pb-24 pt-32 md:px-10 xl:px-15">
      <article className="mx-auto w-full max-w-360">
        <header className="mb-10 flex flex-col gap-4 md:mb-14">
          <h1 className="font-display text-[clamp(48px,8vw,96px)] font-normal uppercase leading-none tracking-[-0.02em] text-lime">
            {policy.title}
          </h1>
          <p className="font-sans text-lg text-lime/80">
            Updated at <time dateTime={policy.updatedAt}>{policy.updatedLabel}</time>
          </p>
        </header>

        <div className="flex  flex-col gap-10">
          {policy.sections.map((s) => {
            const Heading = s.level === 2 ? "h2" : "h3";
            return (
              <section key={s.heading} className="flex flex-col gap-4">
                <Heading
                  className={
                    s.level === 2
                      ? "font-display text-4xl font-normal uppercase leading-none text-lime md:text-6xl"
                      : "font-display text-2xl font-normal uppercase leading-none text-lime md:text-3xl"
                  }
                >
                  {s.heading}
                </Heading>
                {s.paragraphs.map((p) => (
                  <p key={p} className="font-sans text-base leading-7 text-lime/90 md:text-xl md:leading-8">
                    {p}
                  </p>
                ))}
              </section>
            );
          })}
        </div>
      </article>
    </main>
  );
}
