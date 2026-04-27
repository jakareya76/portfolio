"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/constants";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const ProjectsSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const labelRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Desktop: horizontal pinned scroll with per-card reveal animations
    mm.add("(min-width: 768px)", () => {
      const totalScroll = track.scrollWidth - window.innerWidth;

      const scrollTween = gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
      });

      const pinned = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: scrollTween,
        onUpdate: (self) => {
          // Which card is "current" based on progress
          const idx = Math.min(
            portfolioProjects.length,
            Math.max(1, Math.floor(self.progress * portfolioProjects.length) + 1)
          );
          setCurrent(idx);
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });

      // Per-card entrance keyed to horizontal position
      const cardTriggers = portfolioProjects.map((_, i) => {
        const cardEl = section.querySelector(`.prj-card-${i}`);
        if (!cardEl) return null;

        const title = cardEl.querySelector(".prj-title");
        const meta = cardEl.querySelector(".prj-meta");
        const summary = cardEl.querySelector(".prj-summary");
        const chips = cardEl.querySelectorAll(".prj-chip");
        const results = cardEl.querySelectorAll(".prj-result");
        const cta = cardEl.querySelector(".prj-cta");
        const imageWrap = cardEl.querySelector(".prj-image");
        const bigNum = cardEl.querySelector(".prj-bignum");

        gsap.set([title, meta, summary, cta], { autoAlpha: 0, y: 28 });
        gsap.set(chips, { autoAlpha: 0, y: 10 });
        gsap.set(results, { autoAlpha: 0, x: -14 });
        gsap.set(imageWrap, { clipPath: "inset(0 0 100% 0)" });
        gsap.set(bigNum, { autoAlpha: 0, x: 24 });

        return ScrollTrigger.create({
          trigger: cardEl,
          containerAnimation: scrollTween,
          start: "left 85%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
            tl.to(imageWrap, {
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
              ease: "expo.out",
            });
            tl.to(
              bigNum,
              { autoAlpha: 1, x: 0, duration: 0.9 },
              "-=0.8"
            );
            tl.to(
              [meta],
              { autoAlpha: 1, y: 0, duration: 0.5 },
              "-=0.75"
            );
            tl.to(
              title,
              { autoAlpha: 1, y: 0, duration: 0.65 },
              "-=0.4"
            );
            tl.to(
              summary,
              { autoAlpha: 1, y: 0, duration: 0.5 },
              "-=0.35"
            );
            tl.to(
              chips,
              { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.05 },
              "-=0.3"
            );
            tl.to(
              results,
              { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.08 },
              "-=0.25"
            );
            tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2");
          },
        });
      });

      return () => {
        pinned.kill();
        cardTriggers.forEach((t) => t && t.kill());
      };
    });

    // Mobile: simple stacked reveal per card
    mm.add("(max-width: 767px)", () => {
      const cards = section.querySelectorAll(".prj-card");
      const triggers = [];
      cards.forEach((card) => {
        const parts = card.querySelectorAll(
          ".prj-title, .prj-meta, .prj-summary, .prj-chip, .prj-result, .prj-cta, .prj-image"
        );
        gsap.set(parts, { autoAlpha: 0, y: 24 });
        triggers.push(
          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(parts, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.06,
                ease: "power3.out",
              });
            },
          })
        );
      });
      return () => triggers.forEach((t) => t.kill());
    });

    // Label fade-in
    gsap.from(labelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 80%" },
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      id="projects"
      className="relative z-10 md:h-screen md:overflow-hidden bg-void"
    >
      {/* Fixed label + progress counter */}
      <div
        ref={labelRef}
        className="md:absolute md:top-10 md:left-10 md:right-10 px-6 pt-20 md:pt-0 md:px-0 z-20 flex items-center justify-between gap-6"
      >
        <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.12em]">
          002 / Selected Work
        </span>
        <div className="hidden md:flex items-center gap-4">
          <span
            ref={counterRef}
            className="font-[family-name:var(--font-mono)] text-paper text-[11px] tabular-nums tracking-[0.12em]"
          >
            {String(current).padStart(2, "0")} / {String(portfolioProjects.length).padStart(2, "0")}
          </span>
          <div className="w-24 h-px bg-ghost relative overflow-hidden">
            <div
              ref={progressRef}
              className="absolute inset-0 bg-signal origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>

      {/* Track — horizontal on desktop, vertical on mobile */}
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row md:items-center md:h-full gap-10 md:gap-0 px-6 md:px-0 py-10 md:py-0"
        style={{ willChange: "transform" }}
      >
        {/* Left spacer for desktop label */}
        <div className="hidden md:block flex-shrink-0 w-[10vw]" />

        {portfolioProjects.map((project, i) => (
          <article
            key={i}
            className={`prj-card prj-card-${i} flex-shrink-0 md:w-[85vw] md:h-[80vh] md:mr-[5vw] bg-surface relative group`}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Info column */}
              <div className="md:w-[38%] p-8 md:p-12 flex flex-col justify-between min-w-0">
                <div className="space-y-6">
                  {/* Meta row */}
                  <div className="prj-meta flex items-center justify-between">
                    <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.1em]">
                      {String(i + 1).padStart(2, "0")}
                      <span className="text-ghost"> · </span>
                      {project.company}
                      <span className="text-ghost"> · </span>
                      {project.year}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.08em]">
                      {project.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="prj-title font-[family-name:var(--font-display)] font-bold text-paper leading-[1.05]"
                    style={{ fontSize: "clamp(26px, 2.7vw, 42px)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="prj-summary text-muted text-sm md:text-[15px] leading-relaxed max-w-md">
                    {project.summary}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="prj-chip font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.06em] border border-ghost px-2 py-1 hover:border-paper/30 hover:text-paper transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Results list */}
                  <ul className="space-y-2 pt-2">
                    {project.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="prj-result flex items-start gap-3 text-muted text-sm"
                      >
                        <span className="text-signal mt-[0.35em] text-[10px]">
                          ▸
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="prj-cta mt-10 flex items-center gap-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-fill
                    className="relative overflow-hidden inline-flex items-center gap-2 text-paper font-[family-name:var(--font-display)] text-sm px-4 py-2.5 -mx-4 border border-ghost hover:border-paper/30 transition-colors duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Live site
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </span>
                  </a>
                  <span className="font-[family-name:var(--font-mono)] text-muted text-[10px]">
                    {new URL(project.link).hostname.replace(/^www\./, "")}
                  </span>
                </div>
              </div>

              {/* Image column */}
              <div className="md:w-[62%] relative aspect-[4/3] md:aspect-auto overflow-hidden border-l border-ghost/60">
                {/* Big background number */}
                <span
                  className="prj-bignum absolute bottom-4 right-4 md:bottom-8 md:right-10 font-[family-name:var(--font-display)] font-bold text-outline pointer-events-none select-none leading-none z-10"
                  style={{
                    fontSize: "clamp(120px, 22vw, 320px)",
                    mixBlendMode: "difference",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className="prj-image absolute inset-0"
                  data-cursor-view
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* Vignette / overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-void/10 to-void/30 group-hover:from-void/30 transition-colors duration-500" />
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Right spacer */}
        <div className="hidden md:block flex-shrink-0 w-[10vw]" />
      </div>
    </section>
  );
});
