import { motion } from "framer-motion";

const items = [
  {
    title: "Rempah Pilihan",
    desc: "Menggunakan rempah Nusantara berkualitas tinggi.",
  },
  {
    title: "Racikan Khas",
    desc: "Formula dirancang untuk karakter rasa konsisten.",
  },
  {
    title: "Cita Rasa Autentik",
    desc: "Memberikan pengalaman merokok berkelas.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-zinc-900 py-24 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-center">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}>
            <h3 className="feature-title text-[#D4AF37] text-lg">
              {item.title}
            </h3>

            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
