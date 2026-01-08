import React from 'react';
import { motion } from 'framer-motion';
import { Dimension } from '../types';
import { MISSING_PERSONS, CONTENT } from '../constants';

interface MissingSectionProps {
  dimension: Dimension;
}

const MissingSection: React.FC<MissingSectionProps> = ({ dimension }) => {
  const isReality = dimension === 'reality';
  const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;

  return (
    <section id="missing" className={`relative py-24 z-20 border-y ${isReality ? 'border-gray-900 bg-obsidian' : 'border-red-900 bg-black'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className={`font-vcr text-5xl mb-4 ${isReality ? 'text-white' : 'text-upsidedown-glow animate-pulse'}`}>
                {content.MISSING_TITLE}
            </h2>
            <p className="font-vcr text-gray-500 tracking-widest">
                {isReality ? 'CALL (555) 0199 WITH INFORMATION' : 'NO SOULS LEFT BEHIND'}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MISSING_PERSONS.map((person, i) => (
                <motion.div 
                    key={person.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className={`relative p-6 border-2 flex flex-col items-center text-center
                        ${isReality 
                            ? 'border-gray-700 bg-gray-900/50' 
                            : 'border-red-900 bg-red-950/20'}
                    `}
                >
                    {/* "Photo" placeholder */}
                    <div className={`w-32 h-32 mb-4 bg-black flex items-center justify-center border
                        ${isReality ? 'border-gray-600' : 'border-red-800'}
                    `}>
                        <span className="font-vcr text-4xl text-gray-700">?</span>
                    </div>

                    <h3 className={`font-title text-2xl uppercase mb-2 ${isReality ? 'text-white' : 'text-red-500'}`}>
                        {person.name}
                    </h3>
                    
                    <div className="w-full h-px bg-gray-800 my-4" />

                    <div className="w-full flex justify-between font-vcr text-sm">
                        <span className="text-gray-500">LAST SEEN:</span>
                        <span className="text-gray-400">{person.last_seen}</span>
                    </div>
                    
                    <div className="w-full flex justify-between font-vcr text-sm mt-2">
                        <span className="text-gray-500">STATUS:</span>
                        <span className={`font-bold tracking-wider
                            ${isReality 
                                ? 'text-red-500' 
                                : 'text-upsidedown-glow'}
                        `}>
                            {isReality ? person.status : person.status_ud}
                        </span>
                    </div>
                    
                    {/* Reality specific: Tape Graphic */}
                    {isReality && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-500/80 rotate-1 shadow-sm" />
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MissingSection;