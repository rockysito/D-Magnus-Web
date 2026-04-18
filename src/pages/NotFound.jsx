import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* GOLD SMOKE */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[600px]
                   bg-gradient-to-tr from-[#D4AF37]/15 via-[#C9A44C]/8 to-transparent
                   blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="brand-font text-[#D4AF37]/40 text-[120px] md:text-[160px] leading-none tracking-[0.1em]">
            404
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <h1 className="brand-font text-[#D4AF37] text-2xl md:text-3xl mb-4 tracking-wider">
            Halaman Tidak Ditemukan
          </h1>

          <p className="text-zinc-400 text-sm leading-relaxed mb-10">
            Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            Kembali ke beranda dan jelajahi koleksi kami.
          </p>

          <Link
            to="/"
            id="back-to-home-404"
            className="
              inline-flex items-center gap-3
              px-8 py-3
              border border-[#D4AF37]
              text-[#D4AF37]
              text-sm tracking-widest
              hover:bg-[#D4AF37] hover:text-black
              transition duration-300
            ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14" height="14"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            KEMBALI KE BERANDA
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default NotFound;
