import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dimension } from '../types';
import { HAWKINS_CHARACTERS, UPSIDEDOWN_ENTITIES, CONTENT } from '../constants';

interface CharacterGalleryProps {
  dimension: Dimension;
}

const CharacterGallery: React.FC<CharacterGalleryProps> = ({ dimension }) => {
  const isReality = dimension === 'reality';
  const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;
  
  // Select dataset based on dimension
  const characters = isReality ? HAWKINS_CHARACTERS : UPSIDEDOWN_ENTITIES;

  return (
    <section id="characters" className="relative min-h-screen py-24 px-6 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-gray-800 pb-8 flex justify-between items-end">
           <h2 className={`font-title text-5xl md:text-7xl transition-colors duration-500 ${isReality ? 'text-white' : 'text-red-600'}`}>
             {content.CHARACTERS_TITLE}
           </h2>
           <span className="font-vcr text-xl text-gray-500 hidden md:block">
             {isReality ? 'HAWKINS_LAB_DB_V2.0' : 'HIVE_MIND_CONNECTION_ESTABLISHED'}
           </span>
        </div>

        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className={`relative aspect-[3/4] overflow-hidden border-4 transition-all duration-300 bg-black
                 ${isReality 
                    ? 'border-gray-800 group-hover:border-hawkins group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]' 
                    : 'border-red-900 group-hover:border-upsidedown-glow group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]'}
              `}>
                
                {/* Image */}
                <img 
                  src={char.img} 
                  alt={char.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0
                    ${!isReality && 'brightness-90 contrast-125 sepia-[.3] hue-rotate-[-30deg]'}
                  `}
                />

                {/* Glitch Overlay on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none mix-blend-color-dodge transition-opacity duration-100
                    ${isReality ? 'bg-blue-600' : 'bg-red-600'}`} 
                />
                
                {/* Scanline for Card */}
                <div className={`absolute inset-0 z-10 bg-[length:100%_2px,3px_100%] pointer-events-none
                    ${isReality 
                        ? 'bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,255,0.06),rgba(0,0,255,0.02),rgba(0,0,255,0.06))]' 
                        : 'bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02),rgba(100,0,0,0.06))]'}
                `} />

                {/* Role Label - Slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className={`font-vcr text-sm mb-1 ${isReality ? 'text-hawkins' : 'text-upsidedown-glow'}`}>
                        {isReality ? 'CLASS' : 'ENTITY'}: {char.role}
                    </p>
                    <p className="font-vcr text-xs text-gray-400">
                        {char.desc}
                    </p>
                </div>
              </div>

              {/* Name Below - Glows on hover */}
              <h3 className={`mt-4 font-title text-3xl text-center tracking-widest uppercase transition-all duration-300
                  ${isReality 
                    ? 'text-gray-500 group-hover:text-white group-hover:text-glow-blue' 
                    : 'text-red-900 group-hover:text-red-500 group-hover:text-glow-red'}
              `}>
                {char.name}
              </h3>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CharacterGallery;