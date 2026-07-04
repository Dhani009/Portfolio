import { useRef } from "react";

import CarouselButton from "./CarouselButton";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }) {

  const scrollRef = useRef(null);

  const scrollLeft = () => {

    scrollRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });

  };

  const scrollRight = () => {

    scrollRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });

  };

  const handleWheel = (e) => {

    e.preventDefault();

    scrollRef.current.scrollLeft += e.deltaY;

  };

  return (

    <>

      <CarouselButton

        onPrev={scrollLeft}

        onNext={scrollRight}

      />

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="
        hide-scrollbar
        flex
        gap-8
        overflow-x-auto
        scroll-smooth
        snap-x
        snap-mandatory
        pb-6
        "
      >

        {projects.map((project) => (

          <div
            key={project.id}
            className="snap-start"
          >

            <ProjectCard project={project} />

          </div>

        ))}

      </div>

    </>

  );

}