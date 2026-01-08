import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Dimension, ToggleSwitchProps } from '../types';
import { IMAGES, NAVIGATION_LINKS, CONTENT } from '../constants';
import GlitchText from './GlitchText';

interface HeroProps extends ToggleSwitchProps {}

const Hero: React.FC<HeroProps> = ({ dimension, toggleDimension }) => {
  const { scrollY } = useScroll();
  
  // Parallax Values
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  const isReality = dimension === 'reality';
  const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center z-10">
      
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120vh] w-full bg-cover bg-center transition-all duration-1000 ease-in-out bg-obsidian"
        style={{ 
            y: yBackground,
            backgroundImage: `url(${isReality ? IMAGES.WOODS_REALITY : IMAGES.WOODS_UPSIDE_DOWN})`,
            // Reality: Cold Blue Lab Feel. Upside Down: Hellish Red.
            // Darkened brightness for better text contrast
            filter: isReality 
                ? 'brightness(0.6) contrast(1.2) sepia(0.2) hue-rotate(180deg) saturate(1.2)' 
                : 'brightness(0.5) contrast(1.4) hue-rotate(320deg) saturate(1.2)',
            scale: 1.1 
        }}
      />

      {/* Vignette & Color Grading Overlay - Darkened for Text Visibility */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-t opacity-90 transition-colors duration-1000
        ${isReality ? 'from-obsidian via-black/50 to-black/40' : 'from-obsidian via-black/50 to-black/40'}
      `} />

      {/* Foreground Layer: UI & Titles */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-30 flex flex-col items-center justify-center px-4 text-center w-full max-w-6xl"
      >
        
        {/* Main Title Group */}
        <div className="mb-16 w-full">
            <h2 className="font-vcr text-sm md:text-xl text-gray-300 tracking-[0.5em] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-pulse">
                {content.SUBTITLE}
            </h2>
            
            <div className="relative h-32 md:h-48 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.h1 
                        key={isReality ? "reality" : "upside"}
                        initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8 }}
                        className={`font-title text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase absolute w-full
                            ${isReality ? 'text-hawkins text-glow-blue drop-shadow-[0_5px_10px_rgba(0,0,0,0.9)]' : 'text-upsidedown-glow text-glow-red drop-shadow-[0_5px_10px_rgba(0,0,0,0.9)]'}
                        `}
                        style={{
                           // Extra stroke for legibility against complex backgrounds
                           WebkitTextStroke: '1px rgba(0,0,0,0.3)' 
                        }}
                    >
                        {content.TITLE}
                    </motion.h1>
                </AnimatePresence>
            </div>

            <div className={`w-32 h-1 mx-auto mt-8 transition-colors duration-700
                ${isReality ? 'bg-hawkins shadow-[0_0_15px_#38bdf8]' : 'bg-upsidedown-glow shadow-[0_0_15px_#ef4444]'}`} 
            />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-16 font-vcr text-xl md:text-2xl z-50 mb-16">
            {NAVIGATION_LINKS.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href}
                    className={`transition-colors duration-300 relative group drop-shadow-md
                        ${isReality ? 'text-gray-300 hover:text-hawkins' : 'text-gray-400 hover:text-upsidedown-glow'}`}
                >
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {'>'}
                    </span>
                    <GlitchText text={link.name} />
                </a>
            ))}
        </nav>

        {/* Dimension Toggle Switch */}
        <button 
            onClick={toggleDimension}
            className={`group relative px-8 py-3 border transition-all duration-500 hover:scale-105 active:scale-95 bg-black/60 backdrop-blur-md
            ${isReality ? 'border-hawkins hover:bg-hawkins/10' : 'border-upsidedown-glow hover:bg-upsidedown-glow/10'}`}
        >
            <span className={`font-vcr text-lg tracking-widest transition-colors duration-300
                ${isReality ? 'text-hawkins group-hover:text-white' : 'text-upsidedown-glow group-hover:text-white'}`}>
                {isReality ? 'ENTER UPSIDE DOWN' : 'RETURN TO REALITY'}
            </span>
            
            {/* Corners */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 -translate-x-1 -translate-y-1 transition-colors duration-300
                ${isReality ? 'border-hawkins' : 'border-upsidedown-glow'}`} />
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 translate-x-1 translate-y-1 transition-colors duration-300
                ${isReality ? 'border-hawkins' : 'border-upsidedown-glow'}`} />
        </button>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center p-1 backdrop-blur-sm bg-black/20
            ${isReality ? 'border-gray-400' : 'border-gray-500'}`}>
            <div className={`w-1 h-2 rounded-full transition-colors duration-500 ${isReality ? 'bg-hawkins' : 'bg-upsidedown-glow'}`} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;