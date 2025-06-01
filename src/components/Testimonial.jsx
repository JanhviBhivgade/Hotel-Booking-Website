import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Samantha Smith',
    location: 'Greece',
    title: 'Perfect Stay',
    message:
      'Absolutely loved my experience! The place was stunning, and the service was outstanding. Will definitely return!',
    image: '/images/person1.png',
  },
  {
    name: 'Michael Doe',
    location: 'Italy',
    title: 'Nice place',
    message:
      'A beautiful escape with amazing views. The staff made me feel at home the entire time. Highly recommended!',
    image: '/images/person2.png',
  },
  {
    name: 'Luis Garcia',
    location: 'Spain',
    title: 'We loved it!',
    message:
      'Great food, excellent ambiance, and perfect weather. One of the best vacations I’ve had!',
    image: '/images/person3.png',
  },
  {
    name: 'John Miller',
    location: 'France',
    title: 'Incredible!',
    message:
      'Such a peaceful location. Everything was well-organized and clean. I enjoyed every moment!',
    image: '/images/person4.png',
  },
  {
    name: 'Emma Lee',
    location: 'USA',
    title: 'Highly Recommended',
    message:
      'Exceptional hospitality and location. It felt like a home away from home.',
    image: '/images/person5.png',
  },
  {
    name: 'Ava Brown',
    location: 'Canada',
    title: 'Wonderful stay',
    message:
      'Beautiful interiors, amazing food, and friendly staff. Will definitely come back!',
    image: '/images/person6.png',
  },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && sliderRef.current) {
        sliderRef.current.scrollLeft += 350;
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-900 to-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Guests Say
        </h2>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-8 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 h-[460px] bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl snap-center transition hover:scale-105 flex flex-col justify-between"
            >
              <div className="text-yellow-400 text-2xl text-center mb-4">★★★★★</div>
              <div className="flex-1 flex flex-col justify-center text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-gray-200 mb-6 px-2">{t.message}</p>
              </div>
              <div className="flex flex-col items-center mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-2 border-white object-cover mb-2"
                />
                <p className="text-white font-medium">{t.name}</p>
                <p className="text-gray-300 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
