import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AboutDetail() {
  const navigate = useNavigate();

  return (
    <section className="bg-black min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* BACK BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          id="back-btn-about"
          className="
            flex items-center gap-2 mb-12
            text-zinc-400 hover:text-[#D4AF37]
            text-sm tracking-widest
            transition group
          ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16" height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="transition group-hover:-translate-x-1 duration-300">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          KEMBALI
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <h1 className="brand-font text-[#D4AF37] text-4xl md:text-5xl mb-8 tracking-wider">
            Tentang D'Magnus
          </h1>

          <div className="h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-10" />

          <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
            D'Magnus merupakan brand rokok kretek rempah yang lahir dari perpaduan
            tradisi, karakter, dan identitas Nusantara. Setiap produk D'Magnus
            diracik dengan pendekatan presisi, menghadirkan keseimbangan rasa,
            aroma, dan pengalaman.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            Berakar dari Karangdaleman, D'Magnus membawa filosofi keteguhan,
            keanggunan, dan konsistensi kualitas. Setiap varian tidak hanya
            menawarkan cita rasa, tetapi juga narasi dan karakter yang kuat.
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            D'Magnus ditujukan bagi konsumen dewasa yang menghargai detail,
            kualitas, dan identitas dalam setiap pilihan.
          </p>

          <div className="mt-12 text-xs text-zinc-600 border-t border-zinc-800 pt-6">
            ⚠️ 21+ | Produk Tembakau — Karangdaleman, Indonesia
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutDetail;
