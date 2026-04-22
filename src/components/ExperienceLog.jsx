"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const commits = [
  {
    sha: "a4f9c2b",
    date: "Dec 2025 → now",
    type: "feat",
    scope: "intrepide",
    subject: "Full Stack Developer — scaling production systems",
    body: [
      "React + Next.js frontends, Node.js services behind them.",
      "Perf tuning, incident triage, keeping prod from catching fire.",
      "Atlanta, GA · remote from Dhaka.",
    ],
  },
  {
    sha: "7e1d4f0",
    date: "May 2025 – Nov 2025",
    type: "feat",
    scope: "softvence",
    subject: "Frontend Developer — shipping UI at agency speed",
    body: [
      "Client-facing interfaces across multiple projects.",
      "Tight iteration cycles, design-system contributions.",
    ],
  },
  {
    sha: "b03ae81",
    date: "Oct 2024 – Feb 2025",
    type: "feat",
    scope: "naptech",
    subject: "Frontend Web Developer — first professional role",
    body: [
      "Production React apps with real users.",
      "Dhaka, Bangladesh.",
    ],
  },
  {
    sha: "init",
    date: "earlier",
    type: "chore",
    scope: "career",
    subject: "self-taught full-stack dev — from political science to code",
    body: [
      "Narayanganj University College — Political Science & Government.",
      "Switched tracks, committed hard to shipping real software.",
    ],
  },
];

const scopeColor = {
  intrepide: "text-signal",
  softvence: "text-paper",
  naptech: "text-paper",
  career: "text-muted",
};

const TYPED_COMMAND = "git log --oneline --author=jakareya";

export const ExperienceLog = () => {
  const wrapRef = useRef(null);
  const cmdRef = useRef(null);
  const [open, setOpen] = useState(() => new Set([0])); // latest expanded by default

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Pre-hide targets immediately so they can't flash
    gsap.set(wrap.querySelectorAll(".log-line"), { autoAlpha: 0, x: -16 });
    gsap.set(wrap.querySelectorAll(".log-chrome"), { autoAlpha: 0, y: 8 });
    if (cmdRef.current) cmdRef.current.textContent = "";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(".log-chrome", {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power3.out",
      });

      // Type out the command
      tl.add(() => {
        if (!cmdRef.current) return;
        const target = cmdRef.current;
        const text = TYPED_COMMAND;
        let i = 0;
        target.textContent = "";
        const iv = setInterval(() => {
          if (i >= text.length) {
            clearInterval(iv);
            return;
          }
          target.textContent += text[i];
          i += 1;
        }, 28);
      }, ">-0.1");

      // Reveal log lines after command finishes
      tl.to(
        ".log-line",
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.09,
          ease: "power3.out",
        },
        ">+0.75"
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    // Let GSAP ScrollTrigger know layout changed
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <div
      ref={wrapRef}
      className="bg-surface border border-ghost relative overflow-hidden"
    >
      {/* Terminal header */}
      <div className="log-chrome flex items-center justify-between border-b border-ghost px-5 md:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ghost" />
            <span className="w-2.5 h-2.5 rounded-full bg-ghost" />
            <span className="w-2.5 h-2.5 rounded-full bg-ghost" />
          </div>
          <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.12em] ml-2 hidden sm:inline">
            ~/jakareya/experience
          </span>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-ghost text-[10px]">
          04
        </span>
      </div>

      {/* Command prompt */}
      <div className="log-chrome px-5 md:px-6 pt-5 pb-3 font-[family-name:var(--font-mono)] text-[12px] md:text-[13px]">
        <span className="text-signal">jakareya@portfolio</span>
        <span className="text-muted"> $ </span>
        <span ref={cmdRef} className="text-paper" />
        <span
          className="inline-block w-[7px] h-[12px] bg-paper ml-1 align-[-1px]"
          style={{ animation: "blink 1.1s steps(1, end) infinite" }}
        />
      </div>

      {/* Log entries */}
      <ul className="px-5 md:px-6 pb-6 font-[family-name:var(--font-mono)] text-[12px] md:text-[13px] leading-relaxed">
        {commits.map((c, i) => {
          const isOpen = open.has(i);
          return (
            <li key={c.sha} className="log-line border-l-2 border-transparent hover:border-signal/40 transition-colors duration-200 pl-2 -ml-2">
              <button
                type="button"
                onClick={() => toggle(i)}
                data-fill
                className="relative overflow-hidden w-full text-left py-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 group"
              >
                <span className="relative z-10 text-signal">{c.sha}</span>
                <span className="relative z-10 text-muted">
                  ({c.date})
                </span>
                <span className="relative z-10 text-paper">
                  <span className={scopeColor[c.scope] || "text-paper"}>
                    {c.type}
                  </span>
                  <span className="text-muted">({c.scope})</span>
                  <span className="text-muted">:</span>{" "}
                  <span className="text-paper">{c.subject}</span>
                </span>
                <span className="relative z-10 ml-auto text-ghost text-[10px] group-hover:text-signal transition-colors">
                  {isOpen ? "[ −collapse ]" : "[ +expand ]"}
                </span>
              </button>

              {/* Expanded body */}
              <div
                className="overflow-hidden transition-[grid-template-rows] duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)] grid"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
                aria-hidden={!isOpen}
              >
                <div className="min-h-0">
                  <div className="pl-4 md:pl-8 pb-3 pt-1 border-l border-ghost ml-2 md:ml-4">
                    {c.body.map((line, j) => (
                      <p
                        key={j}
                        className="text-muted text-[12px] md:text-[13px] leading-relaxed"
                        style={{
                          transform: isOpen ? "translateX(0)" : "translateX(-6px)",
                          opacity: isOpen ? 1 : 0,
                          transition: `opacity 350ms ${120 + j * 60}ms, transform 350ms ${120 + j * 60}ms`,
                        }}
                      >
                        <span className="text-ghost">│ </span>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}

        {/* Trailing cursor */}
        <li className="log-line pt-2 flex items-center">
          <span className="text-signal">jakareya@portfolio</span>
          <span className="text-muted"> $ </span>
          <span
            className="inline-block w-[7px] h-[14px] bg-paper ml-1"
            style={{ animation: "blink 1.1s steps(1, end) infinite" }}
          />
        </li>
      </ul>
    </div>
  );
};
