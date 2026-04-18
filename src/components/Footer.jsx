import { Link } from "react-router-dom";
import logo from "../assets/images/logo 2.png";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
        {/* BRAND + TAUTAN CEPAT */}
        <div>
          {/* MINI BRAND */}
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="D'Magnus" className="h-8 w-auto object-contain" />
            <span className="brand-font text-[#D4AF37] text-sm tracking-[0.25em]">
              D'MAGNUS
            </span>
          </div>

          <h4 className="brand-font text-[#D4AF37] text-sm mb-6 tracking-[0.25em] uppercase">
            Tautan Cepat
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-[#D4AF37] transition">
                Beranda
              </Link>
            </li>
            <li>
              <a href="/#products" className="hover:text-[#D4AF37] transition">
                Produk
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#D4AF37] transition">
                Sekilas D'Magnus
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-[#D4AF37] transition">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* LOCATION */}
        <div>
          <h4 className="brand-font text-[#D4AF37] text-sm mb-6 tracking-[0.25em] uppercase">
            Location
          </h4>

          <p className="text-sm mb-4">Karangdaleman, Indonesia</p>

          <div className="w-full h-48 rounded-lg overflow-hidden border border-zinc-800">
            <iframe
              title="Lokasi D'Magnus Karangdaleman"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.7182468563587!2d110.23897817213876!3d-7.527277220596478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a89a13f98990b%3A0x268161a785622447!2sRumah%20Induk%20Komunitas%20Asap%20Kretek%20Rempah%20Karangdaleman!5e0!3m2!1sid!2sid!4v1770633806966!5m2!1sid!2sid"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        {/* SOSIAL MEDIA */}
        <div>
          <h4 className="brand-font text-[#D4AF37] text-sm mb-6 tracking-[0.25em] uppercase">
            Ikuti Kami
          </h4>

          <div className="flex gap-5 text-[#D4AF37]">
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/dmagnusofficial?igsh=bms3cW11dmFwc3Zj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram D'Magnus"
              className="hover:opacity-70 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6285136249316"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp D'Magnus"
              className="hover:opacity-70 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 12 12 0 0 0 2 18.9L0 24l5.3-1.9A12 12 0 1 0 20.5 3.5z" />
              </svg>
            </a>
          </div>

          {/* KONTAK */}
          <div className="mt-8 space-y-2 text-sm">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Kontak</p>
            <a
              href="https://wa.me/6285136249316"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 12 12 0 0 0 2 18.9L0 24l5.3-1.9A12 12 0 1 0 20.5 3.5z" />
              </svg>
              +62 851-3624-9316
            </a>
            <a
              href="https://www.instagram.com/dmagnusofficial?igsh=bms3cW11dmFwc3Zj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              @dmagnusofficial
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-zinc-800" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between text-xs text-zinc-500 gap-4">
        <p>Produk ini hanya untuk konsumen berusia <strong className="text-zinc-400">21 tahun ke atas</strong>.</p>
        <p>
          © {new Date().getFullYear()} House of D'Magnus Karangdaleman. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
