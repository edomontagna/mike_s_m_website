
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Weddings from './pages/Weddings';
import Corporate from './pages/Corporate';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import MagicCursor from './components/UI/MagicCursor';
import Preloader from './components/UI/Preloader';
import { Analytics } from '@vercel/analytics/react';

// Error Boundary for graceful crash handling
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center text-center px-4">
          <div>
            <h1 className="font-serif text-5xl text-white mb-4">Oops!</h1>
            <p className="text-gray-400 text-lg mb-8">Qualcosa è andato storto. Ricarica la pagina.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-magicRed hover:text-white transition-all"
            >
              Ricarica
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated page wrapper for transitions
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Inner app that uses router context
const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="hidden md:block">
        <MagicCursor />
      </div>

      <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-magicRed selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/matrimoni" element={<Weddings />} />
                <Route path="/aziende" element={<Corporate />} />
                <Route path="/eventi" element={<Events />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/termini" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ErrorBoundary>
      <Analytics />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <AppContent />
        </Router>
      )}
    </ErrorBoundary>
  );
};

export default App;
