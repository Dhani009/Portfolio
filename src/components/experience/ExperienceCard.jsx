import { motion } from "framer-motion";

export default function ExperienceCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.25)] transition-all"
    >
      <span className="text-sm text-blue-400 font-semibold">
        {item.year}
      </span>

      <h3 className="text-2xl font-bold text-white mt-2">
        {item.position}
      </h3>

      <p className="text-cyan-400 mt-1">
        {item.company}
      </p>

      <p className="text-gray-400 mt-5 leading-8">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}