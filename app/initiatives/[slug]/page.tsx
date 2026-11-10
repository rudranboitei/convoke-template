import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InitiativeDetail from "@/components/InitiativeDetail";
import { INITIATIVES, getInitiative } from "@/lib/initiatives";

interface InitiativePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INITIATIVES.map((initiative) => ({ slug: initiative.slug }));
}

export async function generateMetadata({
  params,
}: InitiativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const initiative = getInitiative(slug);

  if (!initiative) {
    return {
      title: "Initiative not found | Odisha AI",
    };
  }

  return {
    title: `${initiative.title} | Odisha AI`,
    description: initiative.summary,
    openGraph: {
      title: initiative.title,
      description: initiative.summary,
      images: [{ url: initiative.image, alt: initiative.imageAlt }],
    },
  };
}

export default async function InitiativePage({ params }: InitiativePageProps) {
  const { slug } = await params;
  const initiative = getInitiative(slug);

  if (!initiative) notFound();

  return (
    <main className="w-full">
      <InitiativeDetail initiative={initiative} />
    </main>
  );
}
