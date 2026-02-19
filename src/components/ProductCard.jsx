import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProductCard({ image, name, description, comingSoon, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link && !comingSoon) {
      navigate(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={handleClick}
      className={`
        group
        bg-black
        border border-zinc-800
        rounded-2xl
        px-5 pt-5 pb-6
        mx-auto
        w-full
        max-w-[360px]
        transition
        hover:border-[#D4AF37]
        hover:shadow-[0_0_24px_rgba(212,175,55,0.12)]
        ${link && !comingSoon ? "cursor-pointer" : "cursor-default"}
      `}>
      {/* BADGE */}
      {comingSoon && (
        <span className="absolute top-4 right-4 text-[11px] text-[#D4AF37] border border-[#D4AF37] px-2 py-1 rounded-full">
          Coming Soon
        </span>
      )}

      {/* IMAGE */}
      <div
        className="
        w-full
        h-[320px]
        flex
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        mb-4
      ">
        <img
          src={image}
          alt={name}
          className="
            max-h-full
            w-auto
            object-contain
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* TEXT */}
      <h3 className="brand-font text-[#D4AF37] text-base mb-2">{name}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default ProductCard;
