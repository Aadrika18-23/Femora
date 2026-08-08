function Badge({ text, color = "pink" }) {
  const colors = {
    pink: "bg-pink-100 text-pink-700",
    green: "bg-green-100 text-green-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[color]}`}>
      {text}
    </span>
  );
}

export default Badge;