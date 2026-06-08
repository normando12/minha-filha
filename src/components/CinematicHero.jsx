import { motion } from "framer-motion";
import FatherDaughterSilhouette from "./FatherDaughterSilhouette";
import HeroParticles from "./HeroParticles";
import { DAUGHTER_NAME } from "../config/site";

function Highlight({ children }) {
  return (
    <span className="font-script text-[1.12em] text-neon-pink text-glow-pink-intense">
      {children}
    </span>
  );
}

const sideButterflies = [
  { left: "4%", top: "18%", delay: 0, size: "1.4rem" },
  { left: "8%", top: "55%", delay: 1.2, size: "1.1rem" },
  { left: "92%", top: "22%", delay: 0.6, size: "1.3rem" },
  { left: "88%", top: "62%", delay: 1.8, size: "1rem" },
  { left: "3%", top: "78%", delay: 2.4, size: "0.9rem" },
  { left: "94%", top: "42%", delay: 0.3, size: "1.2rem" },
];

const sideHearts = [
  { left: "6%", top: "35%", delay: 0.5 },
  { left: "90%", top: "48%", delay: 1.0 },
  { left: "12%", top: "72%", delay: 1.5 },
  { left: "85%", top: "78%", delay: 2.0 },
];

export default function CinematicHero() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      {/* Container 21:9 cinematográfico */}
      <div className="relative aspect-[21/9] min-h-[520px] w-full max-h-[85vh]">
        {/* Background profundo */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 90%, rgba(255, 140, 50, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 75% 20%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 50% 0%, rgba(88, 28, 135, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 90% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
              linear-gradient(165deg, #0c0618 0%, #150828 25%, #1a0a32 50%, #120820 75%, #080412 100%)
            `,
          }}
        />

        {/* Vinheta cinematográfica */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080412]/80 via-transparent to-[#0c0618]/40" />

        <HeroParticles />

        {/* Borboletas laterais */}
        {sideButterflies.map((b, i) => (
          <motion.span
            key={i}
            className="absolute z-20 opacity-40"
            style={{
              left: b.left,
              top: b.top,
              fontSize: b.size,
              filter: "drop-shadow(0 0 10px rgba(255,77,157,0.8))",
            }}
            animate={{
              y: [0, -12, 0],
              x: [0, 8, 0],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{ duration: 4 + i * 0.3, delay: b.delay, repeat: Infinity }}
          >
            🦋
          </motion.span>
        ))}

        {/* Corações laterais */}
        {sideHearts.map((h, i) => (
          <motion.span
            key={i}
            className="absolute z-20 text-sm text-neon-pink/50"
            style={{ left: h.left, top: h.top }}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 3, delay: h.delay, repeat: Infinity }}
          >
            ♥
          </motion.span>
        ))}

        {/* Conteúdo principal */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-10 lg:px-16">
          <div className="grid h-full w-full grid-cols-1 items-center gap-6 lg:grid-cols-[42%_58%]">
            {/* Silhueta — esquerda */}
            <motion.div
              className="relative hidden h-[85%] max-h-[420px] lg:block"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <FatherDaughterSilhouette />
            </motion.div>

            {/* Textos — centro/direita */}
            <motion.div
              className="flex flex-col items-center justify-center text-center lg:items-center lg:pr-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="mb-4 text-[0.6rem] font-medium uppercase tracking-[0.45em] text-white/70 md:text-[0.7rem] lg:tracking-[0.5em]">
                Para a princesa da minha vida
              </p>

              <h1 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-none text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                Eu te amo,
              </h1>

              <p className="mt-1 font-script text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight text-neon-pink text-glow-pink-intense">
                minha filha
              </p>

              <motion.p
                className="mt-5 text-[clamp(1.25rem,3vw,2rem)] font-semibold uppercase tracking-[0.25em] text-neon-lavender text-glow-lilac md:tracking-[0.35em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {DAUGHTER_NAME}
              </motion.p>

              <motion.div
                className="my-5 h-px w-24 bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent md:w-32"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />

              <motion.p
                className="max-w-lg font-serif text-[clamp(0.95rem,1.8vw,1.2rem)] leading-relaxed text-white/85"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Você é meu <Highlight>orgulho</Highlight>, meu maior{" "}
                <Highlight>presente</Highlight> e a razão dos meus{" "}
                <Highlight>melhores dias</Highlight>.
              </motion.p>

              <motion.p
                className="mt-5 max-w-md font-serif text-[clamp(0.9rem,1.6vw,1.1rem)] italic leading-relaxed text-white/75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Ser seu pai é o <Highlight>maior privilégio</Highlight> da minha vida.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Silhueta mobile (compacta, fundo) */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-[5] h-[45%] w-[55%] opacity-30 lg:hidden">
          <FatherDaughterSilhouette />
        </div>

        {/* Grão cinematográfico */}
        <div
          className="pointer-events-none absolute inset-0 z-[15] opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Borda inferior sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      </div>
    </section>
  );
}
