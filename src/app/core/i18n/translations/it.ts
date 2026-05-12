export const it = {
  nav: {
    about: 'Chi sono',
    skills: 'Competenze',
    experience: 'Esperienza',
    projects: 'Progetti',
    contact: 'Contatti',
    downloadCv: 'Scarica CV',
  },
  hero: {
    badge: 'Disponibile per opportunità in Europa',
    subtitle: 'Sviluppo applicazioni web scalabili con architettura frontend solida, servizi backend e soluzioni cloud-ready.',
    viewProjects: 'Vedi Progetti',
    downloadCv: 'Scarica CV',
    contactMe: 'Contattami',
  },
  about: {
    label: 'Chi sono',
    heading: 'La mia storia',
    paragraph:
      'Sviluppatore Full Stack con oltre 7 anni di esperienza nella costruzione di applicazioni enterprise su tutto lo stack. La mia competenza principale è Angular — sviluppando interfacce scalabili e basate su componenti — combinata con solido lavoro backend in Node.js e Java/Spring Boot, e deployment reali su AWS. Ho contribuito a prodotti nel settore assicurativo, sanitario, software industriale (Siemens) e utilities. Attualmente disponibile e aperto a nuove opportunità a tempo pieno in Europa. Parlo spagnolo come madrelingua, oltre a inglese (C1), portoghese (B1) e italiano (B1).',
    tags: ['Disponibile Remoto', 'Basato in Europa', 'Angular First', 'Full Stack', 'App Enterprise'],
    highlights: [
      { value: '7+', label: 'Anni di Esperienza' },
      { value: '4', label: 'Aziende' },
      { value: 'Angular', label: 'Competenza Principale' },
    ],
  },
  skills: {
    label: 'Competenze Tecniche',
    heading: 'Con cosa lavoro',
    subheading: 'Un insieme mirato di tecnologie che uso per fornire soluzioni end-to-end.',
    categories: ['Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Testing & Qualità', 'Strumenti'],
  },
  experience: {
    label: 'Esperienza Lavorativa',
    heading: 'Il mio percorso',
    subheading: 'Oltre 7 anni a consegnare soluzioni full-stack tra Venezuela e Portogallo.',
    items: [
      {
        role: 'Full Stack Developer',
        highlights: [
          'Sviluppo di un sistema di gestione dei pagamenti per servizi idrici per Castle Water',
          'Frontend Angular basato su componenti con focus su manutenibilità e UX responsive',
          'Sviluppo di API RESTful e stored procedure SQL per operazioni CRUD',
          'Consegna end-to-end di funzionalità in linea con i requisiti di business',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Ho sviluppato e modernizzato applicazioni web su larga scala per Siemens',
          'Costruito moduli UI con Angular 13–16, ottimizzazione delle performance e best practice',
          'Guidato aggiornamenti di versione Angular, risolvendo breaking changes nel codebase',
          'Esteso API Node.js/Express e integrato servizi di terze parti',
          'Progettato e distribuito funzioni serverless con AWS Lambda (Python), S3, CloudWatch, API Gateway',
          'Implementato Amazon OpenSearch: design degli indici, mappings e integrazione della ricerca',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Iniziato come Junior Java Consultant, poi passato a Full Stack su una piattaforma assicurativa',
          'Costruito moduli frontend con Angular 8–12, TypeScript, SCSS e RxJS',
          'Sviluppato microservizi RESTful con Java 8 e Spring Boot 2.x',
          'Ottimizzato query MySQL e scritto test unitari/integrazione con JUnit e Mockito',
          'Garantita la qualità del codice con SonarQube in ambienti di sviluppo e produzione',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Progettato e costruito da zero una piattaforma completa di gestione clinica',
          'Frontend React 16–17 con componenti riutilizzabili e gestione dello stato con Hooks',
          'Backend Node.js/Express con autenticazione JWT, MongoDB e aggregation pipeline per report',
          'Modulo di gestione code in tempo reale per il controllo del flusso degli appuntamenti',
          'Deploy su AWS: EC2, Elastic Beanstalk, S3 e CI/CD con CodePipeline',
        ],
      },
    ],
  },
  projects: {
    label: 'Progetti',
    heading: 'Cosa ho costruito',
    subheading: 'Applicazioni reali consegnate in ambienti di produzione.',
    status: { live: 'In produzione', inProgress: 'In Corso', comingSoon: 'Prossimamente' },
    viewGithub: 'Vedi Profilo GitHub',
    moreProjects: 'Altri progetti su GitHub',
    caseStudy: 'Case study in arrivo',
    liveDemo: 'Demo Live',
    demoAccess: 'Accesso demo',
    demoUser: 'Utente',
    demoPassword: 'Password',
    items: [
      {
        title: 'Billing Dashboard',
        description:
          'Sistema di fatturazione SaaS costruito da zero. Frontend Angular 21 con Signals e OnPush, API REST Spring Boot 3 con autenticazione JWT, PostgreSQL + Flyway e pipeline CI/CD. Deployed su Vercel + Railway. Account demo disponibile.',
      },
      {
        title: 'DevTrack API',
        description:
          'API REST per il tracciamento di issue sviluppata con Node.js, Express e MongoDB. Autenticazione JWT, controllo degli accessi basato su ruoli, CRUD completo per progetti e ticket e suite di test con Jest e Supertest. Deployed su Railway.',
      },
      {
        title: 'Lambda Search Service',
        description:
          'Servizio di ricerca documenti serverless su AWS. Funzioni Lambda in Python dietro API Gateway indicizzano file caricati su S3 in Amazon OpenSearch. Frontend Angular per ricerca full-text in tempo reale con filtri.',
      },
    ],
  },
  contact: {
    label: 'Contattami',
    heading: 'Parliamoci',
    subheading: 'Disponibile per ruoli full-time e opportunità remote in Europa. Connettiamoci.',
    cta: 'Pronti a lavorare insieme?',
    text: "Sono basato a Carcavelos, Portogallo, e disponibile per ruoli remoti o ibridi in Europa. Che si tratti di un ruolo senior in Angular, una posizione full-stack o semplicemente una conversazione tecnica — contattami.",
    sendEmail: 'Invia Email',
    downloadCv: 'Scarica CV',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Posizione',
      locationValue: 'Carcavelos, Portogallo · Disponibile da remoto',
      languages: 'Lingue',
    },
    languages: [
      { name: 'Spagnolo', level: 'Madrelingua' },
      { name: 'Inglese', level: 'C1' },
      { name: 'Portoghese', level: 'B1' },
      { name: 'Italiano', level: 'B1' },
    ],
  },
  footer: { builtWith: 'Sviluppato con Angular 21' },
};
