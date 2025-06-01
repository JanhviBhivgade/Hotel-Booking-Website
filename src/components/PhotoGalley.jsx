import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample hotel/resort images - replace with actual image URLs
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury Hotel Breakfast",
      category: "Dining Experience"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Elegant Hotel Room",
      category: "Luxury Rooms"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Luxury Suite",
      category: "Premium Suites"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Hotel Restaurant",
      category: "Fine Dining"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Hotel Pool Area",
      category: "Pool & Spa"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Hotel Lobby",
      category: "Reception & Lobby"
    }
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-12xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Our Gallery</h2>
          <p className="text-black-300 max-w-2xl mx-auto">
            Discover the elegance and luxury of our resort through these stunning images
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Image Display */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px]">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Image Info */}
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.alt}</h3>
                  <p className="text-lg text-gray-200">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-800 scale-125' 
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;