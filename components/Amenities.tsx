import React from 'react';
import { Amenity } from '../types';

const AMENITIES: Amenity[] = [
  {
    title: "Luxury Showers",
    description: "Premium Malin+Goetz products, fluffy towels, and rainfall showerheads. You'll leave smelling better than you arrived.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Towel Service",
    description: "Workout towels and shower towels provided. One less thing for you to carry in your gym bag.",
    icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
  },
  {
    title: "Espresso & Smoothies",
    description: "Grab a post-workout protein shake or an Aussie flat white at our front desk cafe.",
    icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    )
  },
  {
    title: "Social Events",
    description: "From happy hours to holiday parties, we're a community that loves to hang out as much as we workout.",
    icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
  }
];

const Amenities: React.FC = () => {
  return (
    <section id="studio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-mate-orange font-bold tracking-wider uppercase text-sm mb-2">The Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-mate-blue mb-4">
            More Than Just a Workout
          </h3>
          <p className="text-xl text-gray-500">
            We've designed our studio to be your home away from home. Come for the sweat, stay for the mateship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AMENITIES.map((amenity) => (
            <div key={amenity.title} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-gray-100 group">
              <div className="inline-flex items-center justify-center p-3 bg-mate-blue rounded-xl text-white group-hover:bg-mate-orange transition-colors duration-300 mb-6 shadow-md">
                {amenity.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-heading">{amenity.title}</h4>
              <p className="text-gray-500 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;