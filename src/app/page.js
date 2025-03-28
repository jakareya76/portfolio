import { HeroSection } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { TapeSection } from "@/components/sections/Tape";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
    </main>
  );
}
