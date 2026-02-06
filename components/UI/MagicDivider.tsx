import React from 'react';
import { motion } from 'framer-motion';

interface MagicDividerProps {
  color?: 'red' | 'gold' | 'white';
}

const MagicDivider: React.FC<MagicDividerProps> = ({ color = 'red' }) => {
  const glowColor = color === 'gold'
    ? 'rgba(212, 175, 55, 0.4)'
    : color === 'white'
    ? 'rgba(255, 255, 255, 0.3)'
    : 'rgba(230, 0, 0, 0.4)';

  const lineColor = color === 'gold'
    ? 'via-[#d4af37]/30'
    : color === 'white'
    ? 'via-white/20'
    : 'via-magicRed/30';

  const dotBg = color === 'gold'
    ? 'bg-[#d4af37]/50'
    : color === 'white'
    ? 'bg-white/30'
    : 'bg-magicRed/50';

  return (
    <div className="flex items-center justify-center py-6 md:py-10 max-w-4xl mx-auto px-8">
      <motion.div
        className={`h-[1px] flex-1 bg-gradient-to-r from-transparent ${lineColor} to-transparent`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ originX: 1 }}
      />
      <motion.div
        className={`mx-4 w-1.5 h-1.5 ${dotBg} rounded-full flex-shrink-0`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        style={{ boxShadow: `0 0 10px ${glowColor}` }}
      />
      <motion.div
        className={`h-[1px] flex-1 bg-gradient-to-r from-transparent ${lineColor} to-transparent`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ originX: 0 }}
      />
    </div>
  );
};

export default MagicDivider;
