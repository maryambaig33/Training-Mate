import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-mate-blue overflow-hidden h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Gym background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mate-blue to-transparent mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            G'day, <span className="text-mate-orange">Houston Heights!</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Welcome to the studio where fitness meets fun. We're bringing the Aussie spirit to your workout with high-intensity interval training that burns calories, not your soul.
          </p>
          <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#classes"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-mate-blue bg-white hover:bg-gray-50 sm:px-8"
              >
                Book a Class
              </a>
              <a
                href="#ai-coach"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mate-orange hover:bg-orange-600 sm:px-8"
              >
                Chat with Coach
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
