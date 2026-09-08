"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const HOVER_SELECTOR = '[data-cursor="case-study"]';
const LERP = 0.18;

export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // A route change swaps the DOM under the pointer without ever firing a
  // mouseout on the card that triggered navigation, so the expanded state
  // would otherwise stay stuck. Collapse it back on every navigation.
  useEffect(() => {
    shapeRef.current?.classList.remove("is-expanded");
  }, [pathname]);

  useEffect(() => {
    const isDesktopPointer =
      window.matchMedia("(pointer: fine)").matches && window.matchMedia("(hover: hover)").matches;
    if (!isDesktopPointer) return;

    const wrap = wrapRef.current;
    const shape = shapeRef.current;
    if (!wrap || !shape) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = reduceMotionQuery.matches;

    const root = document.documentElement;
    root.classList.add("cc-active");
    root.classList.toggle("cc-reduced-motion", reduceMotion);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let renderX = mouseX;
    let renderY = mouseY;
    let rafId = 0;
    let hasMoved = false;

    const setPosition = (x: number, y: number) => {
      wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        renderX = mouseX;
        renderY = mouseY;
        setPosition(renderX, renderY);
      }
      if (reduceMotion) {
        renderX = mouseX;
        renderY = mouseY;
        setPosition(renderX, renderY);
      }
    };

    const loop = () => {
      if (!reduceMotion) {
        renderX += (mouseX - renderX) * LERP;
        renderY += (mouseY - renderY) * LERP;
        setPosition(renderX, renderY);
      }
      rafId = requestAnimationFrame(loop);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) {
        shape.classList.add("is-expanded");
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const related = e.relatedTarget as Element | null;
      const leavingCard = target?.closest(HOVER_SELECTOR);
      const enteringCard = related?.closest?.(HOVER_SELECTOR);
      if (leavingCard && !enteringCard) {
        shape.classList.remove("is-expanded");
      }
    };

    const handleReduceMotionChange = (e: MediaQueryListEvent) => {
      reduceMotion = e.matches;
      root.classList.toggle("cc-reduced-motion", reduceMotion);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    reduceMotionQuery.addEventListener("change", handleReduceMotionChange);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      reduceMotionQuery.removeEventListener("change", handleReduceMotionChange);
      cancelAnimationFrame(rafId);
      root.classList.remove("cc-active", "cc-reduced-motion");
    };
  }, []);

  return (
    <div ref={wrapRef} className="cc-cursor" aria-hidden="true">
      <div ref={shapeRef} className="cc-shape">
        <span className="cc-content">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span>View case study</span>
        </span>
      </div>
    </div>
  );
}
