
import { NavItem, ServiceItem, TestimonialItem, GalleryItem, PricingPlan, StatItem, EventItem, CollaborationItem } from './types';
import { IMAGES } from './media';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Servizi', 
    path: '/services',
    children: [
      { label: 'Matrimoni', path: '/matrimoni' },
      { label: 'Aziende', path: '/aziende' },
      { label: 'Eventi Privati', path: '/eventi' },
    ]
  },
  { label: 'Chi Sono', path: '/about' },
  { label: 'Galleria', path: '/gallery' },
  { label: 'Contatti', path: '/contact' },
];

export const STATS: StatItem[] = [
  { label: 'Eventi', value: '100', suffix: '+' },
  { label: 'Anni di Stupore', value: '10', suffix: '' },
  { label: 'Clienti Soddisfatti', value: '100', suffix: '%' },
  { label: 'Spettatori', value: '10', suffix: 'K+' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'close-up',
    title: 'Magia da Vicino',
    description: 'Perfetta per matrimoni, cene aziendali ed eventi privati. Con giochi di carte, monete e piccoli oggetti.',
    icon: 'diamond',
    features: ['Micro-illusionismo', 'Interazione diretta', 'Carte e monete', 'Ideale per cocktail hour']
  },
  {
    id: 'mentalism',
    title: 'Mentalismo',
    description: 'Entrando nella sfera del pensiero, leggendo le emozioni e anticipando scelte apparentemente impossibili.',
    icon: 'heart',
    features: ['Lettura del pensiero', 'Previsioni impossibili', 'Suggestione psicologica', 'Alto impatto emotivo']
  },
  {
    id: 'stage',
    title: 'Spettacoli di Scena',
    description: 'Ideale per eventi aziendali e feste con molti invitati. Con effetti spettacolari e coinvolgimento diretto del pubblico.',
    icon: 'club',
    features: ['Show da palco', 'Coinvolgimento platea', 'Effetti visivi', 'Storytelling magico']
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'weddings',
    title: 'Matrimoni',
    description: 'Un tocco di classe che rende il tuo giorno speciale indimenticabile. Intrattenimento elegante durante l\'aperitivo o la cena.',
    icon: '💍',
    features: ['Intrattenimento discreto', 'Nessuna interruzione catering', 'Wow factor per gli ospiti']
  },
  {
    id: 'corporate',
    title: 'Aziende',
    description: 'Team building, cene di gala e lanci prodotto. La magia come strumento di comunicazione per il tuo brand.',
    icon: '💼',
    features: ['Ice-breaking', 'Brand magic', 'Show multilingue']
  },
  {
    id: 'events',
    title: 'Eventi',
    description: 'Feste private, compleanni e celebrazioni esclusive. Un assaggio di magia che trasforma ogni evento in uno spettacolo unico.',
    icon: '🎉',
    features: ['Adattabile a ogni spazio', 'Protagonista della festa', 'Ricordi indelebili']
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    features: ['1 ora di performance', 'Magia da vicino (Walk around)', 'Ideale fino a 50 ospiti', 'Viaggio incluso (entro 30km)', 'Consultazione telefonica'],
    isFeatured: false
  },
  {
    id: 'pro',
    name: 'Professional',
    features: ['2-3 ore di performance', 'Mix: Magia da Vicino + Mentalismo', 'Ideale fino a 150 ospiti', 'Consulenza personalizzata', 'Viaggio incluso (entro 50km)', 'Effetto speciale dedicato'],
    isFeatured: true
  },
  {
    id: 'premium',
    name: 'Elite',
    features: ['Copertura intero evento', 'Show da scena finale (30 min)', 'Ospiti illimitati', 'Assistente incluso', 'Effetti brandizzati custom', 'Priorità di booking'],
    isFeatured: false
  }
];

export const COLLABORATIONS: CollaborationItem[] = [
  { id: 'uvet', name: 'Uvet', logo: IMAGES.PARTNERS.LOGO_UVET },
  { id: 'protecno', name: 'Protecno', logo: IMAGES.PARTNERS.LOGO_PROTECNO },
  { id: 'portomancino', name: 'Risotteria Porto Mancino', logo: IMAGES.PARTNERS.LOGO_PORTO },
  { id: 'maison22', name: 'Maison 22 Esthetique', logo: IMAGES.PARTNERS.LOGO_MAISON },
  { id: 'hellas', name: 'Hellas Verona', logo: IMAGES.PARTNERS.LOGO_HELLAS },
  { id: 'dellas', name: 'Dellas', logo: IMAGES.PARTNERS.LOGO_DELLAS },
  { id: 'dakota', name: 'Dakota', logo: IMAGES.PARTNERS.LOGO_DAKOTA },
  { id: 'bsa', name: 'BSA', logo: IMAGES.PARTNERS.LOGO_BSA },
  { id: 'adami', name: 'Adami', logo: IMAGES.PARTNERS.LOGO_ADAMI },
];

export const TESTIMONIALS: TestimonialItem[] = [
  // --- MATRIMONIO.COM ---
  {
    id: 'm1',
    name: 'Matteo',
    role: 'Sposo',
    title: 'Esibizione fantastica',
    quote: "Abbiamo scelto Mike per il nostro matrimonio e non potevamo fare scelta migliore! Con la sua magia, simpatia e grande capacità di coinvolgere il pubblico, è riuscito a conquistare tutti. Le sue esibizioni sono state un mix perfetto di sorpresa, risate e meraviglia, creando un'atmosfera davvero speciale. Tutti gli ospiti ne parlano ancora, ricordando con entusiasmo i suoi numeri e la sua energia contagiosa. Consigliatissimo per chi vuole aggiungere un tocco di magia e divertimento al proprio evento!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm2',
    name: 'Sara',
    role: 'Sposa',
    title: 'Spettacolare!!',
    quote: "Mike ha decisamente dato una svolta positiva al nostro matrimonio, coinvolgendo tutti gli ospiti sia con i suoi meravigliosi trucchi di magia che creando un'atmosfera speciale! Super consigliato!",
    rating: 5,
    source: 'Matrimonio.com'
  },
  {
    id: 'm3',
    name: 'Nicodemo',
    role: 'Sposo',
    title: 'Mago grandioso',
    quote: "Grazie al consiglio del fantastico Mago Zeno, abbiamo scelto di avere Michael, in arte MikeStreetMagic, al nostro matrimonio in Calabria, e non potevamo desiderare di meglio! Michael ha incantato tutti i nostri 400 ospiti con la sua magia incredibile e un intrattenimento davvero fuori dal comune. Gli invitati continuavano a farci i complimenti, sorpresi e affascinati, soprattutto dai numeri di ipnosi, che hanno lasciato tutti a bocca aperta. Consiglio con entusiasmo MikeStreetMagic a chiunque voglia rendere speciale il proprio giorno!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm4',
    name: 'Rachele',
    role: 'Sposa',
    title: 'Magico Mike',
    quote: "Che dire di Mike? Mike è un ragazzo d'oro. Lo abbiamo conosciuto mentre svolgeva il suo lavoro in altre vesti per delle serate a tema presso un noto ristorante e fin dalla prima volta ha catturato la nostra piena attenzione. Allora abbiamo deciso che fosse la persona giusta per intrattenere i nostri ospiti per il nostro matrimonio a tema Harry Potter! E' un Mago con la M maiuscola: è spigliato, preciso, divertente... è ipnotico! Non propone mai numeri di magia scontati e ti lascia ogni volta letteralmente a bocca aperta! Riesce ad emozionare e coinvolgere chiunque, grandi e piccoli, lasciando quell'alone di mistero che solo un vero Mago riesce a fare. Assolutamente consigliatissimo, 10/10!!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm5',
    name: 'Elena',
    role: 'Sposa',
    title: 'Pura Magia',
    quote: "Per il mio matrimonio avevo in mente qualcosa di nuovo, un intrattenimento che avrebbe lasciato tutti gli invitati a bocca aperta. Quindi ho cercato tra i vari fornitori trovando Mike. Fin da subito una persona alla mano e super disponibile: ci siamo incontrati ed è stato quello che serviva a convincere anche il mio compagno! Lo spettacolo tra i tavoli durante la cena servita è stato bellissimo e tutti gli invitati non vedevano l'ora fosse il loro turno. Se volete un momento speciale, divertente, che possa coinvolgere tutti... vi consigliamo con tutto il cuore di provare Mike Street Magic!! Assolutamente magico!!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm6',
    name: 'Francesco',
    role: 'Sposo',
    title: 'Sbalorditivo, sorprendente, unico',
    quote: "Abbiamo contattato questo fantastico professionista perché cercavamo un intrattenimento per la cena del nostro matrimonio. Ha desiderato mostrarci alcune delle sue abilità prima di essere ingaggiato, per consentirci di decidere se era ciò che stavamo cercando. Siamo rimasti senza parole e non abbiamo potuto che confermare. In maniera molto professionale è arrivato all'evento un'ora prima per studiare la location e capire come poter svolgere lo show. Ha coinvolto la sala, catturando l'attenzione di tutti con la sua ironia e con esibizioni ai singoli tavoli e di gruppo, lasciando tutti sbalorditi. Insomma, se state pensando di contattarlo, non pensateci due volte e soprattutto non ripensateci, non chiamarlo è lo sbaglio più grande che possiate fare. Complimenti Mike, sei magico!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm7',
    name: 'Greta',
    role: 'Sposa',
    title: 'Mago super',
    quote: "Ci siamo affidati a mago Mike per intrattenere gli ospiti durante la cena del nostro matrimonio e devo dire che è stato bravissimo e ha portato alle varie tavole una ventata di divertimento e stupore! Mago bravissimo lo consiglio!",
    rating: 5,
    source: 'Matrimonio.com'
  },
  {
    id: 'm8',
    name: 'Martina',
    role: 'Sposa',
    title: 'Mike numero 1, spettacolo puro',
    quote: "Mike ci ha accompagnato in questa meravigliosa giornata da favola.. tutto perfetto. Ci ha sorpreso e lasciato a bocca aperta in ogni suo numero.. dire speciale è poco.. spettacolo puro dall'inizio alla fine!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm9',
    name: 'Antonio',
    role: 'Sposo',
    title: 'Il numero uno!',
    quote: "Ho richiesto di avere MIKE il giorno del mio matrimonio, vi dico solo che mi sposerei altre 100 volte per rivedere la sua performance, è stato davvero formidabile, ha intrattenuto tutti gli ospiti dall'inizio alla fine, tutti sono rimasti a bocca aperta! Sei davvero un grande e secondo me il numero uno! Ragazzi ve lo consiglio a tutti veramente, per qualsiasi tipo di evento! Vi stravolgerà la giornata e rimarrete esterefatti da ciò che vedrete! Grande magic mike!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm10',
    name: 'Chuly',
    role: 'Sposa',
    title: 'Non può mancare al tuo matrimonio',
    quote: "Allora cominciamo che un matrimonio senza Mike non è un matrimonio quindi deve esserci!! Una esperienza bellissima che ci ha fatto divertire ed emozionare, coinvolgendo tutti dall'inizio alla fine! Ha fatto del nostro matrimonio un giorno indimenticabile per tutti! Tanto è che ancora si parla di lui! Grazie di tutto.",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm11',
    name: 'Andrea',
    role: 'Sposo',
    title: 'Intrattenimento magico',
    quote: "Contattato per un matrimonio. Conoscevo già Michael per i suoi giochi di magia, ma mai provati di persona. Che dire: ti lascia a bocca aperta, tutti gli ospiti sono rimasti entusiasti dei giochi che faceva durante la serata. Oltre alla bella presenza, Michael risulta simpaticissimo e goliardico ma sempre a modo, con tutte le persone di tutte le età, ti fa trascorrere veramente dei bei momenti, momenti di magia e mentalismo. Grazie ancora!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },
  {
    id: 'm12',
    name: 'Angela',
    role: 'Sposa',
    title: 'Mago al matrimonio',
    quote: "Il 26 agosto ci siamo sposati io e Andrea e mio marito aveva ingaggiato Maicol per dei suoi numeri di magia. In primis noi, ma tutti gli invitati sono rimasti a bocca aperta. Ha superato le nostre aspettative. Davvero bravo, professionale e simpaticissimo. Lo consiglio vivamente a tutti!!! Non ve ne pentirete.",
    rating: 5,
    source: 'Matrimonio.com'
  },
  {
    id: 'm13',
    name: 'Silvia',
    role: 'Sposa',
    title: 'Veramente incredibile',
    quote: "Ha intrattenuto gli ospiti durante la cena del mio matrimonio, ha lasciato tutti a bocca aperta, bravissimo anche con i bambini. È stato davvero bravo, simpatico e coinvolgente.",
    rating: 5,
    source: 'Matrimonio.com'
  },
  {
    id: 'm14',
    name: 'Liliana',
    role: 'Sposa',
    title: 'Professionalità e tanta passione',
    quote: "Michael è stato grandioso. Gli invitati sono stati tutti molto presi dai suoi giochi di magia. Si è reso disponibile fin da subito e ha reso la serata ancora più magica. Grazie ancora di tutto!",
    rating: 5,
    source: 'Matrimonio.com'
  },
  {
    id: 'm15',
    name: 'Alessia',
    role: 'Sposa',
    title: 'Intrattiene sia grandi che piccini',
    quote: "L'ho ingaggiato per il mio matrimonio dopo averlo conosciuto ad una festa di compleanno. È stato uno spasso sia per i grandi che per i piccini! Da consigliare.",
    rating: 5,
    source: 'Matrimonio.com'
  },
  {
    id: 'm16',
    name: 'Sonia',
    role: 'Sposa',
    title: 'Giornata magica',
    quote: "Abbiamo ingaggiato Mike per l'animazione dei più piccoli al nostro matrimonio. Lo spettacolo ha coinvolto tutti, dai più piccoli ai diversamente giovani, facendoci domandare come fossero possibili certe illusioni/magie! Abbiamo ricevuto numerosi complimenti che rigiriamo a te! Grazie ancora per aver reso la nostra giornata ancora più... magica!!! Continua così, alimenta ogni giorno la tua passione!!!!",
    rating: 5,
    source: 'Matrimonio.com',
    featured: true
  },

  // --- FACEBOOK & CORPORATE ---
  {
    id: 'fb1',
    name: 'Cristina',
    role: 'Evento Aziendale Eataly',
    title: 'Tocco magico alla cena aziendale',
    quote: "Volevo condividere la mia esperienza davvero positiva con il mago MIKE, che è stato presente alla nostra cena aziendale di Natale presso Eataly. È stato un vero e proprio tocco magico che ha reso la serata ancora più speciale! Durante l'evento, MIKE ha girato tra i tavoli intrattenendo gli ospiti in modo elegante e coinvolgente. Ha creato un'atmosfera unica, facendo partecipare tutti con numeri incredibili di mentalismo e magia, che sono riusciti a lasciare tutti a bocca aperta. Ogni suo trucco era ben studiato e mai scontato, con effetti davvero sorprendenti e originali. Molti degli ospiti ci hanno fatto i complimenti per averlo scelto. La sua presenza ha sicuramente contribuito a rendere la serata un successo!",
    rating: 5,
    source: 'Facebook',
    featured: true
  },
  {
    id: 'fb2',
    name: 'Roberto',
    role: '',
    quote: "A 38 anni lasciarsi impressionare da un ragazzo straordinario!! Solo una parola.... SPETTACOLARE!!!",
    rating: 5,
    source: 'Facebook'
  },
  {
    id: 'fb3',
    name: 'Alessandra',
    role: '',
    quote: "È un mago incredibile, di livello e coinvolgente. Il NUMERO 1!",
    rating: 5,
    source: 'Facebook'
  },
  {
    id: 'fb4',
    name: 'Tommaso',
    role: 'Evento Aziendale',
    quote: "Una cena aziendale trasformata in uno spettacolo mozzafiato da Mike, ci ha lasciato a bocca aperta dall'inizio alla fine, ed oltre alla sua bravura come mago un plauso alla sua simpatia! Consigliatissimo.",
    rating: 5,
    source: 'Facebook'
  },
  {
    id: 'fb5',
    name: 'Jacopo',
    role: 'Risotteria Porto Mancino',
    title: 'Atmosfera magica nel locale',
    quote: "Quando Mike entra in scena nel mio locale, la Risotteria Porto Mancino, l'atmosfera si trasforma magicamente. Ogni serata a tema, che celebra i mondi di Harry Potter, il Signore degli Anelli o i ruggenti anni '20, viene elevata dalla sua presenza carismatica e dalla sua magia coinvolgente. Michael non è solo un mago di talento, ma anche una persona eccezionalmente puntuale, disponibile e adattabile alle vibrazioni dell'evento. Con un sorriso che illumina la sala e una presenza scenica che varia a seconda del contesto, sa esattamente come catturare e mantenere l'attenzione del pubblico. I nostri clienti sono letteralmente impazziti per le sue esibizioni, tanto che molti di loro sono tornati al nostro locale proprio per rivederlo in azione. Se desiderate aggiungere un elemento unico e memorabile ai vostri eventi, non cercate oltre: Mike è la scelta che fa per voi!",
    rating: 5,
    source: 'Facebook',
    featured: true
  },
  {
    id: 'fb6',
    name: 'Fabrizio',
    role: 'CEO Develey Italia',
    title: 'Intrattenitore eccezionale',
    quote: "Sono l'Amministratore Delegato di Develey Italia. Abbiamo ingaggiato Mike per l'evento di Natale. Non è solo un illusionista dalle grandi capacità, ma anche un intrattenitore con la dote di sapersi integrare al meglio nella situazione regalando a tutti un ricordo della serata indimenticabile. Non posso fare altro che consigliarlo e sono certo che nella vita privata deve essere un uomo di cuore. Grande e grazie Mike, ti auspico una brillante carriera!",
    rating: 5,
    source: 'Facebook',
    featured: true
  },
  {
    id: 'fb7',
    name: 'Alberto',
    role: '',
    title: 'Vero artista e professionista',
    quote: "Conosciuto Mike in un locale dove stava intrattenendo gli ospiti con numerosi numeri di magia, uno più bello dell'altro, e dato che dovevo organizzare una festa di compleanno, l'ho chiamato per un'oretta di spettacolo. Un personaggio fantastico ed eclettico, capace di intrattenere adulti e bambini in modo spettacolare... un vero artista e un vero professionista. Grande e già in programma un'altra festa!",
    rating: 5,
    source: 'Facebook'
  },
  {
    id: 'fb8',
    name: 'Michael',
    role: 'Evento Privato',
    title: 'Divertimento assicurato',
    quote: "Abbiamo fatto una serata post matrimonio con tutti gli amici ed abbiamo ingaggiato il fantastico Mago Mike. È stata una serata bellissima, ci siamo divertiti tutti, ed è riuscito a coinvolgere sia i più giovani che i più vecchi nelle sue magie. Consigliatissimo non solo per matrimoni ma anche per eventi privati ed aziendali. Se si dovesse presentare l'occasione di un altro evento sarà sempre la nostra prima scelta, divertimento assicurato.",
    rating: 5,
    source: 'Facebook',
    featured: true
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  // WEDDINGS
  { id: '1', src: IMAGES.PORTFOLIO.WEDDINGS[0], category: 'weddings', title: 'Reazione Ospiti' },
  { id: '4', src: IMAGES.PORTFOLIO.WEDDINGS[1], category: 'weddings', title: 'Intrattenimento Aperitivo' },
  { id: '7', src: IMAGES.PORTFOLIO.WEDDINGS[2], category: 'weddings', title: 'Magia con gli Sposi' },
  
  // CORPORATE
  { id: '2', src: IMAGES.PORTFOLIO.CORPORATE[0], category: 'corporate', title: 'Show Aziendale' },
  { id: '5', src: IMAGES.PORTFOLIO.CORPORATE[1], category: 'corporate', title: 'Mentalismo Stage' },
  { id: '8', src: IMAGES.PORTFOLIO.CORPORATE[2], category: 'corporate', title: 'Gala Dinner' },
  
  // PRIVATE
  { id: '3', src: IMAGES.PORTFOLIO.PRIVATE[0], category: 'private', title: 'Close-up Card Magic' },
  { id: '6', src: IMAGES.PORTFOLIO.PRIVATE[1], category: 'private', title: 'Street Magic' },
];
