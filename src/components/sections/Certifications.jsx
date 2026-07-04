import { motion } from "framer-motion";

import certifications from "../../data/certifications";
import CertificationCard from "../certification/CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

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
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-blue-400">
            Certifications
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Professional Certifications
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Sertifikasi yang saya peroleh sebagai bukti kompetensi di bidang pengembangan web dan profesi profesional.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              cert={cert}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}