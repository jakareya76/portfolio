"use client";

import { forwardRef, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/jakareya76" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jakareya-ahmed" },
  { name: "Twitter", url: "https://twitter.com" },
];

export const ContactSection = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
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
      id="contact"
      className="py-24 lg:py-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="border-t border-ghost pt-4 mb-20 contact-reveal">
          <span className="font-[family-name:var(--font-mono)] text-muted text-[11px] uppercase tracking-[0.12em]">
            004 / Let's Work
          </span>
        </div>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left — CTA */}
          <div>
            <h2
              className="font-[family-name:var(--font-display)] font-bold text-paper leading-none contact-reveal"
              style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
            >
              Start a
              <br />
              <span className="text-signal">project</span>
            </h2>

            {/* Email link */}
            <a
              href="mailto:jakareya1306@gmail.com"
              data-fill
              className="relative overflow-hidden inline-block mt-10 contact-reveal px-4 py-3 -mx-4"
            >
              <span className="relative z-10 font-[family-name:var(--font-display)] text-paper text-lg md:text-xl">
                jakareya1306@gmail.com
              </span>
            </a>

            <p className="font-[family-name:var(--font-mono)] text-muted text-xs mt-4 contact-reveal">
              Or{" "}
              <a
                href="/jakareya-cv.pdf"
                download
                data-fill
                className="relative overflow-hidden text-paper px-1 py-0.5"
              >
                <span className="relative z-10 underline underline-offset-4">download my CV</span>
              </a>
            </p>
          </div>

          {/* Right — Social + location */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fill
                  className="relative overflow-hidden flex items-center justify-between py-3 px-4 -mx-4 border-b border-ghost contact-reveal"
                >
                  <span className="relative z-10 font-[family-name:var(--font-mono)] text-muted text-sm">
                    {social.name}
                  </span>
                  <span className="relative z-10 text-muted">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 contact-reveal">
              <p className="font-[family-name:var(--font-mono)] text-ghost text-xs">
                Bangladesh — Remote
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-ghost mt-24 pt-6 flex items-center justify-between contact-reveal">
          <span className="font-[family-name:var(--font-mono)] text-ghost text-[10px]">
            &copy; {new Date().getFullYear()} Jakareya Ahmed
          </span>
          <a
            href="#home"
            data-fill
            className="relative overflow-hidden font-[family-name:var(--font-mono)] text-ghost text-[10px] px-3 py-1.5"
          >
            <span className="relative z-10">Back to top ↑</span>
          </a>
        </div>
      </div>
    </section>
  );
});
