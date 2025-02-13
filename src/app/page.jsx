// import Image from "next/image";

import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavbarComponent from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";

export default function Home() {
  return (
    <div className="mx-auto container">
      <NavbarComponent />
      <HeroSection />
      <SkillsSection />
      <ToolsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
