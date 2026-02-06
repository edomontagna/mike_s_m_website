# Guida Deploy - Mike Street Magic

Tutto quello che serve per mettere online il sito, configurare dominio, cookie e email.

---

## 1. DEPLOY SU VERCEL (Piano Free)

### Prima volta

1. Vai su **https://vercel.com** e registrati con il tuo account **GitHub**
2. Clicca **"Add New Project"**
3. Importa la repository `mike_street_magic` dal tuo GitHub
4. Vercel rileva automaticamente che è un progetto Vite. Verifica che le impostazioni siano:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clicca **"Deploy"** e attendi ~1 minuto
6. Il sito sarà live su un URL tipo `mike-street-magic.vercel.app`

### Aggiornamenti futuri

Ogni volta che fai `git push` su GitHub, Vercel farà il deploy automatico.

### Note importanti
- Il file `vercel.json` è già configurato con il rewrite SPA (tutte le rotte puntano a `index.html`)
- Piano free: 100GB bandwidth/mese, deploy illimitati, HTTPS automatico

---

## 2. DOMINIO PERSONALIZZATO SU VERCEL

### Su Vercel

1. Vai nel tuo progetto su Vercel → **Settings** → **Domains**
2. Aggiungi il tuo dominio: `mikestreetmagic.com`
3. Vercel ti mostrerà i record DNS da configurare. Di solito:
   - **Tipo A** → `76.76.21.21`
   - **Tipo CNAME** (per `www`) → `cname.vercel-dns.com`

### Su Hostinger

1. Accedi a **https://hpanel.hostinger.com**
2. Vai su **Domini** → seleziona `mikestreetmagic.com` → **DNS / Nameservers**
3. Nella sezione **Record DNS**, aggiungi/modifica:

| Tipo  | Nome | Valore              | TTL  |
|-------|------|---------------------|------|
| A     | @    | 76.76.21.21         | 3600 |
| CNAME | www  | cname.vercel-dns.com | 3600 |

4. **Elimina** eventuali record A o CNAME preesistenti che puntano altrove per `@` e `www`
5. Salva e attendi propagazione DNS (da 5 minuti a 48 ore, di solito ~30 min)

### Verifica

- Torna su Vercel → Settings → Domains
- Quando i DNS si propagano, vedrai un segno di spunta verde
- Vercel configura automaticamente il certificato SSL (HTTPS)

---

## 3. COOKIEBOT (Consenso Cookie GDPR)

### Setup

1. Vai su **https://www.cookiebot.com** e registrati (piano free fino a 1 dominio / 50 sottopagine)
2. Aggiungi il dominio `mikestreetmagic.com`
3. Cookiebot ti darà uno **script da inserire nel `<head>`**. Sarà tipo:

```html
<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
  data-cbid="IL-TUO-ID" data-blockingmode="auto" type="text/javascript"></script>
```

4. Apri il file `index.html` nella root del progetto e incolla lo script **prima** di ogni altro script nel `<head>`:

```html
<head>
  <meta charset="UTF-8" />
  <!-- COOKIEBOT - deve essere il PRIMO script -->
  <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
    data-cbid="IL-TUO-ID" data-blockingmode="auto" type="text/javascript"></script>
  <!-- ...resto del head... -->
</head>
```

5. Nella dashboard Cookiebot:
   - Vai su **Settings** → **Appearance** → personalizza colori (nero/rosso per il tema del sito)
   - Vai su **Settings** → **Languages** → seleziona **Italiano**
   - Fai una **scansione** del sito cliccando "Scan"

6. Commit e push → Vercel fa deploy automatico

### Note
- `data-blockingmode="auto"` blocca automaticamente cookie non essenziali prima del consenso
- Il banner appare solo al primo accesso, poi ricorda la scelta dell'utente
- Cookiebot rileva automaticamente i cookie di Vimeo, EmailJS, ecc.

---

## 4. EMAIL

L'email di contatto del sito è **mikeanimazione@gmail.com** (Gmail).
Non serve configurare nulla su Hostinger per l'email: è già un account Gmail funzionante.

Il form di contatto del sito invierà le richieste direttamente a questo indirizzo tramite EmailJS (vedi sezione 5).

---

## 5. EMAILJS (Form di contatto sul sito)

Il form di contatto usa EmailJS. Per configurarlo:

1. Vai su **https://www.emailjs.com** e registrati (piano free: 200 email/mese)
2. **Email Services** → collega il tuo account email (Gmail o altro)
3. **Email Templates** → crea un template con le variabili: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. **Account** → copia le chiavi:
   - Service ID
   - Template ID
   - Public Key
5. Inseriscile nel file di configurazione del progetto dove EmailJS è inizializzato

---

## 6. CHECKLIST FINALE PRE-LANCIO

- [ ] Deploy su Vercel funzionante
- [ ] Dominio `mikestreetmagic.com` collegato e con HTTPS verde
- [ ] `www.mikestreetmagic.com` redirige correttamente
- [ ] Cookiebot installato e banner visibile
- [ ] Scansione cookie completata su Cookiebot
- [ ] Email `mikeanimazione@gmail.com` funzionante (invia e ricevi)
- [ ] Form di contatto EmailJS testato
- [ ] Pagina Privacy Policy accessibile (`/privacy`)
- [ ] Pagina Termini e Condizioni accessibile (`/termini`)
- [ ] Pagina 404 funzionante (prova un URL a caso)
- [ ] Testato su mobile (Chrome e Safari)
- [ ] Testato su desktop (Chrome e Firefox)

---

## ORDINE OPERAZIONI CONSIGLIATO

1. Push il codice su GitHub
2. Deploy su Vercel (5 min)
3. Configura dominio DNS su Hostinger (10 min + attesa propagazione)
4. Configura email su Hostinger (5 min)
5. Registra Cookiebot e inserisci script (10 min)
6. Configura EmailJS (10 min)
7. Test finale su tutti i dispositivi

**Tempo totale stimato: ~40 minuti + attesa propagazione DNS**
