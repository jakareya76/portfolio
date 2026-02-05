"use client";

import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import { toolboxItem, toolboxItemTwo } from "@/constants";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Combine and deduplicate skills
const allSkills = [
  ...toolboxItem,
  ...toolboxItemTwo,
].filter((skill, index, self) => 
  index === self.findIndex((s) => s.title.toLowerCase() === skill.title.toLowerCase())
);

export const AboutSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      }}
      id="about"
      className="py-24 lg:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef}>
          <SectionHeader
            eyeBrow="Get to know me"
            title="About Me"
            description="A passionate Full Stack Developer crafting digital experiences that make a difference."
          />
        </div>

        <div className="mt-16 space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Intro Card */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl border border-zinc-800/80 p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl group-hover:bg-violet-500/30 transition-all duration-700" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur opacity-40" />
                    <Image
                      src={smileMemoji}
                      alt="Jakareya"
                      width={72}
                      height={72}
                      className="relative rounded-2xl bg-zinc-800"
                    />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                      Jakareya Ahmed
                    </h3>
                    <p className="text-violet-400 font-medium mt-1">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed mt-6 text-[15px]">
                  I specialize in building modern web applications using the latest technologies. 
                  With a strong foundation in both frontend and backend development, I create 
                  seamless digital experiences that are both beautiful and performant.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    { label: "2+ Years Experience", color: "violet" },
                    { label: "15+ Projects", color: "cyan" },
                    { label: "Available for Work", color: "green" },
                  ].map((badge, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm font-medium bg-${badge.color}-500/10 text-${badge.color}-400 border border-${badge.color}-500/20`}
                      style={{
                        backgroundColor: badge.color === 'violet' ? 'rgba(139, 92, 246, 0.1)' : 
                                         badge.color === 'cyan' ? 'rgba(6, 182, 212, 0.1)' : 
                                         'rgba(34, 197, 94, 0.1)',
                        color: badge.color === 'violet' ? '#a78bfa' : 
                               badge.color === 'cyan' ? '#22d3ee' : 
                               '#4ade80',
                        borderColor: badge.color === 'violet' ? 'rgba(139, 92, 246, 0.2)' : 
                                     badge.color === 'cyan' ? 'rgba(6, 182, 212, 0.2)' : 
                                     'rgba(34, 197, 94, 0.2)',
                      }}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl border border-zinc-800/80 overflow-hidden relative group h-[280px] lg:h-auto"
            >
              <Image
                src={mapImage}
                alt="Location"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />

              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 size-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full animate-ping opacity-25" />
                  <div className="relative size-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <Image src={smileMemoji} alt="Me" width={32} height={32} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                  Based in
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mt-1">
                  Bangladesh 🇧🇩
                </h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Remote worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl border border-zinc-800/80 p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-fuchsia-400 text-xs font-bold uppercase tracking-widest">
                  My Arsenal
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mt-1">
                  Technologies & Tools
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill, index) => (
                <span
                  key={index}
                  className="group inline-flex items-center px-4 py-2.5 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 hover:border-violet-500/50 rounded-xl text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill.title}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Reading Card */}
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl border border-zinc-800/80 p-6 relative overflow-hidden group"
            >
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-rose-500/15 rounded-full blur-3xl group-hover:bg-rose-500/25 transition-all duration-700" />

              <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">
                Currently Reading
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mt-1">
                My Reads
              </h3>

              <div className="flex justify-center mt-6">
                <div className="relative group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500">
                  <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 to-violet-500/20 blur-xl rounded-lg" />
                  <Image
                    src={bookImage}
                    alt="Book"
                    width={100}
                    height={140}
                    className="relative drop-shadow-2xl rounded"
                  />
                </div>
              </div>
            </div>

            {/* Hobbies Card */}
            <div
              ref={(el) => (cardsRef.current[4] = el)}
              className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl border border-zinc-800/80 p-6"
            >
              <span className="text-fuchsia-400 text-xs font-bold uppercase tracking-widest">
                Beyond Code
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mt-1 mb-5">
                When I'm not coding
              </h3>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {[
                  { emoji: "🎮", label: "Gaming" },
                  { emoji: "📚", label: "Reading" },
                  { emoji: "📷", label: "Photo" },
                  { emoji: "✈️", label: "Travel" },
                  { emoji: "💪", label: "Fitness" },
                  { emoji: "🎵", label: "Music" },
                  { emoji: "🎬", label: "Movies" },
                  { emoji: "☕", label: "Coffee" },
                ].map((hobby, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-3 bg-zinc-800/40 hover:bg-zinc-800/80 border border-zinc-700/30 hover:border-fuchsia-500/40 rounded-xl transition-all duration-300 cursor-default group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {hobby.emoji}
                    </span>
                    <span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {hobby.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
