function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left Side */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-lg">
            F
          </div>

          <div>
            <h1 className="text-2xl font-bold text-pink-600">
              Femora
            </h1>

            <p className="text-xs text-gray-500">
              Women's Health Platform
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <button className="text-2xl hover:scale-110 transition">
            🔔
          </button>

          <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-semibold text-pink-700">
            A
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;