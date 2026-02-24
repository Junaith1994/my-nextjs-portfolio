"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardBody, Tooltip } from "@heroui/react";
import { useState } from "react";

const projects = [
  {
    name: "jk-elite-securities-warehouse",
    description:
      "A warehouse of security products like Surveillance cameras, Surveillance drones, Alarms, Access Control devices etc. Stock/delivery of the products are being managed from here.",
    image: "/assets/projects-img/jk-elite-securities.png",
    technologies: [
      "React",
      "TailwindCSS",
      "react-google-charts",
      "moment.js",
      "react-type-animation",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
    ],
    github: "https://github.com/Junaith1994/jk-elite-securities-warehouse",
    sitelink: "https://jk-elite-securities-warehouse.web.app/",
    featured: true,
  },
  {
    name: "Radiant Root",
    description:
      "Radiant Root is a volunteer managemet website where any person can register as a volunteer for any services of choice. They can login, register for any services, see and manage their volunteer activity",
    image: "/assets/projects-img/radiant-root.png",
    technologies: [
      "React",
      "Bootstrap",
      "Firebase",
      "Axios",
      "react-toastify",
      "Node-Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Junaith1994/radiant-roots",
    sitelink: "https://radiant-roots.web.app/",
    featured: true,
  },
  {
    name: "Genius car",
    description:
      "Genius Car is website where people can book any car related services for their car like - repairing, car-servicing, break-changing, oil changing, washing etc. One can book any services after creaing account or login with gmail. They can also manage their booking like deleting bookings or creating a new booking",
    image: "/assets/projects-img/genius-car.png",
    technologies: [
      "React",
      "Bootstrap",
      "Firebase",
      "Axios",
      "React-hook-form",
      "react-toastify",
      "Node-Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Junaith1994/react-genius-car-services",
    sitelink: "https://genius-car-services-24ae5.web.app/",
    featured: true,
  },
  {
    name: "nextjs-e-commerce-backend",
    category: "Backend",
    description: "An ongoing E-commerce backend project ",
    image: "/assets/projects-img/nextjs-ecommerce-backend.png",
    technologies: ["TypeScript", "Next.js", "Mongoose", "Node-Express", "JWT"],
    github: "https://github.com/Junaith1994/nextjs-e-commerce-backend",
    sitelink: "",
    featured: false,
  },
  {
    name: "backend-typescript-express-data-management-app",
    category: "Backend",
    description: "An on going data managemet-app backend system.",
    image: "/assets/projects-img/database-backend.png",
    technologies: ["TypeScript", "Next.js", "Mongoose", "Node-Express", "JWT"],
    github:
      "https://github.com/Junaith1994/backend-typescript-express-data-management-app",
    sitelink: "",
    featured: false,
  },
  {
    name: "Dr. Junaith",
    description:
      "A dentist personal website where he offered his services and patients can book their desired services after login. Users can create account with email Or can directly login with Gmail.",
    image: "/assets/projects-img/dental-website.png",
    technologies: [
      "React",
      "React-Bootstrap",
      "Firebase",
      "React-hook-form",
      "React-toastify",
    ],
    github: "https://github.com/Junaith1994/Dr-Junaith",
    sitelink: "https://dr-junaith.netlify.app/",
    featured: false,
  },
  {
    name: "Laptop Reviews",
    description:
      "Laptop Reviews is a website where people can see the reviews of any laptop",
    image: "/assets/projects-img/laptop-review.png",
    technologies: ["React", "Bootstrap", "Recharts"],
    github: "https://github.com/Junaith1994/react-laptop-reviews",
    sitelink: "https://react-laptop-reviews.netlify.app/",
    featured: false,
  },
  {
    name: "react-red-onion-food",
    description:
      "Red Onion Food Restaurant is a restaurant website featured with adding food items in cart, calculate price according to quantity, login & sign-up options. These are for now this site needs more basic features which is in progress. It's just a User Interface with some limited functional features",
    image: "/assets/projects-img/red-onion-food.png",
    technologies: ["JavaScript", "React", "Netlify"],
    github: "https://github.com/Junaith1994/react-red-onion-food",
    sitelink: "https://red-onion-food-restaurant-junaith1994.netlify.app/",
    featured: false,
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

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

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "backend") return project.category === "Backend";
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            A collection of my recent work and personal projects
          </p>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4">
            {["all", "featured", "backend"].map((filterType) => (
              <motion.button
                key={filterType}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === filterType
                    ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600"
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </motion.button>
            ))}
          </div> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
              }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Link
                    href={
                      project?.sitelink ? project?.sitelink : project.github
                    }
                    target="_blank"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                            Featured
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </Link>
                </div>

                <div className="p-6">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium border border-indigo-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-lg text-sm font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {project?.category && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-600 transition-all duration-300"
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>

                    {project?.sitelink && (
                      <motion.a
                        href={project.sitelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="text-sm font-medium">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Junaith1994"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            View More on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
