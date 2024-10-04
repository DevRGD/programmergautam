"use client";
import Image from "next/image";
import useGlobalState from "@/hooks/useGlobalState";

export default function AboutSection() {
  const { state } = useGlobalState();

  return (
    <section
      id="about"
      className={`h-screen px-10 flex flex-col md:flex-row justify-around items-center ${state.color["gradient"]}`}
    >
      <div
        className={`flex items-center my-6 absolute transform transition-all duration-700 ${
          state.isVisible ? "opacity-100 top-0" : "opacity-0 top-5"
        }`}
      >
        <h2 className={`md:text-4xl text-xl font-bold underline uppercase ${state.color["text-color"]}`}>About</h2>
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
        <h2 className={`text-4xl font-bold mb-4 ${state.color["text-color"]}`}>
          Hi, <span className={`p-1 skew-x-12 ${state.color["text-light"]}`}>I’m Gautam,</span>
        </h2>
        <p className={`text-lg secondary-font md:max-w-[78%] ${state.color["text-color"]}`}>
          <span className={`${state.color["bg-light"]} ${state.color["text-color"]} p-1`}>A full-stack developer</span>{" "}
          with expertise in the MERN stack. I’m passionate about building scalable web applications and always{" "}
          <span className={`${state.color["bg-light"]} ${state.color["text-color"]} p-1`}>
            open to new opportunities.
          </span>
        </p>

        {/* Button Container */}
        <div className="flex space-x-4 mt-6 secondary-font">
          <button
            className={`relative px-6 py-3 ${state.color["bg-color"]} ${state.color["text-light"]} font-semibold rounded-sm overflow-hidden group`}
          >
            <span className="absolute inset-0 h-full bg-white opacity-10 transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
            <span className="relative z-10">Let&apos;s Talk</span>
          </button>
          <button
            className={`relative px-6 py-3 ${state.color["bg-light"]} ${state.color["text-color"]} font-semibold rounded-sm overflow-hidden group`}
          >
            <span
              className={`absolute inset-0 h-full bg-white transition-transform duration-500 ease-out transform scale-x-0 origin-center group-hover:scale-x-100 border-2 border-teal-100`}
            ></span>
            <span className="relative z-10">Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}
