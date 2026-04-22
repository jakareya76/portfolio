"use client";

import { forwardRef, useEffect, useRef } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/constants";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export const ProjectsSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Only horizontal scroll on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const totalScroll = track.scrollWidth - window.innerWidth;

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(track, {
          x: () => -totalScroll,
          ease: "none",
        }),
      });

      return () => st.kill();
    });

    // Fade in label
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
      className="relative z-10 md:h-screen md:overflow-hidden"
    >
      {/* Fixed label */}
      <div
        ref={labelRef}
        className="md:absolute md:top-10 md:left-10 px-6 pt-20 md:pt-0 md:px-0 z-20"
      >
        <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.12em]">
          002 / Selected Work
        </span>
      </div>

      {/* Track — horizontal on desktop, vertical on mobile */}
      <div
        ref={trackRef}
        className="flex flex-col md:flex-row md:items-center md:h-full gap-8 md:gap-0 px-6 md:px-0 py-10 md:py-0"
        style={{ willChange: "transform" }}
      >
        {/* Left spacer for desktop label */}
        <div className="hidden md:block flex-shrink-0 w-[10vw]" />

        {portfolioProjects.map((project, i) => (
          <div
            key={i}
            className="flex-shrink-0 md:w-[85vw] md:h-[80vh] md:mr-[5vw] bg-surface relative group"
          >
            {/* Yellow left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal" />

            <div className="flex flex-col md:flex-row h-full">
              {/* Info column */}
              <div className="md:w-[35%] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.12em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-[family-name:var(--font-display)] font-bold text-paper mt-4 leading-tight"
                    style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-muted text-xs mt-2">
                    {project.company} — {project.year}
                  </p>

                  <div className="mt-6 space-y-2">
                    {project.results.map((result, idx) => (
                      <p key={idx} className="text-muted text-sm">
                        {result.title}
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fill
                  className="relative overflow-hidden inline-flex items-center gap-2 text-paper mt-8 font-[family-name:var(--font-display)] text-sm px-4 py-2 -mx-4"
                >
                  <span className="relative z-10">View Project</span>
                  <span className="relative z-10">↗</span>
                </a>
              </div>

              {/* Image column */}
              <div
                className="md:w-[65%] relative aspect-[4/3] md:aspect-auto overflow-hidden"
                data-cursor-view
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-void/20 group-hover:bg-void/10 transition-colors duration-500" />
              </div>
            </div>
          </div>
        ))}

        {/* Right spacer */}
        <div className="hidden md:block flex-shrink-0 w-[10vw]" />
      </div>
    </section>
  );
});
