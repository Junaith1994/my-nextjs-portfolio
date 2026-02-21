"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Manage body scroll when mobile menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about-me", "skills", "projects", "contact"];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "-100px 0px -100px 0px",
    });

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (href) => {
    const targetId = href.replace("/#", "").replace("#", "");
    const element = document.getElementById(targetId);

    // Close mobile menu immediately
    setIsMenuOpen(false);

    // Small delay to ensure menu animation completes before scrolling
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setActiveLink(targetId);
    }, 300);
  };

  const handleNavItemClick = (href) => {
    handleSmoothScroll(href);
  };

  const navItems = [
    { name: "About Me", href: "/#about-me", id: "about-me" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="hover:scale-105 transition-transform">
              <p className="font-bold text-xl sm:text-2xl text-white">
                <span className="text-cyan-400 drop-shadow-lg">JUNAITH</span>
                <span className="mx-1 sm:mx-2 text-slate-400">|</span>
                <span className="inline lg:hidden md:hidden text-slate-300 text-sm sm:text-base">
                  &lt;MERN DEV /&gt;
                </span>
                <span className="hidden lg:inline md:inline text-slate-300">
                  &lt;MERN STACK DEVELOPER /&gt;
                </span>
              </p>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => handleNavItemClick(item.href)}
                  className={`font-bold transition-all duration-300 relative text-sm sm:text-base ${
                    activeLink === item.id
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyan-400 hover:text-cyan-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-slate-900/95 backdrop-blur-xl border-l border-cyan-500/20 shadow-2xl z-50"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
                  <span className="text-white font-bold text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <button
                      onClick={() => handleNavItemClick(item.href)}
                      className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        activeLink === item.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-400/30"
                          : "text-white/80 hover:text-white hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <span className="font-semibold text-lg">{item.name}</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-cyan-500/20">
                <div className="text-center text-white/60 text-sm">
                  <p> 2024 Junaith Portfolio</p>
                  <p className="mt-1">Built with and MERN Stack</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarComponent;
