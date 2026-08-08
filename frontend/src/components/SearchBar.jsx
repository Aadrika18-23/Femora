function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search symptoms, medicines, health topics..."
        className="w-full bg-white rounded-2xl border border-pink-100 px-5 py-4 outline-none focus:border-pink-400 shadow-sm"
      />
    </div>
  );
}

export default SearchBar;