import React from 'react';
import { Trainer } from '../types';

const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: "Jono Castano",
    role: "Head Trainer",
    bio: "Bringing the Bondi energy to Houston! Jono specializes in HIIT and making sure you leave with a smile.",
    image: "https://picsum.photos/id/338/400/500"
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Strength Coach",
    bio: "Don't let the smile fool you. Sarah's strength classes will have your muscles shaking in the best way.",
    image: "https://picsum.photos/id/64/400/500"
  },
  {
    id: 3,
    name: "Mike Thompson",
    role: "Cardio King",
    bio: "Former rugby player turned fitness pro. Mike brings athletic conditioning to every single session.",
    image: "https://picsum.photos/id/91/400/500"
  }
];

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Your Mates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our trainers aren't just here to count reps. They're here to inspire, motivate, and crack a few terrible jokes.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="relative p-4 flex flex-col bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-cover rounded-xl" src={trainer.image} alt={trainer.name} />
              </div>
              <div className="flex-1 pt-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-mate-orange">
                    {trainer.role}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {trainer.name}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {trainer.bio}
                  </p>
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
