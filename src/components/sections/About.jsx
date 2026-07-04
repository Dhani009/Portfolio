import { motion } from "framer-motion";
import profileData from "../../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mengenal Saya
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <img
              src={profileData.image}
              alt={profileData.name}
              className="rounded-3xl shadow-2xl border-4 border-blue-500/30"
            />

          </motion.div>

          {/* Right */}

          <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
>

            <h3 className="text-3xl font-bold mb-6">

              Halo 👋 Saya{" "}
              <span className="text-blue-500">
                Ahmad Dhani
              </span>

            </h3>

            <p className="text-gray-400 leading-8">

              Saya merupakan lulusan S1 Teknik Informatika yang memiliki
              pengalaman di bidang administrasi pemerintahan,
              pengembangan aplikasi web menggunakan React,
              Unity Game Development, serta IT Support.

            </p>

            <p className="text-gray-400 leading-8 mt-6">

              Saya senang mempelajari teknologi baru,
              membangun aplikasi modern,
              menyelesaikan masalah menggunakan teknologi,
              serta bekerja secara tim maupun individu.

            </p>

            {/* Info */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-900 rounded-xl p-5">

                <h4 className="text-blue-400 mb-2">
                  Nama
                </h4>

                <p>Ahmad Dhani</p>

              </div>

              <div className="bg-slate-900 rounded-xl p-5">

                <h4 className="text-blue-400 mb-2">
                  Pendidikan
                </h4>

                <p>S1 Teknik Informatika</p>

              </div>

              <div className="bg-slate-900 rounded-xl p-5">

                <h4 className="text-blue-400 mb-2">
                  Bidang
                </h4>

                <p>
                  Frontend Developer
                </p>

              </div>

              <div className="bg-slate-900 rounded-xl p-5">

                <h4 className="text-blue-400 mb-2">
                  Lokasi
                </h4>

                <p>
                  Jawa Tengah, Indonesia
                </p>

              </div>

            </div>

            {/* Button */}

            <a
              href={profileData.cv}
              className="inline-block mt-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              Download CV
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}