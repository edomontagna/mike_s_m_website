
import React from 'react';
import Hero from '../components/UI/Hero';
import { SERVICES, EVENTS } from '../constants';
import { Check, Sparkles, Gem, Briefcase, PartyPopper, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LogoTicker from '../components/UI/LogoTicker';
import MagicDivider from '../components/UI/MagicDivider';
import { IMAGES } from '../media';

const Services: React.FC = () => {

  // Helper per mappare ID evento a Icona e Link
  const getEventDetails = (id: string) => {
    switch(id) {
      case 'weddings': return { icon: <Gem size={32} />, link: '/matrimoni' };
      case 'corporate': return { icon: <Briefcase size={32} />, link: '/aziende' };
      case 'events': return { icon: <PartyPopper size={32} />, link: '/eventi' };
      default: return { icon: <Sparkles size={32} />, link: '/contact' };
    }
  };

  // Helper per ottenere l'immagine corretta dal file media
  const getServiceImage = (id: string) => {
    switch(id) {
      case 'close-up': return IMAGES.SERVICES.THUMB_CLOSEUP;
      case 'mentalism': return IMAGES.SERVICES.THUMB_MENTALISM;
      case 'stage': return IMAGES.SERVICES.THUMB_STAGE;
      default: return IMAGES.SERVICES.THUMB_CLOSEUP;
    }
  };

  // Helper per suggerimenti link fantasma
  const getContextLink = (id: string) => {
    switch(id) {
        case 'close-up': return { text: "Disponibile per", linkText: "Matrimoni", url: "/matrimoni" };
        case 'mentalism': return { text: "Ideale per", linkText: "Eventi Aziendali", url: "/aziende" };
        case 'stage': return { text: "Perfetto per", linkText: "Grandi Eventi", url: "/eventi" };
        default: return null;
    }
  }

  return (
    <>
      <Hero
        variant="page"
        // Title and Subtitle removed from here to place them below the hero image
        poster={IMAGES.SERVICES_PAGE.HERO}
      />

      {/* Quick Navigation Boxes - Linking to Event Pages */}
      <div className="relative z-30 -mt-16 md:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section Moved Here */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-none">
              I Miei Servizi
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light drop-shadow-xl leading-relaxed">
              Magia, Mentalismo e Intrattenimento Esclusivo
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((evt, idx) => {
            const { icon, link } = getEventDetails(evt.id);
            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
              >
                <Link
                  to={link}
                  className="block bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-sm cursor-pointer group hover:border-magicRed/50 hover:bg-[#0f0f0f] transition-all duration-300 shadow-xl backdrop-blur-xl h-full relative overflow-hidden active:scale-[0.98] transition-transform"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-magicRed/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full justify-between gap-6 md:gap-0">
                    <div>
                      <div className="flex items-center justify-between mb-6 md:mb-8">
                        <span className="text-white group-hover:text-magicRed transition-colors duration-300 bg-white/5 p-4 rounded-full border border-white/5 group-hover:border-magicRed/30">
                          {icon}
                        </span>
                        <span className="text-gray-500 font-serif font-bold text-xl opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                      </div>

                      <h3 className="font-serif text-3xl text-white font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {evt.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">
                        {evt.description}
                      </p>
                    </div>

                    <div className="flex items-center text-magicRed text-xs font-bold uppercase tracking-widest">
                      Esplora <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300"/>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Magic Divider between Event cards and Tipologie di Performance */}
      <MagicDivider />

      {/* Technical Skills Section - Informational Only (No Links) */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">

          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              Tipologie di Performance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-400 text-lg"
            >
              Le tecniche magiche che utilizzo per rendere unici i tuoi eventi.
            </motion.p>
          </div>

          {SERVICES.map((service, idx) => {
             const contextLink = getContextLink(service.id);
             return (
            <div
              key={service.id}
              className="border-b border-white/5 pb-16 md:pb-24 last:border-0"
            >
              <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>

                {/* Image Side with Glow Border */}
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] overflow-hidden rounded-[10px] group border border-white/5 hover:border-magicRed/30 hover:shadow-[0_0_25px_rgba(230,0,0,0.12)] transition-all duration-500">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                   <img
                      src={getServiceImage(service.id)}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                   />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                     <span className="w-8 h-[1px] bg-magicRed"></span>
                     <span className="text-magicRed text-xs font-bold tracking-[0.2em] uppercase">Tecnica {idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8 md:mb-10 font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-sm"
                      >
                        <Check size={16} className="text-magicRed mr-4 flex-shrink-0" />
                        <span className="text-gray-300 text-sm tracking-wide">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Context Link (Ghost Link) */}
                  {contextLink && (
                    <div className="text-gray-500 text-sm italic border-l-2 border-white/10 pl-4">
                        {contextLink.text} <Link to={contextLink.url} className="text-gray-400 hover:text-white underline decoration-magicRed/50 underline-offset-4 transition-colors">{contextLink.linkText}</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );})}
        </div>
      </section>

      {/* Partners */}
      <LogoTicker />

      {/* Magic Divider between LogoTicker and CTA */}
      <MagicDivider />

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
        {/* Dark Red Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-black to-black"></div>

        {/* HERE WE USE THE CENTRALIZED MEDIA FOR STARDUST */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${IMAGES.GLOBAL.TEXTURE_STARDUST}')` }}></div>

        {/* Glow Effects with floating and pulsing animations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magicRed/10 blur-[100px] rounded-full pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magicRed/5 blur-[100px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-magicRed/[0.07] blur-[120px] rounded-full pointer-events-none animate-float"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg leading-none">
              Qualcosa di <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Unico?</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 md:mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Non trovi esattamente quello che cerchi? Creiamo insieme uno spettacolo su misura per le tue esigenze specifiche.
            </p>

            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-4 px-10 md:px-14 py-5 md:py-6 bg-transparent overflow-hidden rounded-sm transition-all duration-300 active:scale-[0.98] transition-transform"
            >
              <div className="absolute inset-0 border border-white/30 group-hover:border-magicRed/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-magicRed/10 transition-colors duration-300 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-magicRed to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <span className="relative z-10 font-bold uppercase tracking-[0.25em] text-white group-hover:text-white transition-colors text-xs md:text-base">
                Parliamone
              </span>
              <Sparkles className="relative z-10 text-magicRed animate-pulse" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
