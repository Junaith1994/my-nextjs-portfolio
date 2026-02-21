"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import components for better performance
const Footer = dynamic(() => import("@/components/FooterSection"), {
  loading: () => <div className="h-64 bg-slate-900 animate-pulse" />,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  loading: () => <div className="min-h-screen bg-slate-900 animate-pulse" />,
});
const NavbarComponent = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div className="h-16 bg-slate-900 animate-pulse" />,
  ssr: false, // Navbar uses browser APIs
});
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="h-96 bg-slate-900 animate-pulse" />,
});
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  loading: () => <div className="h-96 bg-slate-900 animate-pulse" />,
});
const ToolsSection = dynamic(() => import("@/components/ToolsSection"), {
  loading: () => <div className="h-96 bg-slate-900 animate-pulse" />,
});
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false, // ScrollToTop uses browser APIs
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <NavbarComponent />
      <main className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <SkillsSection />
          <ToolsSection />
          <ProjectsSection />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
