"use client";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiLaravel,
  SiRedux,
} from "react-icons/si";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const frontendSkills = [
    {
      name: "HTML",
      icon: FaHtml5,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      name: "CSS3",
      icon: FaCss3,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Next.js",
      icon: RiNextjsFill,
      color: "text-gray-100",
      bgColor: "bg-gray-100/10",
    },
    {
      name: "JavaScript",
      icon: FaJsSquare,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-300",
      bgColor: "bg-gray-300/10",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={categoryVariants} className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-2">
              Front-End Development
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div
                  className={`p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 ${skill.bgColor}`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={categoryVariants} className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-2">
              Back-End Development
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div
                  className={`p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 ${skill.bgColor}`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-green-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-slate-400">
              Continuously expanding my skill set with modern technologies and
              best practices
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
