export default function BookRoom() {
    const rooms = [
      {
        name: 'Single Room',
        price: '$120/Night',
        image: '/images/room1.png',
      },
      {
        name: 'Family Room',
        price: '$220/Night',
        image: '/images/room2.png',
      },
      {
        name: 'Deluxe Room',
        price: '$400/Night',
        image: '/images/room3.png',
      },
    ];
  
    return (
      <section className="py-20 bg-white text-center">
        <div className="max-w-full mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a room</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Book our room today and indulge in unmatched comfort and style.
          Relax, unwind, and enjoy every moment of your perfect getaway.
          Your dream stay is just one reservation away!
                    </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <div key={idx} className="relative rounded overflow-hidden shadow-lg group">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold rounded shadow">
                  {room.price}
                </div>
                <div className="bg-orange-400 text-white text-lg font-medium py-2 px-4 absolute bottom-0 left-0 w-full text-center transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                  {room.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  