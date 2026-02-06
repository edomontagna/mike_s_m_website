
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagicCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Sparkle trail state
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const sparkleCounter = useRef(0);
  const lastSparkleTime = useRef(0);

  const ringSpringConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Don't add listeners on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Sparkle trail - emit every ~80ms
      const now = Date.now();
      if (now - lastSparkleTime.current > 80) {
        lastSparkleTime.current = now;
        const id = sparkleCounter.current++;
        setSparkles(prev => {
          const next = [...prev, { id, x: e.clientX, y: e.clientY }];
          // Keep only last 8 sparkles
          return next.slice(-8);
        });
        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== id));
        }, 600);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.closest('a, button, input, textarea, select, .cursor-pointer')) {
          setIsHovering(true);
      } else {
          setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Sparkle Trail */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
          initial={{
            x: sparkle.x,
            y: sparkle.y,
            scale: 1,
            opacity: 0.8,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: 0,
            opacity: 0,
            y: sparkle.y - 20 + Math.random() * 40 - 20,
            x: sparkle.x + Math.random() * 30 - 15,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            width: 4,
            height: 4,
            background: `radial-gradient(circle, rgba(230,0,0,0.8) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)`,
          }}
        />
      ))}

      {/* 1. CENTER DOT - Direct tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-exclusion"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 0 : 8,
          height: isHovering ? 0 : 8,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.1 }}
      />

      {/* 2. MAGNETIC RING - Spring following */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border box-border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: isHovering ? '#E60000' : 'rgba(255, 255, 255, 0.3)',
          borderWidth: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(230, 0, 0, 0.05)' : 'transparent',
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.2
        }}
      />
    </>
  );
};

export default MagicCursor;
