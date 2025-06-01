import { FaUtensils, FaRegClock } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function RestaurantSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Restaurants</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full md:w-1/2 shadow-lg">
          <img
            src="/images/cafe.png"
            alt="Citrus Cafe"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">Citrus Cafe</h3>
          
          </div>

          <p className="text-gray-600 mb-6">
            A bright and inviting multi-cuisine coffee shop with an alfresco seating, that offers a
            menu including Indian, European, American and pan-Asian cuisine. Indulge in the wholesome
            breakfast buffet served daily. Choose from a wide range of popular Indian, South Indian,
            Asian and Western preparations.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-gray-800">
              <FaUtensils className="mr-2 text-lg" />
              <strong className="mr-1">Cuisine Type:</strong> Multi cuisine
            </li>
            <li className="flex items-center text-gray-800">
              <MdMenuBook className="mr-2 text-lg" />
              <strong className="mr-1">Menu:</strong> à la carte, buffet
            </li>
            <li className="flex items-center text-gray-800">
              <FaRegClock className="mr-2 text-lg" />
              <strong className="mr-1">Timing:</strong> 7:00 AM to 11:00 PM
            </li>
          </ul>


          <Link
              to="/explorecafe"
              className="text-blue-700 underline font-medium">
                Explore
              </Link>

        </div>
      </div>
    </section>
  );
}
