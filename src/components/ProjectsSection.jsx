"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "E-Commerce Platform",
    image: "/projects/ecommerce.png", // Replace with your actual image path
    technologies: ["React", "Next.js", "TailwindCSS", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-project",
  },
  {
    name: "Chat Application",
    image: "/projects/chat-app.png",
    technologies: ["Node.js", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/yourusername/chat-application",
  },
  {
    name: "Portfolio Website",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio-website",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="p-8 bg-[#0b0e14] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#11151c] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
          >
            {/* Project Image */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <FaGithub className="text-xl" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
