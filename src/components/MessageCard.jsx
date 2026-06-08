import { motion } from "framer-motion";
import { DAUGHTER_NAME } from "../config/site";

const icons = [
  { symbol: "⭐", label: "Estrela" },
  { symbol: "💕", label: "Amor" },
  { symbol: "🌈", label: "Alegria" },
];

export default function MessageCard() {
  return (
    <motion.section
      className="relative mx-auto mt-10 max-w-xl px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.8 }}
    >
      <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 text-lg text-neon-lavender drop-shadow-[0_0_10px_#c084fc]">
        💗
      </span>

      <div className="relative overflow-hidden rounded-2xl border border-neon-lavender/40 bg-white/5 p-6 shadow-glass backdrop-blur-xl border-glow-magic md:p-8">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-lavender/10 via-transparent to-magic-800/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative flex gap-5 md:gap-6">
          <div className="flex flex-col gap-4 pt-1">
            {icons.map((icon, i) => (
              <motion.span
                key={icon.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-lavender/50 bg-neon-lavender/10 text-lg shadow-[0_0_15px_rgba(192,132,252,0.3)]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.15 }}
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(192, 132, 252, 0.6)" }}
              >
                {icon.symbol}
              </motion.span>
            ))}
          </div>

          <div className="flex-1 space-y-4 text-left font-sans text-sm leading-relaxed text-white/85 md:text-base md:leading-loose">
            <p>
              Cada dia ao seu lado é uma aventura cheia de risadas, abraços e momentos
              especiais. Você é a luz mais bonita da minha vida, {DAUGHTER_NAME}.
            </p>
            <p>
              Obrigado por ser tão doce, tão especial e por encher nossa casa de amor e
              alegria. Hoje e sempre:{" "}
              <strong className="font-medium text-neon-pink text-glow-pink">
                eu te amo, minha filha.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <motion.p
        className="mt-6 text-center font-script text-2xl text-neon-lavender/90 text-glow-magic md:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Com todo o meu coração ♥
      </motion.p>
    </motion.section>
  );
}
