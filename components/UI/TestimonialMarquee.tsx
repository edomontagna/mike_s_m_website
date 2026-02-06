
import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

// --- Card Component ---
const TestimonialCard: React.FC<{ t: TestimonialItem }> = ({ t }) => (
  <div
    className="
      w-[300px] h-[320px] p-6
      md:w-[450px] md:h-[360px] md:p-8
      bg-gradient-to-b from-white/[0.04] to-transparent
      rounded-2xl border border-white/5 flex-shrink-0
      backdrop-blur-md hover:border-magicRed/40 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(230,0,0,0.1)]
      transition-all duration-300 group select-none flex flex-col justify-between relative overflow-hidden mx-3 md:mx-4
    "
  >
    <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-magicRed/5 rounded-full blur-[40px] md:blur-[50px] pointer-events-none group-hover:bg-magicRed/10 transition-colors duration-500"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 md:p-3 bg-white/5 rounded-full text-white/40 group-hover:text-magicRed group-hover:bg-magicRed/10 transition-all duration-300">
          <Quote size={16} className="md:w-5 md:h-5 fill-current transform scale-x-[-1]" />
        </div>
        <div className="flex gap-1 bg-black/40 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} className="text-magicRed fill-magicRed" />)}
        </div>
      </div>

      <div className="flex-grow overflow-hidden relative mb-4">
        <p className="text-gray-200 italic font-serif text-[15px] md:text-[18px] leading-[1.6] line-clamp-[6] group-hover:text-white transition-colors duration-300">
          "{t.quote}"
        </p>
      </div>

      <div className="relative z-10 flex items-center pt-4 border-t border-white/10 mt-auto">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white font-serif font-bold text-lg md:text-xl mr-3 md:mr-4 border border-white/10 shadow-lg shrink-0 group-hover:scale-110 group-hover:border-magicRed/50 transition-all duration-300">
          {t.name.charAt(0)}
        </div>
        <div className="overflow-hidden min-w-0">
          <div className="font-bold text-white text-sm md:text-base tracking-wide group-hover:text-magicRed transition-colors duration-300 truncate">{t.name}</div>
          <div className="flex flex-col">
            {t.role && <span className="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest mt-0.5 font-medium truncate">{t.role}</span>}
            {t.source && <span className="text-[9px] md:text-[10px] text-magicRed/80 uppercase tracking-widest mt-0.5 font-bold">{t.source}</span>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- CSS Marquee Row ---
const MarqueeRow: React.FC<{ items: TestimonialItem[]; reverse?: boolean }> = ({ items, reverse = false }) => {
  const doubled = [...items, ...items];

  return (
    <div className={`flex w-max ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'} pause-on-hover-row`}>
      {doubled.map((t, idx) => (
        <TestimonialCard key={`${t.id}-${idx}`} t={t} />
      ))}
    </div>
  );
};

const TestimonialMarquee: React.FC = () => {
  const featured = TESTIMONIALS.filter(t => t.featured);
  const midpoint = Math.ceil(featured.length / 2);
  const row1Items = featured.slice(0, midpoint);
  const row2Items = featured.slice(midpoint);

  return (
    <section className="py-20 md:py-32 bg-[#050505] overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16 select-none relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Dicono di Mike</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-magicRed to-transparent mx-auto rounded-full mb-4 md:mb-6"></div>
        <p className="text-gray-400 text-base md:text-lg">Le parole di chi ha vissuto la magia</p>
      </div>

      <div className="relative z-20 space-y-6 md:space-y-8">
        <div className="relative w-full mask-fade-sides overflow-hidden">
           <MarqueeRow items={row1Items} />
        </div>
        <div className="relative w-full mask-fade-sides overflow-hidden">
           <MarqueeRow items={row2Items} reverse />
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
