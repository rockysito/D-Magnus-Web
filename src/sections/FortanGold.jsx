import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// FOTO LIFESTYLE FORTAN GOLD
import img1 from "../assets/images/fortan-1.jpeg";
import img2 from "../assets/images/fortan-2.jpeg";
import img3 from "../assets/images/fortan-3.jpeg";
import img4 from "../assets/images/fortan-4.jpeg";

const images = [img1, img2, img3, img4];

function FortanGold() {
  const [activeImg, setActiveImg] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="bg-black min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          id="back-btn-fortan"
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

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            {/* TITLE */}
            <h1 className="fortan-font text-[#D4AF37] text-5xl mb-6 tracking-wide">
              Fortan Gold
            </h1>

            <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-6">
              Fortan Gold merupakan representasi karakter utama D'Magnus. Diracik
              dari tembakau pilihan dengan rempah khas Nusantara, menghadirkan
              sensasi hangat, tegas, dan berkelas dalam setiap batang.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed mb-10">
              Varian ini ditujukan bagi penikmat yang menghargai kualitas,
              keseimbangan rasa, serta identitas yang kuat.
            </p>

            <div className="text-xs text-zinc-500 border-t border-zinc-800 pt-6">
              ⚠️ 21+ | Produk Tembakau
            </div>
          </motion.div>

          {/* GALLERY */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() => setActiveImg(img)}>
                <img
                  src={img}
                  alt={`D'Magnus Fortan Gold ${i + 1}`}
                  className="w-full h-full object-cover
                             hover:scale-110 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL LIGHTBOX */}
      {activeImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}>
          {/* Close hint */}
          <div className="absolute top-6 right-6 text-zinc-400 text-xs tracking-widest">
            KLIK UNTUK TUTUP
          </div>
          <img
            src={activeImg}
            alt="Fortan Gold"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />
        </motion.div>
      )}
    </section>
  );
}

export default FortanGold;
