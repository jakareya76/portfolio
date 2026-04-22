"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const Header = ({ activeSection }) => {
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const bg = bgRef.current;
    const border = borderRef.current;
    if (!header || !bg || !border) return;

    ScrollTrigger.create({
      start: "80px top",
      onEnter: () => {
        gsap.to(bg, { opacity: 1, duration: 0.3 });
        gsap.to(border, { opacity: 1, duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(bg, { opacity: 0, duration: 0.3 });
        gsap.to(border, { opacity: 0, duration: 0.3 });
      },
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 px-6 md:px-10 py-5"
    >
      {/* Background — appears on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-void/95 backdrop-blur-sm opacity-0"
      />
      {/* Border — appears on scroll */}
      <div
        ref={borderRef}
        className="absolute bottom-0 left-0 right-0 h-px bg-ghost opacity-0"
      />

      <nav className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Name */}
        <a
          href="#home"
          className="font-[family-name:var(--font-display)] font-medium text-paper text-base tracking-tight"
        >
          Jakareya Ahmed
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-6 md:gap-8">
          {["home", "projects", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              data-fill
              className={`relative overflow-hidden px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                activeSection === section
                  ? "text-ink bg-signal"
                  : "text-muted"
              }`}
            >
              <span className="relative z-10">{section}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
