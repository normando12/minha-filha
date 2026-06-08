import { motion } from "framer-motion";

export default function HeartFrame({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
      {/* Sunset glow behind */}
      <motion.div
        className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-orange-400/25 blur-[60px]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-neon-pink/20 blur-[40px]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Neon heart outline */}
      <motion.svg
        viewBox="0 0 400 420"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <defs>
          <filter id="heartGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M200 380 C200 380 30 240 30 140 C30 70 80 30 130 30 C165 30 185 55 200 85 C215 55 235 30 270 30 C320 30 370 70 370 140 C370 240 200 380 200 380Z"
          fill="none"
          stroke="#ff4d9d"
          strokeWidth="3"
          filter="url(#heartGlow)"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>

      <motion.div
        className="relative z-[5] overflow-hidden rounded-[40%_40%_45%_45%] p-1"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="overflow-hidden rounded-[38%_38%_43%_43%] shadow-neon-lg">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
