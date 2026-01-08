import React from 'react';
import { motion } from 'framer-motion';
import { Dimension } from '../types';
import { EXPERIMENTS, CONTENT } from '../constants';

interface LabSectionProps {
  dimension: Dimension;
}

const LabSection: React.FC<LabSectionProps> = ({ dimension }) => {
  const isReality = dimension === 'reality';
  const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;
  
  // Theme colors
  const borderColor = isReality ? 'border-hawkins' : 'border-upsidedown-glow';
  const textColor = isReality ? 'text-hawkins' : 'text-upsidedown-glow';
  
  return (
    <section id="lab" className={`relative min-h-screen py-24 px-6 z-20 
        ${isReality ? 'bg-black bg-grid-pattern' : 'bg-black/80'}`}>
      
      {/* Decorative Grid Overlay for Lab */}
      {isReality && (
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center border-b-2 border-gray-800 pb-8">
            <h2 className={`font-vcr text-xl tracking-[0.5em] mb-4 ${textColor}`}>
                {content.LAB_DESC}
            </h2>
            <h3 className={`font-title text-4xl md:text-6xl text-white mb-2 ${!isReality && 'animate-pulse'}`}>
                {content.LAB_TITLE}
            </h3>
            <p className="font-vcr text-gray-500">{content.LAB_SUBTITLE}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIMENTS.map((exp, i) => (
                <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative p-6 border bg-black transition-all duration-300 hover:-translate-y-2
                        ${isReality 
                            ? 'border-hawkins/30 hover:border-hawkins hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]' 
                            : 'border-upsidedown-base hover:border-upsidedown-glow hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]'}
                    `}
                >
                    {/* Corner accents for Lab look */}
                    {isReality && (
                        <>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-hawkins transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-10" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-hawkins" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-hawkins" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-hawkins" />
                        </>
                    )}

                    <div className="flex justify-between items-start mb-4 font-vcr">
                        <span className={`text-lg transition-colors ${isReality ? 'text-gray-400 group-hover:text-hawkins' : 'text-red-900 group-hover:text-red-500'}`}>
                            {isReality ? `FILE_${exp.id}` : `CORRUPTION_${exp.id}`}
                        </span>
                        <div className={`w-3 h-3 transition-transform duration-300 group-hover:scale-150 ${isReality ? 'bg-hawkins' : 'bg-upsidedown-glow'} ${!isReality && 'animate-ping'}`} />
                    </div>

                    <h4 className={`font-title text-3xl mb-4 transition-colors duration-300 group-hover:text-white 
                        ${isReality ? 'text-gray-200' : 'text-red-500'}`}>
                        {exp.title}
                    </h4>

                    <div className="font-vcr text-sm space-y-2 border-t border-gray-900 pt-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">STATUS</span>
                            <span className={`${exp.status === 'CRITICAL' || exp.status === 'ESCAPED' ? 'text-red-500' : 'text-hawkins'}`}>
                                {isReality ? exp.status : 'BREACH'}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">DATE</span>
                            <span className="text-gray-400 group-hover:text-gray-300">{exp.date}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LabSection;