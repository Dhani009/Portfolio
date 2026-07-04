const filters = [
  "All",
  "Web",
  "Game",
  "Mobile",
];

export default function ProjectFilter({
  current,
  setCurrent,
}) {
  return (
    <div className="flex flex-wrap gap-4 my-10">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => setCurrent(filter)}
          className={`
          px-5
          py-2
          rounded-full
          border
          transition

          ${
            current === filter
              ? "bg-blue-600 border-blue-600 text-white"
              : "border-slate-600 text-gray-400 hover:border-blue-500 hover:text-white"
          }
          `}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}