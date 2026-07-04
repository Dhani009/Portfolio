import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener("scroll", scroll);
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      onClick={top}
      className="
      fixed
      bottom-8
      right-8
      z-50
      w-14
      h-14
      rounded-full
      bg-blue-600
      hover:bg-blue-700
      text-white
      shadow-xl
      flex
      items-center
      justify-center
      "
    >
      <FaArrowUp />
    </motion.button>
  );
}