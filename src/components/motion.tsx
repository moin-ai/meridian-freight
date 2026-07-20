"use client";

import { createElement, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveal targets when they enter the viewport using an IntersectionObserver.
 * GSAP performs the animation; the observer just triggers it. This is robust to
 * React Strict Mode double-mounting (a reverted gsap.set restores visibility, and
 * the observer fires immediately for elements already in view) so content can
 * never get stuck hidden.
 */
function useReveal(
  ref: React.RefObject<HTMLElement | null>,
  opts: {
    children?: boolean;
    y: number;
    duration: number;
    delay?: number;
    stagger?: number;
  },
) {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = opts.children
        ? gsap.utils.toArray<HTMLElement>(el.children)
        : [el];
      if (targets.length === 0) return;
      if (prefersReduced()) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(targets, { autoAlpha: 0, y: opts.y });

      const reveal = () =>
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: opts.duration,
          delay: opts.delay ?? 0,
          ease: "power3.out",
          stagger: opts.stagger ?? 0,
          overwrite: true,
        });

      const io = new IntersectionObserver(
        (entries, observer) => {
          if (entries.some((e) => e.isIntersecting)) {
            reveal();
            observer.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      io.observe(el);
      return () => io.disconnect();
    },
    { scope: ref },
  );
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 28,
  delay = 0,
  duration = 0.85,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { y, delay, duration });
  return createElement(Tag, { ref, className }, children);
}

export function Stagger({
  children,
  className,
  as: Tag = "div",
  y = 28,
  stagger = 0.1,
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  y?: number;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref, { children: true, y, stagger, duration });
  return createElement(Tag, { ref, className }, children);
}

/* Counter — animate a number up the first time it enters view. */
export function Counter({
  value,
  suffix = "",
  group = true,
  duration = 2,
  className,
}: {
  value: number;
  suffix?: string;
  group?: boolean;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) =>
    (group ? Math.round(n).toLocaleString("en-US") : String(Math.round(n))) +
    suffix;
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReduced()) {
        el.textContent = format(value);
        return;
      }
      const obj = { v: 0 };
      const io = new IntersectionObserver(
        (entries, observer) => {
          if (entries.some((e) => e.isIntersecting)) {
            gsap.to(obj, {
              v: value,
              duration,
              ease: "power2.out",
              onUpdate: () => {
                if (ref.current) ref.current.textContent = format(obj.v);
              },
            });
            observer.disconnect();
          }
        },
        { threshold: 0.5 },
      );
      io.observe(el);
      return () => io.disconnect();
    },
    { scope: ref },
  );
  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
}

/* Parallax — gentle vertical drift tied to scroll (never hides content). */
export function Parallax({
  children,
  className,
  speed = 12,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReduced() || !ref.current) return;
      gsap.to(ref.current, {
        yPercent: -speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref },
  );
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
