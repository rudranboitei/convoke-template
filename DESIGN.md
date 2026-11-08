# Convoke Design System Specification (DESIGN.md)

This document is the single source of truth for all visual styles, design tokens, layout rules, and component patterns across this project. Every future block, component, and page must adhere to these specifications.

---

## 1. Brand & Visual Tone

Convoke combines a **neo-editorial event aesthetic** with **retro-tech / brutalist accents** and modern refinement:
- **High-contrast, saturated palette**: Dominated by deep Forest Green (`#22382b`) paired with electric Lime (`#ffff64`), punctuated by thematic light and colored sections (Cream/Brown, Terracotta/Coral, Ocean/Sky).
- **Punchy typography**: Ultra-bold, condensed uppercase display headlines (`Anton`) contrasted with geometric, legible sans-serif body copy (`Albert Sans`).
- **Tactile, geometric details**: Hairline borders, sharp 2px corners (`rounded-xs`), pixel-art icon accents (`PixelIcons`), and ticket-like callouts.
- **Fluid motion**: Smooth momentum scrolling powered by Lenis, horizontal tickers, rolling odometer numbers, and hover-triggered vertical text rolls (`RollLink`).

---

## 2. Color Tokens & Theme Architecture

The codebase utilizes Tailwind CSS v4 with `@theme inline` in [app/globals.css](file:///home/rdrudra99/Projects/convoke-template/app/globals.css). The application operates primarily in a dark-green forest palette, with specific sections shifting into dedicated light or accent color spaces.

### Brand Tokens

| Token | CSS Variable | Value | Role & Usage |
| :--- | :--- | :--- | :--- |
| `forest` | `--color-forest` | `#22382b` | Primary dark background; text on lime sections |
| `lime` | `--color-lime` | `#ffff64` | Primary brand accent; text/borders on forest sections |
| `cream` | `--color-cream` | `#f5f3ee` | Light section background (Schedule, Speakers, FAQ) |
| `brown` | `--color-brown` | `#41351e` | Dark text & borders on cream or lime sections |

### shadcn / Semantic Tokens (`:root`)

Defined in `:root` inside [app/globals.css](file:///home/rdrudra99/Projects/convoke-template/app/globals.css#L64-L100):

| Token | Class Name | Underlying Value | Used For |
| :--- | :--- | :--- | :--- |
| `background` | `bg-background` | `#22382b` (forest) | Root page background |
| `foreground` | `text-foreground` | `#ffff64` (lime) | Root text and icons |
| `primary` | `bg-primary`, `text-primary` | `#ffff64` (lime) | Primary buttons, active tabs |
| `primary-foreground` | `text-primary-foreground` | `#22382b` (forest) | Label inside primary buttons |
| `secondary` | `bg-secondary` | `#2c4a3a` | Muted containers, secondary buttons |
| `secondary-foreground` | `text-secondary-foreground` | `#ffff64` | Text inside secondary containers |
| `muted` | `bg-muted` | `#2c4a3a` | Inactive tabs, hover fills |
| `muted-foreground` | `text-muted-foreground` | `rgb(255 255 100 / 70%)` | Secondary body text, timestamps |
| `accent` | `bg-accent` | `#2c4a3a` | Focus outlines, hover state backgrounds |
| `border` | `border-border` | `rgb(255 255 100 / 20%)` | Hairline dividers, card outlines |
| `input` | `border-input` | `rgb(255 255 100 / 20%)` | Form input borders |
| `ring` | `ring-ring`, `outline-ring` | `#ffff64` | Focus rings |
| `destructive` | `text-destructive` | `oklch(0.704 0.191 22.216)` | Error states, destructive actions |

### Section Color Profiles (Section Themes)

Convoke uses full-width background color shifts between sections to create visual rhythm:
1. **Forest (Default/Root)**:
   - `bg-forest text-lime`
   - Secondary text: `text-lime/70` or `text-lime/80`
   - Borders: `border-lime/20`
   - Used in: Hero, Navbar, Purpose/About (`WhySection`), Footer
2. **Cream (Light)**:
   - `bg-cream text-brown` (or legacy `bg-[#F5F2EC] text-[#41351E]`)
   - Secondary text: `text-brown/50`
   - Borders: `border-brown` or `border-brown/20`
   - Used in: `ScheduleSection`, `SpeakersSection`, `MomentsSection`, `TestimonialsSection`, `FaqSection`
3. **Lime (Vibrant Accent)**:
   - `bg-lime text-forest`
   - Secondary text: `text-forest/80`
   - Borders: `border-forest`
   - Used in: `AgendaSection`
4. **Terracotta / Rust (Feature Accent)**:
   - `bg-[#6B2B26] text-[#FF6F53]`
   - Used in: `ReasonsSection` (Values)
5. **Oceanic Blue (Location Accent)**:
   - `bg-[#113F60] text-[#CDEEFF]`
   - Secondary text: `text-[#CDEEFF]/80`
   - Used in: `VenueSection`

---

## 3. Typography

Fonts are initialized in [app/layout.tsx](file:///home/rdrudra99/Projects/convoke-template/app/layout.tsx) via `next/font/google`:
- **Sans**: `Albert Sans` (`var(--font-albert-sans)`) - weights 400, 500, 600.
- **Display / Heading**: `Anton` (`var(--font-anton)`) - weight 400, always uppercase.

### Hierarchy & Style Scale

| Role | Font Family | Tailwind Classes | Example Usage |
| :--- | :--- | :--- | :--- |
| **Hero Title** | Display (`Anton`) | `font-display text-[clamp(56px,15.5vw,126px)] font-normal uppercase leading-none tracking-[-0.02em] md:text-[clamp(80px,10vw,126px)]` | Hero section main headline |
| **Section Heading (h2)** | Display (`Anton`) | `font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]` | Main heading across all sections |
| **Section Label** | Display (`Anton`) | `font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em]` | Left-hand category label ("Our Purpose", "What We Do") |
| **Subsection / Card (h3)** | Display (`Anton`) | `font-display text-[28px] md:text-[32px] lg:text-[40px] font-normal uppercase leading-none tracking-[-0.02em]` | Agenda session title, Testimonial name, Reason title |
| **Button / Badge / Pill** | Display (`Anton`) | `font-display text-xl font-normal uppercase leading-none tracking-[0.04em]` | CTA buttons, Tab triggers |
| **Body Large / Lead** | Sans (`Albert Sans`) | `font-sans text-xl font-medium leading-7 tracking-[-0.02em] lg:text-2xl lg:leading-[34px]` | Section intro paragraphs |
| **Body Standard** | Sans (`Albert Sans`) | `font-sans text-lg font-medium leading-7 tracking-[-0.02em] md:text-xl md:leading-[31px]` | Agenda descriptions, card body copy |
| **Body Secondary / Caption** | Sans (`Albert Sans`) | `font-sans text-base font-medium leading-6 tracking-[-0.02em] md:text-lg md:leading-7` | Speaker role/company, FAQ answers |
| **Nav Links** | Sans (`Albert Sans`) | `font-sans text-base font-medium uppercase leading-[1.2] tracking-[-0.02em]` | Header navigation roll links |
| **Tabular Numbers / Counter**| Display (`Anton`) | `font-display text-[50px] font-normal leading-none tabular-nums` | Rolling stats odometer |

---

## 4. Spacing and Layout

### Container & Max Widths
- **Primary Container**: `w-full max-w-360 mx-auto` (or `max-w-[1440px] mx-auto`).
- **Inner Content Widths**:
  - Grid constraint: `max-w-[1320px]` (e.g. Speakers section grid)
  - Copy constraint: `max-w-[840px]`, `max-w-[760px]`, `max-w-[500px]`
  - Narrow column constraint: `max-w-100`, `max-w-72.5`

### Section Padding
Padding is applied directly on the `<section>` element, keeping the outer background full-bleed while containing the inner children:
- **Horizontal**: `px-5 md:px-10 xl:px-15` (equivalent to `px-5 md:px-10 xl:px-[60px]`).
- **Vertical**: `py-16 md:py-24 xl:py-25` (or `xl:py-[100px]`, `xl:py-[112px]`).

### Standard Section Layout Pattern (The 40/60 Split)
The signature Convoke layout places a section label or heading on the left 40% and main content on the right 60%:
```tsx
<div className="mx-auto flex w-full max-w-360 flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
  {/* Left: Label or Heading */}
  <p className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] text-lime">
    Section Label
  </p>

  {/* Right: Content stack */}
  <div className="flex flex-col gap-16">
    ...
  </div>
</div>
```

### Breakpoint Matrix
- Mobile: `< 768px` (`sm:` = 640px)
- Tablet: `768px - 1023px` (`md:`)
- Laptop: `1024px - 1279px` (`lg:`)
- Desktop: `1280px+` (`xl:`)

---

## 5. Radius, Borders, Shadows & Elevation

- **Elevation**: Completely flat. No drop shadows. `shadow-none` is explicitly passed where components might have default shadows.
- **Border Radius**:
  - **Signature Brand Radius**: `rounded-xs` (2px) or `rounded-[2px]`. Used on all primary buttons, tab triggers, active indicators, and timeline markers.
  - **Arch Radius**: `rounded-t-[40px] md:rounded-t-[60px]` used for speaker card backdrop morphs.
  - **Standard UI Radius**: `rounded-lg` (`0.875rem` / 14px) defined in CSS for generic Base UI components.
- **Borders & Dividers**:
  - High-contrast 1px dividers: `border-b border-brown`, `border-t border-[#41351E]`, or `border-lime/20`.
  - Outline buttons: `border-[1.2px] border-lime bg-transparent`.
  - Hairline Separators: `<Separator className="h-px bg-lime/20" />`.

---

## 6. Iconography

### 1. Lucide React (`lucide-react`)
Used for standard interface chrome:
- Icons: `MapPin`, `CalendarDays`, `Menu`, `X`, `ChevronDownIcon`, `ChevronUpIcon`, `Timer`.
- Default sizing: `size-6` (24px) for meta items, `size-8` for mobile menu toggles, `size-4` for button trailing icons.
- Default stroke width: `strokeWidth={1.5}`.

### 2. Custom Pixel Icons ([components/PixelIcons.tsx](file:///home/rdrudra99/Projects/convoke-template/components/PixelIcons.tsx))
Used for editorial badges, values, timeline markers, and feature cards:
- Available: `PixelCalendar`, `PixelUser`, `PixelLocationPin`, `PixelGlobe`, `PixelClock`, `PixelSparkles`.
- Properties: 24x24 viewBox, filled with `currentColor`, sized via `size-8` (32px), `size-10` (40px), or `size-5` (20px).

---

## 7. Motion & Interaction

- **Smooth Scrolling**: Implemented via Lenis (`ReactLenis` in [components/SmoothScroll.tsx](file:///home/rdrudra99/Projects/convoke-template/components/SmoothScroll.tsx)) with `lerp: 0.1`, `smoothWheel: true`, and `anchors: true`.
- **Marquee Ticker**: Defined in `@theme` as `--animate-marquee: marquee 40s linear infinite` with `translateX(-50%)` infinite loop ([components/MomentsSection.tsx](file:///home/rdrudra99/Projects/convoke-template/components/MomentsSection.tsx)).
- **Rolling Number**: IntersectionObserver-triggered odometer strip translating vertically using `cubic-bezier(0.22,1,0.36,1)` ([components/RollingNumber.tsx](file:///home/rdrudra99/Projects/convoke-template/components/RollingNumber.tsx)).
- **Sliding Tab Indicator**: Dynamic measurement via ResizeObserver with CSS transform counter-translation ([components/AgendaTabs.tsx](file:///home/rdrudra99/Projects/convoke-template/components/AgendaTabs.tsx)).
- **RollLink Hover**: Vertical roll-up effect on navigation links:
  ```tsx
  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
    {children}
  </span>
  <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 motion-reduce:transition-none">
    {children}
  </span>
  ```
- **Accessibility Rule**: Every animated element MUST include `motion-reduce:transition-none` or `motion-reduce:animate-none`.

---

## 8. Real Component Patterns

### Primary CTA Button ([components/TicketButton.tsx](file:///home/rdrudra99/Projects/convoke-template/components/TicketButton.tsx))
```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TicketButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto gap-2 rounded-xs bg-lime px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-forest shadow-none transition-transform duration-200 hover:scale-[1.03] hover:bg-lime motion-reduce:transition-none",
        className,
      )}
    >
      <Link href="/#tickets" onClick={onClick} className="flex justify-center items-center gap-2">
        Join Community
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4! fill-none stroke-forest stroke-[2.2]">
          <path d="M2 8h11M9 3.5 13.5 8 9 12.5" strokeLinecap="square" />
        </svg>
      </Link>
    </Button>
  );
}
```

### Outline Button ([components/Hero.tsx](file:///home/rdrudra99/Projects/convoke-template/components/Hero.tsx#L73-L80))
```tsx
<Button
  asChild
  variant="outline"
  className="h-auto w-full rounded-xs border-[1.2px] border-lime bg-transparent px-5 py-3.5 font-display text-xl font-normal uppercase leading-none tracking-[0.04em] text-lime shadow-none transition-colors duration-200 hover:bg-lime hover:text-forest md:w-auto"
>
  <Link href="/contact">Contact Us</Link>
</Button>
```

### Accordion / FAQ Item ([components/faq-section.tsx](file:///home/rdrudra99/Projects/convoke-template/components/faq-section.tsx#L94-L113))
```tsx
<AccordionItem value={`faq-${i}`} className="border-b border-brown last:border-b">
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
```

### Sticky Stacking Testimonial Card ([components/TestimonialsSection.tsx](file:///home/rdrudra99/Projects/convoke-template/components/TestimonialsSection.tsx#L65-L97))
```tsx
<li className={`z-10 border-t border-[#41351E] bg-[#F5F2EC] py-8 lg:sticky ${t.stick}`}>
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[33fr_18fr_49fr] lg:gap-0">
    <div className="flex flex-col gap-2">
      <h3 className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[36px] lg:text-[40px]">
        {t.name}
      </h3>
      <p className="font-sans text-lg font-medium leading-6 tracking-[-0.02em] text-[#41351E]/50">
        {t.role}
      </p>
    </div>
    <div className="relative aspect-[13/16] w-full bg-[#EAE4D7] lg:max-w-[260px]">
      <Image src={t.img} alt="" fill sizes="(min-width: 1024px) 260px, 100vw" className="object-cover" />
    </div>
    <p className="mt-4 max-w-[360px] text-pretty font-sans text-xl font-medium leading-7 tracking-[-0.02em] md:max-w-[665px] lg:mt-0 lg:pl-10 lg:text-2xl lg:leading-[34px]">
      {t.quote}
    </p>
  </div>
</li>
```

---

## 9. Dark Mode & Theming Rules

- **Default Root is Dark**: The website is dark green by default (`bg-background` is `#22382b`).
- **No Global Dark Switcher**: There is no `.dark` theme toggler on the root layout. Instead, contrast is created through **section-level light and dark container blocks**.
- When designing a light section, always explicitly set `bg-cream text-brown` (or the respective accent pair) rather than assuming inherited styles.
- Form inputs, accordions, and tabs inside light sections must explicitly reference `border-brown`, `text-brown`, and `text-brown/50`.

---

## 10. Accessibility Rules

1. **Focus Rings**: All interactive links and triggers must specify visible focus rings with `focus-visible:outline-2 focus-visible:outline-offset-2` or `focus-visible:ring-3 focus-visible:ring-ring/50`.
2. **Text Contrast**:
   - On `bg-forest`: Use `text-lime` or `text-lime/70`. Never use low-opacity gray.
   - On `bg-cream`: Use `text-brown` or `text-brown/50`.
   - On `bg-lime`: Use `text-forest`.
3. **Motion**: Always pair `transition-` or `animate-` with `motion-reduce:transition-none` and `motion-reduce:animate-none`.
4. **Icons**: Decorative SVGs must include `aria-hidden="true"`. Interactive icon-only buttons must provide an `aria-label` or `<span className="sr-only">`.
5. **Headings**: Maintain strict semantic heading order (`h1` -> `h2` -> `h3`). Do not jump levels for styling; use `font-display text-*` utility classes for visual scale.

---

## 11. Do's and Don'ts

### DO:
- **DO** use `max-w-360 mx-auto` and `px-5 md:px-10 xl:px-15` for section content.
- **DO** use `font-display` (`Anton`) in all uppercase for headings, labels, tags, and button text.
- **DO** use `rounded-xs` (2px) on buttons, badges, and tab indicators.
- **DO** import `cn` from `@/lib/utils`.
- **DO** organize section data in a top-level `CONTENT` constant object so copy edits remain isolated.
- **DO** ensure all image elements provide `sizes` and proper `aspect-ratio` containers to avoid CLS.

### DON'T:
- **DON'T** use arbitrary hex colors (e.g. `bg-[#F5F2EC]` or `text-[#41351E]`) when standard tokens `bg-cream` and `text-brown` exist.
- **DON'T** use rounded pill buttons (`rounded-full`) or large border-radii on primary buttons.
- **DON'T** invent random container widths like `max-w-6xl` or `max-w-7xl`—stick to `max-w-360` (1440px).
- **DON'T** apply drop shadows to cards or buttons (`shadow-lg`, `shadow-md`). The design is strictly flat and crisp.
- **DON'T** add `"use client"` unless a component requires browser APIs (`useState`, `useEffect`, `useRef`, event handlers, or Base UI hooks).
