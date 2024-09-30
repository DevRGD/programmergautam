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
  const colors = [
    {
      "text-color": "text-tealwave",
      "bg-color": "bg-tealwave",
      "text-light": "text-teal-50",
      "bg-light": "bg-teal-50",
      gradient: "bg-gradient-teal",
    },
    {
      "text-color": "text-royalplum",
      "bg-color": "bg-royalplum",
      "text-light": "text-purple-50",
      "bg-light": "bg-purple-50",
      gradient: "bg-gradient-plum",
    },
    {
      "text-color": "text-oceanbreeze",
      "bg-color": "bg-oceanbreeze",
      "text-light": "text-sky-50",
      "bg-light": "bg-sky-50",
      gradient: "bg-gradient-ocean",
    },
    {
      "text-color": "text-crimsonflare",
      "bg-color": "bg-crimsonflare",
      "text-light": "text-rose-50",
      "bg-light": "bg-rose-50",
      gradient: "bg-gradient-crimson",
    },
    {
      "text-color": "text-saffronburst",
      "bg-color": "bg-saffronburst",
      "text-light": "text-orange-50",
      "bg-light": "bg-orange-50",
      gradient: "bg-gradient-saffron",
    },
    {
      "text-color": "text-orchidbloom",
      "bg-color": "bg-orchidbloom",
      "text-light": "text-pink-50",
      "bg-light": "bg-pink-50",
      gradient: "bg-gradient-orchid",
    },
    {
      "text-color": "text-lemonzest",
      "bg-color": "bg-lemonzest",
      "text-light": "text-yellow-50",
      "bg-light": "bg-yellow-50",
      gradient: "bg-gradient-lemon",
    },
  ];

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
