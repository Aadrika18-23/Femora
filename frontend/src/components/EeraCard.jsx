import { FaArrowRight, FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EeraCard() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 p-8 shadow-xl h-full">

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-white/10 rounded-full"></div>

      <div className="relative z-10">

        <div className="flex justify-between items-center">

          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur">

            <FaRobot className="text-3xl text-white" />

          </div>

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
            AI Assistant
          </span>

        </div>

        <h2 className="mt-8 text-3xl font-bold text-white">
          Meet EERA
        </h2>

        <p className="mt-4 text-pink-100 leading-7">
          Your personal AI companion for women's health.
          Track symptoms, understand your cycle,
          receive wellness insights and know when to
          consult an expert.
        </p>

        <div className="mt-8 flex gap-3 flex-wrap">

          <span className="bg-white/15 px-4 py-2 rounded-full text-sm text-white">
            Cycle Insights
          </span>

          <span className="bg-white/15 px-4 py-2 rounded-full text-sm text-white">
            Symptom Check
          </span>

          <span className="bg-white/15 px-4 py-2 rounded-full text-sm text-white">
            AI Guidance
          </span>

        </div>

        <button
          onClick={() => navigate("/ai-chat")}
          className="mt-10 flex items-center gap-3 bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Talk to EERA

          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default EeraCard;