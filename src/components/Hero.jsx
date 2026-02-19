import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 300], [0, -60]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden
                 bg-gradient-to-b from-black via-zinc-900 to-black
                 flex items-center justify-center px-6 pt-32">
      {/* GOLD SMOKE LAYER 1 */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-64 left-1/2 -translate-x-1/2
                   w-[900px] h-[900px]
                   bg-gradient-to-tr
                   from-[#D4AF37]/20 via-[#C9A44C]/10 to-transparent
                   blur-[160px]"
      />

      {/* GOLD SMOKE LAYER 2 */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/3
                   w-[700px] h-[700px]
                   bg-gradient-to-br
                   from-[#C9A44C]/10 via-[#D4AF37]/10 to-transparent
                   blur-[180px]"
      />

      {/* CONTENT */}
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl">
        <h1 className="brand-font text-[#D4AF37] text-4xl md:text-6xl tracking-[0.35em]">
          D’MAGNUS
        </h1>

        <p className="mt-6 text-zinc-300 text-base md:text-lg leading-relaxed">
          Rokok kretek rempah dengan racikan khas Nusantara, menghadirkan
          karakter kuat dan cita rasa autentik untuk penikmat berkelas.
        </p>

        <div className="mt-10 text-xs text-zinc-500">21+ | Produk Tembakau</div>
      </motion.div>
    </section>
  );
}

export default Hero;
