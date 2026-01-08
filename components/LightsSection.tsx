import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dimension } from '../types';
import { CONTENT, ALPHABET_GRID, IMAGES } from '../constants';

interface LightsSectionProps {
    dimension: Dimension;
}

const LightsSection: React.FC<LightsSectionProps> = ({ dimension }) => {
    const isReality = dimension === 'reality';
    const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;
    
    const [activeLetter, setActiveLetter] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toUpperCase();
        setInputValue(val);
        
        // Light up the last character typed
        const lastChar = val.slice(-1);
        if (/[A-Z]/.test(lastChar)) {
            setActiveLetter(lastChar);
            // Reset light after a short delay
            setTimeout(() => setActiveLetter(null), 800);
        } else if (lastChar === ' ') {
            setActiveLetter(' ');
             setTimeout(() => setActiveLetter(null), 800);
        }
    };

    return (
        <section id="lights" className="relative py-24 px-6 overflow-hidden">
             {/* Background Wall Texture */}
            <div 
                className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-700
                    ${isReality ? 'brightness-50 sepia-[0.3]' : 'brightness-[0.2] hue-rotate-[300deg] contrast-125'}
                `}
                style={{ 
                    backgroundImage: `url(${IMAGES.WALL_PAPER})`,
                }}
            />
            {/* Dark overlay for readability */}
            <div className={`absolute inset-0 z-0 bg-black/60 ${!isReality && 'bg-red-900/20'}`} />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className={`font-title text-5xl md:text-6xl mb-2 text-white drop-shadow-lg`}>
                        {content.LIGHTS_TITLE}
                    </h2>
                    <p className={`font-vcr text-xl tracking-widest ${isReality ? 'text-gray-300' : 'text-red-300'}`}>
                        {content.LIGHTS_DESC}
                    </p>
                </div>

                {/* The Wall Grid */}
                <div className="w-full max-w-3xl mb-12 select-none">
                    {ALPHABET_GRID.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-center gap-4 md:gap-8 mb-4 md:mb-8">
                            {row.map((char) => {
                                const isActive = activeLetter === char;
                                return (
                                    <div key={char} className="relative flex flex-col items-center group">
                                        {/* The Bulb / Spore */}
                                        <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full mb-2 transition-all duration-100
                                            ${isActive 
                                                ? (isReality ? 'bg-yellow-100 scale-125 shadow-[0_0_40px_rgba(255,255,0,1)]' : 'bg-red-500 scale-125 shadow-[0_0_40px_rgba(255,0,0,1)]') 
                                                : (isReality ? 'bg-gray-800 border border-gray-600' : 'bg-gray-900 border border-red-900 opacity-50')
                                            }
                                        `}>
                                            {/* Wire connecting bulbs (Reality only) */}
                                            {isReality && (
                                                <div className="absolute top-1/2 left-full w-4 md:w-8 h-[2px] bg-green-900 -translate-y-1/2 -z-10 transform rotate-12" />
                                            )}
                                        </div>
                                        
                                        {/* The Paint Letter */}
                                        <span className={`font-marker text-2xl md:text-4xl font-bold font-title
                                            ${isActive 
                                                ? 'text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]' 
                                                : 'text-black opacity-80'
                                            }
                                        `}>
                                            {char}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Interactive Input */}
                <div className="w-full max-w-md relative">
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={isReality ? "RUN..." : "FEED..."}
                        className={`w-full bg-transparent border-b-2 font-vcr text-3xl md:text-5xl text-center py-4 focus:outline-none transition-all duration-300
                            ${isReality 
                                ? 'border-white/50 text-white placeholder-white/30 focus:border-hawkins focus:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.5)]' 
                                : 'border-red-500/50 text-red-500 placeholder-red-800/50 focus:border-red-500 focus:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.5)]'}
                        `}
                    />
                    <div className="text-center mt-2 font-vcr text-sm opacity-50 text-white">
                        TYPE TO SIGNAL
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LightsSection;