
// 🎛️ MEDIA CONTROL CENTER
// Qui trovi TUTTE le immagini e i video del sito, organizzati per sezione.
// Se vedi una foto sul sito, il suo link è sicuramente qui sotto.

// 1. VIDEO DI COPERTINA (Hero Sections)
export const HERO_VIDEOS = {
  HOME: "https://vimeo.com/1161912599?share=copy&fl=sv&fe=ci",      // Video principale Home Page
  WEDDINGS: "https://vimeo.com/1161912742?share=copy&fl=sv&fe=ci",  // Video pagina Matrimoni
  CORPORATE: "https://vimeo.com/1161912426?share=copy&fl=sv&fe=ci", // Video pagina Aziende
  EVENTS: "https://vimeo.com/1161912599?share=copy&fl=sv&fe=ci",    // Video pagina Eventi
  ABOUT: "https://vimeo.com/1161912914?share=copy&fl=sv&fe=ci",   // Video pagina Chi Sono (uso Home come placeholder/showreel)
};

// 1.5 POSTER ANTEPRIMA VIDEO (Immagini statiche che si vedono prima che il video carichi)
export const HERO_POSTERS = {
  HOME: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/3036505-fGMrWSWIQfBKeztn.webp", // Usa un'immagine generica dark o un frame del video
  // Fallback temporaneo per Home (uso una texture dark elegante se non hai uno screenshot specifico)
  HOME_FALLBACK: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/3036505-fGMrWSWIQfBKeztn.webp", 
  
  WEDDINGS: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/3036505-fGMrWSWIQfBKeztn.webp", // Già presente nei media
  CORPORATE: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/9-YBg7MqlQgKTVZZrP.jpg", // Scena palco
  EVENTS: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/39-dfJhbX0w1g1fod9X.webp", // Scena club/nightlife
  ABOUT: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YyvZLRjD7jCGlVVb/62-A85ejpBg8rfZRoV3.jpg", // Story origins
};

export const IMAGES = {
  
  // 🏷️ BRAND IDENTITY
  BRAND: {
    // SOSTITUISCI QUESTO LINK CON L'URL DEL TUO LOGO (PNG Trasparente Bianco)
    LOGO: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=168,fit=crop,q=95/YyvZLRjD7jCGlVVb/mike_street_magic_logo-AoPqzL8vvyiMlGE4.webp", // Placeholder temporaneo (usando uno dei partner come test, sostituiscilo!)
  },

  // 🌍 TEXTURE GLOBALI (Sfondi ed effetti)
  GLOBAL: {
    TEXTURE_STARDUST: "https://www.transparenttextures.com/patterns/stardust.png", // Puntini luminosi sfondo
    TEXTURE_FOG: "https://raw.githubusercontent.com/daniel-larson/fog-overlay/main/fog.png", // Effetto nebbia
  },

  // 🏠 HOME PAGE (Immagini specifiche della home)
  HOME: {
    // Sezione: "Un Viaggio nella Magia"
    BG_ABOUT_SECTION: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2000", // Sfondo scuro dietro la sezione
    CARD_ABOUT_PROFILE: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=596,h=456,fit=crop/YyvZLRjD7jCGlVVb/4-m6LZxKPEobc5R184.jpg", // FOTO DEL MAGO (La card che ruota)
    
    // Sezione: Footer CTA ("Pronto a Stupire?")
    BG_CTA_FOOTER: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1974", // Sfondo ultima sezione
  },

  // 🎩 CARD SERVIZI (Appaiono in HOME e nella pagina SERVIZI)
  // Queste sono le 3 foto rettangolari: Magia da Vicino, Mentalismo, Scena
  SERVICES: {
    THUMB_CLOSEUP: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=406,h=270,fit=crop/YyvZLRjD7jCGlVVb/27-YZ980PaoqXCVyZGl.jpg",   // Foto mani/carte
    THUMB_MENTALISM: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=264,fit=crop,trim=0;28.65671641791045;0;253.81663113006397/YyvZLRjD7jCGlVVb/09889031-3415-4be3-9aac-debf2aaff71f-d951EnOzWnHkGkqM.JPG", // Foto misteriosa/nebbia
    THUMB_STAGE: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=406,h=270,fit=crop/YyvZLRjD7jCGlVVb/8-YKb3w01exXCR6BLk.jpg",      // Foto palcoscenico
  },

  // PAGINA TUTTI I SERVIZI
  SERVICES_PAGE: {
    HERO: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/123-3p7Ii2g7RN7rdUK9.webp", // Carte da gioco dark/eleganti
  },

  // PAGINA GALLERIA
  GALLERY_PAGE: {
    HERO: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/chi-sono-imm-A85E2kG3nqi4D2W1.png", // Luci da palco/Studio
  },

  // PAGINA CONTATTI
  CONTACT_PAGE: {
    HERO: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/58-Y4LD64Zbl9CK9Kj3.jpeg", // Mani misteriose/atmosfera dark
  },

  // 🤝 LOGHI PARTNER (Striscia scorrevole in basso)
  // Puoi sostituire questi link con i loghi reali in PNG trasparente
  PARTNERS: {
    LOGO_UVET: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/uvet-Aq2W0KXezwCp0r7g.png",
    LOGO_PROTECNO: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/protecno-dOqaXg0l3lHMXL6w.png",
    LOGO_PORTO: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/porto-mancino-ok-mePx3Ka500T9xGOk.png",
    LOGO_MAISON: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/maison-22-esthetique-dJoZGg0e8Lu75Mj7.png",
    LOGO_HELLAS: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/hellas-verona-mePx3Ka50qIOOxq9.png",
    LOGO_DELLAS: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/dellas-AE0Pqgx2OrFlJ90W.png",
    LOGO_DAKOTA: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/dakota-YleWLK02D6TEk3EK.png",
    LOGO_BSA: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/bsa-mP4OXrLPwEuJ5lOZ.png",
    LOGO_ADAMI: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/adami-Aq2W0KXe15IMDvv7.png",
  },

  // 💍 PAGINA MATRIMONI
  WEDDINGS: {
    HERO_FALLBACK: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/3036505-fGMrWSWIQfBKeztn.webp",
    FEAT_ATMOSPHERE: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/59-rEybXb52kqdwmcQC.webp",
    FEAT_EMOTIONS: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/26-ctvBN4CORL93jdKp.webp",
    FEAT_DETAILS: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/2608143-xJ0H3uihfOkg1gvf.webp",
    // Galleria a scorrimento orizzontale
    GALLERY_STRIP: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=406,h=270,fit=crop/YyvZLRjD7jCGlVVb/55-YNqBVJ4nVnU9qQVE.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=406,h=270,fit=crop/YyvZLRjD7jCGlVVb/44-A85ejpBglBIZy7Xy.webp",
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/31-Ju2raEanxZFB1fhs.webp",
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/56-h4y9SPQ6w9ZVgm0w.webp",
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/28-2Oi9mYfirs1sYmQq.webp",
    ]
  },

  // 💼 PAGINA AZIENDE
  CORPORATE: {
    HERO_FALLBACK: "", // Deprecated, use HERO_POSTERS
    // New Images
    SCENARIO_NETWORKING: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/27-YZ980PaoqXCVyZGl.jpg", // Crowd/Drinks dark
    SCENARIO_GALA: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/9-YBg7MqlQgKTVZZrP.jpg", // Stage lights
    SCENARIO_TEAM: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/8-YKb3w01exXCR6BLk.jpg", // Meeting/Group
  },

  // 🎉 PAGINA EVENTI PRIVATI
  EVENTS: {
    HERO_FALLBACK: "", // Deprecated, use HERO_POSTERS
    // Le 3 card inclinate "Tilt"
    CARD_EXCLUSIVE: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/37-1JtgOxXNjkDmpDkV.webp",
    CARD_NIGHTLIFE: "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/39-dfJhbX0w1g1fod9X.webp",
  },

  // 👤 PAGINA CHI SONO
  ABOUT: {
    STORY_ORIGINS: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=594,h=327,fit=crop,trim=48.4304932735426;0;143.67713004484304;0/YyvZLRjD7jCGlVVb/62-A85ejpBg8rfZRoV3.jpg",
    STORY_STREET: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=593,h=311,fit=crop/YyvZLRjD7jCGlVVb/63-YNqBVJ4nLBs1pXZO.jpg",
    STORY_TRAVEL: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=308,fit=crop/YyvZLRjD7jCGlVVb/5-YleWkE2a6ZSQ0Nxp.jpg",
    STORY_TODAY: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1018,h=573,fit=crop,trim=117.9203539823009;0;47.16814159292036;0/YyvZLRjD7jCGlVVb/dedb23a0-607a-4fa4-9ab2-272619cd6be7-m6LZ4XzEMEf1r9VN.JPG",
  },

  // 🖼️ PAGINA GALLERIA (Grid) - ORGANIZZATA PER CATEGORIE
  PORTFOLIO: {
    // Foto per Matrimoni (Tag: weddings)
    WEDDINGS: [
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/26-ctvBN4CORL93jdKp.webp", // Reazione Ospiti
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/28-2Oi9mYfirs1sYmQq.webp", // Intrattenimento Aperitivo
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/31-Ju2raEanxZFB1fhs.webp", // Magia con gli Sposi
    ],
    // Foto per Aziende (Tag: corporate)
    CORPORATE: [
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/27-YZ980PaoqXCVyZGl.jpg", // Show Aziendale
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/8-YKb3w01exXCR6BLk.jpg", // Mentalismo Stage
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/9-YBg7MqlQgKTVZZrP.jpg", // Gala Dinner
    ],
    // Foto per Eventi Privati (Tag: private)
    PRIVATE: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=596,fit=crop/YyvZLRjD7jCGlVVb/17-mnlWyNnoM3s3g0yX.jpg", // Close-up Card Magic
      "https://assets.zyrosite.com/YyvZLRjD7jCGlVVb/60-AMq1vny5Vvi6n8Lr.jpeg", // Street Magic
    ]
  }
};
