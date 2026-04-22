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

  // GSAP entrance after boot
  useEffect(() => {
    if (!bootDone) return;
    const ctx = gsap.context(() => {
      // Animate headline lines
      gsap.utils.toArray(".hero-char-line").forEach((line) => {
        const chars = line.querySelectorAll(".hero-char");
        gsap.from(chars, {
          yPercent: 120,
          duration: 0.8,
          stagger: 0.02,
          ease: "expo.out",
          delay: 0.1,
        });
      });

      // Fade in secondary content
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [bootDone]);

  const splitChars = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="hero-char inline-block">
        {char === " " ? "\u00A0" : char}
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
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted uppercase tracking-[0.12em] hero-fade">
          Jakareya Portfolio — 2026
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted uppercase tracking-[0.12em] hero-fade">
          Dhaka {time}
        </span>
      </div>

      {/* Main headline */}
      <div className="flex-1 flex items-center px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="w-full">
          {/* Eyebrow */}
          <p className="font-[family-name:var(--font-mono)] text-[11px] text-signal uppercase tracking-[0.12em] mb-6 hero-fade">
            Full Stack Developer
          </p>

          {/* Headline — 3 lines */}
          <div
            style={{
              fontSize: "clamp(52px, 11vw, 150px)",
              lineHeight: 0.9,
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
      <div className="px-6 md:px-10 pb-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — description */}
          <div className="hero-fade">
            <p className="text-muted text-base leading-relaxed max-w-sm">
              I architect high-performance web systems that scale. Frontend to
              backend, databases to cloud infrastructure — building the digital
              future, one commit at a time.
            </p>
            <p className="font-[family-name:var(--font-mono)] text-ghost text-xs mt-6">
              Next.js, Node.js, PostgreSQL, Azure, TypeScript
            </p>
          </div>

          {/* Right — number + CTAs */}
          <div className="hero-fade flex flex-col items-end">
            <span
              className="font-[family-name:var(--font-display)] font-bold text-outline select-none"
              style={{ fontSize: "clamp(60px, 8vw, 120px)", lineHeight: 1 }}
            >
              01
            </span>
            <div className="flex flex-col items-end gap-2 mt-6">
              <a
                href="#projects"
                data-fill
                className="relative overflow-hidden font-[family-name:var(--font-display)] text-paper text-base px-4 py-2"
              >
                <span className="relative z-10">View Projects →</span>
              </a>
              <a
                href="/jakareya-cv.pdf"
                download
                data-fill
                className="relative overflow-hidden font-[family-name:var(--font-display)] text-muted text-base px-4 py-2"
              >
                <span className="relative z-10">Download CV →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border with section number */}
        <div className="border-t border-ghost mt-10 pt-4 flex justify-end">
          <span className="font-[family-name:var(--font-mono)] text-ghost text-[10px] tracking-[0.12em]">
            001 / 004
          </span>
        </div>
      </div>
    </section>
  );
});
