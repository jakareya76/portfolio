"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  "Full Stack",
  "Scalable",
  "Cloud Native",
  "Performant",
  "Secure",
  "Modern",
  "Efficient",
  "Accessible",
  "Responsive",
  "Full Stack",
  "Scalable",
  "Cloud Native",
  "Performant",
  "Secure",
  "Modern",
  "Efficient",
  "Accessible",
  "Responsive",
];

export const TapeSection = ({ ref }) => {
  const sectionRef = useRef(null);
  const tapeRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const tape = tapeRef.current;
    if (!section || !tape) return;

    const ctx = gsap.context(() => {
      gsap.set(tape, { y: 50, opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        onEnter: () => {
          gsap.to(tape, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Infinite scroll animation
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 overflow-hidden">
      <div
        ref={tapeRef}
        className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 -rotate-3 origin-center shadow-xl shadow-violet-600/20"
      >
        <div className="overflow-hidden py-4">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {words.map((word, index) => (
              <div
                key={index}
                className="flex-shrink-0 inline-flex items-center gap-3 px-6"
              >
                <span className="text-white uppercase font-bold text-sm tracking-wider">
                  {word}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/80"
                >
                  <path
                    d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
