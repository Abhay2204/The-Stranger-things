import React, { useState, useEffect, useRef } from 'react';
import { Dimension } from '../types';
import { CONTENT, RADIO_CHANNELS } from '../constants';
import GlitchText from './GlitchText';

interface TransmissionSectionProps {
    dimension: Dimension;
}

const TransmissionSection: React.FC<TransmissionSectionProps> = ({ dimension }) => {
    const isReality = dimension === 'reality';
    const content = isReality ? CONTENT.REALITY : CONTENT.UPSIDEDOWN;
    
    const [frequency, setFrequency] = useState(50);
    const [message, setMessage] = useState<string | null>(null);
    const [isTuned, setIsTuned] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    // Static Noise Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        
        const renderStatic = () => {
            const w = canvas.width;
            const h = canvas.height;
            const idata = ctx.createImageData(w, h);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;
            
            // Noise Color Logic
            // Reality: White/Gray/Blue static
            // Upside Down: Red/Black static
            
            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    if (isReality) {
                        // Gray noise
                        buffer32[i] = 0xff000000 | (100 << 16) | (100 << 8) | 100; 
                    } else {
                        // Red noise
                        buffer32[i] = 0xff000080; // Dark red AGBR
                    }
                } else {
                    // Transparent-ish
                    buffer32[i] = 0x00000000;
                }
            }
            
            ctx.putImageData(idata, 0, 0);
            
            // Apply overlay based on tuning
            // If tuned, opacity goes down
            const tuningOpacity = isTuned ? 0.05 : 0.4;
            ctx.fillStyle = isReality ? `rgba(56, 189, 248, ${0.1})` : `rgba(239, 68, 68, ${0.1})`;
            ctx.fillRect(0, 0, w, h);
            
            animationId = requestAnimationFrame(renderStatic);
        };
        
        renderStatic();
        return () => cancelAnimationFrame(animationId);
    }, [isReality, isTuned]);

    // Tuning Logic
    useEffect(() => {
        let found = null;
        for (const channel of RADIO_CHANNELS) {
            if (Math.abs(frequency - channel.freq) < 2) {
                found = isReality ? channel.msg_real : channel.msg_ud;
                break;
            }
        }
        
        setMessage(found);
        setIsTuned(!!found);
    }, [frequency, isReality]);

    return (
        <section id="transmission" className={`relative py-24 px-6 border-b transition-colors duration-500
            ${isReality ? 'bg-black border-gray-900' : 'bg-red-950/20 border-red-900'}
        `}>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className={`font-vcr text-xl tracking-[0.3em] mb-4 ${isReality ? 'text-hawkins' : 'text-upsidedown-glow'}`}>
                    {content.TRANSMISSION_DESC}
                </h2>
                <h3 className={`font-title text-4xl mb-12 text-white ${!isReality && 'animate-pulse'}`}>
                    {content.TRANSMISSION_TITLE}
                </h3>

                {/* The Radio Interface */}
                <div className={`p-8 border-4 rounded-lg relative overflow-hidden bg-black
                    ${isReality ? 'border-gray-700 shadow-[0_0_30px_rgba(56,189,248,0.1)]' : 'border-red-900 shadow-[0_0_30px_rgba(239,68,68,0.1)]'}
                `}>
                    
                    {/* Screen / Static Display */}
                    <div className="relative h-48 w-full bg-black mb-8 border-2 border-gray-800 rounded flex items-center justify-center overflow-hidden">
                        <canvas ref={canvasRef} width={600} height={200} className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isTuned ? 'opacity-20' : 'opacity-80'}`} />
                        
                        {/* Decoded Message */}
                        <div className={`relative z-20 font-vcr text-2xl md:text-4xl px-4
                            ${isReality ? 'text-hawkins text-glow-blue' : 'text-upsidedown-glow text-glow-red animate-pulse'}
                        `}>
                            {message || (
                                <span className="opacity-50 text-sm tracking-widest">
                                    {isReality ? 'SEARCHING FREQUENCY...' : 'NO SIGNAL'}
                                </span>
                            )}
                        </div>

                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-30 opacity-50" />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-6">
                        <span className="font-vcr text-xl text-gray-500">00.0</span>
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            step="0.1"
                            value={frequency}
                            onChange={(e) => setFrequency(parseFloat(e.target.value))}
                            className={`flex-grow h-2 rounded-lg appearance-none cursor-pointer
                                ${isReality ? 'bg-gray-800 accent-hawkins' : 'bg-red-900 accent-red-600'}
                            `}
                        />
                        <span className="font-vcr text-xl text-gray-500">100.0</span>
                    </div>
                    
                    <div className="mt-4 font-vcr text-3xl text-center">
                        <span className={isTuned ? (isReality ? 'text-hawkins' : 'text-red-500') : 'text-gray-700'}>
                            {frequency.toFixed(1)} MHz
                        </span>
                    </div>

                    {/* Hidden Channel Markers Hints */}
                    <div className="absolute bottom-2 left-0 w-full flex justify-between px-16 opacity-30 pointer-events-none">
                       {RADIO_CHANNELS.map((c) => (
                           <div key={c.freq} className="w-px h-2 bg-white" style={{ left: `${c.freq}%`, position: 'absolute' }} />
                       ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TransmissionSection;