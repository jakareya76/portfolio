"use client";

import { useEffect, useRef } from "react";
import HeroOrbit from "./HeroOrbit";
import grainImage from "@/assets/images/grain.jpg";
import gsap from "gsap";

const HeroEffect = () => {
  const containerRef = useRef(null);
  const ringsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Animate rings appearing
      gsap.fromTo(
        ringsRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
      }}
    >
      <div
        className="absolute inset-0 -z-30 opacity-[0.03]"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      {/* Animated rings with new colors */}
      <div
        ref={(el) => (ringsRef.current[0] = el)}
        className="absolute inset-0 size-[620px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-violet-500/10"
      />
      <div
        ref={(el) => (ringsRef.current[1] = el)}
        className="absolute inset-0 size-[850px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-cyan-500/10"
      />
      <div
        ref={(el) => (ringsRef.current[2] = el)}
        className="absolute inset-0 size-[1100px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-fuchsia-500/10"
      />
      <div
        ref={(el) => (ringsRef.current[3] = el)}
        className="absolute inset-0 size-[1350px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-violet-500/10"
      />

      {/* Orbiting elements */}
      <HeroOrbit size={430} rotation={-14} orbitDuration="30s" shouldOrbit={true}>
        <div className="size-2 bg-violet-500 rounded-full shadow-lg shadow-violet-500/50" />
      </HeroOrbit>

      <HeroOrbit size={480} rotation={79} orbitDuration="35s" shouldOrbit={true}>
        <div className="size-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50" />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={180} orbitDuration="40s" shouldOrbit={true}>
        <div className="size-2 bg-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-500/50" />
      </HeroOrbit>

      <HeroOrbit size={620} rotation={20} orbitDuration="45s" shouldOrbit={true}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="size-8 text-violet-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
      </HeroOrbit>

      <HeroOrbit size={700} rotation={98} orbitDuration="50s" shouldOrbit={true}>
        <div className="size-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full shadow-lg shadow-violet-500/50" />
      </HeroOrbit>

      <HeroOrbit size={780} rotation={-45} orbitDuration="55s" shouldOrbit={true}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="size-10 text-cyan-400/60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
      </HeroOrbit>

      <HeroOrbit size={850} rotation={145} orbitDuration="60s" shouldOrbit={true}>
        <div className="size-2 bg-fuchsia-400 rounded-full shadow-lg shadow-fuchsia-400/50" />
      </HeroOrbit>

      <HeroOrbit size={920} rotation={-72} orbitDuration="65s" shouldOrbit={true}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="size-16 text-violet-400/30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
            fill="currentColor"
          />
        </svg>
      </HeroOrbit>
    </div>
  );
};

export default HeroEffect;
