
import React, { useRef, useState } from 'react';
import Hero from '../components/UI/Hero';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Briefcase, Users, Zap, Award, BarChart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoTicker from '../components/UI/LogoTicker';
import MagicDivider from '../components/UI/MagicDivider';
import { HERO_VIDEOS, HERO_POSTERS, IMAGES } from '../media';

// Spotlight Card Component
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-white/10 bg-black overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(230, 0, 0, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Corporate: React.FC = () => {
  const features = [
    {
      title: "Brand Magic",
      description: "Integriamo il tuo logo e i tuoi prodotti nelle illusioni. La magia diventa uno strumento di marketing potentissimo e indimenticabile.",
      icon: <Award className="text-white" size={32} />
    },
    {
      title: "Team Building",
      description: "Niente unisce un team come lo stupore condiviso. Workshop di magia e show interattivi per rompere il ghiaccio e creare legami.",
      icon: <Users className="text-white" size={32} />
    },
    {
      title: "Gala & Dinner",
      description: "Eleganza assoluta. Intrattenimento discreto ma potente tra le portate o un grande show finale per chiudere la serata in bellezza.",
      icon: <Zap className="text-white" size={32} />
    },
     {
      title: "Lead Generation",
      description: "Attira folle al tuo stand fieristico. La magia ferma i passanti, crea il contatto e facilita la conversione commerciale.",
      icon: <BarChart className="text-white" size={32} />
    }
  ];

  const scenarios = [
    {
      title: "Aperitivo & Networking",
      subtitle: "Ice Breaking",
      img: IMAGES.CORPORATE.SCENARIO_NETWORKING,
      description: "Creare connessioni non è mai stato così facile. La magia elimina l'imbarazzo iniziale e dà alle persone un motivo per ridere e parlare insieme."
    },
    {
      title: "Cena di Gala",
      subtitle: "Main Show",
      img: IMAGES.CORPORATE.SCENARIO_GALA,
      description: "Il momento clou della serata. Uno spettacolo da palco elegante e coinvolgente che lascia tutti gli ospiti a bocca aperta."
    },
    {
      title: "Convention & Meeting",
      subtitle: "Motivational",
      img: IMAGES.CORPORATE.SCENARIO_TEAM,
      description: "Trasmetti i valori aziendali attraverso metafore magiche. Un modo innovativo per rinforzare messaggi chiave e motivare il team."
    }
  ];

  return (
    <>
      <Hero 
        variant="full"
        // Title, Subtitle, Badge, Buttons removed
        videoUrl={HERO_VIDEOS.CORPORATE}
        poster={HERO_POSTERS.CORPORATE}
      />

      {/* Features Grid */}
      <section className="bg-[#050505] py-20 md:py-32 relative">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* UPDATED HEADER SECTION: Centered on Mobile, Row on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24"
          >
             <div className="max-w-2xl text-center md:text-left">
                <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-none">
                  L'Arte del <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-magicRed to-red-700 animate-text-shimmer">Prestigio</span>
                </h2>
                <div className="h-1 w-32 bg-white/20 mx-auto md:mx-0"></div>
             </div>
             <p className="text-gray-400 text-lg max-w-md text-center md:text-right mt-8 md:mt-0 font-light leading-relaxed">
               Nel business, come nella magia, la percezione è tutto. Eleviamo la percezione del tuo brand.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
              <SpotlightCard className="rounded-sm h-full">
                <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-20">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-magicRed group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 leading-tight">{feature.title}</h3>
                    <p className="text-gray-400 font-light text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-magicRed">
                    <Zap size={24} />
                  </div>
                </div>
              </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <MagicDivider />

      {/* Visual Scenarios Section (New) */}
      <section className="py-20 bg-black relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
               <h3 className="font-serif text-3xl font-bold text-white/50 uppercase tracking-[0.2em]">Scenari d'Impatto</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {scenarios.map((item, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.15 }}
                 >
                 <Link to="/contact" className="block group relative h-[450px] lg:h-[500px] overflow-hidden rounded-[10px] cursor-pointer border border-white/5 hover:border-magicRed/40 hover:shadow-[0_0_30px_rgba(230,0,0,0.12)] transition-all duration-500 active:scale-[0.98]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                       <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          loading="lazy"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-magicRed text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{item.subtitle}</span>
                          <h3 className="font-serif text-3xl text-white font-bold mb-4 leading-tight">{item.title}</h3>
                          <div className="h-[1px] w-12 bg-white/30 mb-4 group-hover:w-full group-hover:bg-magicRed transition-all duration-500"></div>
                          <p className="text-gray-300 text-sm leading-relaxed opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:delay-100">
                             {item.description}
                          </p>
                       </div>
                       
                       <div className="absolute top-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                          <ArrowUpRight size={32} />
                       </div>
                    </div>
                 </Link>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <LogoTicker />

      {/* Minimal CTA */}
      <section className="py-24 md:py-32 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-4">
           <h3 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">Il tuo prossimo evento sarà leggendario?</h3>
           <div className="flex justify-center gap-6">
              <Link to="/contact" className="px-10 md:px-12 py-4 border border-white text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 font-bold uppercase tracking-[0.2em] active:scale-95">
                Contattami
              </Link>
           </div>
        </div>
      </section>
    </>
  );
};

export default Corporate;
