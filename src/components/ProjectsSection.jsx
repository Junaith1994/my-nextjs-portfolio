"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Card, CardBody } from "@heroui/react";

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
  },
  {
    name: "nextjs-e-commerce-backend",
    category: "Backend",
    description: "An ongoing E-commerce backend project ",
    image: "/assets/projects-img/nextjs-ecommerce-backend.png",
    technologies: ["TypeScript", "Next.js", "Mongoose", "Node-Express", "JWT"],
    github: "https://github.com/Junaith1994/nextjs-e-commerce-backend",
    sitelink: "",
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
  },
  {
    name: "Laptop Reviews",
    description:
      "Laptop Reviews is a website where people can see the reviews of any laptop",
    image: "/assets/projects-img/laptop-review.png",
    technologies: ["React", "Bootstrap", "Recharts"],
    github: "https://github.com/Junaith1994/react-laptop-reviews",
    sitelink: "https://react-laptop-reviews.netlify.app/",
  },
  {
    name: "react-red-onion-food",
    description:
      "Red Onion Food Restaurant is a restaurant website featured with adding food items in cart, calculate price according to quantity, login & sign-up options. These are for now this site needs more basic features which is in progress. It's just a User Interface with some limited functional features",
    image: "/assets/projects-img/red-onion-food.png",
    technologies: ["JavaScript", "React", "Netlify"],
    github: "https://github.com/Junaith1994/react-red-onion-food",
    sitelink: "https://red-onion-food-restaurant-junaith1994.netlify.app/",
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
              <Link
                href={project?.sitelink ? project?.sitelink : project.github}
                target="_blank"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  // fill={true}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </Link>
            </div>

            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="my-3">{project.description}</p>

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
            {project?.category && (
              <Card shadow="lg" className="mb-4 bg-blue-600 font-bold">
                <CardBody className="text-">
                  <p>{project?.category}</p>
                </CardBody>
              </Card>
            )}

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
