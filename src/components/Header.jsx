"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = ({ activeSection }) => {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const nav = navRef.current;

    if (!header || !nav) return;

    // Initial animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
      }
    );

    // Stagger nav items
    const navItems = nav.querySelectorAll("a");
    gsap.fromTo(
      navItems,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex justify-center items-center fixed inset-x-0 top-6 z-50"
    >
      <nav
        ref={navRef}
        className="flex gap-1 p-1.5 border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md rounded-full shadow-xl shadow-black/20"
      >
        {["home", "projects", "about", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === section
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {/* Active background */}
            {activeSection === section && (
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full -z-10" />
            )}
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
