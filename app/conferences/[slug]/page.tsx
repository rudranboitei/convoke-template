import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ConferenceDetail from "@/components/ConferenceDetail";
import { CONFERENCES, getConference } from "@/lib/conferences";

interface ConferencePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CONFERENCES.map((conference) => ({ slug: conference.slug }));
}

export async function generateMetadata({
  params,
}: ConferencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const conference = getConference(slug);

  if (!conference) {
    return {
      title: "Conference not found | Odisha AI",
    };
  }

  return {
    title: `${conference.title} | Odisha AI`,
    description: conference.preview,
    openGraph: {
      title: conference.title,
      description: conference.preview,
      images: [{ url: conference.image, alt: conference.imageAlt }],
    },
  };
}

export default async function ConferencePage({ params }: ConferencePageProps) {
  const { slug } = await params;
  const conference = getConference(slug);

  if (!conference) notFound();

  return (
    <main className="w-full">
      <ConferenceDetail conference={conference} />
    </main>
  );
}
