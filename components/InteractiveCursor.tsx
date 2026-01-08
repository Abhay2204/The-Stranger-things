import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Dimension } from '../types';

interface InteractiveCursorProps {
  dimension: Dimension;
}

const InteractiveCursor: React.FC<InteractiveCursorProps> = ({ dimension }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Motion values for smooth cursor tracking
  const initialX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const initialY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);

  // Smooth spring physics for the light lag
  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    // Check if mobile (disable cursor effects on touch devices)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* The flashlight beam styling (subtle ambient glow) */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full mix-blend-overlay transition-colors duration-700"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 600,
          height: 600,
          background: dimension === 'reality'
            ? 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(0,0,0,0) 60%)' // Blueish glow for Lab Reality
            : 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(0,0,0,0) 60%)', // Red glow for Upside Down
        }}
      />
    </>
  );
};

export default InteractiveCursor;