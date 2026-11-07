import AgendaSection from "@/components/AgendaSection";
import Hero from "@/components/Hero";
import MomentsSection from "@/components/MomentsSection";
import ReasonsSection from "@/components/ReasonsSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <ScheduleSection />
      <AgendaSection />
      <SpeakersSection />
      <ReasonsSection />
      <MomentsSection />
      <TestimonialsSection />
    </>
  );
}
