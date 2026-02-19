import { useEffect } from "react";

function SEO() {
  useEffect(() => {
    document.title = "D’Magnus | Rokok Kretek Rempah Premium";

    const metaDesc = document.querySelector("meta[name='description']");

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "D’Magnus adalah rokok kretek rempah dengan racikan khas Nusantara yang menghadirkan karakter kuat dan cita rasa autentik.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "D’Magnus adalah rokok kretek rempah dengan racikan khas Nusantara yang menghadirkan karakter kuat dan cita rasa autentik.";
      document.head.appendChild(meta);
    }
  }, []);

  return null;
}

export default SEO;
