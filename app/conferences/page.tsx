import type { Metadata } from "next";

import ConferenceArchive from "@/components/ConferenceArchive";
import ConferenceSpotlight from "@/components/ConferenceSpotlight";
import ConferencesCta from "@/components/ConferencesCta";
import ConferencesHero from "@/components/ConferencesHero";

export const metadata: Metadata = {
  title: "Conferences & Summits | Odisha AI",
  description:
    "Explore every Odisha AI conference and summit from 2020 to 2026 — annual gatherings of researchers, founders, students, policymakers and the global Odia AI community.",
};

export default function ConferencesPage() {
  return (
    <main className="w-full">
      <ConferencesHero />
      <ConferenceSpotlight />
      <ConferenceArchive />
      <ConferencesCta />
    </main>
  );
}
