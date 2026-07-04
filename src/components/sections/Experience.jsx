import { motion } from "framer-motion";

import experience from "../../data/experience";
import ExperienceTimeline from "../experience/ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-blue-400">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold text-white mt-5">
            Work Experience
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Perjalanan profesional saya dimulai dari administrasi,
            berkembang ke dunia pemerintahan, hingga fokus pada
            pengembangan aplikasi web modern dan game menggunakan
            React serta Unity.
          </p>

        </motion.div>

        <ExperienceTimeline
          data={experience}
        />

      </div>
    </section>
  );
}