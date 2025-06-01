import React from "react";

export default function RoomCard({ room, onBookClick }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      <img src={room.image} alt={room.title} className="w-full md:w-1/2 object-cover" />
      <div className="p-6 flex-1">
        <h2 className="text-xl font-semibold mb-2">{room.title}</h2>
        <p className="text-gray-600 mb-2">{room.description}</p>
        <p className="font-semibold mb-4">{room.area}</p>

        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1 mb-4">
          {room.amenities.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>

        <button
          onClick={() => onBookClick(room.title)}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
