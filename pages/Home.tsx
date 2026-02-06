
import React from 'react';
import Hero from '../components/UI/Hero';
import { Link } from 'react-router-dom';
import { Diamond, Heart, Club, ArrowRight, Check, Camera, Image as ImageIcon } from 'lucide-react';
import { STATS, SERVICES, EVENTS } from '../constants';
import { HERO_VIDEOS, HERO_POSTERS, IMAGES } from '../media';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import LogoTicker from '../components/UI/LogoTicker';
import TestimonialMarquee from '../components/UI/TestimonialMarquee';
import MagicDivider from '../components/UI/MagicDivider';

// Helper per ottenere l'immagine corretta dal file media
const getServiceImage = (id: string) => {
  switch(id) {
    case 'close-up': return IMAGES.SERVICES.THUMB_CLOSEUP;
    case 'mentalism': return IMAGES.SERVICES.THUMB_MENTALISM;
    case 'stage': return IMAGES.SERVICES.THUMB_STAGE;
    default: return IMAGES.SERVICES.THUMB_CLOSEUP;
  }
};

// Helper per ottenere il link corretto in base all'id evento
const getEventLink = (id: string) => {
  switch(id) {
    case 'weddings': return '/matrimoni';
    case 'corporate': return '/aziende';
    case 'events': return '/eventi';
    default: return '/services';
  }
};

// Spotlight card with mouse-following glow
const SpotlightEventCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(230, 0, 0, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero
        variant="full"
        stats={STATS}
        videoUrl={HERO_VIDEOS.HOME}
        poster={HERO_POSTERS.HOME_FALLBACK}
      />

      {/* SEZIONE 1: Un Viaggio nella Magia */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black z-0"></div>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url('${IMAGES.GLOBAL.TEXTURE_STARDUST}')` }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-magicRed/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white leading-none">
                Un Viaggio nella <span className="text-transparent bg-clip-text bg-gradient-to-r from-magicRed to-red-900 animate-text-shimmer">Magia</span>
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 md:space-y-8 text-gray-300 text-lg leading-relaxed font-light"
              >
                <p>
                  La mia storia con la magia è iniziata da bambino, tra le fiere d'Italia, ed è diventata la mia vita. Dalle esibizioni in strada alle collaborazioni con villaggi turistici e locali, ogni spettacolo è un'occasione per stupire e lasciare un ricordo indelebile.
                </p>
                <motion.div
                  className="relative py-4 pl-6 md:pl-8"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-magicRed to-transparent"></div>
                  <p className="font-serif text-2xl md:text-3xl text-white italic opacity-90">
                    "Lasciati sorprendere. La magia è ovunque, basta saperla vedere."
                  </p>
                </motion.div>
                <p>
                  Con passione e dedizione, ho trasformato il mio sogno in realtà, portando la magia nei matrimoni, eventi aziendali e feste private in tutta Italia. Ogni performance è un viaggio nell'impossibile, dove l'ordinario si trasforma in straordinario.
                </p>

                <div className="pt-4 md:pt-6">
                  <Link to="/about" className="inline-flex items-center text-white hover:text-magicRed transition-colors font-bold uppercase tracking-[0.2em] text-xs border-b border-white/20 pb-1 hover:border-magicRed active:scale-[0.98] transition-transform">
                    Leggi la Biografia <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative w-full mt-8 lg:mt-0">
              <Link to="/gallery" className="block cursor-pointer active:scale-[0.98] transition-transform">
                <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="relative z-10 rounded-[10px] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] lg:aspect-auto"
                >
                  <div className="absolute inset-0 bg-magicRed/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>

                  <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 px-6 py-3 bg-black/50 backdrop-blur-md rounded-sm flex items-center gap-2 hover:bg-magicRed hover:border-magicRed transition-colors">
                      <ImageIcon size={14} /> Vedi Galleria
                    </span>
                  </div>

                  <img src={IMAGES.HOME.CARD_ABOUT_PROFILE} alt="Mike Street Magic in azione" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
                </motion.div>
              </Link>
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/5 rounded-[10px] -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Magic Divider: between storytelling and Categorie Spettacoli */}
      <MagicDivider />

      {/* SEZIONE 2: Categorie Spettacoli - with Spotlight Glow */}
      <section className="py-20 md:py-32 bg-black relative border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Categorie Spettacoli</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto rounded-full mb-6 md:mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Scegli lo scenario perfetto per il tuo evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {EVENTS.map((evt, idx) => (
              <Link
                key={evt.id}
                to={getEventLink(evt.id)}
                className="block h-full active:scale-[0.98] transition-transform"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <SpotlightEventCard className="h-full rounded-xl">
                    <div className="bg-[#050505] border border-white/10 rounded-xl p-8 md:p-10 hover:border-magicRed/30 hover:bg-[#0a0a0a] transition-[border-color,background-color,box-shadow] duration-500 relative overflow-hidden h-full flex flex-col shadow-lg group-hover:shadow-[0_0_30px_rgba(230,0,0,0.1)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-magicRed/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      <div className="text-5xl mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left filter drop-shadow-lg">{evt.icon}</div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-magicRed transition-colors duration-300">{evt.title}</h3>
                      <p className="text-gray-400 mb-6 md:mb-8 text-base leading-relaxed min-h-[60px] md:min-h-[80px] flex-grow font-light">
                        {evt.description}
                      </p>
                      <span className="inline-flex items-center text-white font-bold text-xs uppercase tracking-[0.2em] border-b border-transparent pb-1 group-hover:border-magicRed group-hover:text-magicRed transition-all">
                        Scopri di più <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </SpotlightEventCard>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Magic Divider: between Categorie Spettacoli and Alcuni Spettacoli */}
      <MagicDivider />

      {/* Services Detail */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Alcuni Spettacoli</h2>
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">Rendi il tuo Evento ancor più speciale</p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <Link to="/gallery" className="block cursor-pointer active:scale-[0.98] transition-transform">
                    <div className="aspect-video bg-white/5 rounded-[10px] overflow-hidden relative group border border-white/5 hover:border-magicRed/30 hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] transition-all duration-500 shadow-2xl">
                      <img
                        src={getServiceImage(service.id)}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-magicRed hover:border-magicRed transition-colors shadow-lg">
                          <Camera className="text-white w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 flex items-center">
                    <span className="text-magicRed mr-4 md:mr-6 text-2xl md:text-3xl p-3 border border-white/10 rounded-full bg-white/5">
                      {service.icon === 'diamond' ? <Diamond /> : service.icon === 'heart' ? <Heart /> : <Club />}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 md:mb-8 font-light">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 md:gap-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-sm text-gray-400 tracking-wide"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <Check size={16} className="text-magicRed mr-4" /> {feat}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Magic Divider: between services detail and LogoTicker */}
      <MagicDivider />

      {/* Collaborations */}
      <LogoTicker />

      {/* Testimonials Marquee */}
      <TestimonialMarquee />

      {/* CTA Section */}
      <section className="py-24 md:py-40 relative flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm scale-105" style={{ backgroundImage: `url('${IMAGES.HOME.BG_CTA_FOOTER}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-magicRed/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-magicRed/10 blur-[100px] rounded-full animate-float pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/5 w-[200px] h-[200px] bg-magicRed/5 blur-[80px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Pronto ad essere stupito?</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 font-light tracking-wide leading-relaxed">
              Le prossime date si stanno esaurendo velocemente. <br className="hidden md:block"/>Prenota ora per garantire la disponibilità.
            </p>
            <Link to="/contact" className="inline-block px-12 md:px-16 py-5 md:py-6 bg-white text-black font-bold tracking-[0.2em] uppercase hover:bg-magicRed hover:text-white hover:shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all duration-300 rounded-sm transform hover:-translate-y-1 text-xs md:text-sm active:scale-[0.98] transition-transform">
              Richiedi Disponibilità
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
