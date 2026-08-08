import Card from "./Card";

function NextCheckupCard() {
  return (
    <Card className="bg-pink-100 p-6">

      <h3 className="text-xl font-semibold text-pink-900">
        📅 Next Checkup
      </h3>

      <div className="mt-5 bg-white rounded-xl p-4">

        <p className="text-sm text-gray-500">
          Tuesday, Oct 24
        </p>

        <h4 className="mt-1 font-semibold text-gray-800">
          Annual Wellness Exam
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          Dr. Anita Sharma • 10:30 AM
        </p>

      </div>

      <div className="mt-5 bg-red-100 border border-red-200 rounded-xl p-4">

        <p className="font-semibold text-red-700">
          ⚠ Action Needed
        </p>

        <p className="text-red-600 mt-1 text-sm">
          Flu Vaccination due this month.
        </p>

      </div>

    </Card>
  );
}

export default NextCheckupCard;