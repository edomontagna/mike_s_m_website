
import React from 'react';
import { COLLABORATIONS } from '../../constants';

const LogoTicker: React.FC = () => {
  // Duplicate items for seamless loop
  const items = [...COLLABORATIONS, ...COLLABORATIONS];

  return (
    <div className="w-full py-24 bg-black border-y border-white/5 relative group/container overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center select-none">
        <h3 className="font-serif text-3xl font-bold text-white/40 uppercase tracking-[0.3em]">Hanno Scelto la Magia</h3>
      </div>

      <div className="relative mask-fade-sides">
        <div
          className="flex w-max animate-scroll-left pause-on-hover-row"
        >
          {items.map((collab, index) => (
            <div
              key={`${collab.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-[160px] md:w-[240px] h-[100px] md:h-[120px]"
            >
               <img
                 src={collab.logo}
                 alt={collab.name}
                 className="max-h-[60%] max-w-[70%] w-auto object-contain opacity-40 group-hover/container:opacity-80 transition-opacity duration-500 brightness-0 invert pointer-events-none select-none"
                 draggable="false"
                 loading="lazy"
               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
