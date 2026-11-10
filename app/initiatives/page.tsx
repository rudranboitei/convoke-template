import type { Metadata } from "next";

import FeaturedInitiative from "@/components/FeaturedInitiative";
import InitiativeLibrary from "@/components/InitiativeLibrary";
import InitiativesHero from "@/components/InitiativesHero";
import InitiativesWays from "@/components/InitiativesWays";

export const metadata: Metadata = {
  title: "Initiatives | Odisha AI",
  description:
    "Hackathons, learning series, research projects and open-source tools from Odisha AI — including Rathathon, the AI Foundation Series, OdiaGenAI and OpenOdia.",
};

export default function InitiativesPage() {
  return (
    <main className="w-full">
      <InitiativesHero />
      <FeaturedInitiative />
      <InitiativeLibrary />
      <InitiativesWays />
    </main>
  );
}
