
import React, { useState, useEffect } from 'react';
import Hero from '../components/UI/Hero';
import { GALLERY_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { IMAGES } from '../media';

type FilterCategory = 'all' | 'weddings' | 'corporate' | 'private';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'Tutti' },
    { id: 'weddings', label: 'Matrimoni' },
    { id: 'corporate', label: 'Aziendali' },
    { id: 'private', label: 'Privati' },
  ];

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [selectedImage]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Hero
        variant="page"
        title="Galleria Fotografica"
        subtitle="Momenti di stupore catturati nel tempo"
        poster={IMAGES.GALLERY_PAGE.HERO}
      />

      <section className="py-20 md:py-24 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 sticky top-24 z-30 p-2 md:p-4 bg-black/80 backdrop-blur-md rounded-full w-max mx-auto border border-white/10 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-magicRed text-white shadow-[0_0_15px_rgba(255,0,0,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  key={img.id}
                  className="relative group cursor-pointer overflow-hidden rounded-[10px] aspect-[4/5] border border-white/5 hover:border-magicRed/30 hover:shadow-[0_0_25px_rgba(230,0,0,0.12)] transition-all duration-500 active:scale-[0.98]"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0.3';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-serif text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                    <div className="w-10 h-1 bg-magicRed mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100"></div>
                    <ZoomIn className="text-white/70" size={32} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-default"
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors cursor-pointer z-50"
              onClick={() => setSelectedImage(null)}
              aria-label="Chiudi immagine"
            >
              <X className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Foto in primo piano"
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
