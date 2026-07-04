import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificationCard({ cert, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all hover:shadow-[0_0_40px_rgba(37,99,235,.25)]"
    >
      <div className="overflow-hidden">

        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      <div className="p-7">

        <div className="flex items-center gap-3">

          <FaAward className="text-yellow-400" />

          <span className="text-blue-400 text-sm">
            {cert.organization}
          </span>

        </div>

        <h3 className="text-2xl font-bold text-white mt-4">
          {cert.title}
        </h3>

        <p className="text-gray-400 mt-3">
          {cert.badge}
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-sm text-gray-500">
            {cert.year}
          </span>

          <a
            href={cert.image}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-white transition"
          >
            View
            <FaExternalLinkAlt />
          </a>

        </div>

      </div>
    </motion.div>
  );
}