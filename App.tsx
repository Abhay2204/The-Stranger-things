import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Dimension } from './types';
import IntroSequence from './components/IntroSequence';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import CharacterGallery from './components/CharacterGallery';
import LocationsSection from './components/LocationsSection';
import MissingSection from './components/MissingSection';
import LabSection from './components/LabSection';
import TransmissionSection from './components/TransmissionSection';
import PsychicTestSection from './components/PsychicTestSection';
import LightsSection from './components/LightsSection';
import Footer from './components/Footer';
import InteractiveCursor from './components/InteractiveCursor';
import ParticleSystem from './components/ParticleSystem';
import VHSEffect from './components/VHSEffect';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [dimension, setDimension] = useState<Dimension>('reality');

  const toggleDimension = () => {
    setDimension(prev => prev === 'reality' ? 'upsidedown' : 'reality');
  };

  return (
    <main className={`min-h-screen w-full relative transition-colors duration-1000 overflow-hidden
        ${dimension === 'reality' ? 'bg-obsidian selection:bg-hawkins selection:text-black' : 'bg-upsidedown-dark selection:bg-upsidedown-glow selection:text-black'}`}>
      
      {/* Global Effects */}
      <VHSEffect />
      
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroSequence key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <div className="relative w-full">
             {/* Background Atmosphere */}
            <ParticleSystem dimension={dimension} />
            <InteractiveCursor dimension={dimension} />
            
            {/* Page Content Stack */}
            <Hero dimension={dimension} toggleDimension={toggleDimension} />
            
            <div className={`relative z-20 bg-gradient-to-b transition-colors duration-1000
                ${dimension === 'reality' ? 'from-transparent via-obsidian/95 to-obsidian' : 'from-transparent via-upsidedown-dark/95 to-upsidedown-dark'}
            `}>
                <StorySection dimension={dimension} />
                <LightsSection dimension={dimension} />
                <CharacterGallery dimension={dimension} />
                <TransmissionSection dimension={dimension} />
                <LocationsSection dimension={dimension} />
                <PsychicTestSection dimension={dimension} />
                <MissingSection dimension={dimension} />
                <LabSection dimension={dimension} />
                <Footer dimension={dimension} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;