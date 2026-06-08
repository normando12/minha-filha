import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingButterflies() {
  const butterflies = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`,
        top: `${10 + Math.random() * 80}%`,
        size: 1 + Math.random() * 1.2,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
        drift: -20 + Math.random() * 40,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {butterflies.map((b) => (
        <motion.span
          key={b.id}
          className="absolute opacity-30"
          style={{
            left: b.left,
            top: b.top,
            fontSize: `${b.size}rem`,
            filter: "drop-shadow(0 0 8px rgba(192, 132, 252, 0.8))",
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, b.drift, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🦋
        </motion.span>
      ))}
    </div>
  );
}
