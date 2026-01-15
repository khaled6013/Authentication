import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <h1 className="text-white text-2xl font-bold">AuthApp</h1>

          <ul className="hidden md:flex space-x-6 text-white">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Features</li>
            <li className="cursor-pointer hover:text-gray-300">Pricing</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </ul>
        </div>
        <div className="space-x-4">
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition cursor-pointer">
            Login
          </button>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
