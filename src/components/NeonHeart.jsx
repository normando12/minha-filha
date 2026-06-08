import { motion } from "framer-motion";

export default function NeonHeart({ children }) {
  return (
    <motion.div
      className="relative z-10 px-2 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
