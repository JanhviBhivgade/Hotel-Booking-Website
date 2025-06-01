import React, { useState } from "react";
import RoomCard from "../components/RoomCard";
import BookingModal from "../components/BookingModal";

const rooms = [
    {
        title: "Suite With Balcony",
        description:
            "Spacious suite with king bed, ensuite bathroom, living room, and balcony.",
        area: "Area: 46 sq.mtr.",
        amenities: [
            "Mini Fridge",
            "LCD TV",
            "Iron and Board",
            "Electronic Safe",
            "Wi-Fi",
            "Phone",
            "Working Desk",
            "DTH Services",
            "Tea/Coffee Maker",
        ],
        image: "/images/suiteroom1.png", // Replace with your actual image path
    },
    {
        title: "Deluxe Sea View Room",
        description:
            "Enjoy breathtaking views with modern amenities and cozy interiors.",
        area: "Area: 38 sq.mtr.",
        amenities: [
            "Balcony View",
            "AC",
            "Room Service",
            "Wi-Fi",
            "Coffee Maker",
            "Smart TV",
        ],
        image: "/images/suiteroom2.png",
    },
    {
        title: "Garden Villa",
        description:
            "Peaceful garden-side villa for a relaxing stay in nature’s lap.",
        area: "Area: 50 sq.mtr.",
        amenities: [
            "Private Garden",
            "Bathtub",
            "Wi-Fi",
            "Mini Bar",
            "Room Heater",
            "Sofa Set",
        ],
        image: "/images/suiteroom3.png",
    },

    {
        title: "Suite With Balcony",
        description:
            "Spacious suite with king bed, ensuite bathroom, living room, and balcony.",
        area: "Area: 46 sq.mtr.",
        amenities: [
            "Mini Fridge",
            "LCD TV",
            "Iron and Board",
            "Electronic Safe",
            "Wi-Fi",
            "Phone",
            "Working Desk",
            "DTH Services",
            "Tea/Coffee Maker",
        ],
        image: "/images/suiteroom4.png", // Replace with your actual image path
    },
];

export default function RoomsPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState("");

    const handleBookClick = (roomTitle) => {
        setSelectedRoom(roomTitle);
        setModalOpen(true);
    };

    return (
        <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10">Our Rooms</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {rooms.map((room, idx) => (
                    <RoomCard key={idx} room={room} onBookClick={handleBookClick} />
                ))}
            </div>

            <BookingModal
                show={modalOpen}
                onClose={() => setModalOpen(false)}
                roomTitle={selectedRoom}
            />
        </div>
    );
}
