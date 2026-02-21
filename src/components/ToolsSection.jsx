"use client";

import { motion } from "framer-motion";
import { FaGitAlt, FaNpm, FaGithub, FaCloudflare } from "react-icons/fa";
import {
  SiPostman,
  SiVercel,
  SiBun,
  SiFirebase,
  SiMongodb,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  { name: "NPM", icon: FaNpm, color: "text-red-500", bgColor: "bg-red-500/10" },
  {
    name: "Bun",
    icon: SiBun,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "VITE",
    icon: SiVite,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-gray-100",
    bgColor: "bg-gray-100/10",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "text-gray-900",
    bgColor: "bg-gray-900/10",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    name: "Cloudflare",
    icon: FaCloudflare,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "MongoDB Compass",
    icon: SiMongodb,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function ToolsSection() {
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

  const toolVariants = {
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

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Development Tools
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Essential tools and platforms I use for development and deployment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={toolVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div
                className={`p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 ${tool.bgColor}`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`text-5xl ${tool.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tool.icon />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-purple-400 transition-colors duration-300 text-center">
                    {tool.name}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-200 mb-2">
                  Tool Expertise
                </h3>
                <p className="text-slate-400">
                  Proficient in modern development tools for efficient workflow
                  and deployment
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-slate-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">3+</div>
                  <div className="text-sm text-slate-400">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
