import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DoctorProfile() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 px-8 py-8 pb-28">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <div className="flex flex-col lg:flex-row gap-10">

            <div className="w-44 h-44 rounded-3xl bg-pink-100 flex items-center justify-center text-7xl">
              👩‍⚕️
            </div>

            <div className="flex-1">

              <h1 className="text-4xl font-bold">
                Dr. Priya Sharma
              </h1>

              <p className="text-pink-600 text-xl mt-2">
                Gynecologist
              </p>

              <div className="flex gap-8 mt-6 text-gray-600">

                <div className="flex items-center gap-2">
                  <FaStar />
                  4.9 Rating
                </div>

                <div className="flex items-center gap-2">
                  <FaClock />
                  12 Years
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  Delhi
                </div>

              </div>

              <p className="mt-8 text-gray-600 leading-8">
                Experienced women's health specialist focusing on
                menstrual disorders, PCOS, fertility care,
                pregnancy support and preventive healthcare.
              </p>

              <button
                onClick={() => navigate("/book-consultation")}
                className="mt-10 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                Book Consultation
              </button>

            </div>

          </div>

        </div>

      </div>

      <BottomNav />
    </>
  );
}

export default DoctorProfile;