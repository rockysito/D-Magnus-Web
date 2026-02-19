import { useState } from "react";
import { motion } from "framer-motion";

// FOTO LIFESTYLE FORTAN GOLD
import img1 from "../assets/images/fortan-1.jpeg";
import img2 from "../assets/images/fortan-2.jpeg";
import img3 from "../assets/images/fortan-3.jpeg";
import img4 from "../assets/images/fortan-4.jpeg";

const images = [img1, img2, img3, img4];

function FortanGold() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}>
          {/* TITLE */}
          <h2 className="fortan-font text-[#D4AF37] text-5xl mb-6 tracking-wide">
            Fortan Gold
          </h2>

          <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-6">
            Fortan Gold merupakan representasi karakter utama D’Magnus. Diracik
            dari tembakau pilihan dengan rempah khas Nusantara, menghadirkan
            sensasi hangat, tegas, dan berkelas dalam setiap batang.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Varian ini ditujukan bagi penikmat yang menghargai kualitas,
            keseimbangan rasa, serta identitas yang kuat.
          </p>
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
                alt="D'Magnus Fortan Gold"
                className="w-full h-full object-cover
                           hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveImg(null)}>
          <img
            src={activeImg}
            alt="Fortan Gold"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}

export default FortanGold;
