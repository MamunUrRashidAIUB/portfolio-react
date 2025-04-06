import { useState } from "react";
// import img from "/free.jpg"; // Make sure this path is correct based on your project structure

export default function PalestineBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-xl">
        <div className="relative mx-auto mb-6 h-48 w-64">
          <img
            src="/Photos/free.jpg"
            alt="Free Palestine"
            className="h-full w-full rounded-md object-cover"
          />
        </div>

        <h2 className="mb-6 text-3xl font-bold text-black">Free Palestine</h2>
        <button
          onClick={() => setIsVisible(false)}
          className="rounded-lg bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
