/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useGlobalContext } from "@/hooks/globalState";

export default function About() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: "SET_IS_VISIBLE", payload: true });
  }, [dispatch]);

  return (
    <section
      id="about"
      className="h-screen px-10 bg-gradient-teal flex flex-col md:flex-row justify-around items-center"
    >
      <div
        className={`flex items-center my-6 absolute -top-0 transform transition-all duration-1000 ${
          state.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <div className="flex-grow ml-2 h-5 bg-gradient-purple -skew-x-12"></div>
        <h2 className="px-2 text-teal md:text-4xl text-2xl font-bold">About</h2>
        <div className="flex-grow ml-2 h-5 bg-gradient-purple -skew-x-12"></div>
      </div>

      {/* Image Container */}
      <div
        className={`w-full md:w-1/2 flex justify-center transform transition-all duration-1000 ${
          state.isVisible ? "translate-x-0 opacity-100 md:translate-x-0" : "-translate-x-5 opacity-0 md:-translate-x-5"
        }`}
      >
        <Image
          src="/image.jpg"
          alt="Programmer Gautam"
          width={300} // Required for optimization
          height={300} // Required for optimization
          className="rounded-full w-auto h-[150px]" // CSS to maintain aspect ratio
        />
      </div>

      {/* Text Container */}
      <div
        className={`w-full md:w-1/2 flex flex-col transform transition-all duration-1000 ${
          state.isVisible ? "translate-x-0 opacity-100 md:translate-x-0" : "translate-x-5 opacity-0 md:translate-x-5"
        }`}
      >
        <h2 className="text-4xl font-bold mb-4 text-teal">
          Hi, <span className="text-teal bg-gray-50 p-1 skew-x-12">I’m Gautam,</span>
        </h2>
        <p className="text-lg secondary-font md:max-w-[78%]">
          <span className="bg-gray-50 text-teal skew-x-12 p-1">A full-stack developer</span> with expertise in the MERN
          stack. I’m passionate about building scalable web applications and always{" "}
          <span className="bg-white text-teal p-1">open to new opportunities.</span>
        </p>

        {/* Button Container */}
        <div className="flex space-x-4 mt-6 secondary-font">
          <button className="relative px-6 py-3 bg-teal text-white font-semibold rounded-sm overflow-hidden group">
            <span className="absolute inset-0 h-full bg-white opacity-10 transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            <span className="relative z-10">Let's Talk</span>
          </button>
          <button className="relative px-6 py-3 border-2 border-teal text-teal font-semibold rounded-sm overflow-hidden group">
            <span className="absolute inset-0 h-full bg-teal opacity-10 transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            <span className="relative z-10">Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}
