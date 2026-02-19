import { motion } from "framer-motion";

function AboutDetail() {
  return (
    <section className="bg-black py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto">
        <h1 className="brand-font text-[#D4AF37] text-4xl md:text-5xl mb-8 tracking-wider">
          Tentang D’Magnus
        </h1>

        <p className="text-zinc-300 leading-relaxed mb-6">
          D’Magnus merupakan brand rokok kretek rempah yang lahir dari perpaduan
          tradisi, karakter, dan identitas Nusantara. Setiap produk D’Magnus
          diracik dengan pendekatan presisi, menghadirkan keseimbangan rasa,
          aroma, dan pengalaman.
        </p>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Berakar dari Karangdaleman, D’Magnus membawa filosofi keteguhan,
          keanggunan, dan konsistensi kualitas. Setiap varian tidak hanya
          menawarkan cita rasa, tetapi juga narasi dan karakter yang kuat.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          D’Magnus ditujukan bagi konsumen dewasa yang menghargai detail,
          kualitas, dan identitas dalam setiap pilihan.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutDetail;
