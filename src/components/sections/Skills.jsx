import { motion } from "framer-motion";
import skills from "../../data/skills";
import SkillGrid from "../skills/SkillGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold text-white mt-5">
            Tech Stack & Expertise
          </h2>

          <p className="text-gray-400 leading-8 mt-6 max-w-3xl mx-auto">
            Saya memiliki pengalaman dalam pengembangan aplikasi web menggunakan React, JavaScript, Tailwind CSS, serta pengembangan game menggunakan Unity Engine. Selain itu saya juga memiliki pengalaman sebagai IT Support dan administrasi pemerintahan.
          </p>

        </motion.div>

        {skills.map((item) => (
          <SkillGrid
            key={item.category}
            title={item.category}
            items={item.items}
          />
        ))}

      </div>
    </section>
  );
}