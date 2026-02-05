"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const onMouseEnterLink = () => {
      setIsHovering(true);
      gsap.to(cursor, {
        scale: 2.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeaveLink = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add hover effect to all links and buttons
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 border-white transition-all duration-200 ${
            isHovering ? "bg-white/20" : ""
          }`}
        />
      </div>
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

