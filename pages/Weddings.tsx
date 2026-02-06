
import React, { useEffect, useRef } from 'react';
import Hero from '../components/UI/Hero';
import { motion } from 'framer-motion';
import { Wine, Heart, Music, ArrowRight, Star, Sparkles } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { HERO_VIDEOS, HERO_POSTERS, IMAGES } from '../media';

// --- DREAMY GOLD BACKGROUND COMPONENT ---
const GoldParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    const particleCount = window.innerWidth < 768 ? 35 : 70; 

    // Inizializzazione
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5, 
        speedX: (Math.random() - 0.5) * 0.3, 
        speedY: (Math.random() - 0.5) * 0.3 - 0.15, 
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let isVisible = true;
    let time = 0;

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      time++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Smooth sine wave opacity instead of random flicker
        p.opacity = 0.3 + Math.sin(time * 0.02 + p.x * 0.01) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// --- CSS-BASED GALLERY MARQUEE ---
const GalleryMarquee = () => {
  const items = [...IMAGES.WEDDINGS.GALLERY_STRIP, ...IMAGES.WEDDINGS.GALLERY_STRIP];

  return (
    <div className="flex w-max animate-scroll-left pause-on-hover-row">
      {items.map((src, i) => (
        <div key={i} className="flex-shrink-0 mx-4 w-[300px] md:w-[450px] aspect-[3/2] relative group overflow-hidden rounded-[2px] select-none">
          <img 
            src={src} 
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 pointer-events-none" 
            alt="Wedding moment" 
            draggable="false"
            loading="lazy"
          />
          <div className="absolute inset-0 border border-white/10 group-hover:border-[#d4af37]/30 transition-colors duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

// --- UI COMPONENTS ---

const ElegantDivider = () => (
  <div className="flex justify-center py-8 md:py-12 opacity-30">
    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
  </div>
);

const WeddingSection = ({ 
  title, 
  subtitle,
  description, 
  image, 
  isReversed = false,
  icon
}: { 
  title: string, 
  subtitle: string,
  description: string, 
  image: string, 
  isReversed?: boolean,
  icon: React.ReactNode
}) => {
  return (
    <div className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-24`}>
        
        {/* IMAGE PART */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Decorative frame line */}
          <div className={`absolute top-4 ${isReversed ? '-right-4' : '-left-4'} w-full h-full border border-[#d4af37]/20 rounded-[2px] z-0 hidden md:block`}></div>
          
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#d4af37]/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.12)] transition-all duration-500">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" 
            />
            {/* Soft Warm Overlay */}
            <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay pointer-events-none"></div>
          </div>
        </motion.div>

        {/* TEXT PART */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
             <div className="text-[#d4af37] p-2 bg-[#d4af37]/10 rounded-full">{icon}</div>
             <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em]">{subtitle}</span>
          </div>
          
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8 opacity-90">
            {description}
          </p>
          
          <div className={`h-[1px] w-20 bg-[#d4af37]/50 ${!isReversed ? 'mr-auto ml-auto lg:ml-0' : 'mr-auto ml-auto lg:ml-0'}`}></div>
        </motion.div>

      </div>
    </div>
  );
};

// --- MAIN PAGE ---

const Weddings: React.FC = () => {
  return (
    <div className="bg-[#030303] text-white">
      
      {/* 0. HERO (NO GOLD) */}
      <Hero 
        variant="full"
        videoUrl={HERO_VIDEOS.WEDDINGS}
        poster={HERO_POSTERS.WEDDINGS}
      />

      {/* --- GOLD ZONE START --- */}
      {/* Questo wrapper contiene SOLO Intro e Features, con l'effetto Oro */}
      <div className="relative overflow-hidden bg-[#030303]">
        
        {/* BACKGROUND ANIMATO "GOLD DUST" - Limitato a questo div */}
        <GoldParticles />
        
        {/* Gradient overlays per blendare */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>

        {/* 1. INTRODUZIONE */}
        <section className="relative py-20 md:py-32 px-4 text-center max-w-4xl mx-auto z-20">
           {/* Warm Ambient Light Static */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none"></div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative z-10"
           >
             <span className="text-[#d4af37] text-sm font-serif italic mb-6 block tracking-wider">Per il vostro giorno più bello</span>
             <h2 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-8 text-white">
               Non è solo Magia.<br/>
               È <span className="italic text-[#d4af37]">Connessione.</span>
             </h2>
             <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
               Il mio obiettivo non è rubarvi la scena, ma rendere ogni momento fluido e indimenticabile. 
               Creo piccole isole di meraviglia dove i vostri ospiti possono ridere e stupirsi insieme.
             </p>
           </motion.div>
        </section>

        {/* 2. THE JOURNEY (FEATURES) */}
        <div className="pb-20 relative z-20">
          <ElegantDivider />
          
          <WeddingSection 
            subtitle="Il Benvenuto"
            title="L'Aperitivo Perfetto"
            description="Mentre voi siete impegnati nelle foto di rito, mi assicuro che i vostri ospiti non sentano la vostra mancanza. Un intrattenimento itinerante, elegante e mai invadente, che scioglie il ghiaccio e accende subito l'atmosfera della festa."
            image={IMAGES.WEDDINGS.FEAT_ATMOSPHERE}
            icon={<Wine size={20} />}
          />

          <ElegantDivider />

          <WeddingSection 
            subtitle="A Tavola"
            title="Meraviglia tra le Portate"
            description="Nessun palco ingombrante, nessuna interruzione del servizio. Solo piccoli miracoli che accadono a pochi centimetri dagli occhi. È il momento in cui i tavoli iniziano a parlare tra loro, uniti dall'esperienza dell'impossibile."
            image={IMAGES.WEDDINGS.FEAT_DETAILS}
            isReversed={true}
            icon={<Star size={20} />}
          />

          <ElegantDivider />

          <WeddingSection 
            subtitle="Il Gran Finale"
            title="Energia per il Party"
            description="Quando le luci si abbassano e la musica sale, la magia cambia ritmo. Effetti visuali, rapidi e potenti, che si fondono con l'energia della festa prima del taglio della torta. Un ricordo indelebile per chiudere in bellezza."
            image={IMAGES.WEDDINGS.FEAT_EMOTIONS}
            icon={<Music size={20} />}
          />
        </div>
      </div> 
      {/* --- GOLD ZONE END --- */}

      {/* 3. ELEGANT GALLERY STRIP (NO GOLD - Background Scuro) */}
      <section className="py-24 bg-[#050505] overflow-hidden border-y border-white/5 relative z-30">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${IMAGES.GLOBAL.TEXTURE_STARDUST}')` }}></div>
        
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
           <h3 className="font-serif text-3xl font-medium text-white italic">Istantanee di Felicità</h3>
        </div>
        
        {/* Infinite Interactive Scroll Gallery */}
        <div className="relative z-10 w-full mask-fade-sides">
          <GalleryMarquee />
        </div>
      </section>

      {/* 4. CTA: FINAL & ELEGANT (NO GOLD - Background Immagine) */}
      <section className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center z-30">
         {/* Background */}
         <div className="absolute inset-0 bg-black"></div>
         <div className="absolute inset-0 opacity-60 bg-center bg-cover blur-sm" style={{ backgroundImage: `url('${IMAGES.WEDDINGS.HERO_FALLBACK}')` }}></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black"></div>

         <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <Heart className="text-[#d4af37] w-12 h-12 mx-auto mb-8 animate-pulse" fill="#d4af37" fillOpacity={0.2} />
              <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight drop-shadow-2xl">
                Scriviamo insieme <br/> la vostra storia.
              </h2>
              <p className="text-gray-100 text-lg mb-12 font-light drop-shadow-lg">
                Verifica la disponibilità per la tua data.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-serif font-bold tracking-widest hover:bg-[#d4af37] hover:text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all duration-500 rounded-[2px] shadow-2xl active:scale-95"
              >
                CONTATTAMI <ArrowRight size={16} />
              </Link>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default Weddings;
