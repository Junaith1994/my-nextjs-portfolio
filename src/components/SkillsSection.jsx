"use client";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  // FaDatabase,
  // FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiExpress, SiRedux } from "react-icons/si";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3 },
    { name: "React.js", icon: FaReact },
    { name: "Redux", icon: SiRedux },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "JavaScript", icon: FaJsSquare },
  ];
  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "TypeScript", icon: SiTypescript },
  ];
  return (
    // Front-End Skills
    <section id="skills" className="mt-5 p-8">
      <h2 className="text-3xl font-bold text-slate-200 mb-6">Tech Stack</h2>
      <section>
        <h2 className="text-3xl font-bold text-slate-200 mb-6">
          Front-End Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Skill Cards */}
          {frontendSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-cyan-400 hover:bg-cyan-700 rounded-xl shadow-md flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <skill.icon className="text-5xl text-gray-950 mb-2" />
              <h3 className="text-xl font-medium text-gray-950">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5">
        <h2 className="text-3xl font-bold text-slate-200 mb-6">
          Backend Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Skill Cards */}
          {backendSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-cyan-400 hover:bg-cyan-700 rounded-xl shadow-md flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <skill.icon className="text-5xl text-gray-950 mb-2" />
              <h3 className="text-xl font-medium text-gray-950">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default SkillsSection;
