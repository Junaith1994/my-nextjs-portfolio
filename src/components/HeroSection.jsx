"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section>
      <section
        id="about-me"
        className="flex flex-col md:flex-row items-center justify-between p-8"
      >
        {/* Text Content */}
        <div className="max-w-lg mb-6 md:mb-0">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            Assalamu 'Alaikum, <br />I am{" "}
            <span className="text-cyan-400">Junaith Bin Elias Khan</span>
          </h1>
          <p className="text-lg text-gray-200">
            I am a passionate web developer with a focus on backend technologies
            and MERN stack. My journey in web development started in January
            2022, and I aspire to become a sharp and innovative backend
            developer by 2028.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src="/assets/junaith.png" // Replace with your actual image path
            alt="Junaith Bin Elias Khan's Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full bg-blue-700 shadow-xl shadow-blue-500/50 brightness-125 drop-shadow-md"
          />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-6">
          Connect with me
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 text-gray-700">
          {/* Phone Numbers */}
          <span className="flex items-center space-x-2 text-lg">
            <FaPhoneAlt className="text-blue-700" />
            <span className="text-slate-100 text-sm md:text-base text-center">
              +880-1627676315 | +880-1301018210
            </span>
          </span>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Junaith1994"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-800 hover:text-cyan-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/junaith-bin-elias-khan-060ab3213/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-800 hover:text-cyan-400" />
            </a>
            <a href="mailto:daya2018ctg@gmail.com">
              <FaEnvelope className="text-2xl text-gray-800 hover:text-cyan-400" />
            </a>
            <a
              href="https://www.facebook.com/daya.eliyeskhan.7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-gray-800 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
