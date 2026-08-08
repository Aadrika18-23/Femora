import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ChooseRole() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8F8] flex items-center justify-center px-6">

      <div className="w-full max-w-2xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-pink-600">
            Femora
          </h1>

          <h2 className="mt-8 text-3xl font-bold text-gray-800">
            How will you use Femora?
          </h2>

          <p className="mt-3 text-gray-500">
            Select your path to personalized health insights or professional care coordination.
          </p>

        </div>

        <div className="space-y-5">

          <button
            onClick={() => setRole("user")}
            className={`w-full rounded-3xl border-2 p-6 text-left transition ${
              role === "user"
                ? "border-pink-500 bg-pink-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex justify-between items-center">

              <div>
                <h3 className="text-2xl font-bold">
                  👤 I am a User
                </h3>

                <p className="mt-2 text-gray-500">
                  Wellness tracking, cycle insights and AI health support.
                </p>
              </div>

              <span className="text-3xl">→</span>

            </div>
          </button>

          <button
            onClick={() => setRole("consultant")}
            className={`w-full rounded-3xl border-2 p-6 text-left transition ${
              role === "consultant"
                ? "border-pink-500 bg-pink-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex justify-between items-center">

              <div>
                <h3 className="text-2xl font-bold">
                  🩺 I am a Consultant
                </h3>

                <p className="mt-2 text-gray-500">
                  Verified healthcare professionals providing guidance.
                </p>
              </div>

              <span className="text-3xl">→</span>

            </div>
          </button>

        </div>

        <button
  onClick={() => {
    if (role === "user") {
      navigate("/create-account");
    } else if (role === "consultant") {
      navigate("/expert-login");
    }
  }}
  disabled={!role}
  className="w-full mt-8 bg-pink-600 disabled:bg-pink-300 text-white py-4 rounded-full font-semibold"
>
  Continue
</button>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?
          <span className="text-pink-600 font-semibold cursor-pointer">
            {" "}Log in
          </span>
        </p>

      </div>

    </div>
  );
}

export default ChooseRole;