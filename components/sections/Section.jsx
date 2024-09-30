"use client";
import useGlobalState from "@/hooks/useGlobalState";

export default function Section({ title, id, data = [], Card }) {
  const { state } = useGlobalState();

  return (
    <section id={id} className={`relative min-h-screen flex flex-col justify-between ${state.color["gradient"]}`}>
      <div className={`px-6 py-4 flex-grow relative`}>
        <div className="container mx-auto text-center h-full flex flex-col justify-center">
          <h2 className={`text-3xl font-bold px-2 ${state.color["text-color"]} m-2 mb-12`}>{title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
