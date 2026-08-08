function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;