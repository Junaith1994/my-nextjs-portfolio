"use client";

import { FaGitAlt, FaGithub, FaCloudflare } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { name: "VS Code", icon: VscVscode },
  { name: "Postman", icon: SiPostman },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Firebase", icon: SiFirebase },
  { name: "Cloudflare", icon: FaCloudflare },
  { name: "MongoDB Compass", icon: SiMongodb },
];

export default function ToolsSection() {
  return (
    <section className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Tools</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-xl shadow-md flex flex-col items-center hover:bg-gray-700 transition"
          >
            <tool.icon className="text-5xl text-blue-400 mb-3" />
            <h3 className="text-lg font-medium">{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
