function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2.5 rounded-full transition duration-200"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;