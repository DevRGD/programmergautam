export default function Skills() {
  return (
    <section id="skills" className="h-screen p-8 bg-gradient-pink flex flex-col justify-center ">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
}
