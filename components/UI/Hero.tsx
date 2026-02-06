
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  variant: 'full' | 'page';
  title?: string;
  subtitle?: string;
  badge?: string;
  stats?: { label: string; value: string; suffix?: string }[];
  ctaPrimary?: { label: string; link: string };
  ctaSecondary?: { label: string; link: string };
  videoUrl?: string;
  poster?: string;
}

// Extract Vimeo ID robustly
const getVimeoId = (url: string): string | null => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

// Extract YouTube ID robustly
const getYoutubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const Hero: React.FC<HeroProps> = ({
  variant,
  title,
  subtitle,
  badge,
  stats,
  videoUrl,
  poster
}) => {
  const isFull = variant === 'full';
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load: only load iframe when section is in viewport
  useEffect(() => {
    if (!sectionRef.current || !videoUrl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [videoUrl]);

  // Build embed URL
  const embedSrc = React.useMemo(() => {
    if (!videoUrl || !isVisible) return '';

    const isVimeo = videoUrl.includes('vimeo');
    const isYoutube = videoUrl.includes('youtube') || videoUrl.includes('youtu.be');

    if (isVimeo) {
      const id = getVimeoId(videoUrl);
      if (!id) return '';
      return `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&api=1&playsinline=1&dnt=1`;
    }

    if (isYoutube) {
      const id = getYoutubeId(videoUrl);
      if (!id) return '';
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&disablekb=1&fs=0&enablejsapi=1&origin=${origin}&playsinline=1`;
    }

    return '';
  }, [videoUrl, isVisible]);

  // Handle video loaded - show with fade after brief poster display
  const handleVideoLoad = useCallback(() => {
    // Brief delay to let poster show, then fade to video
    setTimeout(() => {
      setVideoLoaded(true);
      setShowVideo(true);

      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return;

      try {
        const targetOrigin = embedSrc.includes('vimeo')
          ? 'https://player.vimeo.com'
          : 'https://www.youtube.com';

        if (embedSrc.includes('vimeo')) {
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: 0 }), targetOrigin);
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'play' }), targetOrigin);
        } else if (embedSrc.includes('youtube')) {
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'mute', args: [] }), targetOrigin);
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), targetOrigin);
        }
      } catch {
        // Silently handle postMessage failures
      }
    }, 1500);
  }, [embedSrc]);

  // Fallback timer in case onLoad doesn't fire
  useEffect(() => {
    if (!embedSrc || videoLoaded) return;
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        setVideoLoaded(true);
        setShowVideo(true);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [embedSrc, videoLoaded]);

  // Audio toggle with proper origin
  const toggleAudio = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow || !embedSrc) return;

    const nextState = !isMuted;
    setIsMuted(nextState);

    try {
      const targetOrigin = embedSrc.includes('vimeo')
        ? 'https://player.vimeo.com'
        : 'https://www.youtube.com';

      if (embedSrc.includes('vimeo')) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ method: 'setVolume', value: nextState ? 0 : 1 }),
          targetOrigin
        );
        if (!nextState) {
          iframe.contentWindow.postMessage(JSON.stringify({ method: 'play' }), targetOrigin);
        }
      } else if (embedSrc.includes('youtube')) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: nextState ? 'mute' : 'unMute', args: [] }),
          targetOrigin
        );
        if (!nextState) {
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), targetOrigin);
        }
      }
    } catch {
      // Silently handle postMessage failures
    }
  }, [isMuted, embedSrc]);

  return (
    <>
    <section
      ref={sectionRef}
      className={`relative flex items-center justify-center overflow-hidden bg-black
      ${isFull
        ? 'h-[66.66vw] md:h-screen'
        : 'h-[50vh] min-h-[400px]'
      }`}
    >

      {/* 1. MEDIA LAYER */}
      {videoUrl && isFull ? (
        <div className="absolute inset-0 z-0 w-full h-full bg-black">
          {/* Poster with loading shimmer */}
          <AnimatePresence>
            {!showVideo && poster && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 z-20 pointer-events-none"
              >
                <img src={poster} alt="Mike Street Magic" className="w-full h-full object-cover opacity-60" loading="eager" />
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Loading shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shine pointer-events-none"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* VIDEO CONTAINER - Fixed: no overflow, proper cover scaling */}
          <div className="absolute inset-0 w-full h-full pointer-events-none bg-black">
            {embedSrc && (
              <iframe
                ref={iframeRef}
                src={embedSrc}
                onLoad={handleVideoLoad}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full object-cover pointer-events-none bg-black"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
                title="Video di sfondo Mike Street Magic"
                loading="lazy"
                style={{ backgroundColor: 'black' }}
              />
            )}
          </div>

          {/* Gradient for Text Readability (Mobile Only) */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-black/60 to-transparent md:hidden z-10 pointer-events-none"></div>

          {/* Standard Overlays */}
          <div className={`absolute inset-0 bg-black/20 z-10 transition-opacity duration-1000 pointer-events-none ${isMuted ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-10 pointer-events-none"></div>
        </div>
      ) : (
        /* Fallback / Page Variant */
        <>
          {poster && (
             <div className="absolute inset-0 z-0">
               <img src={poster} className={`w-full h-full object-cover ${isFull ? 'opacity-40' : 'opacity-60'}`} alt="Mike Street Magic" loading="eager" />
             </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${isFull ? 'from-black/90 via-transparent to-black/90' : 'from-black/70 via-transparent to-black/70'} z-10`}></div>
          <ParticleBackground />
        </>
      )}

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magicRed/5 blur-[150px] rounded-full z-10 pointer-events-none animate-pulse-slow"></div>

      {/* 2. CONTENT LAYER (Text) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mb-0 md:mb-20">

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 md:mb-8"
          >
            <span className="px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-magicRed text-xs md:text-sm font-bold tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(255,0,0,0.1)]">
              {badge}
            </span>
          </motion.div>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-serif font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl ${isFull ? 'text-5xl md:text-8xl lg:text-9xl' : 'text-5xl md:text-7xl'}`}
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mt-4 md:mt-6 mx-auto text-gray-100 font-light tracking-wide ${isFull ? 'text-base md:text-2xl max-w-3xl leading-relaxed' : 'text-lg max-w-xl'}`}
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* 2.5 AUDIO BUTTON LAYER */}
      {isFull && videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 z-[35] pointer-events-none"
        >
          {/* DESKTOP BUTTON (Centered Bottom) */}
          <button
            onClick={toggleAudio}
            className="hidden md:flex pointer-events-auto items-center justify-center gap-2 px-6 py-3 absolute bottom-[168px] left-1/2 -translate-x-1/2 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-white font-bold transition-all text-xs tracking-widest uppercase cursor-pointer hover:border-magicRed/50 hover:shadow-[0_0_25px_rgba(230,0,0,0.3)] hover:scale-105 active:scale-95 whitespace-nowrap"
            aria-label={isMuted ? "Attiva audio video" : "Disattiva audio video"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {isMuted ? "Attiva Audio" : "Disattiva Audio"}
          </button>

          {/* MOBILE BUTTON (Top Right - with safe area) */}
          <button
            onClick={toggleAudio}
            className="md:hidden pointer-events-auto fixed top-24 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 active:scale-90"
            style={{
              backgroundColor: isMuted ? 'rgba(0,0,0,0.6)' : 'rgba(230,0,0,0.8)',
              boxShadow: isMuted ? '0 4px 20px rgba(0,0,0,0.5)' : '0 0 25px rgba(230,0,0,0.6)',
              right: 'max(1rem, env(safe-area-inset-right))',
            }}
            aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
            aria-pressed={!isMuted}
          >
             {isMuted ? (
                <VolumeX size={20} className="text-white/80" />
             ) : (
                <Volume2 size={20} className="text-white animate-pulse" />
             )}
          </button>
        </motion.div>
      )}

      {/* 3. STATS LAYER - Desktop only (overlay at bottom of hero) */}
      {isFull && stats && (
        <div className="hidden md:block absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent pb-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-4 gap-16 justify-center items-center border-t border-white/10 pt-8">
              {stats.map((stat, idx) => (
                <StatCounter key={idx} stat={stat} delay={idx * 0.15} />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>

    {/* 3b. STATS - Mobile only (below hero, not overlapping) */}
    {isFull && stats && (
      <div className="md:hidden bg-black py-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto border-t border-white/10 pt-6">
            {stats.map((stat, idx) => (
              <StatCounter key={idx} stat={stat} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    )}
  </>
  );
};

// Animated stat counter component
const StatCounter: React.FC<{ stat: { label: string; value: string; suffix?: string }; delay: number }> = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(stat.value, 10) || 0;

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const duration = 1800;
          const startTime = performance.now();
          const startDelay = delay * 1000;

          const tick = (now: number) => {
            const elapsed = now - startTime - startDelay;
            if (elapsed < 0) { requestAnimationFrame(tick); return; }
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, target, delay]);

  return (
    <div ref={ref} className="text-center group cursor-default">
      <div className="font-serif text-xl md:text-5xl font-bold text-white group-hover:text-magicRed transition-colors duration-300" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
        {count}<span className="text-magicRed text-sm md:text-3xl align-top ml-1">{stat.suffix}</span>
      </div>
      <div className="text-[9px] md:text-xs uppercase tracking-[0.2em] text-gray-400 mt-1 md:mt-2 font-medium group-hover:text-white transition-colors">
        {stat.label}
      </div>
    </div>
  );
};

export default Hero;
