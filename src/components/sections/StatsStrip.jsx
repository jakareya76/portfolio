"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 16, suffix: "", label: "Technologies" },
  { value: 100, suffix: "%", label: "Remote Ready" },
];

export const StatsStrip = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        const counter = { value: 0 };
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              value: stat.value,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent =
                  String(Math.floor(counter.value)).padStart(2, "0") +
                  stat.suffix;
              },
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-signal py-8 md:py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div className="hidden md:block w-px h-16 bg-ink/20 mr-8 lg:mr-12" />
              )}
              <div className={i > 0 ? "md:ml-0" : ""}>
                <div
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="font-[family-name:var(--font-display)] font-bold text-ink"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                  00{stat.suffix}
                </div>
                <p className="font-[family-name:var(--font-mono)] text-ink/60 text-[11px] uppercase tracking-[0.1em] mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
