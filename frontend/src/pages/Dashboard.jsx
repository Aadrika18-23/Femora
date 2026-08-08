import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

import CycleStatusCard from "../components/CycleStatusCard";
import NextCheckupCard from "../components/NextCheckupCard";
import WellnessProgress from "../components/WellnessProgress";
import EeraCard from "../components/EeraCard";
import QuickActions from "../components/QuickActions";
import CommunityPreview from "../components/CommunityPreview";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 px-6 md:px-8 py-8 pb-28">

        {/* Greeting */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Good Morning, Aadrika 👋
          </h2>

          <p className="mt-3 text-lg md:text-xl text-gray-500">
            You're in your follicular phase. Energy levels might be rising.
          </p>
        </section>

        {/* Cycle + Checkup */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">

          <CycleStatusCard />

          <NextCheckupCard />

        </section>

        {/* EERA AI */}
        <section className="mt-8">
          <EeraCard />
        </section>

        {/* Wellness */}
        <section className="mt-8">
          <WellnessProgress />
        </section>

        {/* Quick Actions */}
        <section className="mt-8">
          <QuickActions />
        </section>

        {/* Community */}
        <section className="mt-8">
          <CommunityPreview />
        </section>

      </main>

      <BottomNav />
    </>
  );
}

export default Dashboard;