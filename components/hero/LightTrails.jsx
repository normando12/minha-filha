"use client";

import { motion } from "framer-motion";

export default function LightTrails() {
  const trails = [
    { d: "M680,320 Q720,280 760,300 T820,260", delay: 0, opacity: 0.5 },
    { d: "M700,360 Q750,330 790,350", delay: 1.2, opacity: 0.35 },
    { d: "M60,180 Q100,140 140,160 T200,130", delay: 0.6, opacity: 0.3 },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[18] h-full w-full"
      viewBox="0 0 1000 450"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,77,157,0)" />
          <stop offset="50%" stopColor="rgba(255,150,200,0.8)" />
          <stop offset="100%" stopColor="rgba(255,77,157,0)" />
        </linearGradient>
        <filter id="trailGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {trails.map((t, i) => (
        <motion.path
          key={i}
          d={t.d}
          fill="none"
          stroke="url(#trailGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#trailGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, t.opacity, 0],
          }}
          transition={{
            duration: 5,
            delay: t.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Coração feito de trilha de luz — canto inferior direito */}
      <motion.path
        d="M880,380 C880,380 840,340 840,310 C840,285 858,270 875,270 C888,270 898,285 900,300 C902,285 912,270 925,270 C942,270 960,285 960,310 C960,340 920,380 900,395 C890,388 880,380 880,380Z"
        fill="none"
        stroke="rgba(255,120,180,0.6)"
        strokeWidth="1.2"
        filter="url(#trailGlow)"
        animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ transformOrigin: "900px 340px" }}
      />
    </svg>
  );
}
