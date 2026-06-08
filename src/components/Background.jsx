import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 15% 95%, rgba(251, 146, 60, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 5% 90%, rgba(255, 77, 157, 0.2) 0%, transparent 45%),
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 40, 180, 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 90% 20%, rgba(255, 45, 111, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(192, 132, 252, 0.12) 0%, transparent 45%),
            linear-gradient(180deg, #0a0412 0%, #150820 35%, #1a0a28 70%, #120818 100%)
          `,
        }}
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-neon-lavender/25 blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-neon-pink/20 blur-[90px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/15 blur-[80px]"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating heart outlines */}
      <div className="absolute left-[8%] top-[20%] text-3xl opacity-20 text-neon-pink">♡</div>
      <div className="absolute right-[12%] top-[15%] text-2xl opacity-15 text-neon-pink">♡</div>
      <div className="absolute left-[15%] bottom-[25%] text-4xl opacity-10 text-neon-pink">♡</div>
      <div className="absolute right-[8%] bottom-[30%] text-3xl opacity-15 text-neon-pink">♡</div>

      <div className="absolute left-[5%] top-[12%] text-3xl opacity-30">⭐</div>
      <div className="absolute right-[8%] top-[22%] text-2xl opacity-25">✨</div>
      <div className="absolute bottom-[35%] left-[3%] text-2xl opacity-20">💫</div>
      <div className="absolute bottom-[20%] right-[5%] text-2xl opacity-20">✨</div>
    </div>
  );
}
