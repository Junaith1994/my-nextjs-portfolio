// import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import NavbarComponent from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="mx-auto container">
      <NavbarComponent />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
