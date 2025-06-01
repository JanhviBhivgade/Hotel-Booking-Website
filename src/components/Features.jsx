import React from 'react';
import { Building2, Waves, Bed } from 'lucide-react';

const ResortFeatures = () => {
  const features = [
    {
      icon: <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-6" />,
      title: "Fabulous Resort",
      description: "Escape to Fabolus Resort, where luxury meets nature’s serenity.Indulge in world-class comfort amidst breathtaking landscapes.From relaxing spa days to thrilling adventures — we have it all.Your perfect getaway begins the moment you arrive.."
    },
    {
      icon: <Waves className="w-16 h-16 text-gray-400 mx-auto mb-6" />,
      title: "Infinity Pool",
      description: "Dive into pure bliss at our stunning infinity pool, where the water meets the horizon.Surrounded by lush views and endless skies, it's the perfect place to unwind.Whether it's sunrise serenity or sunset magic, every moment feels infinite.Relax, float, and let the beauty of nature embrace you."
    },
    {
      icon: <Bed className="w-16 h-16 text-gray-400 mx-auto mb-6" />,
      title: "Luxury Rooms",
      description: "Step into our luxury rooms, where elegance and comfort blend seamlessly.Enjoy plush interiors, modern amenities, and breathtaking views from every window.Every detail is designed to offer you a serene and sophisticated stay.Unwind in style — because you deserve nothing but the best."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              {feature.icon}
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResortFeatures;