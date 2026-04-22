"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

/*
  Adds a radial yellow fill that expands from the cursor entry point
  on any element with [data-fill]. On leave it collapses back to the
  exit point.

  Usage: add data-fill to any element. The element needs
  position:relative and overflow:hidden (applied via Tailwind).
  Text inside should have relative z-10 so it stays above the fill.
*/

export default function CursorFill() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fills = new Map(); // element → fill div

    const getFill = (el) => {
      if (fills.has(el)) return fills.get(el);
      const fill = document.createElement("div");
      fill.style.cssText = `
        position:absolute;
        width:0;height:0;
        border-radius:50%;
        background:#EDB507;
        pointer-events:none;
        transform:scale(0);
        transition:none;
        z-index:0;
      `;
      el.appendChild(fill);
      fills.set(el, fill);
      return fill;
    };

    const onEnter = (e) => {
      const el = e.currentTarget;
      const fill = getFill(el);
      const rect = el.getBoundingClientRect();

      // Position at cursor entry point
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Size needs to cover the whole element from any corner
      const maxDist = Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y)
      );
      const size = maxDist * 2.2;

      gsap.killTweensOf(fill);
      gsap.set(fill, {
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        scale: 0,
      });
      gsap.to(fill, {
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
      });

      // Flip text color + hide cursor indicator
      el.classList.add("fill-active");
      window.dispatchEvent(new CustomEvent("cursor-hide"));
    };

    const onLeave = (e) => {
      const el = e.currentTarget;
      const fill = fills.get(el);
      if (!fill) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDist = Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y)
      );
      const size = maxDist * 2.2;

      gsap.killTweensOf(fill);
      // Re-center on exit point and shrink
      gsap.set(fill, {
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      });
      gsap.to(fill, {
        scale: 0,
        duration: 0.35,
        ease: "power2.in",
      });

      el.classList.remove("fill-active");
      window.dispatchEvent(new CustomEvent("cursor-show"));
    };

    const bind = () => {
      document.querySelectorAll("[data-fill]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    // Initial bind + re-bind on DOM changes (for dynamic content)
    bind();
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.querySelectorAll("[data-fill]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      fills.forEach((fill) => fill.remove());
      fills.clear();
    };
  }, []);

  return null;
}
