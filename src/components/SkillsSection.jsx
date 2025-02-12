"use client";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "Git", icon: FaGitAlt },
    { name: "Database Management", icon: FaDatabase },
  ];
  return (
    <section id="skills" className="mt-5 p-8">
      <h2 className="text-3xl font-bold text-slate-200 mb-6">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Skill Cards */}
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 bg-cyan-400 rounded-xl shadow-md flex flex-col items-center"
          >
            <skill.icon className="text-5xl text-blue-950 mb-2" />
            <h3 className="text-xl font-medium text-gray-700">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
