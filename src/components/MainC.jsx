import React from 'react';
import { Link } from 'react-router';

const MainC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- Hero Section --- */}
      <section className="flex-1 bg-white text-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Secure Auth <br /> Made <span className="text-gray-500">Simple.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Experience the fastest and most secure authentication system for your next big project. Built with React, Firebase, and Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/signup" className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg">
                Get Started
              </Link>
              <button className="px-8 py-3 border border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image/Visual Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-gray-100 rounded-2xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
              {/* Abstract UI Representation */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                 <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 bg-black rounded-full"></div>
                    <div className="space-y-2 flex-1">
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                        <div className="h-2 w-1/3 bg-gray-100 rounded"></div>
                    </div>
                 </div>
              </div>
              <div className="bg-black text-white p-4 rounded-lg text-center font-mono text-sm">
                Authentication Verified_
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage user access, scale your application, and secure your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for speed with minimal latency. Your users won't have to wait to access their dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                🔒
              </div>
              <h3 className="text-xl font-bold mb-3">Secure by Design</h3>
              <p className="text-gray-600">
                Bank-grade encryption and secure token management powered by Firebase Authentication.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">
                📱
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Responsive</h3>
              <p className="text-gray-600">
                Works perfectly on any device - from large desktops to the smallest mobile screens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainC;