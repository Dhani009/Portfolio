import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline({ data }) {
  return (
    <div className="relative">

      {/* Garis Tengah */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-500/30"></div>

      <div className="space-y-14">

        {data.map((item, index) => (

          <div
            key={index}
            className="relative pl-20"
          >

            {/* Titik Timeline */}

            <div className="absolute left-3 top-8 w-7 h-7 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg"></div>

            <ExperienceCard
              item={item}
              index={index}
            />

          </div>

        ))}

      </div>

    </div>
  );
}