"use client";
import Section from "./Section";
import ProjectCard from "../cards/ProjectCard";

export default function ProjectSection() {
  return (
    <Section
      title="Projects"
      id={"projects"}
      Card={ProjectCard}
      classes="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    />
  );
}
