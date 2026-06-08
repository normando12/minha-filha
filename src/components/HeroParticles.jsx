import { motion } from "framer-motion";
import { useMemo } from "react";

export default function HeroParticles() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: `s-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
      })),
    []
  );

  const bokeh = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: `b-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 20 + Math.random() * 80,
        delay: Math.random() * 6,
        color: i % 3 === 0 ? "rgba(255,77,157,0.08)" : i % 3 === 1 ? "rgba(192,132,252,0.07)" : "rgba(125,211,252,0.06)",
      })),
    []
  );

  const trails = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: `t-${i}`,
        left: `${10 + Math.random() * 80}%`,
        top: `${20 + Math.random() * 60}%`,
        width: 40 + Math.random() * 100,
        rotate: -30 + Math.random() * 60,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bokeh.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            background: b.color,
            filter: "blur(20px)",
          }}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 5 + Math.random() * 3, delay: b.delay, repeat: Infinity }}
        />
      ))}

      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 6px rgba(255,255,255,0.8), 0 0 12px rgba(192,132,252,0.4)",
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
        />
      ))}

      {trails.map((t) => (
        <motion.div
          key={t.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            left: t.left,
            top: t.top,
            width: t.width,
            rotate: t.rotate,
          }}
          animate={{ opacity: [0, 0.6, 0], x: [0, 20, 0] }}
          transition={{ duration: 4, delay: t.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
