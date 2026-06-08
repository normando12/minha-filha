"use client";

import { motion, useTransform } from "framer-motion";

const HEARTS = [
  { left: "3%", top: "12%", size: "text-sm", delay: 0.2 },
  { left: "6%", top: "35%", size: "text-xs", delay: 0.7 },
  { left: "4%", top: "62%", size: "text-base", delay: 1.1 },
  { left: "92%", top: "18%", size: "text-sm", delay: 0.5 },
  { left: "88%", top: "45%", size: "text-xs", delay: 1.3 },
  { left: "90%", top: "70%", size: "text-sm", delay: 1.8 },
  { left: "72%", top: "8%", size: "text-xs", delay: 0.9 },
  { left: "55%", top: "85%", size: "text-xs", delay: 2.1 },
];

export default function FloatingDecorations({ parallaxX, parallaxY }) {
  const hx = useTransform(parallaxX, (v) => v * 0.8);
  const hy = useTransform(parallaxY, (v) => v * 0.8);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      {HEARTS.map((h, i) => (
        <motion.span
          key={i}
          className={`absolute ${h.size} text-[#ff4d9d] will-change-transform`}
          style={{
            left: h.left,
            top: h.top,
            textShadow:
              "0 0 10px rgba(255,77,157,1), 0 0 20px rgba(255,77,157,0.5), 0 0 35px rgba(255,45,111,0.25)",
            x: hx,
            y: hy,
          }}
          animate={{ opacity: [0.15, 0.85, 0.15], scale: [0.75, 1.3, 0.75] }}
          transition={{ duration: 3.2, delay: h.delay, repeat: Infinity }}
        >
          {i % 3 === 0 ? "♥" : "♡"}
        </motion.span>
      ))}
    </div>
  );
}
