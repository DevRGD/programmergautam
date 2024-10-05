"use client";
import useGlobalState from "@/hooks/useGlobalState";

export default function Section({ title, id, Card, classes = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" }) {
  const { state } = useGlobalState();

  return (
    <section id={id} className={`relative min-h-screen flex flex-col justify-between ${state.color["gradient"]}`}>
      <div className={`px-6 py-4 flex-grow relative`}>
        <div className="container mx-auto text-center h-full flex flex-col justify-center">
          <h2
            className={`md:text-3xl text-md font-bold uppercase align-bottom mb-10 relative ${
              state.color["text-color"]
            } transform transition-all duration-700 ${state.isVisible ? "opacity-100 top-0" : "top-5 opacity-0"}`}
          >
            {title}
          </h2>
          <div
            className={`transform transition-all duration-1000 ${
              state.isVisible ? "opacity-100 top-0" : "top-5 opacity-0"
            } ${classes}`}
          >
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
