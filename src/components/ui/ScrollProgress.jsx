import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-1
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-indigo-500
      origin-left
      z-[9999]
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}