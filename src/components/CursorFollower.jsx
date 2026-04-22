"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CursorFollower() {
  const squareRef = useRef(null);
  const crosshairXRef = useRef(null);
  const crosshairYRef = useRef(null);
  const quickSqX = useRef(null);
  const quickSqY = useRef(null);
  const quickChX = useRef(null);
  const quickChY = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 768) return;

    const square = squareRef.current;
    const chX = crosshairXRef.current;
    const chY = crosshairYRef.current;
    if (!square || !chX || !chY) return;

    square.style.display = "block";
    chX.style.display = "block";
    chY.style.display = "block";

    document.documentElement.classList.add("cursor-none-custom");

    quickSqX.current = gsap.quickTo(square, "x", { duration: 0.05, ease: "none" });
    quickSqY.current = gsap.quickTo(square, "y", { duration: 0.05, ease: "none" });
    quickChX.current = gsap.quickTo([chX, chY], "x", { duration: 0.2, ease: "power2" });
    quickChY.current = gsap.quickTo([chX, chY], "y", { duration: 0.2, ease: "power2" });

    const onMouseMove = (e) => {
      quickSqX.current(e.clientX);
      quickSqY.current(e.clientY);
      quickChX.current(e.clientX);
      quickChY.current(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(square, { scale: 0.6, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(square, { scale: 1, duration: 0.2 });
    };

    const onEnterInteractive = (e) => {
      const isImage = e.currentTarget.hasAttribute("data-cursor-view");
      if (isImage) {
        gsap.to(square, { width: 48, height: 20, duration: 0.2 });
        square.textContent = "VIEW";
        square.style.fontSize = "9px";
        square.style.fontFamily = "'Space Mono', monospace";
        square.style.display = "flex";
        square.style.alignItems = "center";
        square.style.justifyContent = "center";
        square.style.color = "#080808";
      } else {
        gsap.to(square, { width: 32, height: 8, duration: 0.2 });
      }
      gsap.to([chX, chY], { opacity: 0, duration: 0.15 });
    };

    const onLeaveInteractive = () => {
      gsap.to(square, { width: 8, height: 8, duration: 0.2 });
      square.textContent = "";
      square.style.fontSize = "";
      square.style.fontFamily = "";
      square.style.display = "block";
      square.style.color = "";
      gsap.to([chX, chY], { opacity: 0.4, duration: 0.15 });
    };

    // Hide/show cursor when CursorFill is active
    const onCursorHide = () => {
      gsap.to(square, { opacity: 0, scale: 0, duration: 0.2 });
      gsap.to([chX, chY], { opacity: 0, duration: 0.15 });
    };

    const onCursorShow = () => {
      gsap.to(square, { opacity: 1, scale: 1, duration: 0.2 });
      gsap.to([chX, chY], { opacity: 0.4, duration: 0.15 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("cursor-hide", onCursorHide);
    window.addEventListener("cursor-show", onCursorShow);

    // Track which elements we've bound so MutationObserver can re-bind
    // for dynamically added nodes without duplicating listeners.
    const bound = new WeakSet();
    const selector = "a, button, [data-cursor-hover], [data-cursor-view]";

    const bindAll = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (bound.has(el)) return;
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
        bound.add(el);
      });
    };

    bindAll();

    const observer = new MutationObserver(() => bindAll());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("cursor-none-custom");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("cursor-hide", onCursorHide);
      window.removeEventListener("cursor-show", onCursorShow);
      observer.disconnect();
      document.querySelectorAll(selector).forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Square */}
      <div
        ref={squareRef}
        className="fixed top-0 left-0 w-2 h-2 bg-signal pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ display: "none" }}
      />
      {/* Crosshair X */}
      <div
        ref={crosshairXRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ display: "none", width: "24px", height: "1px", background: "#EDB507" }}
      />
      {/* Crosshair Y */}
      <div
        ref={crosshairYRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ display: "none", width: "1px", height: "24px", background: "#EDB507" }}
      />
    </>
  );
}
