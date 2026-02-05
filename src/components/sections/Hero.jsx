"use client";

import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MagneticButton } from "../animations/MagneticButton";

const roles = [
  "Full Stack Developer",
  "Next.js Expert",
  "Cloud Architect",
  "Problem Solver",
];

export const HeroSection = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const codeRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate elements
      tl.fromTo(
        ".hero-line",
        { y: 100, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.15 }
      )
        .fromTo(
          ".hero-badge",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-code",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-visual",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
          "-=0.8"
        );

      // Floating animation for code blocks
      gsap.to(".code-float", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      });

      // Mouse move parallax
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(".parallax-slow", { x: x * 0.5, y: y * 0.5, duration: 1 });
        gsap.to(".parallax-fast", { x: x, y: y, duration: 1 });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        containerRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      id="home"
      className="min-h-screen relative z-0 overflow-hidden flex items-center py-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Gradient orbs */}
      <div className="parallax-slow absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
      <div className="parallax-fast absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
      <div className="parallax-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-zinc-300">Available for work</span>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <div className="overflow-hidden">
                <h1 className="hero-line font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Hey, I'm Jakareya
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="hero-line font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-violet-400">|</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="overflow-hidden mt-6">
              <p className="hero-line text-zinc-400 text-lg lg:text-xl max-w-lg leading-relaxed">
                I craft high-performance web applications that scale. From
                frontend to backend, databases to cloud – I build it all.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="overflow-hidden mt-8">
              <div className="hero-line flex flex-wrap gap-2">
                {["Next.js", "Node.js", "PostgreSQL", "Azure", "TypeScript"].map(
                  (tech, i) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:border-violet-500/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <MagneticButton strength={0.3} className="hero-cta">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-8 h-14 rounded-full font-semibold shadow-lg shadow-violet-600/25 hover:shadow-violet-500/40 transition-all duration-300"
                >
                  <span>View My Work</span>
                  <svg
                    className="size-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3} className="hero-cta">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white px-8 h-14 rounded-full font-semibold transition-all duration-300 hover:bg-zinc-800"
                >
                  <span>Let's Talk</span>
                  <span className="text-xl group-hover:rotate-12 transition-transform">
                    👋
                  </span>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right visual */}
          <div className="order-1 lg:order-2 relative">
            {/* Code snippets floating around */}
            <div className="hero-code code-float absolute -top-10 -left-10 lg:left-0 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-3 rounded-full bg-red-500" />
                <div className="size-3 rounded-full bg-yellow-500" />
                <div className="size-3 rounded-full bg-green-500" />
              </div>
              <code className="text-xs font-mono">
                <span className="text-fuchsia-400">const</span>{" "}
                <span className="text-cyan-400">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-violet-400">{`{`}</span>
                <br />
                <span className="text-white ml-4">name:</span>{" "}
                <span className="text-green-400">"Jakareya"</span>,
                <br />
                <span className="text-white ml-4">skills:</span>{" "}
                <span className="text-cyan-400">[...]</span>,
                <br />
                <span className="text-white ml-4">available:</span>{" "}
                <span className="text-green-400">true</span>
                <br />
                <span className="text-violet-400">{`}`}</span>;
              </code>
            </div>

            <div className="hero-code code-float absolute -bottom-5 -right-5 lg:right-10 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 shadow-xl z-20 [animation-delay:1s]">
              <code className="text-xs font-mono">
                <span className="text-zinc-500">// Let's build something</span>
                <br />
                <span className="text-fuchsia-400">npm</span>{" "}
                <span className="text-cyan-400">run</span>{" "}
                <span className="text-green-400">build:awesome</span>
              </code>
            </div>

            {/* Main visual - Memoji with glowing effect */}
            <div className="hero-visual relative flex justify-center">
              <div className="relative">
                {/* Glow rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-violet-500/20 animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-cyan-500/10" />
                </div>

                {/* Gradient glow behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 rounded-full blur-3xl opacity-40" />

                {/* Memoji */}
                <div className="relative z-10 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 p-2 rounded-full">
                  <div className="bg-zinc-950 rounded-full p-4">
                    <Image
                      src={memojiImage}
                      width={200}
                      height={200}
                      alt="Jakareya"
                      className="w-40 h-40 md:w-52 md:h-52"
                    />
                  </div>
                </div>

                {/* Floating tech icons */}
                <div className="parallax-fast z-50 absolute top-0 right-0 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="parallax-slow z-50 absolute bottom-10 left-0 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="parallax-fast z-50 absolute top-1/2 -right-10 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Scroll to explore
          </span>
          <div className="w-5 h-9 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
});
