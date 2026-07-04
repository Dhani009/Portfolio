import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profileData from "../../data/profile";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <img
            src={profileData.image}
            alt={profileData.name}
            className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 object-cover shadow-xl"
          />

          <h2 className="text-4xl font-bold text-white mt-6">
            {profileData.name}
          </h2>

          <p className="text-blue-400 mt-3">
            Frontend Developer • Unity Developer • IT Support
          </p>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 leading-8">
            Terima kasih telah mengunjungi portfolio saya.
            Saya terbuka untuk peluang kerja, freelance,
            maupun kolaborasi dalam pengembangan website,
            aplikasi React, dan game Unity.
          </p>

          <div className="flex justify-center items-center gap-2 mt-6 text-gray-400">

            <FaMapMarkerAlt />

            <span>
              Pati, Jawa Tengah, Indonesia
            </span>

          </div>

          <div className="flex justify-center gap-6 mt-10">

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:Ahmaino16@gmail.com"
              className="w-14 h-14 rounded-full bg-slate-900 flex justify-center items-center text-2xl text-white hover:bg-blue-600 transition"
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/Dhani009"
              target="_blank"
              className="w-14 h-14 rounded-full bg-slate-900 flex justify-center items-center text-2xl text-white hover:bg-blue-600 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://linkedin.com/in/Ahmad-Dhani-867b46365"
              target="_blank"
              className="w-14 h-14 rounded-full bg-slate-900 flex justify-center items-center text-2xl text-white hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </motion.a>

          </div>

          <button
            onClick={scrollTop}
            className="mt-14 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold transition"
          >

            <FaArrowUp />

            Back To Top

          </button>

        </motion.div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Ahmad Dhani. All Rights Reserved.
          </p>

          <p className="text-gray-500 mt-4 md:mt-0">
            Built with ❤️ React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}