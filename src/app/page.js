"use client";

import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { HeroSection } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { TapeSection } from "@/components/sections/Tape";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { useSectionRefs } from "@/hooks/useSectionRefs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { homeRef, projectsRef, aboutRef, contactRef, activeSection } =
    useSectionRefs();
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main ref={mainRef} className="relative">
        <HeroSection ref={homeRef} />
        <ProjectsSection ref={projectsRef} />
        <TapeSection ref={aboutRef} />
        <AboutSection ref={aboutRef} />
        <ContactSection ref={contactRef} />
      </main>
    </>
  );
}
