import React, { useState } from "react";
import { Link } from "react-router"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition">
              AuthApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
              Home
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
              Features
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
              Pricing
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-white hover:text-gray-300 font-medium px-4 py-2 transition"
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-full font-bold transition shadow-lg transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon / Close Icon based on state */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Features
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-800">
            <div className="px-5 space-y-3">
              <Link 
                to="/login" 
                className="block text-center w-full text-gray-300 hover:text-white font-medium py-2 border border-gray-700 rounded-lg hover:border-gray-500 transition"
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="block text-center w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;