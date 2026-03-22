import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

type UseExperienceSectionScrollResult = {
  sectionRef: RefObject<HTMLElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  /** 0 .. experiences.length - 1 */
  activeIndex: number;
  /** 0–1 scroll progress through the experience section */
  progress: number;
};

/**
 * Tracks which experience block is centered in the viewport and overall section scroll progress
 * for the progress bar + illustration swap.
 */
export function useExperienceSectionScroll(blockCount: number): UseExperienceSectionScrollResult {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const vh = window.innerHeight;
    const rect = section.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const sectionTop = rect.top + scrollTop;
    const sectionH = section.offsetHeight;
    const denom = Math.max(1, sectionH - vh * 0.65);
    const p = (scrollTop + vh * 0.35 - sectionTop) / denom;
    setProgress(Math.max(0, Math.min(1, p)));

    const blocks = container.querySelectorAll<HTMLElement>("[data-exp-block]");
    const focusY = vh * 0.42;
    let best = 0;
    let bestDist = Infinity;
    blocks.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const cy = r.top + r.height / 2;
      const d = Math.abs(cy - focusY);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    if (blockCount > 0) setActiveIndex(Math.min(best, blockCount - 1));
  }, [blockCount]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return { sectionRef, containerRef, activeIndex, progress };
}
