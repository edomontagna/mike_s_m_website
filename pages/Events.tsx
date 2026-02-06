
import React from 'react';
import Hero from '../components/UI/Hero';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PartyPopper, Disc, Star, Sparkles } from 'lucide-react'; // Changed icons for better semantic
import { Link } from 'react-router-dom';
import { HERO_VIDEOS, HERO_POSTERS, IMAGES } from '../media';

interface TiltCardProps {
  children: React.ReactNode;
  img: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate rotation relative to center: range -1 to 1
    const rotateXValue = ((event.clientY - rect.top) / height - 0.5) * -20; // Reduced rotation slightly for elegance
    const rotateYValue = ((event.clientX - rect.left) / width - 0.5) * 20;

    x.set(rotateYValue);
    y.set(rotateXValue);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="relative h-[450px] w-full cursor-none group" // Taller card for better aspect ratio
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: mouseY,
          rotateY: mouseX,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 rounded-sm border border-white/10 shadow-2xl transition-all duration-200"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Content Container */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-z-[30px]">
          {children}
        </div>

        {/* Neon Border Glow */}
        <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-tr from-magicRed/0 via-magicRed/50 to-magicRed/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
      </motion.div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  return (
    <>
      <Hero 
        variant="full"
        // Title, Subtitle, Badge, Buttons removed
        videoUrl={HERO_VIDEOS.EVENTS}
        poster={HERO_POSTERS.EVENTS}
        ctaPrimary={{ label: "Richiedi Info", link: "/contact" }}
      />

      <section className="bg-[#050505] py-32 relative overflow-hidden">
         {/* Background Ambience */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         {/* Red Spotlights */}
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-magicRed/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            
            {/* Intro Text - More Storytelling */}
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                   Unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-magicRed to-red-900 animate-text-shimmer">Nights</span>
                 </h2>
                 <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                   Non accontentarti della solita festa. <br className="hidden md:block" />
                   Trasforma il tuo evento privato in un'esperienza esclusiva dove la magia accade a pochi centimetri dai tuoi occhi. 
                   Energia pura, stile e un tocco di impossibile.
                 </p>
               </motion.div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
              <Link to="/contact" className="block group relative active:scale-[0.98] transition-transform">
                <TiltCard img={IMAGES.EVENTS.CARD_EXCLUSIVE}>
                   <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-full w-fit mb-4 border border-white/20">
                        <Star className="text-white fill-white" size={24} />
                      </div>
                      <h3 className="text-4xl font-serif font-bold text-white mb-3">Private Luxury</h3>
                      <div className="w-12 h-1 bg-magicRed mb-4 group-hover:w-24 transition-all duration-500"></div>
                      <p className="text-gray-300 font-light text-lg leading-relaxed">
                        Compleanni esclusivi, anniversari e ricorrenze speciali. 
                        Un intrattenimento su misura che diventa il vero regalo per i tuoi ospiti.
                      </p>
                   </div>
                   <div className="text-xs font-bold uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                     Organizza ora <Sparkles size={14} className="text-magicRed"/>
                   </div>
                </TiltCard>
              </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
              <Link to="/contact" className="block group relative active:scale-[0.98] transition-transform">
                <TiltCard img={IMAGES.EVENTS.CARD_NIGHTLIFE}>
                   <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-full w-fit mb-4 border border-white/20">
                        <Disc className="text-white" size={24} />
                      </div>
                      <h3 className="text-4xl font-serif font-bold text-white mb-3">Club & Nightlife</h3>
                      <div className="w-12 h-1 bg-magicRed mb-4 group-hover:w-24 transition-all duration-500"></div>
                      <p className="text-gray-300 font-light text-lg leading-relaxed">
                        La magia incontra il beat. Performance dinamiche, visuali e veloci, 
                        perfette per club e discoteche. Il "Wow factor" tra un drink e l'altro.
                      </p>
                   </div>
                   <div className="text-xs font-bold uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                     Book the night <Sparkles size={14} className="text-magicRed"/>
                   </div>
                </TiltCard>
              </Link>
              </motion.div>

            </div>
         </div>
      </section>

      {/* Running Text - More Branded */}
      <div className="bg-white py-6 overflow-hidden -rotate-1 border-y-4 border-magicRed relative z-30">
        <div className="flex animate-marquee whitespace-nowrap">
           {[...Array(6)].map((_, i) => (
             <span key={i} className="text-black font-serif font-black text-3xl md:text-5xl mx-4 md:mx-12 uppercase tracking-tighter flex items-center gap-4 md:gap-8">
               Exclusive Entertainment <span className="text-magicRed text-4xl md:text-6xl">•</span> Mike Street Magic
             </span>
           ))}
        </div>
      </div>

      <section className="h-[80vh] flex items-center justify-center bg-black relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30 hover:opacity-40 transition-opacity duration-1000 scale-105" style={{ backgroundImage: `url('${IMAGES.EVENTS.HERO_FALLBACK}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        
        <div className="relative z-10 text-center px-4">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-white font-serif text-5xl md:text-8xl font-bold mb-8 drop-shadow-2xl">
               Make it <span className="italic text-magicRed">Legendary</span>
             </h2>
             <p className="text-gray-300 text-xl mb-12 font-light max-w-xl mx-auto">
               Le date per il weekend sono limitate. Assicurati la presenza di Mike per il tuo evento.
             </p>
             <Link to="/contact" className="inline-block px-16 py-6 bg-transparent border border-white text-white font-bold text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-sm active:scale-95">
               Verifica Disponibilità
             </Link>
           </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;
