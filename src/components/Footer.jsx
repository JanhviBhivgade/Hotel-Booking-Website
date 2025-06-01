import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        
        {/* Logo + Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold border-2 border-white inline-block px-3 py-1 text-white">The Paradise</h2>
          <p className="text-sm mt-2 text-white">Since 2014</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Address */}
        <div className='text-white'>
          <h3 className="font-semibold text-lg mb-2">Our Address</h3>
          <p>Beach Str. 345</p>
          <p>123 Paradise</p>
          <p>Panjim, Goa</p>
        </div>

        {/* Reservations */}
        <div className='text-white'>
          <h3 className="font-semibold text-lg mb-2">Reservations</h3>
          <p>Tel: 345 5667 889</p>
          <p>Fax: 6783 4567 889</p>
          <p>reservations@hotelriver.com</p>
        </div>

        {/* Newsletter */}
        <div className='text-white'>
          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <p className="mb-2 text-sm text-white">Subscribe for updates & offers</p>
          <div className="flex items-center border-b border-gray-400 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Your email"
              aria-label="Email"
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-white border-t py-4">
        Copyright ©2025 All rights reserved 
        <span className='pl-28'>
        Janhvi Janardan Bhivgade (janhvibhivgade@gmail.com)
          </span>
      </div>
    </footer>
  );
}
