/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useEffect } from "react";
import useGlobalState from "@/hooks/useGlobalState";

export default function AboutSection() {
  const { state } = useGlobalState();
  const {
    "text-color": text_color,
    "bg-color": bg_color,
    "text-light": text_light,
    "bg-light": bg_light,
    gradient,
  } = state.color;

  return (
    <section id="about" className={`h-screen px-10 flex flex-col md:flex-row justify-around items-center ${gradient}`}>
      <div
        className={`flex items-center my-6 absolute transform transition-all duration-700 ${
          state.isVisible ? "opacity-100 top-0" : "opacity-0 top-5"
        }`}
      >
        <h2 className={`md:text-4xl text-2xl font-bold ${text_color}`}>About</h2>
      </div>

      {/* Image Container */}
      <div
        className={`w-full md:w-1/2 flex justify-center transform transition-all duration-700 ${
          state.isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
        }`}
      >
        <Image
          src="/image.jpg"
          alt="Programmer Gautam"
          width={300}
          height={300}
          className="rounded-full w-auto h-[150px]"
          priority
        />
      </div>

      <div
        className={`w-full md:w-1/2 flex flex-col transform transition-all duration-700 ${
          state.isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
        }`}
      >
        <h2 className={`text-4xl font-bold mb-4 ${text_color}`}>
          Hi, <span className={`p-1 skew-x-12 ${text_light}`}>I’m Gautam,</span>
        </h2>
        <p className={`text-lg secondary-font md:max-w-[78%] ${text_color}`}>
          <span className={`${bg_light} ${text_color} p-1`}>A full-stack developer</span> with expertise in the MERN
          stack. I’m passionate about building scalable web applications and always{" "}
          <span className={`${bg_light} ${text_color} p-1`}>open to new opportunities.</span>
        </p>

        {/* Button Container */}
        <div className="flex space-x-4 mt-6 secondary-font">
          <button
            className={`relative px-6 py-3 ${bg_color} ${text_light} font-semibold rounded-sm overflow-hidden group`}
          >
            <span className="absolute inset-0 h-full bg-white opacity-10 transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            <span className="relative z-10">Let's Talk</span>
          </button>
          <button
            className={`relative px-6 py-3 bg-white ${text_color} font-semibold rounded-sm overflow-hidden group`}
          >
            <span
              className={`absolute inset-0 h-full bg-teal-400 opacity-10 transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100`}
            ></span>
            <span className="relative z-10">Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}
