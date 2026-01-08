import React from 'react';

const VHSEffect: React.FC = () => {
  return (
    <>
      {/* Scanlines defined in index.html styles */}
      <div className="scanlines pointer-events-none" />
      
      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[51] bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Subtle Noise */}
      <div className="fixed inset-0 pointer-events-none z-[49] opacity-[0.03] mix-blend-overlay bg-noise" />
      
      {/* Chromatic Aberration Container (applied to body content effectively via mix-blend logic, 
          but here we simulate it via a screen overlay if we were doing post-processing. 
          For simple DOM, we just add the noise and scanlines) */}
    </>
  );
};

export default VHSEffect;