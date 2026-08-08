import Card from "./Card";

function WellnessProgress() {
  const items = [
    {
      title: "Hydration",
      value: "6/8 Glasses",
      icon: "💧",
      color: "bg-sky-100",
    },
    {
      title: "Sleep",
      value: "7h 40m",
      icon: "😴",
      color: "bg-violet-100",
    },
    {
      title: "Mindfulness",
      value: "15 mins",
      icon: "🧘",
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Wellness Progress
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <Card
            key={item.title}
            className={`${item.color} p-6`}
          >
            <div className="text-4xl">
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {item.value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WellnessProgress;