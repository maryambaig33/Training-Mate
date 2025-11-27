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
        {/* Dynamic gradient overlay for high energy vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-mate-blue via-mate-blue/80 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-mate-blue via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-mate-orange/90 border border-white/20 backdrop-blur-md mb-6 shadow-lg transform -rotate-1">
            <span className="text-white font-bold uppercase tracking-widest text-xs sm:text-sm">📍 Houston Heights Studio</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.9] mb-6 drop-shadow-xl">
            100% Fitness.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mate-orange to-red-500 filter drop-shadow-sm">0% Intimidation.</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-md">
            The world's first Aussie-inspired fitness studio. We combine 45-minute HIIT classes with community, comedy, and connection.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#classes"
              className="group flex items-center justify-center px-8 py-4 bg-mate-orange text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 uppercase tracking-wide"
            >
              Grab a Mate & Book
              <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a
              href="#ai-coach"
              className="flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white text-lg font-bold rounded-full hover:bg-white hover:text-mate-blue transition-all uppercase tracking-wide"
            >
              Ask Coach Mate
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <span className="text-xs uppercase tracking-widest mb-2 block text-center">Scroll to Sweat</span>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;