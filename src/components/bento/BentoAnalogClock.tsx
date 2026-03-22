import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BentoAnalogClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = now.getSeconds();
  const m = now.getMinutes() + s / 60;
  const h = (now.getHours() % 12) + m / 60;

  const hDeg = h * 30;
  const mDeg = m * 6;
  const sDeg = s * 6;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 flex justify-center py-2 md:py-4"
    >
      <div
        data-cursor-hover
        className="relative h-40 w-40 rounded-full border-4 border-border bg-card/95 shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.12)] backdrop-blur-sm md:h-48 md:w-48"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[42%] w-px origin-bottom bg-foreground/20"
            style={{ transform: `translate(-50%, -100%) rotate(${i * 30}deg)` }}
          />
        ))}
        <div
          className="absolute left-1/2 top-1/2 h-[26%] w-1 origin-bottom rounded-full bg-foreground"
          style={{ transform: `translate(-50%, -100%) rotate(${hDeg}deg)` }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[36%] w-0.5 origin-bottom rounded-full bg-primary"
          style={{ transform: `translate(-50%, -100%) rotate(${mDeg}deg)` }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[38%] w-px origin-bottom bg-foreground/60"
          style={{ transform: `translate(-50%, -100%) rotate(${sDeg}deg)` }}
        />
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow" />
      </div>
    </motion.div>
  );
}
