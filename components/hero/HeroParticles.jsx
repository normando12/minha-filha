"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useTransform } from "framer-motion";

function useParticleCount() {
  const [count, setCount] = useState(55);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(35);
      else if (window.innerWidth < 1024) setCount(55);
      else setCount(80);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function BokehOrb({ b, parallaxX, parallaxY }) {
  const x = useTransform(parallaxX, (v) => v * b.depth * 0.5);
  const y = useTransform(parallaxY, (v) => v * b.depth * 0.5);

  return (
    <motion.div
      className="absolute rounded-full will-change-transform"
      style={{
        left: b.left,
        top: b.top,
        width: b.size,
        height: b.size,
        background: b.color,
        filter: "blur(28px)",
        x,
        y,
      }}
      animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.15, 1] }}
      transition={{ duration: 5 + (b.id % 4), delay: b.delay, repeat: Infinity }}
    />
  );
}

function StarParticle({ s, parallaxX, parallaxY }) {
  const x = useTransform(parallaxX, (v) => v * s.depth);
  const y = useTransform(parallaxY, (v) => v * s.depth);

  if (s.sparkle) {
    return (
      <motion.svg
        width={s.size * 3}
        height={s.size * 3}
        viewBox="0 0 24 24"
        className="absolute will-change-transform"
        style={{ left: s.left, top: s.top, x, y }}
        animate={{ opacity: [0.2, 1, 0.2], rotate: [0, 90, 180] }}
        transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
        aria-hidden="true"
      >
        <path
          d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z"
          fill="rgba(255,240,180,0.9)"
          style={{ filter: "drop-shadow(0 0 4px rgba(255,220,100,0.9))" }}
        />
      </motion.svg>
    );
  }

  return (
    <motion.div
      className="absolute rounded-full bg-white will-change-transform"
      style={{
        left: s.left,
        top: s.top,
        width: s.size,
        height: s.size,
        boxShadow:
          "0 0 6px rgba(255,255,255,0.95), 0 0 14px rgba(192,132,252,0.5), 0 0 24px rgba(255,77,157,0.2)",
        x,
        y,
      }}
      animate={{ opacity: [0.1, 1, 0.1], scale: [0.6, 1.3, 0.6] }}
      transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
    />
  );
}

export default function HeroParticles({ parallaxX, parallaxY }) {
  const count = useParticleCount();

  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        depth: 0.3 + Math.random() * 0.7,
        sparkle: i % 9 === 0,
      })),
    [count]
  );

  const bokeh = useMemo(
    () =>
      Array.from({ length: Math.floor(count / 2.5) }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 40 + Math.random() * 100,
        delay: Math.random() * 6,
        color:
          i % 4 === 0
            ? "rgba(255,77,157,0.09)"
            : i % 4 === 1
              ? "rgba(192,132,252,0.08)"
              : i % 4 === 2
                ? "rgba(255,180,100,0.06)"
                : "rgba(125,211,252,0.05)",
        depth: 0.2 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bokeh.map((b) => (
        <BokehOrb key={b.id} b={b} parallaxX={parallaxX} parallaxY={parallaxY} />
      ))}
      {stars.map((s) => (
        <StarParticle key={s.id} s={s} parallaxX={parallaxX} parallaxY={parallaxY} />
      ))}
    </div>
  );
}
