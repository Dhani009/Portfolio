import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="
      group
      relative
      min-w-[380px]
      max-w-[380px]
      bg-slate-800
      rounded-3xl
      overflow-hidden
      border
      border-slate-700
      hover:border-blue-500
      hover:shadow-[0_0_40px_rgba(37,99,235,.35)]
      transition-all
      duration-500
      "
    >
      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:brightness-50
          "
        />

        {/* Overlay */}

        <div
          className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          bg-black/20
          backdrop-blur-sm
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          "
        >
          <h3 className="text-white text-2xl font-bold">
            {project.title}
          </h3>

          <p className="text-gray-300 mt-2">
            {project.category}
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              w-12
              h-12
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >
              <FaGithub />
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
              w-12
              h-12
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              hover:scale-110
              transition
              "
            >
              <FaExternalLinkAlt />
            </a>

          </div>
        </div>

        {/* Featured */}

        {project.featured && (
          <span
            className="
            absolute
            top-4
            left-4
            bg-yellow-400
            text-black
            text-xs
            font-bold
            px-3
            py-1
            rounded-full
            "
          >
            ⭐ Featured
          </span>
        )}

        {/* Status */}

        <span
          className={`
          absolute
          top-4
          right-4
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold

          ${
            project.status === "Completed"
              ? "bg-green-500 text-white"
              : project.status === "In Progress"
              ? "bg-orange-500 text-white"
              : "bg-purple-500 text-white"
          }
          `}
        >
          {project.status}
        </span>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-4 leading-7">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-blue-500/10
              border
              border-blue-500/30
              text-blue-300
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            text-gray-300
            hover:text-blue-400
            transition
            "
          >
            <FaGithub />

            Github
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            text-gray-300
            hover:text-blue-400
            transition
            "
          >
            <FaExternalLinkAlt />

            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}