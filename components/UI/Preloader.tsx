
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../../media';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  // Use ref to avoid stale closure / dependency issues with onComplete
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const hasFired = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = prev < 70 ? Math.random() * 12 + 3 : Math.random() * 5 + 1;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Fire onComplete once when progress hits 100
  useEffect(() => {
    if (progress >= 100 && !hasFired.current) {
      hasFired.current = true;
      const timeout = setTimeout(() => {
        onCompleteRef.current();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden"
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => {
          // Stable random values per particle (seeded by index)
          const size = (i * 7 % 4) + 1;
          const left = (i * 37 % 100);
          const top = (i * 53 % 100);
          const dur = 2 + (i % 3);
          const del = (i * 0.3) % 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                background: i % 3 === 0 ? 'rgba(230, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.2)',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: dur,
                repeat: Infinity,
                delay: del,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Central glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-magicRed/10 blur-[60px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div className="relative mb-8">
          <motion.img
            src={IMAGES.BRAND.LOGO}
            alt="Mike Street Magic"
            className="h-16 md:h-24 w-auto object-contain relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-magicRed/20 blur-[50px] rounded-full"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-magicRed via-red-500 to-magicRed shadow-[0_0_10px_#E60000,0_0_20px_rgba(230,0,0,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(100, progress)}%` }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
          />
        </div>

        <motion.p
          className="mt-4 text-xs font-bold tracking-[0.3em] text-white/30 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress >= 100 ? '✦ Ready' : `Loading ${Math.min(100, Math.floor(progress))}%`}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
