import React from "react";

export default function BookingModal({ show, onClose, roomTitle }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl font-bold">&times;</button>

        <h2 className="text-2xl font-bold mb-4">Book: {roomTitle}</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border p-3 rounded"
          />
          <input
            type="date"
            placeholder="Check-in"
            className="w-full border p-3 rounded"
          />
          <input
            type="date"
            placeholder="Check-out"
            className="w-full border p-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
