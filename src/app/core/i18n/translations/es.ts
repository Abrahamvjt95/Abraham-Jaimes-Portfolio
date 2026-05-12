export const es = {
  nav: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    downloadCv: 'Descargar CV',
  },
  hero: {
    badge: 'Disponible para oportunidades en Europa',
    subtitle: 'Construyendo aplicaciones web escalables con arquitectura frontend sólida, servicios backend y soluciones listas para la nube.',
    viewProjects: 'Ver Proyectos',
    downloadCv: 'Descargar CV',
    contactMe: 'Contáctame',
  },
  about: {
    label: 'Sobre mí',
    heading: 'Quién soy',
    paragraph:
      'Desarrollador Full Stack con más de 7 años de experiencia construyendo aplicaciones empresariales en todo el stack. Mi especialidad principal es Angular — entregando interfaces escalables y basadas en componentes — combinada con sólido trabajo de backend en Node.js y Java/Spring Boot, y despliegues reales en AWS. He contribuido a productos en seguros, salud, software industrial (Siemens) y utilities. Actualmente en CGI en Lisboa, abierto a nuevas oportunidades en Europa.',
    tags: ['Disponible Remoto', 'Basado en Europa', 'Angular First', 'Full Stack', 'Apps Enterprise'],
    highlights: [
      { value: '7+', label: 'Años de Experiencia' },
      { value: '4', label: 'Empresas' },
      { value: 'Angular', label: 'Especialización' },
    ],
  },
  skills: {
    label: 'Habilidades Técnicas',
    heading: 'Con qué trabajo',
    subheading: 'Un conjunto enfocado de tecnologías que uso para entregar soluciones end-to-end.',
    categories: ['Frontend', 'Backend', 'Base de Datos', 'Cloud & DevOps', 'Testing & Calidad', 'Herramientas'],
  },
  experience: {
    label: 'Experiencia Laboral',
    heading: 'Mi Trayectoria',
    subheading: 'Más de 7 años entregando soluciones full-stack en Venezuela y Portugal.',
    items: [
      {
        role: 'Full Stack Developer',
        highlights: [
          'Desarrollando un sistema de gestión de pagos de servicios de agua para Castle Water',
          'Frontend Angular basado en componentes con foco en mantenibilidad y UX responsive',
          'Desarrollo de APIs RESTful y procedimientos almacenados SQL para operaciones CRUD',
          'Entrega end-to-end de funcionalidades alineadas con los requisitos del negocio',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Desarrollé y modernizé aplicaciones web de gran escala para Siemens',
          'Construí módulos UI con Angular 13–16, optimización de rendimiento y buenas prácticas',
          'Lideré actualizaciones de versiones de Angular, resolviendo breaking changes en el codebase',
          'Extendí APIs Node.js/Express e integré servicios de terceros',
          'Diseñé e implementé funciones serverless con AWS Lambda (Python), S3, CloudWatch, API Gateway',
          'Implementé Amazon OpenSearch: diseño de índices, mappings e integración de búsquedas',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Comencé como Consultor Java Junior, evolucioné a Full Stack en una plataforma de seguros',
          'Construí módulos frontend con Angular 8–12, TypeScript, SCSS y RxJS',
          'Desarrollé microservicios RESTful con Java 8 y Spring Boot 2.x',
          'Optimicé consultas MySQL y escribí pruebas unitarias/integración con JUnit y Mockito',
          'Aseguré la calidad del código con SonarQube en entornos de desarrollo y producción',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Diseñé y construí una plataforma completa de gestión clínica desde cero',
          'Frontend React 16–17 con componentes reutilizables y gestión de estado con Hooks',
          'Backend Node.js/Express con autenticación JWT, MongoDB y pipelines de agregación para reportes',
          'Módulo de gestión de colas de laboratorio en tiempo real para control de flujo de citas',
          'Desplegado en AWS: EC2, Elastic Beanstalk, S3 y CI/CD con CodePipeline',
        ],
      },
    ],
  },
  projects: {
    label: 'Proyectos',
    heading: 'Lo que he construido',
    subheading: 'Aplicaciones reales entregadas en entornos de producción.',
    status: { live: 'En producción', inProgress: 'En Progreso', comingSoon: 'Próximamente' },
    viewGithub: 'Ver Perfil de GitHub',
    moreProjects: 'Más proyectos en GitHub',
    caseStudy: 'Caso de estudio próximamente',
    liveDemo: 'Demo en vivo',
    demoAccess: 'Acceso demo',
    demoUser: 'Usuario',
    demoPassword: 'Contraseña',
    items: [
      {
        title: 'Billing Dashboard',
        description:
          'Sistema de facturación SaaS construido desde cero. Frontend Angular 21 con Signals y OnPush, API REST Spring Boot 3 con auth JWT, PostgreSQL + Flyway y pipeline CI/CD. Desplegado en Vercel + Railway. Cuenta demo disponible.',
      },
      {
        title: 'DevTrack API',
        description:
          'API REST de seguimiento de incidencias construida con Node.js, Express y MongoDB. Autenticación JWT, control de acceso por roles, CRUD completo para proyectos y tickets, y suite de tests con Jest y Supertest. Desplegada en Railway.',
      },
      {
        title: 'Lambda Search Service',
        description:
          'Servicio de búsqueda de documentos serverless en AWS. Funciones Lambda en Python detrás de API Gateway indexan archivos subidos a S3 en Amazon OpenSearch. Frontend Angular para búsqueda full-text en tiempo real con filtros.',
      },
    ],
  },
  contact: {
    label: 'Contáctame',
    heading: 'Hablemos',
    subheading: 'Abierto a roles a tiempo completo y oportunidades remotas en Europa. Conectemos.',
    cta: '¿Listos para trabajar juntos?',
    text: 'Estoy basado en Carcavelos, Portugal, y abierto a roles remotos o híbridos en Europa. Ya sea un rol senior en Angular, una posición full-stack o simplemente una conversación técnica — contáctame.',
    sendEmail: 'Enviar Email',
    downloadCv: 'Descargar CV',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Ubicación',
      locationValue: 'Carcavelos, Portugal · Disponible remoto',
    },
  },
  footer: { builtWith: 'Construido con Angular 21' },
};
