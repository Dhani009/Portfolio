import { useState } from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects";

import ProjectFilter from "../projects/ProjectFilter";
import ProjectCarousel from "../projects/ProjectCarousel";

export default function Projects() {

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (item) => item.category === filter
        );

  return (

    <section
      id="projects"
      className="py-28 bg-slate-900 text-white"
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

          viewport={{
            once: true,
          }}

        >

          <p className="uppercase tracking-[5px] text-blue-400">

            Portfolio

          </p>

          <h2 className="text-5xl font-bold mt-3">

            Featured Projects

          </h2>

          <p className="text-gray-400 mt-5">

            Beberapa project yang pernah saya kerjakan.

          </p>

        </motion.div>

        <ProjectFilter

          current={filter}

          setCurrent={setFilter}

        />

        <ProjectCarousel

          projects={filteredProjects}

        />

      </div>

    </section>

  );

}