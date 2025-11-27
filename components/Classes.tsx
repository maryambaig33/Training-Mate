import React from 'react';
import { ClassSession } from '../types';

const SCHEDULE: ClassSession[] = [
  { id: 1, time: '06:00 AM', name: 'Mighty Mate (HIIT)', trainer: 'Jono', duration: '45 min' },
  { id: 2, time: '07:00 AM', name: 'Bondi Burn (Cardio)', trainer: 'Sarah', duration: '45 min' },
  { id: 3, time: '08:00 AM', name: 'Mighty Mate (HIIT)', trainer: 'Jono', duration: '45 min' },
  { id: 4, time: '12:00 PM', name: 'Outback Abs (Core)', trainer: 'Mike', duration: '30 min' },
  { id: 5, time: '05:30 PM', name: 'Thunder Down Under (Strength)', trainer: 'Emma', duration: '45 min' },
  { id: 6, time: '06:30 PM', name: 'Mighty Mate (HIIT)', trainer: 'Emma', duration: '45 min' },
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-mate-orange font-semibold tracking-wide uppercase">Sweat with us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Today's Schedule
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Book your spot early, mate! Classes fill up faster than a cold beer on a hot day.
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {SCHEDULE.map((session) => (
              <li key={session.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-mate-blue truncate">
                      {session.name}
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {session.duration}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Trainer: {session.trainer}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {session.time}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-10 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mate-blue hover:bg-blue-800 transition">
                View Full Calendar
            </button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
