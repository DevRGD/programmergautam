"use client";
import { useRef } from "react";
import Loading from "./Loading";
import useGlobalState from "@/hooks/useGlobalState";
import AboutSection from "@/components/sections/AboutSection";
import SkillSection from "@/components/sections/SkillSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import useTouchScrollController from "@/hooks/useTouchScrollController";

export default function Home() {
  const { state } = useGlobalState();
  const sectionRefs = useRef([]);
  useTouchScrollController({ sectionRefs });

  if (state.isLoading) return <Loading />;

  return (
    <>
      <section ref={(el) => (sectionRefs.current[0] = el)} className="h-screen">
        <AboutSection />
      </section>
      <section ref={(el) => (sectionRefs.current[1] = el)} className="h-screen">
        <SkillSection />
      </section>
      <section ref={(el) => (sectionRefs.current[2] = el)} className="h-screen">
        <ProjectSection />
      </section>
      <section ref={(el) => (sectionRefs.current[3] = el)} className="h-screen">
        <ContactSection />
      </section>
    </>
  );
}
