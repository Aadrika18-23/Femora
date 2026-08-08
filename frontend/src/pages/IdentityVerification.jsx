import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera, FaShieldAlt, FaLock } from "react-icons/fa";

function IdentityVerification() {
  const navigate = useNavigate();

  const [verified, setVerified] = useState(false);

  function handleVerification() {
    // Temporary simulation
    // Later this will open the camera
    // capture image
    // call backend verification API

    setVerified(true);
  }

  function handleContinue() {
    navigate("/privacy-consent");
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-lg w-full max-w-xl p-8">

        <div className="text-center">

          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
            <FaShieldAlt className="text-pink-600 text-3xl" />
          </div>

          <h1 className="text-3xl font-bold text-pink-600 mt-5">
            Identity Verification
          </h1>

          <p className="text-gray-500 mt-3">
            To keep Femora safe and trusted, we verify every account once before
            granting full access.
          </p>

        </div>

        <div className="mt-8 bg-pink-50 rounded-2xl p-5">

          <h2 className="font-semibold text-lg">
            Why we verify
          </h2>

          <ul className="mt-3 space-y-2 text-gray-600">

            <li>✔ Prevent fake accounts</li>

            <li>✔ Create a safer women's community</li>

            <li>✔ Protect expert consultations</li>

            <li>✔ Improve platform trust</li>

          </ul>

        </div>

        <button
          onClick={handleVerification}
          className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl flex justify-center items-center gap-3 transition"
        >
          <FaCamera />
          {verified ? "Verification Complete" : "Verify with Camera"}
        </button>

        <div className="mt-8 bg-gray-50 rounded-2xl p-5 flex gap-4">

          <FaLock className="text-pink-600 text-2xl mt-1" />

          <div>

            <h3 className="font-semibold">
              Your Privacy Matters
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Your verification is encrypted and securely processed.
              It will never be displayed publicly or shared with
              other users.
            </p>

          </div>

        </div>

        <button
          disabled={!verified}
          onClick={handleContinue}
          className="w-full mt-8 bg-pink-600 disabled:bg-pink-300 text-white py-4 rounded-xl font-semibold"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default IdentityVerification;