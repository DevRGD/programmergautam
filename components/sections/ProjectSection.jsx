export default function ProjectSection() {
  return (
    <section id="projects" className="h-screen p-8 bg-gradient-teal flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Project 1 description goes here. It was built using Next.js and MongoDB.</p>
        </div>
        {/* Add more projects */}
      </div>
    </section>
  );
}
