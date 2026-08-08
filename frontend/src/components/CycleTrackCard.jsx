import Card from "./Card";

function CycleTrackCard() {
  return (
    <Card className="p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h3 className="text-lg font-bold text-gray-800">
            🌸 Cycle Health Track
          </h3>

          <p className="text-gray-500 mt-1">
            You're on Day 14. Your fertile window is now active.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
            High Fertility
          </span>

          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            Next Cycle: 14 days
          </span>
        </div>

      </div>
    </Card>
  );
}

export default CycleTrackCard;