"use client";

import { motion, useTransform } from "framer-motion";
import { useEffect, useId, useState } from "react";

function ButterflySvg({ size = 48, wingFlap = true }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `bfGrad-${uid}`;
  const glowId = `bfGlow-${uid}`;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="50%" stopColor="#ff6eb4" />
          <stop offset="100%" stopColor="#ff4d9d" />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        <ellipse cx="32" cy="38" rx="4" ry="14" fill="#c084fc" />
        <motion.g
          style={{ transformOrigin: "32px 28px" }}
          animate={wingFlap ? { scaleX: [1, 0.45, 1] } : {}}
          transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="22" cy="28" rx="16" ry="20" fill={`url(#${gradId})`} opacity="0.8" />
        </motion.g>
        <motion.g
          style={{ transformOrigin: "32px 28px" }}
          animate={wingFlap ? { scaleX: [1, 0.45, 1] } : {}}
          transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut", delay: 0.11 }}
        >
          <ellipse cx="42" cy="28" rx="16" ry="20" fill={`url(#${gradId})`} opacity="0.8" />
        </motion.g>
      </g>
    </svg>
  );
}

function SparkleTrail({ size }) {
  const dots = [0, 1, 2, 3];
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
      {dots.map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#ffb3e0]"
          style={{
            width: 3 + i * 0.5,
            height: 3 + i * 0.5,
            boxShadow: "0 0 6px rgba(255,120,200,0.9)",
            left: -(8 + i * 10),
            top: (i % 2 === 0 ? -4 : 4),
          }}
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.4, 1.2, 0.3],
            x: [0, -(12 + i * 6)],
          }}
          transition={{
            duration: 1.2,
            delay: i * 0.18,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

const FLIGHTS = [
  {
    left: "4%",
    top: "10%",
    size: 56,
    duration: 16,
    delay: 0,
    rotate: [-8, 12, -6, 10, -8],
    path: [
      [0, 0],
      [60, -45],
      [120, -20],
      [90, 35],
      [40, 55],
      [-10, 30],
      [0, 0],
    ],
  },
  {
    left: "78%",
    top: "12%",
    size: 44,
    duration: 13,
    delay: 1.5,
    rotate: [6, -10, 8, -6, 6],
    path: [
      [0, 0],
      [-80, 30],
      [-140, -15],
      [-90, -50],
      [-30, -25],
      [0, 0],
    ],
  },
  {
    left: "88%",
    top: "55%",
    size: 38,
    duration: 11,
    delay: 3,
    rotate: [-5, 8, -12, 5, -5],
    path: [
      [0, 0],
      [-50, -40],
      [-100, -10],
      [-70, 45],
      [-20, 20],
      [0, 0],
    ],
  },
  {
    left: "55%",
    top: "78%",
    size: 32,
    duration: 14,
    delay: 2,
    rotate: [4, -8, 6, -4, 4],
    path: [
      [0, 0],
      [40, -55],
      [-20, -80],
      [-60, -40],
      [-30, 10],
      [0, 0],
    ],
  },
  {
    left: "20%",
    top: "65%",
    size: 36,
    duration: 12,
    delay: 4.5,
    rotate: [-6, 10, -8, 6, -6],
    path: [
      [0, 0],
      [70, -30],
      [110, 20],
      [60, 50],
      [10, 25],
      [0, 0],
    ],
  },
  {
    left: "65%",
    top: "30%",
    size: 42,
    duration: 15,
    delay: 0.8,
    rotate: [8, -6, 10, -8, 8],
    path: [
      [0, 0],
      [-40, 50],
      [-90, 30],
      [-50, -35],
      [-10, -15],
      [0, 0],
    ],
  },
  {
    left: "92%",
    top: "82%",
    size: 28,
    duration: 10,
    delay: 5.5,
    rotate: [-4, 6, -4],
    path: [
      [0, 0],
      [-60, -50],
      [-30, -90],
      [20, -60],
      [0, 0],
    ],
  },
  {
    left: "8%",
    top: "42%",
    size: 30,
    duration: 13,
    delay: 6,
    rotate: [5, -8, 5],
    path: [
      [0, 0],
      [50, -25],
      [90, 10],
      [45, 40],
      [0, 0],
    ],
  },
];

function FlyingButterfly({ flight, parallaxX, parallaxY, reducedMotion }) {
  const px = useTransform(parallaxX, (v) => v * (0.6 + flight.size / 80));
  const py = useTransform(parallaxY, (v) => v * (0.6 + flight.size / 80));

  const pathX = flight.path.map((p) => p[0]);
  const pathY = flight.path.map((p) => p[1]);

  if (reducedMotion) {
    return (
      <div
        className="absolute opacity-50"
        style={{ left: flight.left, top: flight.top }}
        aria-hidden="true"
      >
        <ButterflySvg size={flight.size} wingFlap={false} />
      </div>
    );
  }

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{ left: flight.left, top: flight.top, x: px, y: py }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          x: pathX,
          y: pathY,
          rotate: flight.rotate,
          opacity: [0.35, 0.9, 0.7, 0.95, 0.4, 0.35],
        }}
        transition={{
          duration: flight.duration,
          delay: flight.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <SparkleTrail size={flight.size} />
          <ButterflySvg size={flight.size} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FlyingButterflies({ parallaxX, parallaxY }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);

    const onResize = () => {
      setVisible(window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 6 : 8);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[22] overflow-hidden" aria-hidden="true">
      {FLIGHTS.slice(0, visible).map((flight, i) => (
        <FlyingButterfly
          key={i}
          flight={flight}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}
