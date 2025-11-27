import React from 'react';
import { ClassSession } from '../types';

interface ExtendedClassSession extends ClassSession {
  intensity: number; // 1-3 scale
  type: 'Cardio' | 'Strength' | 'Hybrid';
}

const SCHEDULE: ExtendedClassSession[] = [
  { id: 1, time: '06:00 AM', name: 'Mighty Mate', trainer: 'Jono', duration: '45 MIN', intensity: 3, type: 'Cardio' },
  { id: 2, time: '07:00 AM', name: 'Bondi Burn', trainer: 'Sarah', duration: '45 MIN', intensity: 2, type: 'Strength' },
  { id: 3, time: '08:00 AM', name: 'Mighty Mate', trainer: 'Jono', duration: '45 MIN', intensity: 3, type: 'Cardio' },
  { id: 4, time: '12:00 PM', name: 'Outback Abs', trainer: 'Mike', duration: '30 MIN', intensity: 2, type: 'Hybrid' },
  { id: 5, time: '05:30 PM', name: 'Thunder Down Under', trainer: 'Emma', duration: '45 MIN', intensity: 3, type: 'Strength' },
  { id: 6, time: '06:30 PM', name: 'Mighty Mate', trainer: 'Emma', duration: '45 MIN', intensity: 3, type: 'Cardio' },
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-mate-orange rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-mate-orange font-bold tracking-wider uppercase text-sm mb-3">Weekly Schedule</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase">
            Let's Get Physical
          </h3>
          <p className="max-w-2xl text-xl text-gray-400 mx-auto font-light">
            45 minutes of high-intensity intervals, 15 minutes of bad jokes. The best hour of your day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SCHEDULE.map((session) => (
            <div key={session.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800 border border-gray-700 hover:border-mate-orange transition-all duration-300 group shadow-lg hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white font-heading tracking-wide">{session.time}</span>
                  <span className="text-xs text-mate-orange font-bold tracking-widest uppercase mt-1">{session.type}</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Intensity</span>
                    <div className="flex bg-gray-900/50 rounded-lg px-2 py-1">
                    {[...Array(3)].map((_, i) => (
                        <svg 
                        key={i}
                        className={`w-4 h-4 ${i < session.intensity ? 'text-mate-orange' : 'text-gray-700'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        >
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                    ))}
                    </div>
                </div>
              </div>
              
              <h4 className="text-3xl font-heading font-bold text-white mb-2 italic group-hover:text-mate-orange transition-colors">{session.name}</h4>
              <p className="text-gray-400 text-sm mb-6 flex items-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-mate-orange mr-2"></span>
                {session.duration} Session
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-auto">
                <div className="flex items-center">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${session.trainer}&background=f97316&color=fff`} 
                      alt={session.trainer}
                      className="w-8 h-8 rounded-full border-2 border-gray-700" 
                    />
                    <span className="ml-3 text-sm font-medium text-gray-300">Trainer {session.trainer}</span>
                </div>
                <a href="#ai-coach" className="bg-white text-mate-blue hover:bg-mate-orange hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-colors uppercase tracking-wide">
                    Book
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Not sure which class fits you?</p>
            <a href="#ai-coach" className="inline-flex items-center text-mate-orange font-bold hover:text-white transition-colors border-b-2 border-mate-orange hover:border-white pb-1 group">
                Ask Coach Mate for a recommendation 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;