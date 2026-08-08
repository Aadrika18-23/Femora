function AIHeader() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-white shadow-lg">

      <h1 className="text-4xl font-bold">
        👩‍⚕️ Meet EERA
      </h1>

      <p className="mt-4 text-pink-100 text-lg">
        Your private AI companion for women's health.
      </p>

      <div className="flex gap-3 mt-6">

        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          🔒 Anonymous
        </span>

        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          🌍 Multi-language
        </span>

        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          🤖 AI Powered
        </span>

      </div>

    </div>
  );
}

export default AIHeader;