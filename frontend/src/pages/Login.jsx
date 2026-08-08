import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Backend API will be added later
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-pink-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue using Femora
        </p>

        <form onSubmit={handleLogin} className="space-y-5 mt-8">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;