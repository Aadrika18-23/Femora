import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BookConsultation() {

  const navigate = useNavigate();

  const [reason, setReason] = useState("");
  const [mode, setMode] = useState("Anonymous");

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 px-8 py-8 pb-28">

        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold">
            Book Consultation
          </h1>

          <p className="text-gray-500 mt-3">
            Complete a few details before connecting with your healthcare expert.
          </p>

          {/* Consultation Mode */}

          <div className="mt-10">

            <h2 className="font-semibold text-xl">
              Consultation Mode
            </h2>

            <div className="flex gap-5 mt-5">

              <button
                onClick={() => setMode("Anonymous")}
                className={`px-6 py-3 rounded-full ${
                  mode === "Anonymous"
                    ? "bg-pink-600 text-white"
                    : "bg-pink-100"
                }`}
              >
                Anonymous
              </button>

              <button
                onClick={() => setMode("Identity Visible")}
                className={`px-6 py-3 rounded-full ${
                  mode === "Identity Visible"
                    ? "bg-pink-600 text-white"
                    : "bg-pink-100"
                }`}
              >
                Identity Visible
              </button>

            </div>

          </div>

          {/* Reason */}

          <div className="mt-10">

            <label className="font-semibold text-xl">
              Reason for Consultation
            </label>

            <textarea
              rows="6"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Briefly describe your concern..."
              className="mt-4 w-full border rounded-2xl p-5 outline-none focus:ring-2 focus:ring-pink-500"
            />

          </div>

          {/* Continue */}

          <button
            onClick={() => navigate("/consultation-confirmed")}
            className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold"
          >
            Confirm Consultation
          </button>

        </div>

      </div>

      <BottomNav />
    </>
  );
}

export default BookConsultation;