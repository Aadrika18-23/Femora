import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function ConsultationRequest() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 p-6">

      <h1 className="text-4xl font-bold text-pink-600">
        Consultation Requests
      </h1>

      <p className="text-gray-500 mt-2">
        New consultation requests waiting for approval.
      </p>

      <div className="space-y-6 mt-8">

        {/* Request 1 */}
        <Card className="p-6 flex justify-between items-center">

          <div>

            <h2 className="font-semibold text-lg">
              Anonymous User #1024
            </h2>

            <p className="text-gray-500">
              Age: 22 • Severe menstrual cramps
            </p>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() => navigate("/live-consultation")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-xl"
            >
              Accept
            </button>

            <button
              className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-xl"
            >
              Decline
            </button>

          </div>

        </Card>

        {/* Request 2 */}
        <Card className="p-6 flex justify-between items-center">

          <div>

            <h2 className="font-semibold text-lg">
              Anonymous User #1025
            </h2>

            <p className="text-gray-500">
              Pregnancy guidance requested
            </p>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() => navigate("/live-consultation")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-xl"
            >
              Accept
            </button>

            <button
              className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-xl"
            >
              Decline
            </button>

          </div>

        </Card>

      </div>

    </div>
  );
}

export default ConsultationRequest;