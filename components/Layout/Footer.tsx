
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { IMAGES } from '../../media';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Brand */}
          <div className="space-y-6">
             <NavLink to="/" className="block">
                <img
                  src={IMAGES.BRAND.LOGO}
                  alt="Mike Street Magic"
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </NavLink>
            <p className="text-gray-300 text-sm leading-relaxed font-light tracking-wide">
              Trasforma il tuo evento in un'esperienza indimenticabile con magia d'élite e mentalismo di alto profilo.
            </p>
            <p className="text-gray-400 text-xs tracking-wider">Mike Street Magic di Michael Iodice — P. IVA 04585230230</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-8 tracking-wide">Esplora</h3>
            <ul className="space-y-4">
              <li><NavLink to="/services" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">Servizi</NavLink></li>
              <li><NavLink to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">Galleria</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">Chi Sono</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wider uppercase">Contatti</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-8 tracking-wide">Contatti</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-300 text-sm group font-light">
                <Phone size={18} className="mr-4 text-magicRed group-hover:scale-110 transition-transform" />
                <a href="tel:+393478130426" className="tracking-wide hover:text-white transition-colors">+39 347 8130426</a>
              </li>
              <li className="flex items-center text-gray-300 text-sm group font-light">
                <Mail size={18} className="mr-4 text-magicRed group-hover:scale-110 transition-transform" />
                <a href="mailto:mikeanimazione@gmail.com" className="tracking-wide hover:text-white transition-colors">mikeanimazione@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-300 text-sm group font-light">
                <MapPin size={18} className="mr-4 text-magicRed group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">Verona, Italia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-serif font-bold text-xl mb-8 tracking-wide">Social</h3>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/mikestreetmagic/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-magicRed hover:border-magicRed hover:scale-110 active:scale-95 transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/mikestreetmagic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-magicRed hover:border-magicRed hover:scale-110 active:scale-95 transition-all duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center pb-6">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Mike Street Magic. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <NavLink to="/privacy" className="text-gray-500 hover:text-white transition-colors text-xs tracking-widest uppercase">Privacy Policy</NavLink>
            <NavLink to="/termini" className="text-gray-500 hover:text-white transition-colors text-xs tracking-widest uppercase">Termini e Condizioni</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
