"use client";
import Section from "./Section";
import SkillCard from "../cards/SkillCard";

const skillsData = [
  {
    name: "JavaScript",
    description: "A versatile programming language primarily used for web development.",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "CSS",
    description: "A stylesheet language used for describing the presentation of a document.",
  },
  {
    name: "HTML",
    description: "The standard markup language for documents designed to be displayed in a web browser.",
  },
];

export default function Skills() {
  return <Section title="Skills" id={"#skills"} data={skillsData} Card={SkillCard} />;
}
