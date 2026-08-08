import Badge from "./Badge";
import PrimaryButton from "./PrimaryButton";

function CycleStatusCard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Top Section */}
      <div className="flex items-center gap-6">

        {/* Cycle Ring */}
        <div className="w-28 h-28 rounded-full border-4 border-pink-500 flex flex-col items-center justify-center">

          <h2 className="text-3xl font-bold text-pink-600">
            12
          </h2>

          <p className="text-sm text-gray-500">
            Day
          </p>

        </div>

        {/* Content */}
        <div>

          <h3 className="text-xl font-semibold text-gray-800">
            Cycle Status
          </h3>

          <p className="text-gray-500 mt-2">
            Ovulation expected in 2 days.
          </p>

          <div className="flex gap-2 mt-4">
            <Badge text="Low Symptoms" color="pink" />
            <Badge text="High Energy" color="green" />
          </div>

        </div>

      </div>

      {/* Button */}
      <div className="mt-6">
        <PrimaryButton>
          Log Symptoms
        </PrimaryButton>
      </div>

    </div>
  );
}

export default CycleStatusCard;