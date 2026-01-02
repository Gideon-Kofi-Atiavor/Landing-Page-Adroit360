import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Wrapper div makes it sticky with padding from edges
    <div className="sticky top-0 z-50 px-4 pt-4 pb-2">
      <nav className="bg-white/40 backdrop-blur-lg shadow-lg rounded-2xl max-w-5xl mx-auto ">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" /> 
              <p className="ml-2 text-xl font-bold text-gray-800">Adroit 360</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-800 hover:text-pink-600 font-medium transition">
                What we do
              </a>
              <a href="#how-it-works" className="text-gray-800 hover:text-pink-600 font-medium transition">
                How it Works
              </a>
              <a href="#pricing" className="text-gray-800 hover:text-pink-600 font-medium transition">
                Pricing
              </a>
              <a href="#case-studies" className="text-gray-800 hover:text-pink-600 font-medium transition">
                Case Studies
              </a>
              <a href="#faq" className="text-gray-800 hover:text-pink-600 font-medium transition">
                FAQ
              </a>
              <button className="bg-pink-900 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                Book A Call
              </button>
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu - Shows when isOpen is true */}
        {isOpen && (
          <div className="md:hidden bg-white/40 backdrop-blur-lg rounded-b-2xl">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#services" className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-white/50 transition">
                What we do
              </a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-white/50 transition">
                How it Works
              </a>
              <a href="#pricing" className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-white/50 transition">
                Pricing
              </a>
              <a href="#case-studies" className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-white/50 transition">
                Case Studies
              </a>
              <a href="#faq" className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-white/50 transition">
                FAQ
              </a>
              <button className="w-full text-left px-3 py-2 bg-pink-900 text-white rounded-lg hover:bg-red-700 transition">
                Book A Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;