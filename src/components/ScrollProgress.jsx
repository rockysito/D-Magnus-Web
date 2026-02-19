import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px]
                 bg-[#D4AF37] origin-left z-[999]"
    />
  );
}

export default ScrollProgress;
