import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Dimension } from '../types';
import { CONTENT, SEASONS_DATA } from '../constants';
import GlitchText from './GlitchText';

interface StorySectionProps {
  dimension: Dimension;
}

const StorySection: React.FC<StorySectionProps> = ({ dimension }) => {
  const containerRef = useRef(null);
  const [activeSeason, setActiveSeason] = useState(SEASONS_DATA[0].id);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  const isReality = dimension === 'reality';
  const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;
  
  const currentSeason = SEASONS_DATA.find(s => s.id === activeSeason) || SEASONS_DATA[0];

  return (
    <section 
      id="lore" 
      ref={containerRef} 
      className="relative min-h-screen py-24 px-6 z-20 flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          style={{ opacity, y }}
          className="text-center space-y-4 mb-16"
        >
          <div className={`inline-block px-4 py-1 border-2 font-vcr tracking-widest text-lg mb-4
            ${isReality ? 'border-hawkins text-hawkins' : 'border-upsidedown-glow text-upsidedown-glow'}
          `}>
             {isReality ? 'TOP SECRET // EYES ONLY' : 'CORRUPTED MEMORY FRAGMENTS'}
          </div>
          <h2 className={`font-title text-5xl md:text-7xl transition-colors duration-500 ${isReality ? 'text-white' : 'text-red-600'}`}>
             {content.LORE_HEADER}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Timeline Navigation */}
            <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0">
                {SEASONS_DATA.map((season) => (
                    <button
                        key={season.id}
                        onClick={() => setActiveSeason(season.id)}
                        className={`relative group p-4 border-l-4 text-left transition-all duration-300 min-w-[200px] lg:min-w-0
                            ${activeSeason === season.id 
                                ? (isReality ? 'border-hawkins bg-hawkins/10' : 'border-upsidedown-glow bg-upsidedown-glow/10')
                                : (isReality ? 'border-gray-800 hover:border-hawkins/50' : 'border-red-900 hover:border-upsidedown-glow/50')
                            }
                        `}
                    >
                        <span className={`block font-title text-3xl mb-1 transition-colors
                             ${activeSeason === season.id 
                                ? 'text-white' 
                                : (isReality ? 'text-gray-500 group-hover:text-gray-300' : 'text-red-900 group-hover:text-red-700')}
                        `}>
                            {season.year}
                        </span>
                        <span className={`font-vcr text-sm tracking-widest
                            ${activeSeason === season.id ? (isReality ? 'text-hawkins' : 'text-upsidedown-glow') : 'text-gray-600'}
                        `}>
                            {season.title}
                        </span>
                        
                        {/* Active Indicator Arrow */}
                        {activeSeason === season.id && (
                            <motion.div 
                                layoutId="activeSeasonIndicator"
                                className={`absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full
                                    ${isReality ? 'bg-hawkins shadow-[0_0_10px_#38bdf8]' : 'bg-upsidedown-glow shadow-[0_0_10px_#ef4444]'}
                                `}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Right Column: The Case File */}
            <div className="lg:w-3/4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSeason}
                        initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4 }}
                        className={`relative p-8 md:p-12 border-2 bg-black/80 backdrop-blur-sm
                             ${isReality 
                                ? 'border-gray-800 shadow-[0_0_50px_rgba(56,189,248,0.05)]' 
                                : 'border-red-900 shadow-[0_0_50px_rgba(239,68,68,0.05)]'}
                        `}
                    >
                        {/* Decorative Case File Header */}
                        <div className="flex justify-between items-start mb-8 border-b border-gray-800 pb-4">
                            <div>
                                <h3 className={`font-vcr text-4xl mb-2 ${isReality ? 'text-white' : 'text-red-500'}`}>
                                    CASE FILE: {currentSeason.title}
                                </h3>
                                <div className="flex gap-4 font-vcr text-sm text-gray-500">
                                    <span>REF: {currentSeason.id}-X</span>
                                    <span>DATE: {currentSeason.year}</span>
                                    <span>{isReality ? 'CLEARANCE: LEVEL 5' : 'CLEARANCE: VOID'}</span>
                                </div>
                            </div>
                            <div className={`hidden md:block w-16 h-16 border opacity-50
                                ${isReality ? 'border-hawkins p-2' : 'border-upsidedown-glow p-2'}
                            `}>
                                <div className={`w-full h-full ${isReality ? 'bg-hawkins/20' : 'bg-upsidedown-glow/20'}`} />
                            </div>
                        </div>

                        {/* Content with Redaction Hover Effect */}
                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                            {currentSeason.content.map((paragraph, idx) => (
                                <div key={idx} className="relative group/text">
                                    <p className={`font-title text-xl leading-relaxed transition-colors duration-300
                                        ${isReality ? 'text-gray-300' : 'text-red-200'}
                                    `}>
                                        <span className="font-vcr text-gray-600 mr-4">0{idx + 1}</span>
                                        {paragraph}
                                    </p>
                                    
                                    {/* Redaction Bar Effect - Disappears on hover */}
                                    {isReality && (
                                        <span className="absolute inset-0 bg-black/50 opacity-0 group-hover/text:opacity-100 pointer-events-none transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-hawkins font-vcr text-xs tracking-[0.5em] border border-hawkins px-2 py-1 bg-black">
                                                CLASSIFIED
                                            </span>
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        {/* Footer stamp */}
                        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end">
                            <span className={`font-vcr text-2xl tracking-widest border-2 px-4 py-1 rotate-[-5deg] opacity-70
                                ${isReality ? 'border-hawkins text-hawkins' : 'border-red-600 text-red-600'}
                            `}>
                                {isReality ? 'ARCHIVED' : 'INFECTED'}
                            </span>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;