"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useSectionRefs } from "@/hooks/useSectionRefs";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import { HeroSection } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProjectsSection } from "@/components/sections/Projects";
import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";

const BootSequence = dynamic(() => import("@/components/BootSequence"), {
  ssr: false,
});
const CursorFollower = dynamic(() => import("@/components/CursorFollower"), {
  ssr: false,
});
const CursorFill = dynamic(() => import("@/components/CursorFill"), {
  ssr: false,
});
const WebGL = dynamic(() => import("@/components/WebGL"), { ssr: false });
const SystemBar = dynamic(() => import("@/components/SystemBar"), {
  ssr: false,
});

export default function Home() {
  const { homeRef, projectsRef, aboutRef, contactRef, activeSection } =
    useSectionRefs();
  const [bootDone, setBootDone] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBootDone(true);
  }, []);

  useEffect(() => {
    // Check if boot was already done this session
    if (typeof window !== "undefined" && sessionStorage.getItem("boot_done")) {
      setBootDone(true);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Refresh ScrollTrigger on resize
  useEffect(() => {
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    return () => ro.disconnect();
  }, []);

  return (
    <>
      <BootSequence onComplete={handleBootComplete} />
      <CursorFollower />
      <CursorFill />
      <ProgressBar />

      {/* Minimal WebGL background in hero */}
      <div className="fixed inset-0 z-0">
        <WebGL />
      </div>

      <Header activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection ref={homeRef} bootDone={bootDone} />
        <StatsStrip />
        <ProjectsSection ref={projectsRef} />
        <AboutSection ref={aboutRef} />
        <ContactSection ref={contactRef} />
      </main>

      <SystemBar activeSection={activeSection} />
    </>
  );
}
