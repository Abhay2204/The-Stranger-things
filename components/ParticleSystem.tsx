import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ParticleSystemProps } from '../types';

const ParticleSystem: React.FC<ParticleSystemProps> = ({ dimension }) => {
  const isUpsideDown = dimension === 'upsidedown';
  const particleCount = isUpsideDown ? 60 : 25; // More particles in Upside Down

  // Generate random positions and durations once
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10, // 10s to 20s
      delay: Math.random() * 5,
      size: Math.random() * 4 + 1,
    }));
  }, [particleCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full transition-colors duration-1000 ${isUpsideDown ? 'bg-upsidedown-glow shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-gray-500 opacity-20'}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            top: '110%', // Start below screen
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 100], // Slight drift
            opacity: isUpsideDown ? [0, 0.8, 0] : [0, 0.3, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;