import { useState } from "react";
import { motion } from "framer-motion";

function VideoHero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* VIDEO */}
      {!videoFailed ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover">
          <source src="/video/fortan.mp4" type="video/mp4" />
        </video>
      ) : (
        /* FALLBACK jika video gagal load */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0
                     bg-gradient-to-br from-black via-zinc-900 to-black">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-64 left-1/2 -translate-x-1/2
                       w-[900px] h-[900px]
                       bg-gradient-to-tr from-[#D4AF37]/20 via-[#C9A44C]/10 to-transparent
                       blur-[160px]"
          />
        </motion.div>
      )}

      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-black/50" />

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="brand-font text-[#D4AF37] text-4xl md:text-6xl tracking-[0.35em]">
            D'MAGNUS
          </h1>

          <p className="mt-6 text-zinc-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Rokok kretek rempah dengan racikan khas Nusantara, menghadirkan
            karakter kuat dan cita rasa autentik.
          </p>

          <div className="mt-8 text-xs text-zinc-500 tracking-widest">
            21+ | Produk Tembakau
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-16 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="opacity-60">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoHero;
