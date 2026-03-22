import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor-hover], label[for], summary';

/**
 * Ring cursor that scales on interactive targets. Disabled for reduced-motion and coarse pointers.
 */
const CustomCursor = () => {
  const [active, setActive] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { stiffness: 420, damping: 32, mass: 0.35 });
  const y = useSpring(cursorY, { stiffness: 420, damping: 32, mass: 0.35 });
  const scale = useSpring(1, { stiffness: 520, damping: 28 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    if (reduce.matches || !fine.matches) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor-hide");

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const h = !!el?.closest(SELECTOR);
      scale.set(h ? 1.55 : 1);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("custom-cursor-hide");
    };
  }, [cursorX, cursorY, scale]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        scale,
      }}
    >
      <div className="h-4 w-4 rounded-full border-2 border-white bg-white/15 shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
    </motion.div>
  );
};

export default CustomCursor;
