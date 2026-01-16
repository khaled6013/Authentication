import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    let handleSubmit = e => { 
        e.preventDefault();
        let name = e.target.name.value
        let email = e.target.email.value
        let password = e.target.password.value
        console.log(name,email,password)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
              id="name"
              name='name'
              type="text"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
              id="email"
              name='email'
              type="email"
              placeholder="john@example.com"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
              id="password"
              name='password'
              type="password"
              placeholder="Create a password"
            />
          </div>

          {/* Submit Button */}
          <button 
            className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
            type="submit"
            name='submit'
          >
            Sign Up
          </button>

          {/* Footer Text */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-black hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;