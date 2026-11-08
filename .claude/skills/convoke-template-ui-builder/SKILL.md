---
name: convoke-template-ui-builder
description: Use when creating or editing any block, component, section, or page in this project. Enforces the project's design system, file structure, and coding conventions.
---

# Convoke UI Builder Skill

This skill governs the development of all blocks, components, sections, and pages in the `convoke-template` project. Follow these conventions strictly to ensure architectural integrity and visual cohesion.

---

## 1. Development Workflow

Follow this 5-step workflow on every UI task:

1. **Consult DESIGN.md**: Review [DESIGN.md](file:///home/rdrudra99/Projects/convoke-template/DESIGN.md) for color tokens (`forest`, `lime`, `cream`, `brown`), typography (`Anton` uppercase display, `Albert Sans` body), spacing (`max-w-360`, `px-5 md:px-10 xl:px-15`), and border radius (`rounded-xs`).
2. **Inspect Existing UI Components**: Check `components/ui/` before building primitives. The project uses `@base-ui/react` with the `base-nova` shadcn style.
3. **Check for CLI Additions**: If a needed primitive is missing (e.g. dialog, dropdown, input), install it via `bun x shadcn@latest add <component>` instead of writing it from scratch.
4. **Implement Mobile-First**: Construct layouts starting at `< 768px`, scaling to `md:` (tablet), `lg:` (laptop), and `xl:` (desktop). Store static copy and lists in a top-level `CONTENT` configuration object.
5. **Run Self-Review Checklist**: Verify against the 10-point checklist in Section 10 before completing your work.

---

## 2. Folder Structure & File Placement

```
convoke-template/
├── app/                      # Next.js 16 App Router
│   ├── layout.tsx            # Root layout (fonts, Lenis, Navbar, Footer)
│   ├── globals.css           # Tailwind v4 @theme, tokens, and marquee animation
│   └── (routes)/             # Route segments (e.g., app/page.tsx, app/contact/page.tsx)
├── components/               # Custom sections and composite blocks
│   ├── ui/                   # shadcn / Base UI primitives (button, sheet, tabs, accordion)
│   ├── PixelIcons.tsx        # Custom SVG pixelart icon collection
│   ├── SiteHeader.tsx        # Main navigation header
│   ├── TicketButton.tsx      # Signature primary CTA button
│   ├── RollingNumber.tsx     # Odometer counter
│   ├── SmoothScroll.tsx      # Lenis smooth scroll provider
│   └── *Section.tsx          # Standalone page sections (Hero, Agenda, Speakers, etc.)
├── lib/
│   └── utils.ts              # cn helper (re-exported from "cn")
├── public/                   # Static assets (logos, images, svgs)
└── components.json           # shadcn configuration (style: base-nova)
```

- **Section components**: Place in `components/<Name>Section.tsx` or `components/<Name>.tsx`.
- **UI primitives**: Place in `components/ui/<name>.tsx`.
- **Utility functions**: Place in `lib/`.
- **Custom hooks**: Place in `hooks/use-<name>.ts`.

---

## 3. Naming & Export Conventions

- **Files**:
  - Sections & Components: PascalCase (e.g., `AgendaSection.tsx`, `SiteHeader.tsx`, `TicketButton.tsx`) or kebab-case for legacy sections (`faq-section.tsx`). Prefer **PascalCase** for new components.
  - UI Primitives: kebab-case (e.g., `aspect-ratio.tsx`, `button.tsx`).
  - Hooks: kebab-case prefixed with `use-` (e.g., `use-media-query.ts`).
- **Components**: PascalCase (e.g., `SpeakersSection`, `TicketButton`).
- **Props**: PascalCase interface or type named `<ComponentName>Props` (e.g., `interface AgendaSectionProps`).
- **Exports**:
  - Sections and full-page blocks: `export default function ComponentName()`.
  - UI primitives & helper icon libraries: Named exports (e.g., `export { Button, buttonVariants }`).

---

## 4. Next.js 16 Rules & Modern Patterns

This project runs **Next.js 16.4.5** with **React 19.3.0** and Turbopack (`cacheComponents: true`, `partialPrefetching: true`). Follow these rules:

1. **Server Components by Default**:
   - Keep sections as Server Components (RSC) whenever possible.
   - Add `"use client"` **only** when using React hooks (`useState`, `useEffect`, `useRef`), event handlers (`onClick`, `onScroll`), or browser APIs (`IntersectionObserver`, `ResizeObserver`, `window`).
2. **Next.js 16 Async `params` and `searchParams`**:
   - In Next.js 16, page and layout props for `params` and `searchParams` are Promises:
     ```tsx
     interface PageProps {
       params: Promise<{ slug: string }>;
       searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
     }

     export default async function Page({ params, searchParams }: PageProps) {
       const { slug } = await params;
       const search = await searchParams;
       ...
     }
     ```
3. **Metadata API**:
   - Define static `export const metadata: Metadata = { ... }` or `export async function generateMetadata(...)`.
   - In Next.js 16, `themeColor` belongs in `export const viewport: Viewport = { themeColor: "#22382b" }`, not in `metadata`.
4. **Optimized Images (`next/image`)**:
   - Always use `next/image` with explicit `alt`, `fill` or `width`/`height`.
   - Provide responsive `sizes` attribute for fill images (e.g. `sizes="(min-width: 1280px) 864px, 100vw"`).
   - Only add domains/patterns in `next.config.ts` under `images.remotePatterns`.
5. **Navigation (`next/link`)**:
   - Always use `next/link` for internal anchors. When pairing with shadcn buttons, use `asChild`:
     ```tsx
     <Button asChild className="...">
       <Link href="/target">Label</Link>
     </Button>
     ```

---

## 5. shadcn/ui & Base UI Conventions

The project is configured with `style: "base-nova"` using `@base-ui/react`:
- **Installation**: Always run `bun x shadcn@latest add <name>`.
- **Do not handcraft primitives**: Never copy-paste raw radix or base-ui wrappers manually; let the shadcn CLI install the correct Nova style components.
- **Composition via `asChild`**: In this configuration, `asChild` renders children via `ButtonPrimitive`'s `render={children}` prop.
- **Variants**: Extend UI components using `cva` (class-variance-authority).
- **ClassName Passthrough**: Always merge classes using `cn(...)` from `@/lib/utils`.
- **`data-slot` Attribute**: Maintain `data-slot="<component>"` on primitives for theme targeting and styling hooks.

---

## 6. Tailwind CSS v4 Rules

1. **Use Theme Tokens Exclusively**:
   - Backgrounds: `bg-forest`, `bg-lime`, `bg-cream`, `bg-secondary`
   - Text: `text-forest`, `text-lime`, `text-brown`, `text-muted-foreground`
   - Dividers/Borders: `border-border`, `border-lime/20`, `border-brown`
   - Never write arbitrary hex values like `bg-[#22382b]` or `text-[#ffff64]`.
2. **Typography Classes**:
   - Headings & tags: `font-display uppercase leading-none tracking-[-0.02em]`
   - Body & descriptions: `font-sans font-medium tracking-[-0.02em]`
3. **Corner Radii**:
   - Buttons, tags, badges, timeline markers: `rounded-xs` (2px) or `rounded-[2px]`.
4. **Container Standard**:
   - Max width: `max-w-360` (1440px) with `mx-auto w-full`.
   - Padding: `px-5 md:px-10 xl:px-15` (horizontal) and `py-16 md:py-24 xl:py-25` (vertical).

---

## 7. Templates

### (a) Standard Section Template (RSC with 40/60 Split)

```tsx
import { PixelCalendar } from "@/components/PixelIcons";
import { cn } from "@/lib/utils";

const CONTENT = {
  label: "Section Label",
  heading: "Headline in uppercase display font",
  body: "Lead intro text explaining the purpose of this section in clear terms.",
  items: [
    {
      title: "First Point",
      description: "Supporting details for the point.",
    },
    {
      title: "Second Point",
      description: "Supporting details for the point.",
    },
  ],
};

export default function FeatureSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-forest px-5 py-16 text-lime md:px-10 md:py-24 xl:px-15 xl:py-25", className)}>
      <div className="mx-auto flex w-full max-w-360 flex-col gap-8 lg:grid lg:grid-cols-[40%_60%] lg:gap-0">
        {/* Left Column: Label */}
        <p className="font-display text-[32px] font-normal uppercase leading-none tracking-[-0.02em] text-lime">
          {CONTENT.label}
        </p>

        {/* Right Column: Main Content */}
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-[clamp(40px,9vw,64px)] font-normal uppercase leading-none tracking-[-0.02em]">
              {CONTENT.heading}
            </h2>
            <p className="max-w-[760px] font-sans text-xl font-medium leading-7 tracking-[-0.02em] lg:text-2xl lg:leading-[34px]">
              {CONTENT.body}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CONTENT.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-4 border-t border-lime/20 pt-6">
                <PixelCalendar className="size-6 text-lime" />
                <h3 className="font-display text-2xl font-normal uppercase leading-none tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="font-sans text-base font-medium leading-6 tracking-[-0.02em] text-lime/70">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

### (b) Reusable Component with CVA Variants

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-xs font-display uppercase leading-none tracking-[0.04em] transition-colors select-none",
  {
    variants: {
      variant: {
        lime: "bg-lime text-forest hover:bg-lime/90",
        forest: "bg-forest text-lime border border-lime/30",
        cream: "bg-cream text-brown border border-brown/30",
        outline: "border-[1.2px] border-lime bg-transparent text-lime hover:bg-lime hover:text-forest",
      },
      size: {
        default: "px-3 py-1.5 text-sm",
        lg: "px-5 py-3 text-xl",
        sm: "px-2.5 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "lime",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

### (c) New Page Route Template (Next.js 16)

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives | Convoke",
  description: "Explore initiatives and programs driving community impact.",
};

interface PageProps {
  params: Promise<Record<string, string | undefined>>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function InitiativesPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedQuery = await searchParams;

  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="w-full bg-forest px-5 py-16 md:px-10 md:py-24 xl:px-15">
        <div className="mx-auto flex w-full max-w-360 flex-col gap-6">
          <p className="font-display text-2xl uppercase tracking-[-0.02em] text-lime/80">
            Programs
          </p>
          <h1 className="font-display text-[clamp(44px,10vw,80px)] uppercase leading-none tracking-[-0.02em] text-lime">
            Community Initiatives
          </h1>
        </div>
      </section>
    </main>
  );
}
```

---

## 8. TypeScript & Props Conventions

- **Component Props**: Define explicit types and always include `className?: string`.
- **Children**: Use `React.ReactNode` for children props.
- **HTML Element Passthrough**: Use `React.ComponentProps<"div">` or `React.HTMLAttributes<HTMLElement>` when wrapping HTML elements.
- **Imports**:
  - Always import `cn` from `@/lib/utils`.
  - Import types with `import type { ... } from "..."`.

---

## 9. Performance, SEO & Accessibility Checklist

For every page and component:
- [ ] **SEO**: Page provides `metadata` with descriptive `title` and `description`.
- [ ] **Headings**: Single `<h1>` per page. Heading hierarchy does not skip levels (`h1` -> `h2` -> `h3`).
- [ ] **Images**: All images have meaningful `alt` text (or `alt=""` if strictly decorative), define `sizes`, and specify dimensions or use `fill`.
- [ ] **Contrast**: Text contrast meets WCAG AA on every section background.
- [ ] **Reduced Motion**: All `transition-` and `animate-` utilities have `motion-reduce:transition-none` and `motion-reduce:animate-none`.
- [ ] **Focus Styles**: All interactive elements have visible `focus-visible:` focus indicators.
- [ ] **Cumulative Layout Shift (CLS)**: Dynamic blocks provide explicit height placeholders or aspect ratio wrappers.

---

## 10. Final Pre-Commit Self-Review Checklist

Before delivering code, verify:

1. **Tokens**: No raw hex values are used when `--color-forest`, `--color-lime`, `--color-cream`, or `--color-brown` apply.
2. **Typography**: Headlines, labels, and buttons use `font-display` in all uppercase with `tracking-[-0.02em]` or `tracking-[0.04em]`.
3. **Buttons**: Signature CTAs use `rounded-xs` with `bg-lime text-forest` and `shadow-none`.
4. **Layout**: Container uses `max-w-360` with `px-5 md:px-10 xl:px-15`.
5. **Client vs Server**: Did you omit `"use client"` unless interactive state/hooks are strictly required?
6. **Imports**: Is `cn` imported from `@/lib/utils`?
7. **Next.js 16 Compliance**: Are `params` and `searchParams` handled as Promises (`await params`)?
8. **Motion**: Does every animation support `motion-reduce`?
9. **Icons**: Are Lucide icons using `strokeWidth={1.5}` and pixel icons imported from `@/components/PixelIcons`?
10. **Build**: Does the project compile cleanly without lint or type errors?
