import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50">
      <div className="w-full px-[10px]">
        <div className="flex flex-wrap justify-between items-center gap-4 py-4 md:py-7">

          {/* Logo and Name */}
          <Link to="/" onClick={closeMenu}>
            <div className="flex items-center space-x-3">
              <img
                src="/fcc_logo.svg"
                alt="FCC Logo"
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
              <div className="text-left leading-tight">
                <h1 className="text-base md:text-lg font-semibold text-white ">Finance and Consulting Club</h1>
                <p className="text-sm md:text-base text-gray-200">NIT Raipur</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-15 text-base lg:text-lg font-medium text-gray-100 pr-10">
            <Link to="/team" className="hover:text-blue-400">About Us</Link>
            <Link to="/events" className="hover:text-blue-400">Events</Link>
            <Link to="projects" className="hover:text-blue-400">Projects</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
            <Link to="/alumni" className="hover:text-blue-400">Alumni Corner</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-200 z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}

          </button>
        </div>

        {/* Mobile Navigation Menu - Slide in from right */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-[#0A0E17] z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col pt-20 px-8 space-y-6 text-lg font-medium text-gray-100">
            <Link
              to="/team"
              className="hover:text-blue-400 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className="hover:text-blue-400 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-400 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/alumni"
              className="hover:text-blue-400 py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700"
              onClick={closeMenu}
            >
              Alumni Corner
            </Link>
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        />
      )}

    </nav>
  )
}

export default Navbar
