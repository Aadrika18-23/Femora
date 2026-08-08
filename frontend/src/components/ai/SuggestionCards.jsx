function SuggestionCards({ onSelect }) {
  const suggestions = [
    "Track my menstrual cycle",
    "Why am I having cramps?",
    "Suggest a healthy diet",
    "Give me tips for better sleep",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

      {suggestions.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className="bg-white hover:bg-pink-50 border border-pink-200 rounded-2xl p-4 text-left shadow-sm transition duration-200"
        >
          {index === 0 && "🩸 "}
          {index === 1 && "🤕 "}
          {index === 2 && "🍎 "}
          {index === 3 && "😴 "}

          {item}
        </button>
      ))}

    </div>
  );
}

export default SuggestionCards;