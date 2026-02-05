"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioProjects } from "@/constants";
import SectionHeader from "../shared/SectionHeader";
import { forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Animate section header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.querySelectorAll(".animate-item"),
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Animate project items
      gsap.fromTo(
        ".project-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".project-list",
            start: "top 85%",
          },
        }
      );

      // Animate preview
      gsap.fromTo(
        ".project-preview",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".project-preview",
            start: "top 85%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleProjectHover = (index) => {
    setActiveProject(index);
  };

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      id="projects"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef}>
          <SectionHeader
            eyeBrow="Selected Work"
            title="Featured Projects"
            description="A showcase of applications I've built from the ground up."
          />
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Project list */}
          <div className="project-list space-y-4">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`project-item group cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${
                  activeProject === index
                    ? "bg-zinc-900/80 border-violet-500/50 shadow-lg shadow-violet-500/10"
                    : "bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-900/50 hover:border-zinc-700"
                }`}
                onMouseEnter={() => handleProjectHover(index)}
                onClick={() => handleProjectHover(index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                          activeProject === index
                            ? "text-violet-400"
                            : "text-zinc-500"
                        }`}
                      >
                        {project.company}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs text-zinc-500">{project.year}</span>
                    </div>

                    <h3
                      className={`font-[family-name:var(--font-display)] text-xl font-bold transition-colors duration-300 ${
                        activeProject === index ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {activeProject === index && (
                      <div className="mt-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {project.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-zinc-400"
                          >
                            <div className="size-1 rounded-full bg-violet-400" />
                            <span>{result.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={`mt-1 transition-all duration-300 ${
                      activeProject === index
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                    }`}
                  >
                    <svg
                      className="size-6 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project preview */}
          <div className="project-preview lg:sticky lg:top-32 h-fit">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              {/* Browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2 z-10">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-zinc-800 rounded-md px-4 py-1 text-xs text-zinc-400 max-w-xs truncate">
                    {portfolioProjects[activeProject]?.link}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-full pt-10">
                {portfolioProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 pt-10 transition-all duration-500 ${
                      activeProject === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ))}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* CTA overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-1">
                    {portfolioProjects[activeProject]?.company}
                  </div>
                  <div className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                    {portfolioProjects[activeProject]?.title}
                  </div>
                </div>
                <a
                  href={portfolioProjects[activeProject]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-white text-zinc-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-colors duration-300"
                >
                  <span>Visit</span>
                  <svg
                    className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {portfolioProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeProject === index
                      ? "w-8 bg-gradient-to-r from-violet-500 to-cyan-500"
                      : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
