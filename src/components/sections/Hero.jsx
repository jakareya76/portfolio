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
    gsap.set(el.querySelectorAll(".trace-bar-fill"), {
      scaleX: 0,
      transformOrigin: "left center",
    });
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

      // Trace bars grow in AFTER the trace card is visible
      tl.to(
        ".trace-bar-fill",
        {
          scaleX: 1,
          duration: 0.85,
          stagger: 0.09,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Subtle ambient re-trace every 8s — a short shimmer on the bars
      tl.call(() => {
        const retrace = gsap.timeline({ repeat: -1, repeatDelay: 7 });
        retrace.fromTo(
          ".trace-bar-fill",
          { opacity: 1 },
          {
            opacity: 0.45,
            duration: 0.25,
            stagger: 0.08,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 1,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [bootDone]);

  const trace = [
    { label: "next.js", ms: 24, pct: 50 },
    { label: "node", ms: 18, pct: 38 },
    { label: "postgres", ms: 6, pct: 12 },
  ];

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

          {/* Right — request trace + CTAs */}
          <div className="hero-fade flex flex-col items-stretch md:items-end">
            {/* Request trace widget */}
            <div className="w-full md:w-[340px] border border-ghost bg-surface/60 backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-2 border-b border-ghost">
                <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em]">
                  <span className="text-signal">GET</span>
                  <span className="text-paper">/</span>
                  <span className="text-muted">→</span>
                  <span className="text-signal">200</span>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-paper text-[10px] tabular-nums">
                  48ms
                </span>
              </div>
              <div className="px-4 py-4 space-y-2.5 font-[family-name:var(--font-mono)] text-[11px]">
                {trace.map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <span className="text-muted w-16 shrink-0">{t.label}</span>
                    <div className="flex-1 h-1 bg-ghost relative overflow-hidden">
                      <div
                        className="trace-bar-fill absolute inset-y-0 left-0 bg-signal"
                        style={{ width: `${t.pct}%` }}
                      />
                    </div>
                    <span className="text-paper tabular-nums w-10 text-right">
                      {t.ms}ms
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-ghost font-[family-name:var(--font-mono)] text-[10px] text-ghost flex justify-between">
                <span>trace id · 7b4a91</span>
                <span>edge · dac1</span>
              </div>
            </div>

            <div className="flex flex-col items-stretch md:items-end gap-2 mt-6">
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
