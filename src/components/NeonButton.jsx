import { motion } from "framer-motion";
import { DAUGHTER_NAME } from "../config/site";

export default function NeonButton() {
  return (
    <motion.div
      className="mt-10 flex justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
    >
      <motion.button
        type="button"
        className="group relative overflow-hidden rounded-full border-2 border-neon-lavender/80 bg-white/5 px-8 py-3.5 font-playful text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-magic backdrop-blur-md md:text-base"
        whileHover={{
          scale: 1.05,
          boxShadow:
            "0 0 40px rgba(192, 132, 252, 0.8), 0 0 80px rgba(125, 211, 252, 0.4)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>⭐</span>
          {DAUGHTER_NAME}, você ilumina meu mundo
          <span>⭐</span>
        </span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-lavender/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    </motion.div>
  );
}
