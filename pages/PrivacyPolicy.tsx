
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <div className="h-1 w-16 bg-magicRed rounded-full mb-8"></div>
          <p className="text-gray-400 text-sm mb-12">Ultimo aggiornamento: Febbraio 2026</p>

          <div className="space-y-10 text-gray-300 text-base leading-relaxed font-light">

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">1. Titolare del Trattamento</h2>
              <p>
                Mike Street Magic di Michael Iodice<br />
                P. IVA: 04585230230<br />
                Sede: Verona, Italia<br />
                Email: <a href="mailto:mikeanimazione@gmail.com" className="text-magicRed hover:underline">mikeanimazione@gmail.com</a><br />
                Tel: <a href="tel:+393478130426" className="text-magicRed hover:underline">+39 347 8130426</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">2. Dati Raccolti</h2>
              <p className="mb-3">Raccogliamo i seguenti dati personali esclusivamente per le finalità indicate:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-gray-200">Dati di contatto:</strong> nome, email, telefono e messaggio forniti tramite il modulo di contatto</li>
                <li><strong className="text-gray-200">Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate, orario di accesso (raccolti automaticamente)</li>
                <li><strong className="text-gray-200">Cookie:</strong> cookie tecnici e, previo consenso, cookie analitici e di profilazione (vedi sezione Cookie)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">3. Finalità del Trattamento</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Rispondere alle richieste inviate tramite il modulo di contatto</li>
                <li>Fornire preventivi e informazioni sui servizi offerti</li>
                <li>Migliorare il funzionamento e l'esperienza di navigazione del sito</li>
                <li>Adempiere ad obblighi di legge e fiscali</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">4. Base Giuridica</h2>
              <p>
                Il trattamento dei dati è basato sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR),
                sull'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR) e su obblighi legali
                (art. 6, par. 1, lett. c GDPR).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">5. Conservazione dei Dati</h2>
              <p>
                I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati
                raccolti e comunque non oltre 24 mesi dalla raccolta, salvo obblighi di legge.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">6. Condivisione dei Dati</h2>
              <p className="mb-3">I dati possono essere condivisi con:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-gray-200">EmailJS:</strong> per l'invio delle email dal modulo di contatto</li>
                <li><strong className="text-gray-200">Vercel:</strong> per l'hosting del sito web</li>
                <li><strong className="text-gray-200">Cookiebot:</strong> per la gestione del consenso cookie</li>
                <li><strong className="text-gray-200">Vimeo:</strong> per la riproduzione dei video incorporati</li>
              </ul>
              <p className="mt-3">I dati non vengono venduti a terzi.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">7. Cookie</h2>
              <p>
                Questo sito utilizza cookie tecnici necessari al funzionamento e, previo consenso, cookie analitici
                per comprendere come gli utenti utilizzano il sito. Puoi gestire le tue preferenze cookie in
                qualsiasi momento tramite il banner cookie o le impostazioni del tuo browser.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">8. Diritti dell'Interessato</h2>
              <p className="mb-3">Ai sensi degli artt. 15-22 del GDPR, hai diritto di:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Accedere ai tuoi dati personali</li>
                <li>Richiedere la rettifica o la cancellazione dei dati</li>
                <li>Limitare o opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
              </ul>
              <p className="mt-3">
                Per esercitare i tuoi diritti, contattaci a{' '}
                <a href="mailto:mikeanimazione@gmail.com" className="text-magicRed hover:underline">mikeanimazione@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">9. Sicurezza</h2>
              <p>
                Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi
                non autorizzati, perdita o distruzione. Il sito utilizza protocollo HTTPS per la trasmissione
                sicura dei dati.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-white font-bold mb-3">10. Modifiche</h2>
              <p>
                Ci riserviamo il diritto di aggiornare questa informativa. Eventuali modifiche saranno pubblicate
                su questa pagina con la data di ultimo aggiornamento.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
