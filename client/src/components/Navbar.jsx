// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/SSlogo.png" alt="logo" className="h-10 mr-2" />
          <h1 className="text-xl font-bold text-gray-800">SkillSwap</h1>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Home
          </a>
          <a
            href="#explore"
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Explore Skills
          </a>
          <a
            href="#dashboard"
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Dashboard
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#explore"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium"
          >
            Explore Skills
          </a>
          <a
            href="#dashboard"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium"
          >
            Dashboard
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
