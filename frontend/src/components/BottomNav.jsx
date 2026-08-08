import { Link, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  const active = (path) =>
    location.pathname === path
      ? "text-pink-600 font-semibold"
      : "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-pink-100 shadow-lg">
      
      <div className="max-w-5xl mx-auto flex justify-around items-center py-3 px-4">

        {/* Home */}
        <Link
          to="/dashboard"
          className={`flex flex-col items-center ${active("/dashboard")}`}
        >
          <span className="text-xl">🏠</span>
          <span className="text-sm">Home</span>
        </Link>

        {/* Eera AI */}
        <Link
          to="/ai-chat"
          className={`flex flex-col items-center ${active("/ai-chat")}`}
        >
          <span className="text-xl">🤖</span>
          <span className="text-sm">Eera AI</span>
        </Link>

        {/* Community */}
        <Link
          to="/community"
          className={`flex flex-col items-center ${active("/community")}`}
        >
          <span className="text-xl">👥</span>
          <span className="text-sm">Community</span>
        </Link>

        {/* Consult */}
        <Link
          to="/consult"
          className={`flex flex-col items-center ${active("/consult")}`}
        >
          <span className="text-xl">🩺</span>
          <span className="text-sm">Consult</span>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex flex-col items-center ${active("/profile")}`}
        >
          <span className="text-xl">👤</span>
          <span className="text-sm">Profile</span>
        </Link>

      </div>
    </nav>
  );
}

export default BottomNav;