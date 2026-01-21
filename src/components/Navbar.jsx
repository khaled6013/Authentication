import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firbase/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login'); 
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition">
              AuthApp
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">
              Home
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-white font-medium border border-gray-700 px-3 py-1 rounded-lg">
                  User: {user.displayName || user.email} 
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 text-white hover:bg-red-700 px-5 py-2 rounded-full font-bold transition shadow-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Mobile Menu Button (Toggle Logic Same as before) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition"
            >
               {/* Icon logic same... */}
               <span className="sr-only">Open main menu</span>
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
           {/* Links... */}
          <div className="pt-4 pb-4 border-t border-gray-800">
            <div className="px-5 space-y-3">
              {user ? (
                 <>
                   <div className="text-white text-center mb-2">
                     {user.displayName || user.email}
                   </div>
                   <button 
                    onClick={handleLogout}
                    className="block text-center w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                 </>
              ) : (
                <>
                  <Link to="/login" className="block text-center w-full text-gray-300 hover:text-white font-medium py-2 border border-gray-700 rounded-lg">Log in</Link>
                  <Link to="/signup" className="block text-center w-full bg-white text-black font-bold py-2 rounded-lg">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;