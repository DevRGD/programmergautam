"use client";

export default function Section({
  title = "Section",
  data = [],
  withScallop = false,
  bgColor = "gradient-lavender",
  Card,
}) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between">
      {/* Scallop Divider Up (Conditional) */}
      {withScallop && <div className="h-[49px] w-full absolute top-0 z-10 bg-gradient-seagreen"></div>}

      <div className={`px-6 py-4 flex-grow ${bgColor} relative`}>
        <div className="container mx-auto text-center h-full flex flex-col justify-center">
          <h2 className={`text-3xl font-bold px-2 ${withScallop ? "text-white" : "text-lavender"} m-2 mb-12`}>
            {title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <Card key={index} skill={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Scallop Divider Down (Conditional) */}
      {withScallop && <div className="h-[49px] w-full bg-gradient-light"></div>}
    </section>
  );
}
