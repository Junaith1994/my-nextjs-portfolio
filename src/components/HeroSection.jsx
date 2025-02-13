"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
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
          and MERN stack. My journey in web development started in January 2022,
          and I aspire to become a sharp and innovative backend developer by
          2028.
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
  );
}
