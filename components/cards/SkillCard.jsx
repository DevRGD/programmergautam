"use client";

import { useState } from "react";

export default function SkillCard({ skill }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsFlipped(false);
    }, 700);
  };

  return (
    <div
      className={`w-full h-48 bg-white shadow-lg relative transform-style-preserve-3d transition-transform duration-700 ease-in-out ${
        isFlipped ? "rotate-y-180" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Front Face */}
      <div className="absolute w-full h-full backface-hidden bg-black text-teal flex flex-col items-center justify-center p-4 rounded-lg">
        <h3 className="text-lg font-bold">{skill.name}</h3>
        <p className="mt-2 text-sm">Click to flip</p>
      </div>

      {/* Back Face */}
      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-purple text-white flex items-center justify-center p-4 rounded-lg">
        <p className="text-center text-sm">{skill.description}</p>
      </div>
    </div>
  );
}
