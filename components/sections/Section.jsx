"use client";
import useGlobalState from "@/hooks/useGlobalState";

export default function Section({ title, id, data = [], Card }) {
  const { state } = useGlobalState();
  const {
    "text-color": text_color,
    "bg-color": bg_color,
    "text-light": text_light,
    "bg-light": bg_light,
    gradient,
  } = state.color;

  return (
    <section id={id} className={`relative min-h-screen flex flex-col justify-between ${gradient}`}>
      <div className={`px-6 py-4 flex-grow relative`}>
        <div className="container mx-auto text-center h-full flex flex-col justify-center">
          <h2 className={`text-3xl font-bold px-2 ${text_color} m-2 mb-12`}>{title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <Card key={index} skill={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
