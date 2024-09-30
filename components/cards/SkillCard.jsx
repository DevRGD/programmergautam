"use client";
import useGlobalState from "@/hooks/useGlobalState";
import { useState, useRef } from "react";

export default function SkillCard() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setFlippedIndex(index);
  };

  const handleMouseLeave = () => (timeoutRef.current = setTimeout(() => setFlippedIndex(null), 700));
  const { state } = useGlobalState();

  return (
    <>
      {state.data.skills.map((skill, index) => (
        <div key={index}>
          <div
            className={`w-full h-48 shadow-lg relative transform-style-preserve-3d transition-transform duration-700 ease-in-out rounded-sm ${
              state.color["gradient"]
            } ${flippedIndex === index ? "rotate-y-180" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Front Face */}
            <div
              className={`absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 rounded-sm`}
            >
              <h3 className={`md:text-2xl text-lg font-bold ${state.color["text-light"]}`}>{skill.name}</h3>
            </div>

            {/* Back Face */}
            <div
              className={`absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-left ${state.color["text-light"]} ${state.color["bg-color"]} p-4 rounded-sm`}
            >
              <p className="text-sm p-4">{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
