import { useNavigate } from "react-router-dom";

function AISummaryCard() {
  const navigate = useNavigate();

  const handleShare = () => {
    navigate("/consult");
  };

  return (
    <div className="mt-6 bg-purple-50 border border-purple-200 rounded-3xl p-6">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-xl font-bold text-purple-900">
            🧠 EERA Health Summary
          </h3>

          <p className="text-sm text-purple-700 mt-1">
            A summary generated from your conversation
          </p>
        </div>

        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
          Private
        </span>

      </div>

      <div className="mt-5 bg-white rounded-2xl p-5">

        <h4 className="font-semibold text-gray-800">
          Current concerns
        </h4>

        <ul className="mt-3 space-y-2 text-gray-600 text-sm">
          <li>• Menstrual cramps</li>
          <li>• Pain experienced for approximately two days</li>
          <li>• Further symptom assessment recommended</li>
        </ul>

      </div>

      <button
        onClick={handleShare}
        className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold transition"
      >
        Share Summary with Consultant
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        Your personal identity will not be shared.
      </p>

    </div>
  );
}

export default AISummaryCard;