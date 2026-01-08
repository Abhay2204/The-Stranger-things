import React from 'react';
import { motion } from 'framer-motion';
import { Dimension } from '../types';
import { LOCATIONS, CONTENT } from '../constants';

interface LocationsSectionProps {
  dimension: Dimension;
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ dimension }) => {
  const isReality = dimension === 'reality';
  const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;

  return (
    <section id="locations" className="relative py-24 overflow-hidden z-20 bg-black/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-center space-x-4">
            <div className={`h-1 flex-grow ${isReality ? 'bg-hawkins' : 'bg-upsidedown-glow'}`} />
            <h2 className={`font-title text-4xl md:text-6xl uppercase ${isReality ? 'text-white' : 'text-red-600'}`}>
                {content.LOCATIONS_TITLE}
            </h2>
            <div className={`h-1 flex-grow ${isReality ? 'bg-hawkins' : 'bg-upsidedown-glow'}`} />
        </div>

        <div className="space-y-24">
            {LOCATIONS.map((loc, index) => (
                <motion.div 
                    key={loc.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Image Box */}
                    <div className="w-full md:w-1/2 relative group cursor-pointer">
                        {/* Border Frame */}
                        <div className={`absolute inset-0 translate-x-4 translate-y-4 border-2 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2
                            ${isReality 
                                ? 'border-hawkins/30 group-hover:border-hawkins group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                                : 'border-upsidedown-glow/30 group-hover:border-upsidedown-glow group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                            }`} 
                        />
                        
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden bg-gray-900 border border-transparent transition-colors group-hover:border-gray-500/20">
                             <img 
                                src={isReality ? loc.img_real : loc.img_ud} 
                                alt={isReality ? loc.name_real : loc.name_ud}
                                className={`w-full h-full object-cover transition-all duration-1000 transform
                                    ${isReality 
                                        ? 'group-hover:scale-110 filter contrast-125' 
                                        : 'group-hover:scale-125 group-hover:rotate-1 filter sepia brightness-50 contrast-150 hue-rotate-[-30deg]'
                                    }
                                `}
                             />
                             {/* Overlay Texture */}
                             <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay" />
                        </div>
                    </div>

                    {/* Text Box */}
                    <div className="w-full md:w-1/2 text-center md:text-left group">
                        <h3 className={`font-vcr text-4xl mb-4 tracking-widest transition-all duration-300
                             ${isReality ? 'text-hawkins group-hover:text-white' : 'text-upsidedown-glow group-hover:text-red-500'}
                        `}>
                            {isReality ? loc.name_real : loc.name_ud}
                        </h3>
                        <p className={`font-title text-xl md:text-2xl leading-relaxed transition-colors duration-300
                            ${isReality ? 'text-gray-400 group-hover:text-gray-200' : 'text-red-900 group-hover:text-red-800'}
                        `}>
                            {isReality ? loc.desc_real : loc.desc_ud}
                        </p>
                        
                        <div className={`mt-6 inline-block px-4 py-1 border text-sm font-vcr tracking-widest transition-colors duration-300
                            ${isReality 
                                ? 'border-gray-700 text-gray-500 group-hover:border-hawkins group-hover:text-hawkins' 
                                : 'border-red-900 text-red-900 group-hover:border-upsidedown-glow group-hover:text-upsidedown-glow'}
                        `}>
                            COORDINATES: {Math.random().toFixed(4)}, {Math.random().toFixed(4)}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;