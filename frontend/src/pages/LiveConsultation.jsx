import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FaRobot, FaVideo, FaComments, FaFileMedical } from "react-icons/fa";

function LiveConsultation() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 p-6">

        <h1 className="text-4xl font-bold text-pink-600">
          Live Consultation
        </h1>

        <p className="text-gray-500 mt-2">
          Anonymous Patient ID : A241
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          {/* AI Summary */}

          <Card className="p-6">

            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaRobot className="text-pink-600" />
              EERA AI Summary
            </h2>

            <ul className="mt-5 space-y-3 text-gray-600 list-disc list-inside">
              <li>Irregular menstrual cycle</li>
              <li>Severe abdominal cramps</li>
              <li>Possible hormonal imbalance</li>
              <li>Recommend Gynecologist consultation</li>
            </ul>

          </Card>

          {/* Patient Notes */}

          <Card className="p-6">

            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaFileMedical className="text-pink-600" />
              Patient Notes
            </h2>

            <textarea
              rows="10"
              placeholder="Write notes here..."
              className="mt-5 w-full border rounded-2xl p-4 outline-none"
            />

          </Card>

        </div>

        {/* Action Buttons */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <button className="bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl flex justify-center items-center gap-3">

            <FaVideo />

            Start Video Call

          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl flex justify-center items-center gap-3">

            <FaComments />

            Open Chat

          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl">

            End Consultation

          </button>

        </div>

      </div>

    </>
  );
}

export default LiveConsultation;