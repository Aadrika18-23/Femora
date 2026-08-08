function LoginForm() {
  return (
    <form className="space-y-5">

      <div>
        <label className="block mb-2 text-gray-600">
          Expert ID or Email
        </label>

        <input
          type="text"
          placeholder="name@femora-health.com"
          className="w-full rounded-full border px-5 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-gray-600">
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-full border px-5 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <button
        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-full font-semibold transition"
      >
        Sign In
      </button>

    </form>
  );
}

export default LoginForm;