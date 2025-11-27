import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mate-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 font-extrabold text-2xl tracking-tighter italic">
              TRAINING MATE
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#studio" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition">Studio</a>
                <a href="#classes" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition">Classes</a>
                <a href="#trainers" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition">Trainers</a>
                <a href="#ai-coach" className="bg-mate-orange hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium transition">Ask Coach AI</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
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

      {isOpen && (
        <div className="md:hidden bg-mate-blue pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#studio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Studio</a>
            <a href="#classes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Classes</a>
            <a href="#trainers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Trainers</a>
            <a href="#ai-coach" className="block px-3 py-2 rounded-md text-base font-medium bg-mate-orange text-white">Ask Coach AI</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
