import { motion } from "framer-motion";

export default function HeartDivider() {
  return (
    <motion.div
      className="my-6 flex items-center justify-center gap-3"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-neon-pink/60 md:w-24" />
      <motion.span
        className="text-xl text-neon-pink drop-shadow-[0_0_10px_#ff4d9d]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ♥
      </motion.span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-neon-pink/60 md:w-24" />
    </motion.div>
  );
}
