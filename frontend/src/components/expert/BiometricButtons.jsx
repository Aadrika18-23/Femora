function BiometricButtons() {
  return (
    <div className="mt-8">

      <p className="text-center text-gray-400 text-sm mb-4">
        Secure Biometrics
      </p>

      <div className="grid grid-cols-2 gap-4">

        <button className="border rounded-full py-3 hover:bg-pink-50">
          Face ID
        </button>

        <button className="border rounded-full py-3 hover:bg-pink-50">
          Touch ID
        </button>

      </div>

    </div>
  );
}

export default BiometricButtons;