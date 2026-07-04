import SkillCard from "./SkillCard";

export default function SkillGrid({ title, items }) {
  return (
    <div className="mb-20">

      <div className="flex items-center gap-4 mb-8">

        <div className="w-2 h-10 rounded-full bg-blue-500"></div>

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {items.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}

      </div>

    </div>
  );
}