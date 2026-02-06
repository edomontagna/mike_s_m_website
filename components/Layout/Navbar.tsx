
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import { IMAGES } from '../../media';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setHoveredItem(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isOpen ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Image */}
            <NavLink to="/" className="flex-shrink-0 group relative z-50">
               <img 
                src={IMAGES.BRAND.LOGO} 
                alt="Mike Street Magic" 
                className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90" 
               />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {NAV_ITEMS.map((item) => (
                  <div 
                    key={item.label} 
                    className="relative group"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative px-1 py-2 text-xs font-bold transition-colors duration-300 uppercase tracking-[0.15em] flex items-center gap-1 ${
                          isActive || (item.children && item.children.some(child => child.path === location.pathname)) 
                            ? 'text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} />}
                          <span className={`absolute bottom-0 left-0 h-[2px] bg-magicRed transition-all duration-300 ease-out ${
                            isActive || (item.children && item.children.some(child => child.path === location.pathname))
                             ? 'w-full shadow-[0_0_8px_rgba(230,0,0,0.5)]' : 'w-0 group-hover:w-full'
                          }`}></span>
                        </>
                      )}
                    </NavLink>

                    {/* Desktop Dropdown */}
                    <AnimatePresence>
                      {item.children && hoveredItem === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                          exit={{ opacity: 0, y: 10, clipPath: "inset(0% 0% 100% 0%)" }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-sm shadow-2xl overflow-hidden"
                        >
                          <div className="py-2">
                             {/* Link to main parent page */}
                             <NavLink
                                to={item.path}
                                className="block px-6 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest border-b border-white/5"
                              >
                                Tutti i {item.label}
                              </NavLink>
                            {item.children.map((child) => (
                              <NavLink
                                key={child.label}
                                to={child.path}
                                className={({ isActive }) =>
                                  `block px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 hover:pl-8 ${
                                    isActive ? 'text-magicRed bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-magicRed transition-all p-2 active:scale-90"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 md:hidden flex flex-col items-center justify-center overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-8 py-10 w-full min-h-screen justify-center">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label} className="flex flex-col items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-3xl font-serif font-bold transition-all duration-300 ${
                          isActive && (!item.children || item.path !== '/services') ? 'text-white scale-110' : 'text-gray-500 hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>

                  {/* Mobile Sub-menu */}
                  {item.children && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="flex flex-col items-center mt-6 gap-5 w-full bg-white/5 py-6 border-y border-white/5"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          className={({ isActive }) =>
                            `text-lg font-light tracking-[0.1em] uppercase transition-colors ${
                              isActive ? 'text-magicRed' : 'text-gray-400 hover:text-white'
                            }`
                          }
                          onClick={() => setIsOpen(false)} 
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
