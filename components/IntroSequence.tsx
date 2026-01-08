import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { IntroSequenceProps } from '../types';

const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800); 
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.5 } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.5, 
      filter: 'blur(20px)',
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, scale: 3, y: -20, filter: 'blur(10px)' },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const barVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", delay: 2 }
    }
  };

  // KEEPING INTRO RED AS IT IS THE BRAND LOGO
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden will-change-transform"
      initial="hidden"
      animate={isExiting ? "exit" : "visible"}
      variants={containerVariants}
    >
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Top Bar */}
        <motion.div 
            variants={barVariants}
            className="w-[120%] h-1 bg-red-600 shadow-[0_0_15px_#E11225] mb-4"
        />

        {/* STRANGER */}
        <motion.div className="flex space-x-1 md:space-x-4 mb-2">
            {"STRANGER".split('').map((char, i) => (
                <motion.span
                    key={`top-${i}`}
                    variants={letterVariants}
                    className="font-title text-5xl md:text-9xl text-transparent font-bold tracking-widest uppercase"
                    style={{ 
                         WebkitTextStroke: '2px #E11225', // Iconic Outline style for intro
                         textShadow: '0 0 30px rgba(225,18,37,0.4)'
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>

        {/* THINGS */}
        <motion.div className="flex space-x-1 md:space-x-4 mt-2">
            {"THINGS".split('').map((char, i) => (
                <motion.span
                    key={`bottom-${i}`}
                    variants={letterVariants}
                    className="font-title text-5xl md:text-9xl text-transparent font-bold tracking-widest uppercase"
                    style={{ 
                         WebkitTextStroke: '2px #E11225',
                         textShadow: '0 0 30px rgba(225,18,37,0.4)'
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>

         {/* Bottom Bar */}
         <motion.div 
            variants={barVariants}
            className="w-[120%] h-1 bg-red-600 shadow-[0_0_15px_#E11225] mt-4"
        />
      </div>
      
      {/* Film Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay animate-pulse-fast"></div>
    </motion.div>
  );
};

export default IntroSequence;