export const de = {
  nav: {
    about: 'Über mich',
    skills: 'Fähigkeiten',
    experience: 'Erfahrung',
    projects: 'Projekte',
    contact: 'Kontakt',
    downloadCv: 'CV herunterladen',
  },
  hero: {
    badge: 'Verfügbar für Möglichkeiten in Europa',
    subtitle: 'Entwicklung skalierbarer Webanwendungen mit starker Frontend-Architektur, Backend-Services und cloud-ready Lösungen.',
    viewProjects: 'Projekte ansehen',
    downloadCv: 'CV herunterladen',
    contactMe: 'Kontakt aufnehmen',
  },
  about: {
    label: 'Über mich',
    heading: 'Wer ich bin',
    paragraph:
      'Full Stack Entwickler mit über 7 Jahren Erfahrung in der Entwicklung unternehmensweiter Anwendungen. Meine Kernkompetenz ist Angular — skalierbare, komponentenbasierte Benutzeroberflächen — kombiniert mit solider Backend-Arbeit in Node.js und Java/Spring Boot sowie echten Cloud-Deployments auf AWS. Ich habe zu Produkten in den Bereichen Versicherungen, Gesundheitswesen, Industriesoftware (Siemens) und Versorgungsunternehmen beigetragen. Derzeit bei CGI in Lissabon, offen für neue Möglichkeiten in Europa.',
    tags: ['Remote verfügbar', 'Europa-basiert', 'Angular First', 'Full Stack', 'Enterprise Apps'],
    highlights: [
      { value: '7+', label: 'Jahre Erfahrung' },
      { value: '4', label: 'Unternehmen' },
      { value: 'Angular', label: 'Kernkompetenz' },
    ],
  },
  skills: {
    label: 'Technische Fähigkeiten',
    heading: 'Womit ich arbeite',
    subheading: 'Ein gezieltes Set an Technologien für End-to-End-Lösungen.',
    categories: ['Frontend', 'Backend', 'Datenbank', 'Cloud & DevOps', 'Testing & Qualität', 'Werkzeuge'],
  },
  experience: {
    label: 'Berufserfahrung',
    heading: 'Mein Werdegang',
    subheading: 'Über 7 Jahre Lieferung von Full-Stack-Lösungen in Venezuela und Portugal.',
    items: [
      {
        role: 'Full Stack Developer',
        highlights: [
          'Entwicklung eines Wasserservicezahlungs-Managementsystems für Castle Water',
          'Angular-komponentenbasiertes Frontend mit Fokus auf Wartbarkeit und responsive UX',
          'Entwicklung von RESTful-APIs und SQL Stored Procedures für CRUD-Operationen',
          'End-to-End Lieferung von Features entsprechend den Geschäftsanforderungen',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Groß angelegte Webanwendungen für Siemens entwickelt und modernisiert',
          'Angular 13–16 UI-Module mit Performance-Optimierung und Best Practices erstellt',
          'Angular-Versionsupgrades geleitet, Breaking Changes im Codebase behoben',
          'Node.js/Express-APIs erweitert und Drittanbieter-Services integriert',
          'Serverlose Funktionen mit AWS Lambda (Python), S3, CloudWatch, API Gateway entworfen und deployed',
          'Amazon OpenSearch implementiert: Index-Design, Mappings und Such-Feature-Integration',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Als Junior Java Consultant begonnen, dann Wechsel zu Full Stack auf einer Versicherungsplattform',
          'Frontend-Module mit Angular 8–12, TypeScript, SCSS und RxJS entwickelt',
          'RESTful-Microservices mit Java 8 und Spring Boot 2.x entwickelt',
          'MySQL-Queries optimiert und Unit-/Integrationstests mit JUnit und Mockito geschrieben',
          'Codequalität mit SonarQube in Entwicklungs- und Produktionsumgebungen sichergestellt',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Eine vollständige Klinik-Management-Plattform von Grund auf designed und entwickelt',
          'React 16–17 Frontend mit wiederverwendbaren Komponenten und State Management mit Hooks',
          'Node.js/Express Backend mit JWT-Auth, MongoDB und Aggregation Pipelines für Reporting',
          'Echtzeit-Laborwarteschlangen-Modul für Terminflusssteuerung',
          'Deployment auf AWS: EC2, Elastic Beanstalk, S3 und CI/CD mit CodePipeline',
        ],
      },
    ],
  },
  projects: {
    label: 'Projekte',
    heading: 'Was ich gebaut habe',
    subheading: 'Echte Anwendungen in Produktionsumgebungen geliefert.',
    status: { live: 'Live', inProgress: 'In Arbeit', comingSoon: 'Demnächst' },
    viewGithub: 'GitHub-Profil ansehen',
    moreProjects: 'Weitere Projekte auf GitHub',
    caseStudy: 'Fallstudie demnächst',
    liveDemo: 'Live Demo',
    demoAccess: 'Demo-Zugang',
    demoUser: 'Benutzer',
    demoPassword: 'Passwort',
    items: [
      {
        title: 'Billing Dashboard',
        description:
          'SaaS-Abrechnungssystem von Grund auf entwickelt. Angular 21 Frontend mit Signals und OnPush, Spring Boot 3 REST-API mit JWT-Auth, PostgreSQL + Flyway und CI/CD-Pipeline. Deployed auf Vercel + Railway. Demo-Account verfügbar.',
      },
      {
        title: 'DevTrack API',
        description:
          'RESTful Issue-Tracking-API entwickelt mit Node.js, Express und MongoDB. JWT-Authentifizierung, rollenbasierte Zugriffskontrolle, vollständiges CRUD für Projekte und Tickets sowie Test-Suite mit Jest und Supertest. Deployed auf Railway.',
      },
      {
        title: 'Lambda Search Service',
        description:
          'Serverloser Dokumenten-Suchdienst auf AWS. Python-Lambda-Funktionen hinter API Gateway indizieren in S3 hochgeladene Dateien in Amazon OpenSearch. Angular-Frontend für Echtzeit-Volltextsuche mit Filtern.',
      },
    ],
  },
  contact: {
    label: 'Kontakt',
    heading: 'Lass uns reden',
    subheading: 'Offen für Vollzeitstellen und Remote-Möglichkeiten in Europa. Lass uns verbinden.',
    cta: 'Bereit, zusammenzuarbeiten?',
    text: 'Ich bin in Carcavelos, Portugal ansässig und offen für Remote- oder Hybrid-Positionen in Europa. Ob eine Senior Angular-Rolle, eine Full-Stack-Position oder einfach ein Tech-Gespräch — melde dich.',
    sendEmail: 'E-Mail senden',
    downloadCv: 'CV herunterladen',
    labels: {
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Standort',
      locationValue: 'Carcavelos, Portugal · Remote-bereit',
    },
  },
  footer: { builtWith: 'Entwickelt mit Angular 21' },
};
