import type { Metadata } from "next";

import GlossarySection from "@/components/GlossarySection";
import LearningProgram from "@/components/LearningProgram";
import ResourceLibrary from "@/components/ResourceLibrary";
import ResourcesCta from "@/components/ResourcesCta";
import ResourcesHero from "@/components/ResourcesHero";

export const metadata: Metadata = {
  title: "Resources | Odisha AI",
  description:
    "A curated library of Odia AI resources — the Odisha for AI learning programme, language datasets and models, open-source tools, policy documents and plain-language explainers.",
};

export default function ResourcesPage() {
  return (
    <main className="w-full">
      <ResourcesHero />
      <LearningProgram />
      <ResourceLibrary />
      <GlossarySection />
      <ResourcesCta />
    </main>
  );
}
