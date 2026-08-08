import { FaExclamationTriangle } from "react-icons/fa";

function AIWarningBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4 items-start">

      <FaExclamationTriangle className="text-amber-500 text-2xl mt-1" />

      <div>

        <h3 className="font-bold text-amber-700">
          Medical Disclaimer
        </h3>

        <p className="text-amber-700 mt-2 text-sm leading-6">
          EERA provides AI-generated guidance for informational purposes only.
          It does not replace a qualified healthcare professional. If you're
          experiencing severe pain, heavy bleeding, breathing difficulty, or
          any medical emergency, seek immediate medical attention.
        </p>

      </div>

    </div>
  );
}

export default AIWarningBanner;