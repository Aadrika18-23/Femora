import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleContinue() {
    navigate("/identity-verification");
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-lg w-full max-w-lg p-8">

        <h1 className="text-3xl font-bold text-pink-600 text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join Femora and start your health journey.
        </p>

        <div className="space-y-4 mt-8">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            onClick={handleContinue}
            className="w-full bg-pink-600 text-white py-3 rounded-xl"
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateAccount;