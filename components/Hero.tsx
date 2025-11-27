import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-mate-blue overflow-hidden h-screen min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop"
          alt="High five in gym"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mate-blue via-mate-blue/90 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full bg-mate-orange/20 border border-mate-orange/50 backdrop-blur-sm mb-6">
            <span className="text-mate-orange font-bold uppercase tracking-wider text-sm">Houston Heights</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-none mb-6">
            100% Fitness.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mate-orange to-red-500">0% Intimidation.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
            The world's first Aussie-inspired fitness studio. We combine 45-minute HIIT classes with community, comedy, and connection.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#classes"
              className="flex items-center justify-center px-8 py-4 bg-mate-orange text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 uppercase tracking-wide"
            >
              Grab a Mate & Book
            </a>
            <a
              href="#ai-coach"
              className="flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-white text-lg font-bold rounded-full hover:border-white hover:bg-white/10 transition-all uppercase tracking-wide"
            >
              Ask Coach Mate
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;