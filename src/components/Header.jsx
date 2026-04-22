"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const SECTIONS = ["home", "projects", "about", "contact"];

const Header = ({ activeSection }) => {
  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const borderRef = useRef(null);
  const pillRef = useRef(null);
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const quickX = useRef(null);
  const quickW = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const border = borderRef.current;
    if (!bg || !border) return;

    const trigger = ScrollTrigger.create({
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

    return () => trigger.kill();
  }, []);

  // Create quickTos once so pill motion is frame-synced and fluid
  useLayoutEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;
    quickX.current = gsap.quickTo(pill, "x", {
      duration: 0.45,
      ease: "expo.out",
    });
    quickW.current = gsap.quickTo(pill, "width", {
      duration: 0.45,
      ease: "expo.out",
    });
  }, []);

  // Move pill whenever activeSection changes, or when the nav resizes
  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    const movePill = () => {
      const target = linkRefs.current[activeSection];
      if (!target) return;
      const targetRect = target.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const x = targetRect.left - navRect.left;
      const w = targetRect.width;

      if (quickX.current && quickW.current) {
        // If pill is still at 0 (first paint), set instantly to avoid a slide in from the left
        const currentX = gsap.getProperty(pill, "x");
        if (currentX === 0 && gsap.getProperty(pill, "width") === 0) {
          gsap.set(pill, { x, width: w, autoAlpha: 1 });
          return;
        }
        quickX.current(x);
        quickW.current(w);
      }
    };

    movePill();

    const ro = new ResizeObserver(movePill);
    ro.observe(nav);
    window.addEventListener("resize", movePill);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", movePill);
    };
  }, [activeSection]);

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
        <div ref={navRef} className="relative flex items-center gap-1 md:gap-2">
          {/* Sliding pill */}
          <div
            ref={pillRef}
            aria-hidden
            className="absolute left-0 top-0 h-full bg-signal pointer-events-none"
            style={{ width: 0, transform: "translateX(0)", opacity: 0 }}
          />

          {SECTIONS.map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${section}`}
                ref={(el) => {
                  if (el) linkRefs.current[section] = el;
                }}
                className={`relative z-10 px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-muted hover:text-paper"
                }`}
              >
                {section}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
