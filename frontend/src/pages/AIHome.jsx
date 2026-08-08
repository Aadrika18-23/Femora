import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import CategoryGrid from "../components/CategoryGrid";
import CycleTrackCard from "../components/CycleTrackCard";
import FloatingButton from "../components/FloatingButton";
import BottomNav from "../components/BottomNav";

function AIHome() {
  return (
    <div className="min-h-screen bg-pink-50 pb-28">

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">

        <SearchBar />

        <HeroBanner />

       <CategoryGrid /> 

       <CycleTrackCard /> 

      </main>

      <FloatingButton />

      <BottomNav />

    </div>
  );
}

export default AIHome;