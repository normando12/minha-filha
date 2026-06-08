"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroVisual from "./HeroVisual";
import HeroParticles from "./HeroParticles";
import FloatingDecorations from "./FloatingDecorations";
import FlyingButterflies from "./FlyingButterflies";
import LightTrails from "./LightTrails";
import HeroContent from "./HeroContent";

export default function CinematicHero() {
  const heroRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 24 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (reducedMotion || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 28);
      mouseY.set(y * 18);
    },
    [mouseX, mouseY, reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const px = reducedMotion ? 0 : springX;
  const py = reducedMotion ? 0 : springY;

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[100dvh] w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero banner — amor de pai e filha"
    >
      {/* Fundo mágico fullscreen */}
      <motion.div
        className="absolute inset-0 hero-sky-magic"
        style={{ y: bgY }}
      />

      {/* Horizonte rosa/laranja — pôr do sol mágico */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(255,80,140,0.35)_0%,rgba(255,120,60,0.18)_35%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-[radial-gradient(ellipse_80%_60%_at_20%_100%,rgba(255,180,80,0.22)_0%,transparent_60%)]" />

      {/* Vinhetas */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06020e]/90 via-transparent to-[#0e0618]/50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080412]/20 via-transparent to-[#080412]/30" />

      <HeroParticles parallaxX={px} parallaxY={py} />
      <LightTrails />
      <FlyingButterflies parallaxX={px} parallaxY={py} />
      <FloatingDecorations parallaxX={px} parallaxY={py} />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex h-full items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="grid h-full w-full max-w-[1400px] mx-auto grid-cols-1 items-center gap-6 py-8 md:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Ilustração — esquerda no desktop, abaixo no mobile */}
            <motion.div
              className="relative order-2 flex h-[min(44vh,400px)] items-center justify-center overflow-visible sm:h-[min(48vh,460px)] lg:order-1 lg:h-full lg:max-h-[88vh] lg:justify-center lg:-mr-6 xl:-mr-10"
            style={{ y: visualY }}
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              style={{ x: px, y: py }}
              className="flex h-full w-full max-w-[480px] items-center justify-center lg:max-w-none"
            >
              <HeroVisual />
            </motion.div>
          </motion.div>

          {/* Textos — direita no desktop, acima no mobile */}
          <motion.div
            className="order-1 lg:order-2"
            style={{ y: contentY }}
          >
            <HeroContent />
          </motion.div>
        </div>
      </div>

      {/* Grão sutil */}
      <div
        className="pointer-events-none absolute inset-0 z-[25] opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#ff4d9d]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
