import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg font-inter sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center flex-wrap px-4 lg:px-8">
        <Link to="/" className="text-white text-3xl font-bold p-2 rounded-lg border-2 border-white">
          The Paradise
        </Link>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:justify-end lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="text-sm lg:flex lg:space-x-6">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white p-2 rounded-md transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white p-2 rounded-md transition duration-300 ease-in-out"
            >
              About us
            </Link>
            <Link
              to="/rooms"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white p-2 rounded-md transition duration-300 ease-in-out"
            >
              Rooms
            </Link>
            <Link
              to="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white p-2 rounded-md transition duration-300 ease-in-out"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white p-2 rounded-md transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center lg:ml-6">
            <button className="bg- bg-rose-600 hover:bg-rose-700  text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mb-3 lg:mb-0 lg:mr-4 w-full lg:w-auto">
              Book Online
            </button>
            <span className="bg- bg-rose-600  hover:bg-rose-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded-md shadow-md w-full lg:w-auto text-center">
              0183-12345678
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;