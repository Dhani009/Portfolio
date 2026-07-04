import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Saya terbuka untuk peluang kerja sebagai Frontend Developer,
            React Developer, Unity Game Developer maupun IT Support.
            Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 border border-slate-800"
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:ahmadino16@gmail.com"
                    className="hover:text-blue-400"
                  >
                    ahmadino16@gmail.com
                  </a>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-gray-400">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400"
                  >
                    +62 85-799-566-789
                  </a>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center">
                  <FaLinkedin />
                </div>

                <div>
                  <p className="text-gray-400">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/ahmad-dhani-867b46365"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400"
                  >
                    Ahmad Dhani
                  </a>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-gray-700 flex items-center justify-center">
                  <FaGithub />
                </div>

                <div>
                  <p className="text-gray-400">
                    Github
                  </p>

                  <a
                    href="https://github.com/Dhani009"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    github.com/Dhani009
                  </a>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400">
                    Location
                  </p>

                  <p>
                    Pati, Jawa Tengah, Indonesia
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="mailto:emailkamu@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-slate-900 rounded-3xl p-10 border border-slate-800 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Message..."
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}