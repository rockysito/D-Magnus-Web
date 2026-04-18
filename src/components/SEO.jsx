import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO_CONFIG = {
  "/": {
    title: "D'Magnus | Rokok Kretek Rempah Premium Nusantara",
    description:
      "D'Magnus adalah rokok kretek rempah dengan racikan khas Nusantara yang menghadirkan karakter kuat dan cita rasa autentik untuk penikmat berkelas.",
  },
  "/product/fortan-gold": {
    title: "Fortan Gold | D'Magnus – Varian Kretek Rempah Premium",
    description:
      "Fortan Gold adalah varian unggulan D'Magnus. Diracik dari tembakau pilihan dengan rempah khas Nusantara, menghadirkan sensasi hangat, tegas, dan berkelas.",
  },
  "/about": {
    title: "Tentang D'Magnus | Brand Rokok Kretek Rempah Nusantara",
    description:
      "D'Magnus lahir dari perpaduan tradisi, karakter, dan identitas Nusantara. Berakar dari Karangdaleman, membawa filosofi keteguhan dan keanggunan.",
  },
  "/disclaimer": {
    title: "Disclaimer | D'Magnus",
    description:
      "Pernyataan disclaimer resmi D'Magnus. Produk tembakau ini hanya ditujukan bagi konsumen dewasa berusia 21 tahun ke atas.",
  },
};

const DEFAULT_SEO = {
  title: "D'Magnus | Rokok Kretek Rempah Premium",
  description:
    "D'Magnus adalah rokok kretek rempah dengan racikan khas Nusantara yang menghadirkan karakter kuat dan cita rasa autentik.",
};

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = SEO_CONFIG[pathname] || DEFAULT_SEO;

    // Title
    document.title = config.title;

    // Meta description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", config.description);

    // OG Title
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", config.title);

    // OG Description
    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", config.description);
  }, [pathname]);

  return null;
}

export default SEO;
