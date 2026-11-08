import type { Metadata } from "next";
import AboutActivities from "@/components/AboutActivities";
import AboutHero from "@/components/AboutHero";
import AboutMilestones from "@/components/AboutMilestones";
import AboutTimeline from "@/components/AboutTimeline";
import AboutVisionMission from "@/components/AboutVisionMission";

export const metadata: Metadata = {
  title: "About Us | Odisha AI — Odias in AI/ML",
  description:
    "Learn about Odisha AI — our global vision, mission, community journey since 2020, key activities, and foundational milestones in machine translation and open-source NLP for Odisha.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutHero />
      <AboutVisionMission />
      <AboutTimeline />
      <AboutActivities />
      <AboutMilestones />
    </main>
  );
}
