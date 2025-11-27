import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-mate-blue overflow-hidden h-screen min-h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym background"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-mate-blue via-mate-blue/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="pt-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase drop-shadow-lg">
            Not Just a Gym,<br />
            <span className="text-mate-orange">It's a Lifestyle.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            Welcome to Training Mate Houston Heights. We combine high-intensity interval training with a laugh-out-loud Aussie vibe. Get fit, have fun, and find your mates.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#classes"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-mate-orange hover:bg-orange-600 transition transform hover:-translate-y-1 shadow-lg uppercase tracking-wide"
            >
              Book Your First Class
            </a>
            <a
              href="#ai-coach"
              className="flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white hover:text-mate-blue transition transform hover:-translate-y-1 uppercase tracking-wide"
            >
              Talk to Coach Mate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;