import React from 'react';
import { Trainer } from '../types';

const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: "Jono Castano",
    role: "Head Trainer",
    bio: "Bringing the Bondi energy to Houston! Jono specializes in HIIT and making sure you leave with a smile.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Strength Coach",
    bio: "Don't let the smile fool you. Sarah's strength classes will have your muscles shaking in the best way.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Mike Thompson",
    role: "Cardio King",
    bio: "Former rugby player turned fitness pro. Mike brings athletic conditioning to every single session.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
  }
];

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mate-orange font-bold tracking-wider uppercase text-sm mb-2">The Team</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-mate-blue mb-6">
            Meet Your Mates
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our trainers aren't just here to count reps. They're here to inspire, motivate, and crack a few terrible jokes.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-w-3 aspect-h-4 relative h-96 overflow-hidden">
                <img 
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    src={trainer.image} 
                    alt={trainer.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-mate-orange font-bold uppercase tracking-wider text-xs mb-1">{trainer.role}</p>
                    <h3 className="text-2xl font-bold font-heading">{trainer.name}</h3>
                </div>
              </div>
              <div className="flex-1 p-6 bg-white">
                <p className="text-base text-gray-600 leading-relaxed">
                  {trainer.bio}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-mate-blue font-bold hover:text-mate-orange transition-colors text-sm uppercase tracking-wide">
                        View Profile &rarr;
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;