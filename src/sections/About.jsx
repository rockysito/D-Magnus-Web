import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-black py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center">
        <h2 className="brand-font text-[#D4AF37] text-3xl md:text-4xl mb-6 tracking-wider">
          Tentang D’Magnus
        </h2>

        <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-10">
          D’Magnus merupakan rokok kretek rempah yang diracik dari tembakau
          pilihan dan rempah Nusantara, menghadirkan karakter yang tegas dan
          cita rasa autentik.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/about")}
          className="
            px-8 py-3 text-sm tracking-widest
            border border-[#D4AF37]
            text-[#D4AF37]
            hover:bg-[#D4AF37] hover:text-black
            transition
          ">
          DETAILS
        </button>
      </motion.div>
    </section>
  );
}

export default About;
