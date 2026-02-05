"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const yMultiplier = direction === "up" ? -1 : 1;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: () => speed * 100 * yMultiplier,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export const FadeInOnScroll = ({
  children,
  className = "",
  delay = 0,
  y = 80,
  duration = 1,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, y, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export const ScaleInOnScroll = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export const StaggerChildren = ({
  children,
  className = "",
  stagger = 0.1,
  y = 60,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.children;

      gsap.fromTo(
        items,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [stagger, y]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

