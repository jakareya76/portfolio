"use client";
import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { HeroSection } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { TapeSection } from "@/components/sections/Tape";
import Lenis from "lenis";
import { useEffect } from "react";
import Header from "@/components/Header";
import { useSectionRefs } from "@/hooks/useSectionRefs";

export default function Home() {
  const { homeRef, projectsRef, aboutRef, contactRef, activeSection } =
    useSectionRefs();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />{" "}
      {/* Pass activeSection as prop */}
      <main>
        <HeroSection ref={homeRef} />
        <ProjectsSection ref={projectsRef} />
        <TapeSection />
        <AboutSection ref={aboutRef} />
        <ContactSection ref={contactRef} />
      </main>
    </>
  );
}
