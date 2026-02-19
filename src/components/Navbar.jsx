import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo 2.png";

const sections = ["home", "products", "about", "features"];

function Navbar() {
  const [active, setActive] = useState("home");

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

  const linkClass = (id) =>
    `transition ${
      active === id ? "text-[#D4AF37]" : "text-zinc-300 hover:text-[#C9A44C]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">
        {/* BRAND */}
        <Link to="/" className="flex items-center gap-4">
          {/* LOGO */}
          <img
            src={logo}
            alt="D'Magnus"
            className="
              h-12
              w-auto
              object-contain
              translate-y-[1px]
            "
          />

          {/* TEXT */}
          <span
            className="
              brand-font
              text-[#D4AF37]
              text-[22px]
              tracking-[0.28em]
              leading-none
              translate-y-[2px]
            ">
            D’MAGNUS
          </span>
        </Link>

        {/* MENU */}
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
      </div>
    </nav>
  );
}

export default Navbar;
