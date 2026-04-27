"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export const HeroSection = forwardRef(({ bootDone }, ref) => {
  const containerRef = useRef(null);
  const [time, setTime] = useState("");

  // Live clock — Bangladesh (UTC+6)
  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Hide entrance targets immediately on mount so they can't flash
  // before the boot sequence finishes.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.set(el.querySelectorAll(".hero-char"), { yPercent: 120 });
    gsap.set(el.querySelectorAll(".hero-fade"), { autoAlpha: 0, y: 20 });
  }, []);

  // GSAP entrance after boot
  useEffect(() => {
    if (!bootDone) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Headline lines — staggered char reveal
      gsap.utils.toArray(".hero-char-line").forEach((line, i) => {
        const chars = line.querySelectorAll(".hero-char");
        tl.to(
          chars,
          {
            yPercent: 0,
            duration: 0.75,
            stagger: 0.018,
            ease: "expo.out",
          },
          i === 0 ? 0.05 : "-=0.55"
        );
      });

      // Secondary content fades in as headline is wrapping up
      tl.to(
        ".hero-fade",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.35"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [bootDone]);

  const splitChars = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="hero-char inline-block">
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <section
      ref={(el) => {
        containerRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      id="home"
      className="min-h-screen relative z-10 flex flex-col"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 pt-24 md:pt-28 max-w-7xl mx-auto w-full">
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted uppercase tracking-[0.1em] hero-fade">
          Portfolio — 2026
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted uppercase tracking-[0.1em] hero-fade">
          DAC {time}
        </span>
      </div>

      {/* Main headline */}
      <div className="flex-1 flex items-center px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="w-full">
          {/* Eyebrow */}
          <p className="font-[family-name:var(--font-mono)] text-[11px] text-signal uppercase tracking-[0.1em] mb-7 hero-fade">
            Full Stack Developer
          </p>

          {/* Headline — 3 lines */}
          <div
            style={{
              fontSize: "clamp(52px, 11vw, 150px)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
            }}
            className="font-[family-name:var(--font-display)] font-bold"
          >
            <div className="overflow-hidden">
              <div className="hero-char-line text-paper">
                {splitChars("JAKAREYA")}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-char-line text-signal">
                {splitChars("FULL STACK")}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-char-line text-outline">
                {splitChars("DEVELOPER")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — description */}
          <div className="hero-fade">
            <p className="text-muted text-base leading-relaxed max-w-sm">
              I architect high-performance web systems that scale. Frontend to
              backend, databases to cloud infrastructure — building the digital
              future, one commit at a time.
            </p>
            <p className="font-[family-name:var(--font-mono)] text-ghost text-[11px] mt-5 tracking-[0.04em]">
              Next.js · Node.js · PostgreSQL · Azure · TypeScript
            </p>
          </div>

          {/* Right — availability + CTAs */}
          <div className="hero-fade flex flex-col items-stretch md:items-end gap-8">
            {/* Availability status */}
            <div className="flex items-center gap-3 md:justify-end">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
              </span>
              <span className="font-[family-name:var(--font-mono)] text-signal text-[11px] uppercase tracking-[0.08em]">
                Available — open to new projects
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-stretch md:items-end gap-2">
              <a
                href="#projects"
                data-fill
                className="relative overflow-hidden font-[family-name:var(--font-display)] text-paper text-base px-4 py-2.5 border border-ghost hover:border-paper/30 transition-colors duration-300"
              >
                <span className="relative z-10">View Projects →</span>
              </a>
              <a
                href="/jakareya-cv.pdf"
                download
                data-fill
                className="relative overflow-hidden font-[family-name:var(--font-display)] text-muted text-base px-4 py-2 hover:text-paper transition-colors duration-300"
              >
                <span className="relative z-10">Download CV →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border with section number */}
        <div className="border-t border-ghost mt-12 pt-4 flex justify-end">
          <span className="font-[family-name:var(--font-mono)] text-ghost text-[10px] tracking-[0.1em]">
            001 / 004
          </span>
        </div>
      </div>
    </section>
  );
});
