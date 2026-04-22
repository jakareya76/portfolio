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

export const ExperienceLog = () => {
  const wrapRef = useRef(null);
  const [open, setOpen] = useState(() => new Set([0])); // latest expanded by default

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.from(".log-line", {
        opacity: 0,
        x: -12,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: wrap, start: "top 80%" },
      });
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
  };

  return (
    <div
      ref={wrapRef}
      className="bg-surface border border-ghost relative overflow-hidden"
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-ghost px-5 md:px-6 py-3">
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
      <div className="px-5 md:px-6 pt-5 pb-3 font-[family-name:var(--font-mono)] text-[12px] md:text-[13px]">
        <span className="text-signal">jakareya@portfolio</span>
        <span className="text-muted"> $ </span>
        <span className="text-paper">git log --oneline --author=jakareya</span>
      </div>

      {/* Log entries */}
      <ul className="px-5 md:px-6 pb-6 font-[family-name:var(--font-mono)] text-[12px] md:text-[13px] leading-relaxed">
        {commits.map((c, i) => {
          const isOpen = open.has(i);
          return (
            <li key={c.sha} className="log-line">
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
                  {isOpen ? "[ collapse ]" : "[ expand ]"}
                </span>
              </button>

              {/* Expanded body */}
              <div
                className="overflow-hidden transition-[grid-template-rows] duration-300 grid"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="min-h-0">
                  <div className="pl-4 md:pl-8 pb-3 pt-1 border-l border-ghost ml-2 md:ml-4">
                    {c.body.map((line, j) => (
                      <p
                        key={j}
                        className="text-muted text-[12px] md:text-[13px] leading-relaxed"
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
        <li className="pt-2 flex items-center">
          <span className="text-signal">jakareya@portfolio</span>
          <span className="text-muted"> $ </span>
          <span
            className="inline-block w-[7px] h-[14px] bg-paper ml-1"
            style={{ animation: "blink 1s steps(2) infinite" }}
          />
        </li>
      </ul>
    </div>
  );
};
