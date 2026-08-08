import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserSecret } from "react-icons/fa";

function PrivacyConsent() {
  const navigate = useNavigate();

  const [accepted, setAccepted] = useState(false);

  function handleContinue() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-lg w-full max-w-xl p-8">

        <div className="text-center">

          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
            <FaShieldAlt className="text-pink-600 text-3xl" />
          </div>

          <h1 className="text-3xl font-bold text-pink-600 mt-5">
            Privacy & Consent
          </h1>

          <p className="text-gray-500 mt-3">
            Before using Femora, please review how we protect your information.
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex gap-4">
            <FaLock className="text-pink-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Secure Data</h3>
              <p className="text-gray-500 text-sm">
                Your health information is encrypted and stored securely.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaUserSecret className="text-pink-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Anonymous Consultations</h3>
              <p className="text-gray-500 text-sm">
                Anonymous sessions hide your personal identity from consultants.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaShieldAlt className="text-pink-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Your Control</h3>
              <p className="text-gray-500 text-sm">
                You choose what information you share and can revoke consent anytime.
              </p>
            </div>
          </div>

        </div>

        <label className="flex items-start gap-3 mt-8 cursor-pointer">

          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="mt-1"
          />

          <span className="text-sm text-gray-600">
            I have read and agree to Femora's Privacy Policy and Consent Terms.
          </span>

        </label>

        <button
          disabled={!accepted}
          onClick={handleContinue}
          className="w-full mt-8 bg-pink-600 disabled:bg-pink-300 text-white py-4 rounded-xl font-semibold"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default PrivacyConsent;