import { motion } from "framer-motion";
import CinematicHero from "./components/CinematicHero";
import PhotoSlideshow from "./components/PhotoSlideshow";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <>
      <MusicPlayer />

      <main className="relative min-h-screen bg-[#080412]">
        <CinematicHero />

        {/* Galeria de fotos abaixo do banner */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 py-12 md:py-16">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neon-lavender/70">
              Nossos momentos
            </p>
            <h2 className="mt-2 font-script text-3xl text-neon-pink text-glow-pink md:text-4xl">
              Memórias especiais ✨
            </h2>
          </motion.div>

          <PhotoSlideshow />
        </section>

        <motion.footer
          className="pb-10 text-center text-xs tracking-widest text-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ♥ Feito com amor · Papai
        </motion.footer>
      </main>
    </>
  );
}
