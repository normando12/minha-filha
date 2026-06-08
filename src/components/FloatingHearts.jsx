import { motion } from "framer-motion";
import { useMemo } from "react";

const CHARS = ["♥", "♡", "❤", "💕", "💗", "✨", "⭐"];

export default function FloatingHearts() {
  const items = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        char: CHARS[i % CHARS.length],
        left: `${Math.random() * 100}%`,
        size: 0.4 + Math.random() * 1.4,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 14,
        opacity: 0.1 + Math.random() * 0.45,
        drift: -30 + Math.random() * 60,
      })),
    []
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {items.map((h) => (
        <motion.span
          key={h.id}
          className="absolute will-change-transform text-neon-pink"
          style={{
            left: h.left,
            bottom: 0,
            fontSize: `${h.size}rem`,
            opacity: h.opacity,
            textShadow: "0 0 14px rgba(255, 77, 157, 0.6)",
          }}
          initial={{ y: "105vh", x: 0, rotate: 0 }}
          animate={{ y: "-120vh", x: h.drift, rotate: 360 }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
        >
          {h.char}
        </motion.span>
      ))}
    </motion.div>
  );
}
