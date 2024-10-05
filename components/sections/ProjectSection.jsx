"use client";
import Section from "./Section";
import ProjectCard from "../cards/ProjectCard";

export default function ProjectSection() {
  return (
    <Section
      title="Projects"
      id={"projects"}
      Card={ProjectCard}
      classes="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    />
  );
}
