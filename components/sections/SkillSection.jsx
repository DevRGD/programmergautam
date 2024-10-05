"use client";
import Section from "./Section";
import SkillCard from "../cards/SkillCard";

export default function Skills() {
  return (
    <Section
      title="Skills"
      id={"skills"}
      Card={SkillCard}
      classes="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
    />
  );
}
