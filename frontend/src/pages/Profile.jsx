import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Card from "../components/Card";

function Profile() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 px-6 py-8 pb-28">

        {/* Header */}
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your account and privacy preferences.
          </p>

          {/* Profile Card */}
          <Card className="mt-8 p-6">

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 text-3xl font-bold">
                A
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Aadrika
                </h2>

                <p className="text-gray-500">
                  Femora Member
                </p>

                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ Privacy Protected
                </span>
              </div>

            </div>

          </Card>

          {/* Health Preferences */}
          <Card className="mt-6 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Health Preferences
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Cycle tracking
                </span>

                <span className="text-pink-600 font-semibold">
                  Enabled
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  EERA personalization
                </span>

                <span className="text-pink-600 font-semibold">
                  Enabled
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Anonymous community
                </span>

                <span className="text-green-600 font-semibold">
                  Enabled
                </span>
              </div>

            </div>

          </Card>

          {/* Privacy */}
          <Card className="mt-6 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Privacy & Safety
            </h2>

            <div className="mt-5 bg-pink-50 rounded-2xl p-5">

              <p className="font-semibold text-pink-700">
                🔒 Your health information stays private.
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Femora is designed to keep consultations anonymous and
                protect sensitive women's health information.
              </p>

            </div>

          </Card>

          {/* Settings */}
          <Card className="mt-6 p-6">

            <h2 className="text-xl font-bold text-gray-900">
              Settings
            </h2>

            <div className="mt-4 space-y-3">

              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-pink-50 transition">
                🔔 Notification Preferences
              </button>

              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-pink-50 transition">
                🌙 Appearance
              </button>

              <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-pink-50 transition">
                ❓ Help & Support
              </button>

            </div>

          </Card>

        </div>

      </main>

      <BottomNav />
    </>
  );
}

export default Profile;