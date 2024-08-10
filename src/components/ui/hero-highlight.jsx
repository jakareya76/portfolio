"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center group h-screen w-full", // Full screen height and width
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />

      {/* Gradient overlay for fading effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[#07080e] z-10"
          style={{
            maskImage: `radial-gradient(circle, transparent 10%, rgba(0, 0, 0, 1) 100%)`,
            WebkitMaskImage: `radial-gradient(circle, transparent 70%, rgba(0, 0, 0, 1) 100%)`,
          }}
        ></div>
      </div>

      {/* Interactive dot pattern with mouse movement */}
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className={cn("relative z-30", className)}>{children}</div>
    </div>
  );
};
