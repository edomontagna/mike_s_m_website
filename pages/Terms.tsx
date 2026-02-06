
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Torna alla Home
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Termini e Condizioni</h1>
          <div className="h-1 w-16 bg-magicRed rounded-full mb-8"></div>
          <p className="text-gray-400 text-sm mb-12">Ultimo aggiornamento: Febbraio 2026</p>

          <div className="space-y-10 text-gray-300 text-base leading-relaxed font-light">

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">1. Informazioni Generali</h2>
              <p>
                Il presente sito web <strong className="text-white">mikestreetmagic.com</strong> è di proprietà di
                Mike Street Magic di Michael Iodice, P. IVA 04585230230, con sede a Verona, Italia.
                L'utilizzo del sito implica l'accettazione dei presenti Termini e Condizioni.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">2. Servizi Offerti</h2>
              <p>
                Il sito fornisce informazioni sui servizi di intrattenimento magico offerti da Mike Street Magic,
                inclusi spettacoli per matrimoni, eventi aziendali, feste private e locali. Le informazioni
                presenti sul sito hanno carattere informativo e non costituiscono offerta contrattuale.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">3. Prenotazioni e Preventivi</h2>
              <p>
                Le richieste inviate tramite il modulo di contatto non costituiscono prenotazione confermata.
                La prenotazione si intende confermata solo dopo accordo scritto tra le parti e, ove previsto,
                versamento dell'acconto concordato. I dettagli relativi a costi, modalità e condizioni di
                pagamento verranno definiti in fase di trattativa.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">4. Proprietà Intellettuale</h2>
              <p>
                Tutti i contenuti presenti sul sito (testi, immagini, video, loghi, grafica) sono di proprietà
                di Mike Street Magic o dei rispettivi titolari e sono protetti dalle leggi sul diritto d'autore.
                È vietata la riproduzione, distribuzione o utilizzo senza autorizzazione scritta.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">5. Limitazione di Responsabilità</h2>
              <p>
                Mike Street Magic si impegna a mantenere le informazioni del sito accurate e aggiornate,
                tuttavia non garantisce la completezza o l'assenza di errori. Non si assume responsabilità
                per eventuali danni derivanti dall'uso del sito o dall'impossibilità di accedervi.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">6. Link Esterni</h2>
              <p>
                Il sito può contenere link a siti web di terze parti (es. social media, piattaforme video).
                Mike Street Magic non è responsabile dei contenuti, delle privacy policy o delle pratiche
                di tali siti esterni.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">7. Cancellazioni e Rimborsi</h2>
              <p>
                Le condizioni di cancellazione e rimborso vengono concordate individualmente al momento
                della prenotazione e specificate nel contratto di ingaggio. In generale, cancellazioni
                con ampio preavviso possono prevedere il rimborso dell'acconto.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">8. Recensioni e Testimonianze</h2>
              <p>
                Le recensioni pubblicate sul sito sono autentiche e provengono da clienti reali tramite
                piattaforme verificate (Matrimonio.com, Facebook). Mike Street Magic si riserva il diritto
                di selezionare quali recensioni pubblicare.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">9. Legge Applicabile</h2>
              <p>
                I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia
                sarà competente il Foro di Verona.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">10. Contatti</h2>
              <p>
                Per qualsiasi domanda relativa ai presenti Termini e Condizioni, contattaci a{' '}
                <a href="mailto:mikeanimazione@gmail.com" className="text-magicRed hover:underline">mikeanimazione@gmail.com</a>.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
