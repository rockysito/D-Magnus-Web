import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Disclaimer() {
  return (
    <section className="min-h-screen bg-black text-zinc-300 px-6 py-32">
      <div className="max-w-3xl mx-auto">

        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}>
          <Link
            to="/"
            id="back-btn-disclaimer"
            className="
              inline-flex items-center gap-2 mb-12
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
            KEMBALI KE BERANDA
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <h1 className="section-title text-[#D4AF37] text-4xl mb-4 tracking-wider">
            Disclaimer
          </h1>

          <div className="h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-10" />

          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              Website ini dibuat untuk keperluan informasi dan showcase brand D'Magnus.
              Seluruh konten yang terdapat pada situs ini merupakan hak milik
              House of D'Magnus Karangdaleman.
            </p>

            <p>
              <span className="text-[#D4AF37] font-semibold">Peringatan Usia:</span>{" "}
              Produk D'Magnus merupakan produk tembakau yang <strong>hanya ditujukan
              bagi konsumen dewasa berusia 21 tahun ke atas</strong>. Jika Anda belum
              berusia 21 tahun, mohon tinggalkan situs ini.
            </p>

            <p>
              <span className="text-[#D4AF37] font-semibold">Kesehatan:</span>{" "}
              Merokok dapat menyebabkan kanker, serangan jantung, impotensi, dan
              gangguan kehamilan dan janin. Produk ini mengandung nikotin.
            </p>

            <p>
              <span className="text-[#D4AF37] font-semibold">Konten Pihak Ketiga:</span>{" "}
              Tautan atau referensi ke situs pihak ketiga yang terdapat di website ini
              tidak berada di bawah kendali D'Magnus. Kami tidak bertanggung jawab
              atas konten atau kebijakan privasi situs-situs tersebut.
            </p>

            <p>
              <span className="text-[#D4AF37] font-semibold">Hak Cipta:</span>{" "}
              Semua konten, gambar, dan materi di situs ini dilindungi oleh hak cipta
              © {new Date().getFullYear()} House of D'Magnus Karangdaleman. Dilarang
              menyalin atau mendistribusikan tanpa izin tertulis.
            </p>
          </div>

          <div className="mt-12 text-xs text-zinc-600 border-t border-zinc-800 pt-6">
            ⚠️ 21+ | Produk Tembakau — House of D'Magnus Karangdaleman, Indonesia
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Disclaimer;
