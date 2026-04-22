"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function BootSequence({ onComplete }) {
  const overlayRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("boot_done")) {
      onComplete?.();
      return;
    }

    setShow(true);
    sessionStorage.setItem("boot_done", "1");

    const counter = { value: 0 };
    const tl = gsap.timeline();

    // 1. Count 0 → 100
    tl.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.floor(counter.value);
        if (counterRef.current) {
          counterRef.current.textContent = String(v).padStart(3, "0");
        }
        if (barRef.current) {
          barRef.current.style.width = `${v}%`;
        }
      },
    });

    // 2. Right panel slides in
    tl.fromTo(
      rightRef.current,
      { xPercent: 100 },
      { xPercent: 0, duration: 0.5, ease: "expo.inOut" },
      "-=0.1"
    );

    // 3. Hold
    tl.to({}, { duration: 0.4 });

    // 4. Both panels slide up
    tl.to([leftRef.current, rightRef.current], {
      yPercent: -100,
      duration: 0.6,
      ease: "expo.inOut",
      onComplete: () => {
        setShow(false);
        onComplete?.();
      },
    });
  }, [onComplete]);

  if (!show) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] flex">
      {/* Left panel — counter */}
      <div
        ref={leftRef}
        className="w-[60%] bg-void flex flex-col justify-center px-8 sm:px-16 relative"
      >
        <div
          ref={counterRef}
          className="font-[family-name:var(--font-mono)] text-paper font-bold"
          style={{ fontSize: "clamp(80px, 15vw, 160px)", lineHeight: 1 }}
        >
          000
        </div>
        {/* Progress bar */}
        <div className="mt-8 h-px bg-ghost w-full max-w-md">
          <div ref={barRef} className="h-full bg-signal" style={{ width: 0 }} />
        </div>
      </div>

      {/* Right panel — name/role */}
      <div
        ref={rightRef}
        className="w-[40%] bg-signal flex flex-col justify-center px-8 sm:px-12"
        style={{ transform: "translateX(100%)" }}
      >
        <p className="font-[family-name:var(--font-mono)] text-ink/60 text-[11px] uppercase tracking-[0.12em] mb-4">
          Portfolio 2026
        </p>
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-ink leading-none"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Jakareya
          <br />
          Ahmed
        </h2>
        <p className="font-[family-name:var(--font-mono)] text-ink/70 text-sm mt-4">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
