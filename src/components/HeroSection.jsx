import { motion } from "framer-motion";
import HeartFrame from "./HeartFrame";
import PhotoSlideshow from "./PhotoSlideshow";
import HeartDivider from "./HeartDivider";
import { DAUGHTER_NAME } from "../config/site";

function Highlight({ children }) {
  return (
    <span className="font-script text-[1.15em] text-neon-pink text-glow-pink">
      {children}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-6 md:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Slideshow dentro do coração neon */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <HeartFrame>
            <PhotoSlideshow variant="hero" />
          </HeartFrame>
        </motion.div>

        {/* Textos */}
        <motion.div
          className="order-1 text-center lg:order-2 lg:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 flex items-center justify-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-white/80 md:text-xs lg:justify-start">
            <span className="text-yellow-300">⭐</span>
            Para a princesa da minha vida
            <span className="text-yellow-300">⭐</span>
          </p>

          <h1 className="font-serif text-[clamp(1.75rem,5vw,2.5rem)] font-semibold leading-tight text-white">
            Eu te amo,{" "}
            <span className="font-script text-[clamp(2rem,6vw,3rem)] font-bold text-neon-pink text-glow-pink">
              minha filha
            </span>
            <span className="ml-1 inline-block text-neon-pink">♥</span>
          </h1>

          <motion.p
            className="mt-5 font-playful text-[clamp(1.5rem,5vw,2.25rem)] font-bold tracking-wide text-neon-lavender text-glow-magic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {DAUGHTER_NAME}{" "}
            <span className="inline-block text-neon-pink drop-shadow-[0_0_10px_#ff4d9d]">♥</span>
          </motion.p>

          <motion.p
            className="mx-auto mt-6 max-w-md font-serif text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-white/90 lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Você é meu <Highlight>orgulho</Highlight>, meu maior{" "}
            <Highlight>presente</Highlight> e a razão dos meus{" "}
            <Highlight>melhores dias</Highlight>.
          </motion.p>

          <HeartDivider />

          <motion.p
            className="mx-auto max-w-md font-serif text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed text-white/90 lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Ser seu pai é o <Highlight>maior privilégio</Highlight> da minha vida.{" "}
            <span className="text-neon-pink">❤️</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
