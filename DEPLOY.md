# Mike Street Magic - Deploy & Setup

## Stack tecnologico

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animazioni**: Framer Motion
- **Routing**: React Router DOM 6 (client-side, SPA)
- **Analytics**: @vercel/analytics
- **Email**: @emailjs/browser
- **Hosting**: Vercel

## Struttura progetto

```
/
├── App.tsx              # Router principale, ErrorBoundary, Preloader
├── index.tsx            # Entry point React
├── index.html           # HTML entry (Vite)
├── constants.ts         # Navigazione, dati statici
├── media.ts             # URL immagini/video centralizzati
├── pages/               # Pagine: Home, About, Services, Gallery, Contact, ecc.
├── components/
│   ├── Layout/          # Navbar, Footer
│   └── UI/              # Hero, Card, ParticleBackground, MagicCursor, ecc.
├── vite.config.ts       # Config Vite (output: dist/)
├── tailwind.config.js   # Colori custom (magicRed, magicDark), font (Inter, Playfair Display)
├── vercel.json          # Rewrites SPA per React Router
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies & scripts
```

## Repo GitHub

- **Repo**: `https://github.com/edomontagna/mike.git`
- **Branch principale**: `main`

## Settings Vercel per il deploy

### 1. Collegare il progetto

1. Vai su [vercel.com](https://vercel.com) e accedi
2. "Add New Project" > Importa da GitHub > seleziona **edomontagna/mike**
3. Branch di produzione: **main**

### 2. Build Settings (Vercel auto-detect Vite, ma verifica)

| Campo             | Valore         |
|-------------------|----------------|
| Framework Preset  | **Vite**       |
| Build Command     | `npm run build`|
| Output Directory  | `dist`         |
| Install Command   | `npm install`  |
| Node.js Version   | 18.x o 20.x   |

### 3. Environment Variables

Nessuna variabile d'ambiente richiesta al momento. EmailJS usa chiavi pubbliche hardcoded nel client.

Se in futuro servissero variabili, aggiungerle in:
**Vercel Dashboard > Project > Settings > Environment Variables**

### 4. vercel.json (gia presente nel repo)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Questo rewrite e fondamentale: essendo una SPA con React Router, tutte le rotte devono puntare a `index.html` altrimenti Vercel ritorna 404 su refresh/navigazione diretta.

### 5. Dominio custom (opzionale)

1. Vercel Dashboard > Project > Settings > Domains
2. Aggiungi il dominio (es. `mikestreetmagic.com`)
3. Configura i DNS dal tuo registrar:
   - **A Record**: `76.76.21.21`
   - **CNAME** (per www): `cname.vercel-dns.com`

## Comandi utili in locale

```bash
# Installa dipendenze
npm install

# Dev server locale (http://localhost:5173)
npm run dev

# Build di produzione
npm run build

# Preview build locale
npm run preview
```

## Come funziona il deploy automatico

Ogni **push su `main`** triggera automaticamente un nuovo deploy su Vercel. Non serve fare altro: committa, pusha, e il sito si aggiorna in ~30-60 secondi.

## Note importanti

- **SPA Routing**: Il file `vercel.json` con i rewrites e obbligatorio per far funzionare React Router su Vercel
- **Analytics**: Gia integrato con `@vercel/analytics` in `App.tsx` - funziona automaticamente su Vercel
- **Fonts**: Inter e Playfair Display sono caricate via Google Fonts nell'`index.html`
- **Video Hero**: Il video nella home e un embed Vimeo/YouTube gestito via iframe nel componente `Hero.tsx`
- **Immagini/Media**: Tutti gli URL sono centralizzati in `media.ts`
- **Navigazione**: Le voci del menu sono definite in `constants.ts`
