import React from 'react';
import { Amenity } from '../types';

const AMENITIES: Amenity[] = [
  {
    title: "Premium Showers",
    description: "Stocked with high-end body wash and shampoo so you can refresh after the sweat.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Towel Service",
    description: "Forget your towel? No worries, mate. We've got fresh ones ready for you.",
    icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
  },
  {
    title: "Smoothie Bar",
    description: "Refuel with our delicious protein shakes and smoothies right at the front desk.",
    icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
  },
  {
    title: "Community Events",
    description: "We're more than a gym. Join us for happy hours, run clubs, and social events.",
    icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
  }
];

const Amenities: React.FC = () => {
  return (
    <section id="studio" className="py-16 bg-mate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-mate-orange font-semibold tracking-wide uppercase">The Studio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need, nothing you don't.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-blue-200 lg:mx-auto">
            Our Houston Heights studio is designed to make your workout the best part of your day.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {AMENITIES.map((amenity) => (
              <div key={amenity.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-mate-orange text-white">
                  {amenity.icon}
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-white">{amenity.title}</dt>
                  <dd className="mt-2 text-base text-blue-200">{amenity.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
