import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ConsultationConfirmed() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6 pb-24">

        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl text-center">

          <FaCheckCircle className="text-7xl text-green-500 mx-auto" />

          <h1 className="text-4xl font-bold mt-6">
            Consultation Requested
          </h1>

          <p className="text-gray-500 mt-5 text-lg leading-8">
            Your consultation request has been successfully sent to a verified
            healthcare expert.
          </p>

          <div className="bg-pink-50 rounded-2xl p-6 mt-8">

            <h3 className="font-semibold text-xl">
              Current Status
            </h3>

            <p className="text-pink-600 mt-3 font-medium">
              Waiting for Expert Acceptance...
            </p>

            <p className="text-gray-500 mt-2">
              Estimated response time: 5–15 minutes
            </p>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold"
          >
            Back to Dashboard
          </button>

        </div>

      </div>

      <BottomNav />
    </>
  );
}

export default ConsultationConfirmed;