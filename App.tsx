import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import AiCoach from './components/AiCoach';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Amenities />
        <Classes />
        <AiCoach />
        <Trainers />
      </main>
      <Footer />
    </div>
  );
};

export default App;
