"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PHOTOS, SLIDE_INTERVAL } from "@/config/site";

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = PHOTOS.length;

  const goTo = useCallback(
    (index) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent((index + total) % total);
    },
    [current, total]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next, total]);

  const photo = PHOTOS[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
  };

  return (
    <motion.section
      className="relative mx-auto w-full max-w-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 text-xl drop-shadow-[0_0_10px_#c084fc]">
        ✨
      </span>

      <div className="relative">
        <motion.div
          className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-neon-lavender via-neon-pink to-neon-sky opacity-70 blur-sm"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative overflow-hidden rounded-3xl border-2 border-neon-lavender/60 p-[3px] shadow-neon-lg border-glow-magic">
          <div className="relative overflow-hidden rounded-[20px] bg-magic-900">
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={current}
                  src={photo.src}
                  alt={photo.alt}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-16">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={photo.caption}
                    className="text-center font-[family-name:var(--font-dancing)] text-lg text-white drop-shadow-lg md:text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {photo.caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <span className="absolute -right-1 -top-1 text-lg drop-shadow-[0_0_8px_#c084fc]">💕</span>
          <span className="absolute -bottom-1 -left-1 text-sm drop-shadow-[0_0_6px_#ff4d9d]">⭐</span>
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neon-pink/50 bg-magic-900/80 text-white shadow-neon backdrop-blur-md transition hover:scale-110"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-neon-pink/50 bg-magic-900/80 text-white shadow-neon backdrop-blur-md transition hover:scale-110"
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 px-2">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-neon-pink shadow-[0_0_10px_rgba(255,77,157,0.8)]"
                  : "h-2 w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-xs tracking-widest text-white/40">
        {current + 1} / {total}
      </p>
    </motion.section>
  );
}
