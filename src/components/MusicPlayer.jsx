import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MUSIC } from "../config/site";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showStart, setShowStart] = useState(!!MUSIC.src);
  const enabled = Boolean(MUSIC.src);

  const play = async () => {
    if (!enabled) return;
    try {
      await audioRef.current?.play();
      setPlaying(true);
      setShowStart(false);
    } catch {
      setShowStart(true);
    }
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      play();
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (enabled) play();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <audio ref={audioRef} src={MUSIC.src} loop preload="auto" />

      <AnimatePresence>
        {showStart && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-sm rounded-2xl border border-neon-lavender/40 bg-magic-900/90 p-8 text-center shadow-magic backdrop-blur-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
            >
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-neon-lavender/80">
                Nossa trilha
              </p>
              <h2 className="mb-2 font-script text-4xl text-neon-lavender text-glow-magic">
                {MUSIC.title}
              </h2>
              <p className="mb-6 text-sm text-white/70">Toque para abrir com a música ♪</p>
              <motion.button
                type="button"
                onClick={play}
                className="rounded-full border border-neon-lavender bg-neon-lavender/20 px-8 py-3 font-medium text-white shadow-magic"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(192, 132, 252, 0.7)" }}
                whileTap={{ scale: 0.98 }}
              >
                {MUSIC.buttonLabel}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showStart && (
        <motion.button
          type="button"
          onClick={toggle}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-neon-lavender/50 bg-magic-900/80 text-lg text-neon-lavender shadow-magic backdrop-blur-md"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(192, 132, 252, 0.6)" }}
          aria-label={playing ? "Pausar música" : "Tocar música"}
        >
          {playing ? "♪" : "♫"}
        </motion.button>
      )}
    </>
  );
}
