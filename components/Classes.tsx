import React from 'react';
import { ClassSession } from '../types';

const SCHEDULE: ClassSession[] = [
  { id: 1, time: '06:00 AM', name: 'Mighty Mate', trainer: 'Jono', duration: '45 MIN' },
  { id: 2, time: '07:00 AM', name: 'Bondi Burn', trainer: 'Sarah', duration: '45 MIN' },
  { id: 3, time: '08:00 AM', name: 'Mighty Mate', trainer: 'Jono', duration: '45 MIN' },
  { id: 4, time: '12:00 PM', name: 'Outback Abs', trainer: 'Mike', duration: '30 MIN' },
  { id: 5, time: '05:30 PM', name: 'Thunder Down Under', trainer: 'Emma', duration: '45 MIN' },
  { id: 6, time: '06:30 PM', name: 'Mighty Mate', trainer: 'Emma', duration: '45 MIN' },
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-mate-orange rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-mate-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-mate-orange font-bold tracking-wider uppercase text-sm mb-2">Schedule</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Train Like an Aussie
          </h3>
          <p className="max-w-2xl text-xl text-gray-400 mx-auto">
            High energy, good vibes, and a workout that flies by.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SCHEDULE.map((session) => (
            <div key={session.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 border border-gray-700 hover:border-mate-orange transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-700 text-mate-orange group-hover:bg-mate-orange group-hover:text-white transition-colors">
                  {session.duration}
                </span>
                <span className="text-gray-400 text-sm font-medium">{session.time}</span>
              </div>
              
              <h4 className="text-2xl font-heading font-bold text-white mb-2">{session.name}</h4>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold text-white">
                        {session.trainer.charAt(0)}
                    </div>
                    <span className="ml-3 text-sm text-gray-300">with {session.trainer}</span>
                </div>
                <button className="text-sm font-bold text-mate-orange hover:text-white transition-colors uppercase tracking-wide">
                    Book Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-3 border border-gray-600 hover:border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-gray-900 transition-all uppercase tracking-wide">
                View Full Calendar
            </button>
        </div>
      </div>
    </section>
  );
};

export default Classes;