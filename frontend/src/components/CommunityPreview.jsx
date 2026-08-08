import { useNavigate } from "react-router-dom";
import { FaUsers, FaArrowRight } from "react-icons/fa";

function CommunityPreview() {
  const navigate = useNavigate();

  return (
    <div className="mt-12 bg-white rounded-3xl shadow-md p-8">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Community
          </h2>

          <p className="text-gray-500 mt-2">
            Connect with women, ask anonymously and share experiences.
          </p>

        </div>

        <button
          onClick={() => navigate("/community")}
          className="flex items-center gap-2 text-pink-600 font-semibold"
        >
          View All
          <FaArrowRight />
        </button>

      </div>

      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="rounded-2xl bg-pink-50 p-5">
          <FaUsers className="text-pink-600 text-2xl" />
          <h3 className="mt-3 font-semibold">
            PCOS Support
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            1.2k Members
          </p>
        </div>

        <div className="rounded-2xl bg-purple-50 p-5">
          <FaUsers className="text-purple-600 text-2xl" />
          <h3 className="mt-3 font-semibold">
            Pregnancy Care
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            850 Members
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-5">
          <FaUsers className="text-green-600 text-2xl" />
          <h3 className="mt-3 font-semibold">
            Mental Wellness
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            980 Members
          </p>
        </div>

      </div>

    </div>
  );
}

export default CommunityPreview;