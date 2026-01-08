import React from 'react';
import { Dimension } from '../types';

interface FooterProps {
    dimension: Dimension;
}

const Footer: React.FC<FooterProps> = ({ dimension }) => {
    const isReality = dimension === 'reality';
    const colorClass = isReality ? 'text-hawkins hover:text-white' : 'text-upsidedown-glow hover:text-white';

    return (
        <footer className="relative z-20 py-12 border-t border-gray-900 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-title text-2xl text-white tracking-widest uppercase">Stranger Things</h4>
                    <p className="font-vcr text-gray-600 mt-2">© 1984 HAWKINS NATIONAL LABORATORY</p>
                </div>

                <div className="flex gap-8 font-vcr text-lg">
                    {['NETFLIX', 'INSTAGRAM', 'TWITTER'].map((link) => (
                        <a 
                            key={link} 
                            href="#" 
                            className={`transition-colors duration-300 text-gray-500 ${colorClass}`}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;