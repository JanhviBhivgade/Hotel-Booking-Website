export default function About() {
    return (
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              The Paradise / 10 years of excellence
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
            For a decade, The Paradise Resort has been a trusted name in luxury hospitality. Since day one, 
            our mission has been to offer guests unforgettable experiences through comfort, elegance, and 
            personalized service. From stunning rooms and fine dining to our iconic infinity pool, every 
            detail reflects our passion for excellence. As we celebrate 10 years, we thank our guests for 
            their trust and look forward to creating many more cherished memories together.

            </p>
          </div>
  
          {/* Awards / Logos */}
          <div className="flex justify-center md:justify-end items-center gap-8 flex-wrap">
            <img
              src="/images/image1.png"
              alt="Tripadvisor Certificate"
              className="w-28 md:w-32 object-contain"
            />
            <img
              src="/images/image2.png"
              alt="Commitment Award"
              className="w-28 md:w-32 object-contain"
            />
            <img
              src="/images/image3.png"
              alt="Tripadvisor Gold"
              className="w-28 md:w-32 object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  