"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaHeart,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Junaith1994", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/junaith-bin-elias-khan-060ab3213/",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:daya2018ctg@gmail.com", label: "Email" },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/daya.eliyeskhan.7/",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-md border-t border-slate-700">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <FaCode className="text-2xl text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-200">
                <span className="text-cyan-400">JUNAITH</span> | DEV
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate MERN Stack Developer focused on building modern web
              applications with exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaRocket className="text-cyan-400" />
              <span>Building the future, one line at a time</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-200">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <div className="text-slate-400 text-sm">
                <span className="block">Email: daya2018ctg@gmail.com</span>
                <span className="block">Phone: +880-1627676315</span>
              </div>
              <div className="text-slate-400 text-sm">
                <span className="block">Location: Dhaka, Bangladesh</span>
                <span className="block">Available for freelance work</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-200">
              Connect With Me
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <social.icon className="text-lg text-cyan-400" />
                  <span className="text-slate-300 text-sm">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Junaith Bin Elias Khan. All Rights
                Reserved.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-1 mt-1">
                Made with <FaHeart className="text-red-500 animate-pulse" />{" "}
                using
                <span className="text-cyan-400">React</span> &
                <span className="text-blue-500">Next.js</span>
              </p>
            </div>

            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
