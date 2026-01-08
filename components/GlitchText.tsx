import React from 'react';
import { motion } from 'framer-motion';
import { GlitchTextProps } from '../types';

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Component = 'span', 
  className = '', 
  hoverTrigger = true 
}) => {
  return (
    <Component className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      
      {/* Glitch Layer 1 - Blue shift (Reality) */}
      <span 
        className={`absolute top-0 left-0 -z-10 w-full h-full text-hawkins opacity-0 
        ${hoverTrigger ? 'group-hover:opacity-70 group-hover:animate-[glitch-anim-1_0.4s_infinite_linear_alternate-reverse]' : 'opacity-70 animate-[glitch-anim-1_2s_infinite_linear_alternate-reverse]'}
        `}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Glitch Layer 2 - Red shift (Upside Down) */}
      <span 
        className={`absolute top-0 left-0 -z-10 w-full h-full text-upsidedown-glow opacity-0 
        ${hoverTrigger ? 'group-hover:opacity-70 group-hover:animate-[glitch-anim-2_0.4s_infinite_linear_alternate-reverse]' : 'opacity-70 animate-[glitch-anim-2_2s_infinite_linear_alternate-reverse]'}
        `}
        style={{ left: '-2px' }}
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
};

export default GlitchText;