import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PendingRequestCard() {

  const navigate = useNavigate();

  return (

    <div className="bg-white rounded-3xl shadow-md p-6">

      <div className="flex justify-between">

        <div className="flex gap-4">

          <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center">

            <FaUserCircle className="text-pink-600 text-3xl"/>

          </div>

          <div>

            <h2 className="font-bold text-xl">
              Anonymous User #A241
            </h2>

            <p className="text-gray-500">
              Gynecology Consultation
            </p>

          </div>

        </div>

        <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
          High
        </span>

      </div>

      <p className="mt-6 text-gray-600">
        Irregular periods, severe cramps, fatigue.
      </p>

      <div className="flex gap-4 mt-8">

       <button
  onClick={() => navigate("/consultation-request")}
  className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700"
>
  Accept
</button>

        <button className="bg-gray-100 px-6 py-3 rounded-xl">
          Decline
        </button>

      </div>

    </div>

  );

}

export default PendingRequestCard;