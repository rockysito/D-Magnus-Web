import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo 2.png";

const sections = ["home", "products", "about", "features"];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 140;
        const height = el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu saat scroll
  useEffect(() => {
    const onScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const linkClass = (id) =>
    `transition ${
      active === id ? "text-[#D4AF37]" : "text-zinc-300 hover:text-[#C9A44C]"
    }`;

  const handleNavLink = (href) => {
    setMenuOpen(false);
    // Jika ada hash, scroll ke section
    if (href.startsWith("#")) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">
        {/* BRAND */}
        <Link to="/" className="flex items-center gap-4" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="D'Magnus"
            className="h-12 w-auto object-contain translate-y-[1px]"
          />
          <span
            className="brand-font text-[#D4AF37] text-[22px] tracking-[0.28em] leading-none translate-y-[2px]">
            D'MAGNUS
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">
          <a href="#products" className={linkClass("products")}>
            Produk
          </a>
          <a href="#about" className={linkClass("about")}>
            Tentang
          </a>
          <a href="#features" className={linkClass("features")}>
            Keunggulan
          </a>
        </div>

        {/* HAMBURGER BUTTON - MOBILE */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}>
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] bg-[#D4AF37] rounded-full origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[2px] bg-[#D4AF37] rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-[2px] bg-[#D4AF37] rounded-full origin-center"
          />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/95 border-b border-zinc-800">
            <div className="flex flex-col px-6 py-6 gap-6 text-sm tracking-widest">
              <a
                href="#products"
                onClick={() => handleNavLink("#products")}
                className={linkClass("products")}>
                Produk
              </a>
              <a
                href="#about"
                onClick={() => handleNavLink("#about")}
                className={linkClass("about")}>
                Tentang
              </a>
              <a
                href="#features"
                onClick={() => handleNavLink("#features")}
                className={linkClass("features")}>
                Keunggulan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
