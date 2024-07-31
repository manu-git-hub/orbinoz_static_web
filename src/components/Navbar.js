// src/components/Navbar.js

import React, { useState } from 'react';
import logo from '../assets/ORBINOZ MEDIA LOGO-01.png'; // Adjust the path as needed

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full py-4 text-black fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="ORBINOZ MEDIA Logo" className="h-16 floating" />
        </a>
        <div className="relative">
          <button
            className="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-8 w-20 text-center rounded-full bg-neutral-800 p-1 font-extrabold hover:bg-green-600 sm:h-10 sm:w-24 sm:p-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-orange-500 sm:w-16 sm:h-16"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-10 h-10 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-sky-500 sm:w-14 sm:h-16"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-purple-500 sm:w-12 sm:h-12"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-6 h-6 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-yellow-400 sm:w-10 sm:h-8"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-blue-600 sm:w-8 sm:h-8"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-2 h-2 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600 sm:w-6 sm:h-4"></div>
            <p className="z-10 absolute bottom-1 left-1 sm:bottom-2 sm:left-2">Menu</p>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <a href="#services" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</a>
              <a href="#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About</a>
              <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
