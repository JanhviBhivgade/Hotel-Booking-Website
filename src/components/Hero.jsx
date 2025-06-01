import React, { useState } from 'react';

function HeroSection() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    children: '0',
    room: '1'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookNow = () => {
    console.log('Booking data:', bookingData);
    alert('Booking form submitted! Check console for details.');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with darker overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/736x/b1/5f/25/b15f257289f1d06d0e4dd4fc332de429.jpg')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Main Title - Much larger and bolder */}
        <p className="text-5xl md:text-5xl lg:text-[6rem] font-black mb-20 tracking-tight leading-none">
          A Luxury Stay
        </p>
        
        {/* Booking Form - Redesigned to match image */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-8 rounded-2xl shadow-2xl max-w-5xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            {/* Check In */}
            <div className="text-left">
              <label className="block text-white text-base font-semibold mb-3 tracking-wide">
                Check in
              </label>
              <input
                type="date"
                name="checkIn"
                value={bookingData.checkIn}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white bg-opacity-10 border-2 border-white border-opacity-30 rounded-xl text-white text-lg placeholder-white placeholder-opacity-70 focus:outline-none focus:border-orange-400 focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            
            {/* Check Out */}
            <div className="text-left">
              <label className="block text-white text-base font-semibold mb-3 tracking-wide">
                Check out
              </label>
              <input
                type="date"
                name="checkOut"
                value={bookingData.checkOut}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white bg-opacity-10 border-2 border-white border-opacity-30 rounded-xl text-white text-lg placeholder-white placeholder-opacity-70 focus:outline-none focus:border-orange-400 focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            
            {/* Children */}
            <div className="text-left">
              <label className="block text-white text-base font-semibold mb-3 tracking-wide">
                Children
              </label>
              <select
                name="children"
                value={bookingData.children}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white bg-opacity-10 border-2 border-white border-opacity-30 rounded-xl text-white text-lg focus:outline-none focus:border-orange-400 focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="0" className="bg-gray-900 text-white">0</option>
                <option value="1" className="bg-gray-900 text-white">1</option>
                <option value="2" className="bg-gray-900 text-white">2</option>
                <option value="3" className="bg-gray-900 text-white">3</option>
                <option value="4" className="bg-gray-900 text-white">4+</option>
              </select>
            </div>
            
            {/* Room */}
            <div className="text-left">
              <label className="block text-white text-base font-semibold mb-3 tracking-wide">
                Room
              </label>
              <select
                name="room"
                value={bookingData.room}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white bg-opacity-10 border-2 border-white border-opacity-30 rounded-xl text-white text-lg focus:outline-none focus:border-orange-400 focus:bg-opacity-20 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="1" className="bg-gray-900 text-white">1</option>
                <option value="2" className="bg-gray-900 text-white">2</option>
                <option value="3" className="bg-gray-900 text-white">3</option>
                <option value="4" className="bg-gray-900 text-white">4</option>
                <option value="5" className="bg-gray-900 text-white">5+</option>
              </select>
            </div>
            
            {/* Book Now Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                onClick={handleBookNow}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/25 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 active:scale-95"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
     
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-12 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
    </section>
  );
}

export default HeroSection;