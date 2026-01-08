import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Dimension } from '../types';
import { CONTENT, IMAGES } from '../constants';

interface PsychicTestSectionProps {
  dimension: Dimension;
}

const PsychicTestSection: React.FC<PsychicTestSectionProps> = ({ dimension }) => {
    const isReality = dimension === 'reality';
    const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;
    
    const [isHolding, setIsHolding] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isCrushed, setIsCrushed] = useState(false);
    const controls = useAnimation();
    const intervalRef = useRef<number | null>(null);

    // Reset when dimension changes
    useEffect(() => {
        setIsCrushed(false);
        setProgress(0);
    }, [dimension]);

    const startFocus = () => {
        if (isCrushed) return;
        setIsHolding(true);
        intervalRef.current = window.setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setIsCrushed(true);
                    setIsHolding(false);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    // Trigger Shake/Crush Animation
                    controls.start({
                        scaleX: [1, 1.2, 0.4],
                        scaleY: [1, 0.8, 0.4],
                        rotate: [0, 10, -10, 20, -20, 0],
                        opacity: [1, 1, 0],
                        transition: { duration: 0.3 }
                    });
                    return 100;
                }
                return prev + 1; // Speed of focus
            });
        }, 30);
    };

    const stopFocus = () => {
        if (isCrushed) return;
        setIsHolding(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        // Decay progress if released early
        const decay = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 0) {
                    clearInterval(decay);
                    return 0;
                }
                return prev - 2;
            });
        }, 10);
    };
    
    // Shake effect intensity based on progress
    const shakeIntensity = isHolding ? (progress / 10) : 0;

    return (
        <section id="psychic" className={`relative py-24 px-6 border-b transition-colors duration-500 overflow-hidden
             ${isReality ? 'bg-obsidian border-gray-900' : 'bg-black border-red-900'}
        `}>
            {/* Background Radial Gradient that grows with focus */}
            <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-100
                    ${isReality ? 'bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,rgba(0,0,0,0)_70%)]' : 'bg-[radial-gradient(circle,rgba(239,68,68,0.2)_0%,rgba(0,0,0,0)_70%)]'}
                `}
                style={{ opacity: progress / 100 }}
            />

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                
                {/* Left Side: Instructions */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className={`font-vcr text-lg tracking-widest mb-2 ${isReality ? 'text-gray-500' : 'text-red-800'}`}>
                        {content.PSYCHIC_TITLE}
                    </h2>
                    <h3 className={`font-title text-4xl md:text-5xl mb-6 text-white`}>
                        {isReality ? 'Focus Your Mind' : 'Destroy The Connection'}
                    </h3>
                    <p className="font-vcr text-gray-400 mb-8 max-w-md">
                        {isReality 
                            ? "Subject 011 demonstrated ability to crush inorganic matter with sustained telekinetic pressure. Attempt to replicate."
                            : "The Hive Mind protects its hosts. Sever the link by focusing pure destructive intent on the organ."}
                    </p>
                    
                    <button 
                        onMouseDown={startFocus}
                        onMouseUp={stopFocus}
                        onTouchStart={startFocus}
                        onTouchEnd={stopFocus}
                        disabled={isCrushed}
                        className={`px-8 py-4 border-2 font-vcr text-xl tracking-widest transition-all duration-100 select-none
                            ${isCrushed 
                                ? 'border-gray-800 text-gray-800 cursor-not-allowed' 
                                : isReality 
                                    ? 'border-hawkins text-hawkins hover:bg-hawkins hover:text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95' 
                                    : 'border-upsidedown-glow text-upsidedown-glow hover:bg-upsidedown-glow hover:text-black hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] active:scale-95'}
                        `}
                    >
                        {isCrushed ? 'SUBJECT DESTROYED' : content.PSYCHIC_ACTION}
                    </button>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-900 mt-6 rounded overflow-hidden">
                        <div 
                            className={`h-full transition-all duration-75 ${isReality ? 'bg-hawkins' : 'bg-upsidedown-glow'}`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Right Side: The Object */}
                <div className="flex-1 flex justify-center items-center h-80 relative cursor-crosshair">
                     {/* Focus Ring Effect */}
                     {isHolding && (
                         <motion.div 
                            className={`absolute rounded-full border-2 opacity-50
                                ${isReality ? 'border-hawkins' : 'border-upsidedown-glow'}
                            `}
                            initial={{ width: 100, height: 100, opacity: 1 }}
                            animate={{ width: 300, height: 300, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                         />
                     )}

                     <motion.div
                        animate={controls}
                        style={{
                            x: isHolding ? [ -shakeIntensity, shakeIntensity, -shakeIntensity ] : 0,
                            y: isHolding ? [ -shakeIntensity, shakeIntensity, -shakeIntensity ] : 0,
                        }}
                        transition={{ duration: 0.1, repeat: isHolding ? Infinity : 0 }}
                        className="relative w-64 h-64 flex items-center justify-center"
                     >
                         {isCrushed ? (
                             // Aftermath Visual - Show crushed image
                             <>
                                <motion.img
                                   src={isReality ? IMAGES.CRUSHED_COKE : IMAGES.CRUSHED_DEMOGORGON}
                                   alt="Crushed"
                                   initial={{ scale: 0, rotate: 0 }} 
                                   animate={{ scale: 1, rotate: 360 }} 
                                   transition={{ duration: 0.5 }}
                                   className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                   onError={(e) => {
                                       // Fallback to text if image not found
                                       e.currentTarget.style.display = 'none';
                                       e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                   }}
                                />
                                <div className={`font-title text-2xl hidden ${isReality ? 'text-gray-600' : 'text-red-900'}`}>
                                   {isReality ? '*CRUNCH*' : '*SPLAT*'}
                                </div>
                             </>
                         ) : (
                             // The Target
                             <img 
                                src={isReality ? IMAGES.COKE_CAN : IMAGES.DEMOGORGON_TARGET}
                                alt="Target"
                                className={`max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-300
                                    ${!isReality && 'filter hue-rotate-[-30deg] brightness-90 sepia'}
                                    ${isHolding ? 'brightness-125 contrast-125' : ''}
                                `}
                                onError={(e) => {
                                    console.error('Failed to load image:', e.currentTarget.src);
                                    // Show a placeholder
                                    e.currentTarget.style.display = 'none';
                                }}
                                onLoad={() => {
                                    console.log('Image loaded successfully:', isReality ? IMAGES.COKE_CAN : IMAGES.DEMOGORGON_TARGET);
                                }}
                             />
                         )}
                     </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PsychicTestSection;