
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../media';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url('${IMAGES.GLOBAL.TEXTURE_STARDUST}')` }}
      />

      {/* Subtle red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-magicRed/8 rounded-full blur-[180px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-serif text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter bg-gradient-to-b from-white/20 to-white/[0.03] bg-clip-text text-transparent select-none">
            404
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-[1px] w-24 bg-gradient-to-r from-transparent via-magicRed to-transparent mx-auto mb-8"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-serif text-2xl md:text-4xl text-white font-bold mb-4"
        >
          Questa pagina non esiste
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-400 text-base md:text-lg font-light mb-10 leading-relaxed"
        >
          Il link che hai seguito potrebbe essere errato o la pagina
          potrebbe essere stata rimossa.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-sm transition-all duration-300 hover:bg-magicRed hover:text-white hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:-translate-y-0.5 active:scale-95"
          >
            Torna alla Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            Contattami <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
