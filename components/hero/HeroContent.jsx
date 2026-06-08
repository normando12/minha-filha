"use client";

import { motion } from "framer-motion";
import { DAUGHTER_NAME } from "@/config/site";

function Highlight({ children }) {
  return (
    <span className="font-[family-name:var(--font-great-vibes)] text-[1.2em] font-normal text-[#ff4d9d] text-glow-pink-intense">
      {children}
    </span>
  );
}

function GlowHeart({ className = "", size = "text-base" }) {
  return (
    <motion.span
      className={`inline-block text-[#ff4d9d] ${size} ${className}`}
      style={{
        textShadow:
          "0 0 12px rgba(255,77,157,1), 0 0 24px rgba(255,77,157,0.6), 0 0 40px rgba(255,45,111,0.3)",
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      ♥
    </motion.span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      className="relative z-30 flex flex-col items-center px-2 text-center lg:items-start lg:px-4 lg:text-left"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Corações decorativos ao redor do bloco de texto */}
      <GlowHeart className="absolute -left-1 top-[18%] hidden lg:block" size="text-sm" />
      <GlowHeart className="absolute -right-2 top-[32%] hidden lg:block" size="text-xs" />
      <GlowHeart className="absolute right-4 top-[58%] hidden xl:block" size="text-sm" />

      <motion.p
        variants={fadeUp}
        className="mb-4 text-[0.6rem] font-[family-name:var(--font-montserrat)] font-medium uppercase tracking-[0.38em] text-white/85 sm:text-[0.68rem] md:mb-5 md:tracking-[0.48em]"
      >
        <span className="text-[#f5c842]">⭐</span>
        {" "}Para a princesa da minha vida{" "}
        <span className="text-[#f5c842]">⭐</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.08] text-white"
        style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.08)" }}
      >
        Eu te amo,
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="-mt-1 font-[family-name:var(--font-great-vibes)] text-[clamp(3rem,8vw,5.8rem)] font-normal leading-[0.95] text-[#ff4d9d] text-glow-pink-intense"
      >
        minha filha
        <GlowHeart className="ml-1 align-middle" size="text-[0.35em]" />
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="relative mt-5 flex items-center justify-center gap-3 lg:justify-start"
      >
        <GlowHeart className="hidden sm:inline" size="text-lg" />
        <p className="font-[family-name:var(--font-montserrat)] text-[clamp(1.4rem,3.8vw,2.4rem)] font-bold uppercase tracking-[0.22em] text-[#e9d5ff] text-glow-lilac md:tracking-[0.32em]">
          {DAUGHTER_NAME}
        </p>
        <motion.span
          className="text-[clamp(1.2rem,3vw,1.8rem)]"
          style={{ filter: "drop-shadow(0 0 12px rgba(255,77,157,0.9))" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ❤️
        </motion.span>
        <GlowHeart className="hidden sm:inline" size="text-lg" />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-7 max-w-[520px] font-[family-name:var(--font-playfair)] text-[clamp(1rem,2.1vw,1.35rem)] leading-[1.7] text-white/92 lg:mt-8"
      >
        Você é meu <Highlight>orgulho</Highlight>, meu maior{" "}
        <Highlight>presente</Highlight> e a razão dos meus{" "}
        <Highlight>melhores dias</Highlight>.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-[500px] font-[family-name:var(--font-playfair)] text-[clamp(0.95rem,1.9vw,1.25rem)] leading-[1.7] text-white/88 lg:mt-6"
      >
        Ser seu pai é o <Highlight>maior privilégio</Highlight> da minha vida.
      </motion.p>
    </motion.div>
  );
}
