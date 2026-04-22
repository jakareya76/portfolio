"use client";

import { toolboxItem, toolboxItemTwo } from "@/constants";
import { forwardRef, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const allSkills = [...toolboxItem, ...toolboxItemTwo]
  .filter(
    (skill, index, self) =>
      index ===
      self.findIndex((s) => s.title.toLowerCase() === skill.title.toLowerCase())
  )
  .map((s) => s.title);

// Split into two rows for the marquee
const skillsRow1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const skillsRow2 = allSkills.slice(Math.ceil(allSkills.length / 2));

export const AboutSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Quote word reveal
      const words = quoteRef.current?.querySelectorAll(".quote-word");
      if (words?.length) {
        gsap.from(words, {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.6,
          stagger: 0.04,
          ease: "expo.out",
          scrollTrigger: { trigger: quoteRef.current, start: "top 70%" },
        });
      }

      // Cards stagger in
      gsap.from(".about-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: { trigger: ".about-grid", start: "top 75%" },
      });

      // Skill marquees — opposite directions
      if (marquee1Ref.current) {
        const w1 = marquee1Ref.current.scrollWidth / 2;
        gsap.to(marquee1Ref.current, {
          x: -w1,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
      if (marquee2Ref.current) {
        const w2 = marquee2Ref.current.scrollWidth / 2;
        gsap.fromTo(
          marquee2Ref.current,
          { x: -w2 },
          { x: 0, duration: 30, ease: "none", repeat: -1 }
        );
      }

      // Skill section reveal
      gsap.from(".skills-block", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-block", start: "top 80%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const quoteText =
    "I specialize in architecting modern web systems that are both beautiful and blazing fast";
  const highlightWords = ["architecting", "beautiful", "fast"];

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      id="about"
      className="py-24 lg:py-40 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="border-t border-ghost pt-4 mb-20">
          <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.12em]">
            003 / About
          </span>
        </div>

        {/* ACT 1 — The Statement */}
        <div ref={quoteRef} className="mb-24 md:mb-32">
          <p
            className="font-[family-name:var(--font-display)] font-light text-paper leading-[1.1] max-w-5xl"
            style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
          >
            {quoteText.split(" ").map((word, i) => (
              <span
                key={i}
                className={`quote-word inline-block mr-[0.3em] ${
                  highlightWords.includes(word.replace(/[^a-zA-Z]/g, ""))
                    ? "text-signal"
                    : ""
                }`}
                style={{ clipPath: "inset(0 0% 0 0)" }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* ACT 2 — Info cards in asymmetric grid */}
        <div className="about-grid grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-24 md:mb-32">
          {/* Profile card — spans 7 cols */}
          <div className="about-card md:col-span-7 bg-surface border border-ghost p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-signal/40 to-transparent" />
            <div className="flex items-start justify-between mb-8">
              <span className="font-[family-name:var(--font-mono)] text-signal text-[11px] uppercase tracking-[0.12em]">
                Profile
              </span>
              <span className="font-[family-name:var(--font-mono)] text-ghost text-[11px]">
                01
              </span>
            </div>
            <h3
              className="font-[family-name:var(--font-display)] font-bold text-paper mb-3"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Jakareya Ahmed
            </h3>
            <p className="text-muted leading-relaxed max-w-lg">
              I specialize in architecting modern web systems using cutting-edge
              tech. With deep expertise in both frontend and backend, I engineer
              seamless digital experiences that are both beautiful and blazing fast.
            </p>
            <div className="flex gap-6 mt-8">
              {[
                { label: "Experience", value: "2+ yrs" },
                { label: "Projects", value: "15+" },
                { label: "Status", value: "Available" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-[family-name:var(--font-display)] font-bold text-paper text-lg">
                    {item.value}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.1em] mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location card — spans 5 cols */}
          <div className="about-card md:col-span-5 bg-surface border border-ghost p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-signal/30" />
            <div className="flex items-start justify-between mb-8">
              <span className="font-[family-name:var(--font-mono)] text-signal text-[11px] uppercase tracking-[0.12em]">
                Location
              </span>
              <span className="font-[family-name:var(--font-mono)] text-ghost text-[11px]">
                02
              </span>
            </div>
            <div>
              <h3
                className="font-[family-name:var(--font-display)] font-bold text-paper"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                Bangladesh
              </h3>
              <p className="text-muted mt-2">
                Available for remote work worldwide.
                <br />
                Open to relocation.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              <span className="font-[family-name:var(--font-mono)] text-signal text-[11px] uppercase tracking-[0.12em]">
                Online now
              </span>
            </div>
          </div>

          {/* Approach card — full width */}
          <div className="about-card md:col-span-12 bg-surface border border-ghost p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-signal/20 via-signal/40 to-signal/20" />
            <div className="flex items-start justify-between mb-8">
              <span className="font-[family-name:var(--font-mono)] text-signal text-[11px] uppercase tracking-[0.12em]">
                Approach
              </span>
              <span className="font-[family-name:var(--font-mono)] text-ghost text-[11px]">
                03
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Systems Thinking",
                  desc: "I see the full picture — from database schemas to deployment pipelines. Every decision is made with the whole system in mind.",
                },
                {
                  title: "Clean Architecture",
                  desc: "Code should be readable, maintainable, and scalable. I write software that future developers will thank me for.",
                },
                {
                  title: "Ship & Iterate",
                  desc: "Perfect is the enemy of shipped. I build fast, measure impact, and iterate based on real-world feedback.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-paper text-base mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACT 3 — Skills marquee */}
        <div className="skills-block">
          <div className="flex items-center justify-between mb-8">
            <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.12em]">
              Technologies & Tools
            </span>
            <span className="font-[family-name:var(--font-mono)] text-ghost text-[11px]">
              {allSkills.length} skills
            </span>
          </div>

          {/* Marquee row 1 — left */}
          <div className="overflow-hidden border-t border-ghost pt-6 pb-4">
            <div ref={marquee1Ref} className="flex whitespace-nowrap">
              {[...skillsRow1, ...skillsRow1].map((skill, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 font-[family-name:var(--font-mono)] text-paper text-sm md:text-base mr-8 md:mr-12 hover:text-signal transition-colors duration-200 cursor-default"
                >
                  {skill}
                  <span className="text-ghost ml-8 md:ml-12">/</span>
                </span>
              ))}
            </div>
          </div>

          {/* Marquee row 2 — right */}
          <div className="overflow-hidden border-t border-ghost pt-4 pb-6">
            <div ref={marquee2Ref} className="flex whitespace-nowrap">
              {[...skillsRow2, ...skillsRow2].map((skill, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 font-[family-name:var(--font-mono)] text-muted text-sm md:text-base mr-8 md:mr-12 hover:text-signal transition-colors duration-200 cursor-default"
                >
                  {skill}
                  <span className="text-ghost ml-8 md:ml-12">/</span>
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-ghost" />
        </div>
      </div>
    </section>
  );
});
