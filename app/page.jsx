import CinematicHero from "@/components/hero/CinematicHero";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import MusicPlayer from "@/components/MusicPlayer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-magic-950">
      <MusicPlayer />
      <CinematicHero />

      <section className="relative z-10 mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neon-lavender/70">
            Nossos momentos
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-dancing)] text-3xl text-neon-pink text-glow-pink md:text-4xl">
            Memórias especiais ✨
          </h2>
        </div>
        <PhotoSlideshow />
      </section>

      <footer className="pb-10 text-center text-xs tracking-widest text-white/30">
        ♥ Feito com amor · Papai
      </footer>
    </main>
  );
}
