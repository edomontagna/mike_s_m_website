
import React, { useRef, useState } from 'react';
import Hero from '../components/UI/Hero';
import { motion, useMotionTemplate, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Award, Globe, Heart, Star, ArrowRight, Sparkles, Quote, ChevronDown } from 'lucide-react';
import { HERO_VIDEOS, HERO_POSTERS, IMAGES } from '../media';
import { Link } from 'react-router-dom';
import MagicDivider from '../components/UI/MagicDivider';
import { TESTIMONIALS } from '../constants';
import { TestimonialItem } from '../types';

// Componente "Magic Portal" interno per incapsulare la logica complessa
const MagicPortalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Fisica della molla per un movimento fluido e "pesante" (premium feel)
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32;
    const mouseY = (e.clientY - rect.top) * 32;

    const rX = (mouseY / height - 32 / 2) * -1; // Rotazione inversa per effetto 3D corretto
    const rY = (mouseX / width - 32 / 2) * 1;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative group w-full max-w-3xl cursor-pointer"
    >
      <Link to="/contact" className="block relative h-[400px] w-full rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(230,0,0,0.3)] hover:border-magicRed/50">
        
        {/* Background Texture & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-black z-0"></div>
        <div className="absolute inset-0 opacity-20 bg-repeat bg-[length:200px]" style={{ backgroundImage: `url('${IMAGES.GLOBAL.TEXTURE_STARDUST}')` }}></div>
        
        {/* Floating Elements (Parallax) */}
        <div className="absolute inset-0 flex items-center justify-center z-10" style={{ transform: "translateZ(50px)" }}>
           <div className="text-center px-8">
              <motion.div 
                className="inline-block mb-6 p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-magicRed/10 group-hover:border-magicRed/50 transition-all duration-500"
              >
                <Sparkles size={40} className="text-gray-400 group-hover:text-magicRed transition-colors duration-500 animate-pulse-slow" />
              </motion.div>
              
              <h3 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 tracking-tight group-hover:scale-105 transition-transform duration-500 leading-tight">
                Inizia la Magia
              </h3>
              
              <p className="text-gray-400 text-lg md:text-xl font-light max-w-lg mx-auto mb-10 group-hover:text-white transition-colors duration-500">
                Hai letto la mia storia. Ora scriviamo insieme il prossimo capitolo del tuo evento.
              </p>

              <div className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.3em] uppercase text-white group-hover:text-magicRed transition-colors duration-300">
                <span>Contattami</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
           </div>
        </div>

        {/* Dynamic Spotlight Effect on Hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-shine z-20 pointer-events-none"
        ></div>

        {/* Border Glow */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-magicRed/20 rounded-2xl transition-colors duration-500 z-30"></div>
        
      </Link>
    </motion.div>
  );
};

// --- Testimonial Card for the About page grid ---
const AboutTestimonialCard: React.FC<{ t: TestimonialItem; index: number }> = ({ t, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.quote.length > 180;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index % 3 * 0.07, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
      className="group relative bg-gradient-to-b from-white/[0.04] to-transparent rounded-2xl border border-white/5 p-6 md:p-8 backdrop-blur-md hover:border-magicRed/30 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(230,0,0,0.15)] transition-[border-color,background-color,box-shadow] duration-500 flex flex-col"
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-magicRed/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-magicRed/10 transition-colors duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Quote icon + Stars + Source */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-white/5 rounded-full text-white/40 group-hover:text-magicRed group-hover:bg-magicRed/10 transition-all duration-300">
            <Quote size={16} className="fill-current transform scale-x-[-1]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(t.rating)].map((_, i) => <Star key={i} size={11} className="text-magicRed fill-magicRed" />)}
            </div>
            {t.source && (
              <span className="text-[9px] text-magicRed/80 uppercase tracking-widest font-bold bg-magicRed/5 px-2 py-1 rounded-full border border-magicRed/10">
                {t.source}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        {t.title && (
          <h4 className="font-serif text-white font-bold text-base mb-3 group-hover:text-magicRed transition-colors duration-300">
            {t.title}
          </h4>
        )}

        {/* Quote */}
        <div className="flex-grow mb-4">
          <p className={`text-gray-300 italic font-serif text-[15px] leading-[1.7] group-hover:text-gray-100 transition-colors duration-300 ${!expanded && isLong ? 'line-clamp-5' : ''}`}>
            &ldquo;{t.quote}&rdquo;
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center gap-1 text-xs text-magicRed/70 hover:text-magicRed transition-colors duration-200 font-medium uppercase tracking-wider"
            >
              {expanded ? 'Mostra meno' : 'Leggi tutto'}
              <ChevronDown size={12} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center pt-4 border-t border-white/10 mt-auto">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white font-serif font-bold text-lg mr-3 border border-white/10 shadow-lg shrink-0 group-hover:scale-110 group-hover:border-magicRed/50 transition-all duration-300">
            {t.name.charAt(0)}
          </div>
          <div className="overflow-hidden min-w-0">
            <div className="font-bold text-white text-sm tracking-wide group-hover:text-magicRed transition-colors duration-300 truncate">{t.name}</div>
            {t.role && <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 font-medium truncate block">{t.role}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const stories = [
    {
      title: "Come tutto è iniziato",
      icon: <Star className="text-magicRed" size={32} />,
      content: [
        "La mia passione per la magia nasce da bambino, tra le fiere e le strade d’Italia, dove la mia famiglia lavorava come ambulante. Durante una pausa, mi fermai incantato a osservare un gruppo di prestigiatori: fu amore a prima vista. Da quel giorno, la magia è diventata la mia vita.",
        "I primi strumenti – mazzi di carte, palline e monete – li acquistai risparmiando ogni centesimo. Da quel momento, non mi sono mai fermato: ogni festa di famiglia, ogni momento libero era un’occasione per esercitarmi e sorprendere chiunque fosse disposto a guardare."
      ],
      image: IMAGES.ABOUT.STORY_ORIGINS
    },
    {
      title: "Le Prime Esibizioni",
      icon: <Heart className="text-magicRed" size={32} />,
      content: [
        "Dalle feste private alle strade, il percorso per diventare un mago professionista è stato entusiasmante. Le piazze italiane, con le loro luci e la curiosità dei passanti, furono il mio primo vero palco. È lì che nacque il nome che porto con orgoglio: Mike Street Magic, un tributo alla magia che nasce dall'incontro spontaneo tra persone.",
        "Ogni spettacolo era un’occasione per imparare qualcosa di nuovo, perfezionare le mie abilità e conquistare i cuori del pubblico, dai più piccoli ai più grandi."
      ],
      image: IMAGES.ABOUT.STORY_STREET
    },
    {
      title: "Un Salto Internazionale",
      icon: <Globe className="text-magicRed" size={32} />,
      content: [
        "Grazie a un amico, ebbi l’opportunità di portare la mia magia nei villaggi turistici di tutto il mondo. Per cinque anni ho girato tra continenti, esibendomi su palcoscenici internazionali e regalando emozioni a persone di ogni cultura e provenienza.",
        "Ogni esperienza mi ha arricchito, insegnandomi che la magia è un linguaggio universale, capace di abbattere ogni barriera."
      ],
      image: IMAGES.ABOUT.STORY_TRAVEL
    },
    {
      title: "La Magia Oggi",
      icon: <Award className="text-magicRed" size={32} />,
      content: [
        "Oggi mi esibisco in tutta Italia, portando la mia arte nei matrimoni, eventi aziendali, feste di compleanno e locali esclusivi. Il mio obiettivo è creare esperienze uniche e indimenticabili, capaci di trasformare ogni evento in un momento magico.",
        "Amo lavorare con il pubblico, stupendo anche gli spettatori più scettici e lasciando un segno indelebile nei loro cuori."
      ],
      image: IMAGES.ABOUT.STORY_TODAY
    }
  ];

  return (
    <>
      <Hero 
        variant="full"
        // Title, Subtitle, Badge removed
        videoUrl={HERO_VIDEOS.ABOUT}
        poster={HERO_POSTERS.ABOUT} // Updated to use the new centralized poster
      />

      {/* MOBILE OPTIMIZATION: py-20 (mobile) -> md:py-32 (desktop) */}
      <section className="bg-black py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-magicRed/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        {/* SPACING: space-y-20 (mobile) -> space-y-32 (desktop) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 md:space-y-32">
          
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              // GAP: gap-12 (mobile) -> gap-24 (desktop)
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              
              {/* Image Side with glow */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-magicRed/20 blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-full"></div>
                <div className="relative overflow-hidden rounded-[10px] border border-white/5 hover:border-magicRed/30 hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] aspect-[4/5] lg:aspect-[4/3] shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/5 rounded-full border border-white/10 mr-4 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                    {story.icon}
                  </div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white tracking-wide leading-tight">
                    {story.title}
                  </h2>
                </div>
                
                <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                  {story.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      <MagicDivider />

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-magicRed/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Cosa Dicono di Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-magicRed to-transparent mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Ogni recensione racconta un momento di magia vissuta. Ecco le parole di chi ha scelto di rendere speciale il proprio evento.
            </p>
          </motion.div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.map((t, index) => (
              <AboutTestimonialCard key={t.id} t={t} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MagicDivider />

      {/* NEW WOW FACTOR SECTION: The Magic Portal */}
      <section className="py-24 md:py-32 bg-[#050505] relative flex flex-col items-center justify-center border-t border-white/5 perspective-1000 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magicRed/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 w-full px-4 flex justify-center">
           <MagicPortalCTA />
        </div>
      </section>
    </>
  );
};

export default About;
