export default function HeroStats() {
  const stats = [
    {
      value: "2+",
      label: "Pengalaman",
    },
    {
      value: "15+",
      label: "Project",
    },
    {
      value: "10+",
      label: "Teknologi",
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 mt-14">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-4xl font-bold text-blue-500">
            {item.value}
          </h2>

          <p className="text-gray-400 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}