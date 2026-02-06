
import React, { useState, useRef } from 'react';
import Hero from '../components/UI/Hero';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { IMAGES } from '../media';
import LogoTicker from '../components/UI/LogoTicker';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'wedding',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // RECUPERO VARIABILI D'AMBIENTE (Configurate su Vercel)
  // Safely access env vars using optional chaining to prevent crashes if env is undefined
  // @ts-ignore
  const env = import.meta.env || {};
  const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Il nome è obbligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Inserisci un'email valida";
    }
    if (!formData.message.trim()) newErrors.message = "Il messaggio non può essere vuoto";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent double submission
    if (isSubmitting) return;
    if (!validate()) return;

    // Controllo di sicurezza
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      event_type: formData.type,
      event_date: formData.date || 'Non specificata',
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', type: 'wedding', date: '', message: '' });
      }, () => {
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  return (
    <>
      <Hero 
        variant="page"
        title="Contattami"
        subtitle="Disponibilità e Preventivi"
        poster={IMAGES.CONTACT_PAGE.HERO}
      />

      {/* Padding Optimized: py-20 mobile / py-32 desktop */}
      <section className="py-20 md:py-32 bg-black pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div className="space-y-12 md:space-y-20 self-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 md:mb-8 font-bold leading-tight">Informazioni</h2>
                <div className="h-1 w-20 bg-magicRed mb-6 md:mb-8"></div>
                <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                  Per disponibilità, preventivi personalizzati o collaborazioni esclusive, compila il form. Rispondo personalmente a tutte le richieste entro 24 ore.
                </p>
              </motion.div>

              <div className="space-y-8 md:space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="flex items-center group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 mr-6 md:mr-8 group-hover:border-magicRed group-hover:text-magicRed group-hover:bg-magicRed/5 transition-all duration-500 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-lg md:text-xl mb-1 tracking-wide">Telefono</h3>
                    <a href="tel:+393478130426" className="text-gray-300 text-base md:text-lg font-light hover:text-white transition-colors">+39 347 8130426</a>
                    <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Disponibile su WhatsApp</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 mr-6 md:mr-8 group-hover:border-magicRed group-hover:text-magicRed group-hover:bg-magicRed/5 transition-all duration-500 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-lg md:text-xl mb-1 tracking-wide">Email</h3>
                    <a href="mailto:mikeanimazione@gmail.com" className="text-gray-300 text-base md:text-lg font-light hover:text-white transition-colors">mikeanimazione@gmail.com</a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-center group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 mr-6 md:mr-8 group-hover:border-magicRed group-hover:text-magicRed group-hover:bg-magicRed/5 transition-all duration-500 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-lg md:text-xl mb-1 tracking-wide">Base</h3>
                    <p className="text-gray-300 text-base md:text-lg font-light">Verona, Italia</p>
                    <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Disponibile per trasferte</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#080808] p-8 md:p-16 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden mt-8 lg:mt-0"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-magicRed/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-10 md:mb-12">Richiedi Disponibilità</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-8 md:space-y-10" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="group relative">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`peer w-full bg-transparent border-b py-3 text-white focus:outline-none transition-colors placeholder-transparent font-light ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-magicRed focus:shadow-[0_2px_10px_rgba(230,0,0,0.15)]'}`}
                      placeholder="Nome"
                    />
                    <label className={`absolute left-0 -top-3.5 text-[11px] uppercase tracking-[0.2em] transition-all cursor-text ${errors.name ? 'text-red-500' : 'text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-magicRed'}`}>
                      Nome
                    </label>
                    {errors.name && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500 flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.name}</span>}
                  </div>
                  <div className="group relative">
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`peer w-full bg-transparent border-b py-3 text-white focus:outline-none transition-colors placeholder-transparent font-light ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-magicRed focus:shadow-[0_2px_10px_rgba(230,0,0,0.15)]'}`}
                      placeholder="Email"
                    />
                    <label className={`absolute left-0 -top-3.5 text-[11px] uppercase tracking-[0.2em] transition-all cursor-text ${errors.email ? 'text-red-500' : 'text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-magicRed'}`}>
                      Email
                    </label>
                    {errors.email && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500 flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="group relative">
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-magicRed transition-colors appearance-none font-light cursor-pointer pt-4"
                    >
                      <option value="wedding" className="bg-[#111]">Matrimonio</option>
                      <option value="corporate" className="bg-[#111]">Aziendale</option>
                      <option value="private" className="bg-[#111]">Festa Privata</option>
                      <option value="other" className="bg-[#111]">Altro</option>
                    </select>
                    <label className="absolute left-0 -top-3.5 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                      Tipo Evento
                    </label>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  </div>
                  <div className="group relative">
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-magicRed transition-colors [color-scheme:dark] font-light pt-4"
                    />
                    <label className="absolute left-0 -top-3.5 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                      Data
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <textarea 
                    rows={4} 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`peer w-full bg-transparent border-b py-3 text-white focus:outline-none transition-colors placeholder-transparent font-light resize-none mt-4 ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-magicRed focus:shadow-[0_2px_10px_rgba(230,0,0,0.15)]'}`}
                    placeholder="Messaggio"
                  ></textarea>
                  <label className={`absolute left-0 top-0 text-[11px] uppercase tracking-[0.2em] transition-all cursor-text ${errors.message ? 'text-red-500' : 'text-gray-400 peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-magicRed'}`}>
                    Raccontami del tuo evento...
                  </label>
                  {errors.message && <span className="absolute -bottom-5 left-0 text-[10px] text-red-500 flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-5 rounded-sm tracking-[0.2em] uppercase hover:bg-magicRed hover:text-white hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center mt-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      'Invio in corso...'
                    ) : (
                      <>
                        <Send size={16} className="mr-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" /> Invia Richiesta
                      </>
                    )}
                  </span>
                </button>
                
                {/* Feedback Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/20 border border-green-500/30 rounded-sm flex items-center text-green-400 text-sm"
                  >
                    <CheckCircle size={18} className="mr-3 flex-shrink-0" />
                    <span>Messaggio inviato con successo! Mike ti risponderà al più presto.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/20 border border-red-500/30 rounded-sm flex items-center text-red-400 text-sm"
                  >
                    <AlertCircle size={18} className="mr-3 flex-shrink-0" />
                    <span>Si è verificato un errore durante l'invio. Riprova più tardi o scrivici su WhatsApp.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators: Partner Logos */}
      <LogoTicker />
    </>
  );
};

export default Contact;
