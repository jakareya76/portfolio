"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (barRef.current) {
          barRef.current.style.width = `${self.progress * 100}%`;
        }
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-void z-[100]">
      <div
        ref={barRef}
        className="h-full bg-signal"
        style={{ width: 0, willChange: "width" }}
      />
    </div>
  );
}
