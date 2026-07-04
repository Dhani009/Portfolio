import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaGamepad,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "S1 Teknik Informatika",
    subtitle: "IPK 3.47",
  },
  {
    icon: <FaBriefcase />,
    title: "3+ Tahun",
    subtitle: "Professional Experience",
  },
  {
    icon: <FaLaptopCode />,
    title: "IT Support",
    subtitle: "Troubleshooting & Networking",
  },
  {
    icon: <FaGamepad />,
    title: "React & Unity",
    subtitle: "Developer",
  },
];

export default function Highlights() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            Career Highlights
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Mengapa Memilih Saya?
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-10 hover:border-blue-500 transition duration-300 hover:-translate-y-3"
            >

              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-3xl mb-8">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="text-gray-400 mt-3 leading-7">

                {item.subtitle}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}