"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = ["home", "projects", "about", "contact"];

const LOG_TEMPLATES = [
  () => `[INFO] section:projects hydrated in ${rand(60, 120)}ms`,
  () => `[INFO] gsap ticker running @ ${rand(58, 61)}fps`,
  () => `[WARN] WebGL canvas resize — ${rand(800, 1920)}x${rand(600, 1080)}`,
  () => `[INFO] lenis scroll velocity ${(Math.random() * 3).toFixed(2)} u/ms`,
  () => `[INFO] ScrollTrigger refresh OK (${rand(8, 14)} triggers)`,
  () => `[DEBUG] cursor pos (${rand(0, 1920)}, ${rand(0, 1080)})`,
  () => `[INFO] cache hit · assets/skills · ${rand(1, 9)}ms`,
  () => `[INFO] route / · 200 · ${rand(18, 44)}ms`,
  () => `[DEBUG] intersection observer fired for section:about`,
  () => `[INFO] memory ${rand(38, 52)}MB · heap ${rand(12, 24)}MB`,
];

function rand(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function useTicker(intervalMs, fn) {
  useEffect(() => {
    const id = setInterval(fn, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, fn]);
}

function fmtUptime(ms) {
  const s = Math.floor(ms / 1000);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export default function SystemBar({ activeSection }) {
  const mountedAt = useRef(Date.now());
  const [uptime, setUptime] = useState("00:00:00");
  const [mem, setMem] = useState(42);
  const [latency, setLatency] = useState(24);
  const [expanded, setExpanded] = useState(false);
  const [logs, setLogs] = useState([]);
  const logIdRef = useRef(0);

  // Uptime tick
  useEffect(() => {
    const id = setInterval(() => {
      setUptime(fmtUptime(Date.now() - mountedAt.current));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Subtle telemetry jitter
  useEffect(() => {
    const id = setInterval(() => {
      setMem((m) => {
        const delta = (Math.random() - 0.5) * 3;
        return Math.max(32, Math.min(78, +(m + delta).toFixed(1)));
      });
      setLatency(() => rand(18, 48));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  // Log stream
  useEffect(() => {
    const push = () => {
      const tpl = LOG_TEMPLATES[rand(0, LOG_TEMPLATES.length)];
      const id = ++logIdRef.current;
      const ts = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setLogs((prev) => {
        const next = [...prev, { id, ts, text: tpl() }];
        return next.length > 40 ? next.slice(-40) : next;
      });
    };
    push();
    const id = setInterval(push, 1800);
    return () => clearInterval(id);
  }, []);

  const scroller = useRef(null);
  useEffect(() => {
    if (expanded && scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [logs, expanded]);

  const routeLabel = `/${activeSection === "home" ? "" : activeSection || ""}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 pointer-events-none">
      {/* Expanded log panel */}
      <div
        className={`pointer-events-auto overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          expanded ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-void/95 backdrop-blur-sm border-t border-ghost">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
            <div className="flex items-center justify-between mb-1">
              <span className="font-[family-name:var(--font-mono)] text-ghost text-[10px] uppercase tracking-[0.12em]">
                // event stream
              </span>
              <span className="font-[family-name:var(--font-mono)] text-ghost text-[10px]">
                tailing · {logs.length}
              </span>
            </div>
            <div
              ref={scroller}
              className="h-[180px] overflow-y-auto font-[family-name:var(--font-mono)] text-[11px] leading-relaxed"
            >
              {logs.map((l) => {
                const tone = l.text.startsWith("[WARN]")
                  ? "text-signal"
                  : l.text.startsWith("[DEBUG]")
                  ? "text-ghost"
                  : "text-muted";
                return (
                  <div key={l.id} className={tone}>
                    <span className="text-ghost">{l.ts}</span>{" "}
                    <span>{l.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="pointer-events-auto bg-void/95 backdrop-blur-sm border-t border-ghost">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-8 flex items-center gap-4 md:gap-6 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.1em] overflow-hidden">
          {/* Route + status */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
            </span>
            <span className="text-signal">GET</span>
            <span className="text-paper normal-case tracking-normal">
              {routeLabel}
            </span>
            <span className="text-muted">·</span>
            <span className="text-signal">200</span>
          </div>

          <span className="text-ghost hidden md:inline">|</span>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="text-muted">lat</span>
            <span className="text-paper tabular-nums normal-case">
              {latency}ms
            </span>
          </div>

          <span className="text-ghost hidden lg:inline">|</span>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="text-muted">mem</span>
            <span className="text-paper tabular-nums normal-case">
              {mem.toFixed(1)}mb
            </span>
          </div>

          <span className="text-ghost hidden lg:inline">|</span>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="text-muted">region</span>
            <span className="text-paper normal-case">dac1</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-muted">uptime</span>
            <span className="text-paper tabular-nums normal-case">
              {uptime}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            data-fill
            className="relative overflow-hidden shrink-0 px-2 h-full flex items-center gap-1.5 border-l border-ghost -mr-4 md:-mr-6"
          >
            <span className="relative z-10 text-muted">logs</span>
            <span
              className="relative z-10 text-paper transition-transform duration-200"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▲
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
