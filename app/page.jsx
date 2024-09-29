"use client";
import { useRef } from "react";
import AboutSection from "@/components/sections/AboutSection";
import SkillSection from "@/components/sections/SkillSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import { useGlobalContext } from "@/hooks/globalState";
import useTouchScrollController from "@/hooks/useTouchScrollController";

export default function Home() {
  const { state, dispatch } = useGlobalContext();
  const sectionRefs = useRef([]);
  const colors = state.data.colors;

  useTouchScrollController({ sectionRefs, colors, dispatch });

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
