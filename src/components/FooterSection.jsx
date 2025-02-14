"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section - Copyright */}
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Junaith Bin Elias Khan. All Rights
          Reserved.
        </p>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Junaith1994"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/junaith-bin-elias-khan-060ab3213/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:daya2018ctg@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/daya.eliyeskhan.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
