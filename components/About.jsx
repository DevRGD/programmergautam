import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="h-[calc(100vh-68px)] px-10 bg-gradient-seagreen flex flex-col md:flex-row justify-around items-center"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src="/image.jpg" priority width={300} height={150} alt="Programmer Gautam" className="rounded-full" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-4xl font-bold mb-4 text-teal">Hi, I’m Gautam,</h2>
        <p className="text-lg secondary-font md:max-w-[78%]">
          A full-stack developer with expertise in the MERN stack. I’m passionate about building scalable web
          applications and always open to new opportunities.
        </p>
      </div>
    </section>
  );
}
