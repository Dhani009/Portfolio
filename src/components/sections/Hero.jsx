import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDownload,
  FaEnvelope,
  FaArrowDown,
  FaReact,
  FaUnity,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

import profileData from "../../data/profile";
import HeroStats from "../ui/HeroStats";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center bg-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full"></div>

        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-black text-white mt-6 leading-tight">
            Ahmad
            <span className="text-blue-500"> Dhani</span>
          </h1>

          <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mt-8 h-16">

            <Typewriter
              words={[
                "Frontend Developer",
                "Unity Game Developer",
                "IT Support",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
            />

          </div>

          {/* Available */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-3">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-green-400 font-semibold">
              Available for Work
            </span>

          </div>

          <p className="mt-8 text-gray-300 leading-8 max-w-xl">
            Saya seorang Frontend Developer yang berfokus pada React,
            JavaScript, Tailwind CSS serta Unity Game Development.
            Memiliki pengalaman di bidang pemerintahan, administrasi,
            dan pengembangan aplikasi modern.
          </p>

          {/* BUTTON */}

          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={profileData.cv}
              download="CV_ATS_Ahmad_Dhani.pdf"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold flex items-center gap-3 hover:bg-blue-700 transition"
            >
              <FaDownload />
              Download CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-8 py-4 rounded-full border border-slate-700 text-white flex items-center gap-3 hover:bg-slate-800 transition"
            >
              <FaEnvelope />
              Contact Me
            </motion.a>

          </div>

          <HeroStats />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative flex justify-center"
        >

          <div className="absolute w-[380px] h-[380px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <img
            src={profileData.image}
            alt={profileData.name}
            className="relative w-[340px] lg:w-[420px] rounded-full border-8 border-slate-800 shadow-[0_0_60px_rgba(37,99,235,.35)]"
          />

          {/* Floating Badges */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-10 -left-5 bg-slate-900 border border-slate-700 px-5 py-3 rounded-2xl flex items-center gap-3"
          >
            <FaReact className="text-cyan-400 text-2xl" />
            <span className="text-white">React</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            className="absolute bottom-24 -left-10 bg-slate-900 border border-slate-700 px-5 py-3 rounded-2xl flex items-center gap-3"
          >
            <SiJavascript className="text-yellow-400 text-2xl" />
            <span className="text-white">JavaScript</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-16 -right-8 bg-slate-900 border border-slate-700 px-5 py-3 rounded-2xl flex items-center gap-3"
          >
            <FaUnity className="text-white text-2xl" />
            <span className="text-white">Unity</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-10 right-0 bg-slate-900 border border-slate-700 px-5 py-3 rounded-2xl flex items-center gap-3"
          >
            <SiTailwindcss className="text-sky-400 text-2xl" />
            <span className="text-white">Tailwind</span>
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <motion.button
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white"
      >
        <span className="text-sm mb-2">
          Scroll Down
        </span>

        <FaArrowDown />
      </motion.button>
    </section>
  );
}