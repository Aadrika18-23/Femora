import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SpecialistCard({
  name,
  speciality,
  experience,
  color,
  onClick,
}) {

    const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/doctor-profile")}
      className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
    >
      <div
        className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-3xl`}
      >
        👩‍⚕️
      </div>

      <h2 className="mt-5 text-xl font-bold">
        {name}
      </h2>

      <p className="text-pink-600 mt-1">
        {speciality}
      </p>

      <p className="text-gray-500 mt-2">
        {experience}
      </p>

      <button className="mt-6 flex items-center gap-2 text-pink-600 font-semibold">
        Consult
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SpecialistCard;