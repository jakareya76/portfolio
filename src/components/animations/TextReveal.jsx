"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  y = 100,
  trigger = true,
}) => {
  const textRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const wrapper = wrapperRef.current;

    if (!element || !wrapper) return;

    const ctx = gsap.context(() => {
      if (trigger) {
        gsap.fromTo(
          element,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        gsap.fromTo(
          element,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: "power4.out",
          }
        );
      }
    }, wrapper);

    return () => ctx.revert();
  }, [delay, duration, y, trigger]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <div ref={textRef}>{children}</div>
    </div>
  );
};

export const CharacterReveal = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  trigger = true,
}) => {
  const containerRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const chars = charsRef.current.filter(Boolean);

      if (trigger) {
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            delay,
            stagger,
            ease: "power4.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            delay,
            stagger,
            ease: "power4.out",
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [text, delay, stagger, trigger]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: 1000 }}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (charsRef.current[index] = el)}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export const WordReveal = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  trigger = true,
}) => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const words = wordsRef.current.filter(Boolean);

      if (trigger) {
        gsap.fromTo(
          words,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay,
            stagger,
            ease: "power4.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        gsap.fromTo(
          words,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay,
            stagger,
            ease: "power4.out",
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [text, delay, stagger, trigger]);

  return (
    <div ref={containerRef} className={className}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            ref={(el) => (wordsRef.current[index] = el)}
            className="inline-block"
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

