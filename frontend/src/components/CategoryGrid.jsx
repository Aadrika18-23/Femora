import Card from "./Card";

const categories = [
  { icon: "🩸", title: "Period Pain" },
  { icon: "📅", title: "Irregular Periods" },
  { icon: "🤰", title: "Pregnancy" },
  { icon: "🧠", title: "Mental Wellness" },
  { icon: "🧬", title: "PCOS & Hormones" },
  { icon: "💊", title: "Medicine Questions" },
  { icon: "🥗", title: "Nutrition" },
  { icon: "❤️", title: "General Health" },
];

function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((item, index) => (
        <Card
          key={index}
          className="p-5 hover:shadow-lg transition cursor-pointer"
        >
          <div className="text-3xl">{item.icon}</div>

          <h3 className="mt-3 font-semibold text-gray-800">
            {item.title}
          </h3>
        </Card>
      ))}
    </div>
  );
}

export default CategoryGrid;