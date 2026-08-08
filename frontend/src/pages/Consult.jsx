import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import SpecialistCard from "../components/SpecialistCard";

function Consult() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 px-8 py-8 pb-28">

        {/* Heading */}

        <h1 className="text-5xl font-bold text-gray-900">
          Find a Specialist
        </h1>

        <p className="mt-3 text-xl text-gray-500">
          Connect with trusted and verified healthcare professionals for personalized care.
        </p>

        {/* Search */}

        <div className="mt-10">
          <input
            type="text"
            placeholder="Search specialists..."
            className="w-full rounded-2xl border border-pink-200 bg-white px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Categories */}

        <div className="flex gap-4 mt-8 flex-wrap">

          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium">
            All
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            Gynecologist
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            Psychologist
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            Nutritionist
          </button>

          <button className="bg-white px-6 py-3 rounded-full shadow">
            Dermatologist
          </button>

        </div>

        {/* Doctors */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

          <SpecialistCard
            name="Dr. Priya Sharma"
            speciality="Gynecologist"
            experience="12 Years Experience"
            color="bg-pink-100"
          />

          <SpecialistCard
            name="Dr. Riya Kapoor"
            speciality="Psychologist"
            experience="8 Years Experience"
            color="bg-purple-100"
          />

          <SpecialistCard
            name="Dr. Neha Singh"
            speciality="Nutritionist"
            experience="10 Years Experience"
            color="bg-blue-100"
          />

          <SpecialistCard
            name="Dr. Aditi Verma"
            speciality="Dermatologist"
            experience="9 Years Experience"
            color="bg-green-100"
          />

          <SpecialistCard
            name="Dr. Meera Joshi"
            speciality="Endocrinologist"
            experience="15 Years Experience"
            color="bg-yellow-100"
          />

          <SpecialistCard
            name="Dr. Kavya Rao"
            speciality="Women's Health"
            experience="11 Years Experience"
            color="bg-rose-100"
          />

        </div>

      </div>

      <BottomNav />
    </>
  );
}

export default Consult;