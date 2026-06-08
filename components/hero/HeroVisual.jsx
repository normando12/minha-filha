"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_IMAGE } from "@/config/site";

export default function HeroVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-visible">
      {/* Luz ambiente — continua as cores da imagem no cenário */}
      <motion.div
        className="absolute left-[10%] top-[15%] h-[70%] w-[80%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(255,100,160,0.28) 0%, rgba(255,60,120,0.12) 40%, transparent 70%)",
          filter: "blur(48px)",
        }}
        animate={{ opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[5%] left-[5%] h-[45%] w-[75%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 40% 80%, rgba(255,160,70,0.35) 0%, rgba(255,80,120,0.12) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />

      <motion.div
        className="hero-visual-seamless relative w-full max-w-[540px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="hero-visual-mask relative">
          <Image
            src={HERO_IMAGE}
            alt="Pai e filha abraçados dentro de um coração de luz"
            width={540}
            height={720}
            priority
            unoptimized
            className="hero-visual-img h-auto w-full max-h-[min(76vh,640px)] object-contain"
          />

          <div className="hero-visual-tint pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-visual-fade-top pointer-events-none absolute inset-x-0 top-0 h-[22%]" aria-hidden="true" />
          <div className="hero-visual-fade-left pointer-events-none absolute inset-y-0 left-0 w-[18%]" aria-hidden="true" />
          <div className="hero-visual-fade-right pointer-events-none absolute inset-y-0 right-0 w-[22%]" aria-hidden="true" />
          <div className="hero-visual-fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-[18%]" aria-hidden="true" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-110 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 65% 70% at 50% 50%, rgba(255,77,157,0.2) 0%, transparent 65%)",
            filter: "blur(30px)",
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
