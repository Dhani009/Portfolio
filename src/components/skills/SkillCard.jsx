import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  const badge =
    skill.level >= 90
      ? {
          text: "Expert",
          color: "bg-green-500/20 text-green-400",
        }
      : skill.level >= 80
      ? {
          text: "Advanced",
          color: "bg-blue-500/20 text-blue-400",
        }
      : {
          text: "Intermediate",
          color: "bg-yellow-500/20 text-yellow-400",
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition-all hover:shadow-[0_0_35px_rgba(37,99,235,.3)]"
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.2 }}
        className={`text-5xl ${skill.color}`}
      >
        <Icon />
      </motion.div>

      <h3 className="text-white font-bold text-xl mt-5">
        {skill.name}
      </h3>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}
      >
        {badge.text}
      </span>

      <div className="mt-6 w-full h-2 rounded-full bg-slate-700 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${skill.level}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
        />

      </div>

      <div className="mt-3 flex justify-between">

        <span className="text-gray-400">
          Skill Level
        </span>

        <span className="text-blue-400 font-bold">
          {skill.level}%
        </span>

      </div>
    </motion.div>
  );
}