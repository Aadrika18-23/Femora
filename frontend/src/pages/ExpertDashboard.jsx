import Navbar from "../components/Navbar";
import Card from "../components/Card";
import PendingRequestCard from "../components/PendingRequestCard";

function ExpertDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 p-6 pb-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-pink-600">
          Expert Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Dr. Anita 👋
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Pending Requests</h2>
            <p className="text-4xl font-bold text-pink-600 mt-3">12</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Active Sessions</h2>
            <p className="text-4xl font-bold text-pink-600 mt-3">8</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Completed Today</h2>
            <p className="text-4xl font-bold text-pink-600 mt-3">31</p>
          </Card>

        </div>

        {/* Pending Requests */}
        <h2 className="text-2xl font-bold mt-10">
          Pending Consultation Requests
        </h2>

        <div className="space-y-6 mt-6">

          <PendingRequestCard />

          <PendingRequestCard />

          <PendingRequestCard />

        </div>

      </div>

    </>
  );
}

export default ExpertDashboard;