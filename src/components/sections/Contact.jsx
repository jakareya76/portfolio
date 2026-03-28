"use client";

import grainImage from "@/assets/images/grain.jpg";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "../animations/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/jakareya76",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jakareya-ahmed",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export const ContactSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );
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
      id="contact"
      className="py-24 lg:py-32 relative"
    >
      <div className="container mx-auto px-4">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          {/* Label */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs font-semibold uppercase tracking-widest text-violet-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Available for work
            </span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's work{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                together
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto">
              I'm always excited to connect with fellow developers, potential
              clients, or anyone interested in creating something amazing.
            </p>
          </div>

          {/* Email CTA */}
          <div className="pt-4">
            <MagneticButton strength={0.3}>
              <a
                href="mailto:jakareya1306@gmail.com"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl shadow-violet-600/30 hover:shadow-violet-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Animated background */}
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>jakareya1306@gmail.com</span>
                </span>
              </a>
            </MagneticButton>

            <p className="text-zinc-500 text-sm mt-4">
              Or download my{" "}
              <a
                href="/jakareya-cv.pdf"
                download
                className="text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
              >
                resume/CV
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-800" />
            <span className="text-zinc-600 text-sm">or connect with me</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-800" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <MagneticButton key={index} strength={0.4}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center size-14 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:border-violet-500/50 hover:bg-zinc-800 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </span>
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-violet-600/10 via-fuchsia-600/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
});
