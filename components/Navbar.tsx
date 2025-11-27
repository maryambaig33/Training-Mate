import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-mate-blue shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-heading font-bold text-3xl tracking-wider text-white italic">
                TRAINING <span className="text-mate-orange">MATE</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#studio" className="text-white hover:text-mate-orange px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition">Studio</a>
              <a href="#classes" className="text-white hover:text-mate-orange px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition">Classes</a>
              <a href="#trainers" className="text-white hover:text-mate-orange px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition">Trainers</a>
              <a href="#ai-coach" className="bg-mate-orange text-white hover:bg-orange-600 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition transform hover:scale-105 shadow-md">
                Ask Coach
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mate-orange focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-mate-blue/95 backdrop-blur-md absolute w-full border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#studio" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsOpen(false)}>Studio</a>
            <a href="#classes" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsOpen(false)}>Classes</a>
            <a href="#trainers" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsOpen(false)}>Trainers</a>
            <a href="#ai-coach" className="text-mate-orange block px-3 py-2 rounded-md text-base font-bold hover:bg-white/10" onClick={() => setIsOpen(false)}>Ask Coach AI</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;