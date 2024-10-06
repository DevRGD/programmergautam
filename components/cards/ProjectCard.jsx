"use client";
import useGlobalState from "@/hooks/useGlobalState";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectSection() {
  const { state } = useGlobalState();

  return (
    <>
      {state.data.projects.map((project, index) => (
        <div key={index} className="p-4 bg-white shadow-lg rounded-sm flex flex-col justify-between h-full">
          {/* Image */}
          <div className="overflow-hidden rounded-sm mb-4">
            <Image
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              width={400}
              height={200}
            />
          </div>

          {/* Project Info */}
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700 flex-1">{project.description}</p>

            {/* GitHub and Live Links */}
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
