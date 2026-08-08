function LogoHeader() {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 mx-auto rounded-full bg-pink-600 flex items-center justify-center text-white text-3xl font-bold">
        ♀
      </div>

      <h1 className="mt-5 text-4xl font-bold text-pink-700">
        Expert Portal
      </h1>

      <p className="mt-2 text-gray-500">
        Welcome back. Please authenticate to access your professional dashboard.
      </p>
    </div>
  );
}

export default LogoHeader;