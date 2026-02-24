"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-slate-300">Assalamu 'Alaikum,</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  I am Junaith Bin Elias Khan
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl"
            >
              Passionate MERN Stack Developer with a focus on backend
              technologies. Started my journey in web development in January
              2022, aspiring to become a sharp and innovative backend developer
              by 2028.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-slate-800 text-cyan-400 font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 border border-cyan-500/30 transition-all duration-300"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                </a>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <Image
                  src="/assets/junaith.png"
                  alt="Junaith Bin Elias Khan's Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-slate-200 mb-8"
          >
            Connect With Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-slate-300"
          >
            {/* Phone Numbers */}
            <motion.div
              variants={socialVariants}
              className="flex items-center gap-3 text-lg bg-slate-800/50 px-6 py-3 rounded-full backdrop-blur-sm border border-slate-700"
            >
              <FaPhoneAlt className="text-cyan-400" />
              <span className="text-sm md:text-base">
                +880-1627676315 | +880-1301018210
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/Junaith1994",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/junaith-bin-elias-khan-060ab3213/",
                  label: "LinkedIn",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:daya2018ctg@gmail.com",
                  label: "Email",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/daya.eliyeskhan.7/",
                  label: "Facebook",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-3xl text-cyan-400 hover:text-cyan-300 transition-all duration-300 drop-shadow-lg hover:drop-shadow-cyan-500/50"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </section>
  );
}
