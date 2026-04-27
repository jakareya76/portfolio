"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const GITHUB_USER = "jakareya76";

function useDhakaClock() {
  const [state, setState] = useState({ time: "--:--:--", date: "—" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const date = now.toLocaleDateString("en-US", {
        timeZone: "Asia/Dhaka",
        weekday: "short",
        day: "2-digit",
        month: "short",
      });
      setState({ time, date });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return state;
}

function useGithubLatest() {
  const fallback = {
    repo: "portfolio",
    message: "redesign: rebuild portfolio with GSAP & Three.js",
    sha: "f37acf2",
    when: "just now",
  };
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=10`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) return;
        const events = await res.json();
        const push = Array.isArray(events)
          ? events.find((e) => e.type === "PushEvent" && e.payload?.commits?.length)
          : null;
        if (!push || cancelled) return;
        const commit = push.payload.commits[push.payload.commits.length - 1];
        const created = new Date(push.created_at);
        const mins = Math.max(1, Math.round((Date.now() - created.getTime()) / 60000));
        const when =
          mins < 60
            ? `${mins}m ago`
            : mins < 1440
            ? `${Math.round(mins / 60)}h ago`
            : `${Math.round(mins / 1440)}d ago`;
        setData({
          repo: push.repo?.name?.split("/").pop() || "repo",
          message: (commit.message || "").split("\n")[0].slice(0, 72),
          sha: commit.sha?.slice(0, 7) || "———",
          when,
        });
      } catch {
        // keep fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}

const counters = [
  { value: 2, suffix: "+", label: "Years shipping" },
  { value: 15, suffix: "+", label: "Projects built" },
];

export const StatsStrip = () => {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);
  const { time, date } = useDhakaClock();
  const gh = useGithubLatest();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Tiles slide + fade on enter
      gsap.from(".bento-tile", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%" },
      });

      // Count up numbers
      counters.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        const obj = { value: 0 };
        ScrollTrigger.create({
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              value: stat.value,
              duration: 1.3,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent =
                  String(Math.floor(obj.value)).padStart(2, "0") + stat.suffix;
              },
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-ghost py-16 md:py-24 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.1em]">
            Signals
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-50 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.1em]">
              live
            </span>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {/* Tile 1 — Currently (wide) */}
          <div className="bento-tile col-span-2 md:col-span-7 border border-ghost p-6 md:p-8 flex flex-col justify-between min-h-[160px]">
            <div className="flex items-start justify-between">
              <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.1em]">
                Currently
              </span>
            </div>
            <div>
              <p
                className="font-[family-name:var(--font-display)] font-semibold text-paper leading-tight"
                style={{ fontSize: "clamp(20px, 2.4vw, 32px)" }}
              >
                Full Stack Developer
                <br />
                <span className="text-muted font-normal">@ Intrepide</span>
              </p>
              <p className="font-[family-name:var(--font-mono)] text-muted text-[11px] mt-3">
                Atlanta, GA — remote from Dhaka
              </p>
            </div>
          </div>

          {/* Tile 2 — Dhaka clock */}
          <div className="bento-tile col-span-2 md:col-span-5 border border-ghost p-6 md:p-8 flex flex-col justify-between min-h-[160px]">
            <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.1em]">
              DAC — UTC+6
            </span>
            <div>
              <p
                className="font-[family-name:var(--font-mono)] font-bold text-paper tabular-nums leading-none"
                style={{ fontSize: "clamp(32px, 4.5vw, 58px)" }}
              >
                {time}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-muted text-[11px] mt-2">
                {date}
              </p>
            </div>
          </div>

          {/* Tile 3 — Latest commit */}
          <div className="bento-tile col-span-2 md:col-span-7 border border-ghost p-6 md:p-8 flex flex-col justify-between min-h-[140px]">
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.1em]">
                Last push
              </span>
              <span className="font-[family-name:var(--font-mono)] text-muted text-[10px]">
                {gh.when}
              </span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-mono)] text-paper text-sm leading-snug">
                <span className="text-muted">{gh.sha}</span>{" "}
                <span className="break-words">{gh.message}</span>
              </p>
              <p className="font-[family-name:var(--font-mono)] text-muted text-[11px] mt-2">
                {GITHUB_USER}/{gh.repo}
              </p>
            </div>
          </div>

          {/* Tile 4 — Counters */}
          <div className="bento-tile col-span-2 md:col-span-5 border border-ghost p-6 md:p-8 flex items-center gap-8 md:gap-10 min-h-[140px]">
            {counters.map((c, i) => (
              <div key={i} className="flex-1">
                <p
                  ref={(el) => (counterRefs.current[i] = el)}
                  className="font-[family-name:var(--font-display)] font-bold text-paper leading-none tabular-nums"
                  style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}
                >
                  00{c.suffix}
                </p>
                <p className="font-[family-name:var(--font-mono)] text-muted text-[10px] uppercase tracking-[0.08em] mt-2">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
