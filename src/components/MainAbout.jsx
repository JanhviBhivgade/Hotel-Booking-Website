import React from 'react';
import Footer from './Footer';
import About from './About';
import TestimonialSlider from './Testimonial';

function AboutPage() {
  return (
    <div className='mt-20 bg-white '> 
    <About/>
    <div className="bg-white text-gray-800 mb-20">
      {/* Resort Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="/images/resort.png"
          alt="Resort View"
          className="pt-10 pl-20 w-45 h-45 object-cover"
        />
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-7xl font-bold mb-4">Luxury Resort</h2>
          <p className="text-gray-600 mb-20 text-2xl">
            Welcome to paradise! Our luxury resort offers exceptional comfort,
            mesmerizing views, and world-class service. Enjoy stunning beaches,
            relaxing pools, and personalized hospitality.
          </p>
          <div className="flex space-x-12">
            <div className="text-center">
              <p className="text-5xl font-bold">45</p>
              <p className="text-gray-500">Rooms Available</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">21K</p>
              <p className="text-gray-500">Tourists This Year</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">2</p>
              <p className="text-gray-500">Swimming Pools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wedding Venue Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-7xl font-bold mb-4 pl-10">Wedding Venue</h2>
          <p className="text-gray-600 mb-8 text-2xl pl-10">
            Host your dream wedding at our beachside venue. We provide top-class
            services, catering, and arrangements to make your special day
            unforgettable.
          </p>
          <div className="flex justify-between max-w-md pl-10">
            {[
              { label: "Good Services", value: "90%" },
              { label: "Tourists", value: "80%" },
              { label: "Satisfaction", value: "100%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-orange-500 text-3xl font-bold border-4 border-orange-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/images/wedding.png"
          alt="Wedding Venue"
          className="w-50 h-50 object-cover pr-20"
        />
      </div>
    </div>
    <TestimonialSlider/>
      <Footer />
    </div>
    

  );
}

export default AboutPage;