export const pt = {
  nav: {
    about: 'Sobre mim',
    skills: 'Competências',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contacto',
    downloadCv: 'Descarregar CV',
  },
  hero: {
    badge: 'Disponível para oportunidades na Europa',
    subtitle: 'A construir aplicações web escaláveis com arquitetura frontend sólida, serviços backend e soluções cloud-ready.',
    viewProjects: 'Ver Projetos',
    downloadCv: 'Descarregar CV',
    contactMe: 'Contactar',
  },
  about: {
    label: 'Sobre mim',
    heading: 'Quem sou',
    paragraph:
      'Desenvolvedor Full Stack com mais de 7 anos de experiência a construir aplicações empresariais em todo o stack. A minha especialidade principal é Angular — entregando interfaces escaláveis e baseadas em componentes — combinada com sólido trabalho de backend em Node.js e Java/Spring Boot, e deploys reais em AWS. Contribuí para produtos em seguros, saúde, software industrial (Siemens) e utilities. Atualmente na CGI em Lisboa, disponível para novas oportunidades na Europa.',
    tags: ['Disponível Remoto', 'Baseado na Europa', 'Angular First', 'Full Stack', 'Apps Enterprise'],
    highlights: [
      { value: '7+', label: 'Anos de Experiência' },
      { value: '4', label: 'Empresas' },
      { value: 'Angular', label: 'Especialização' },
    ],
  },
  skills: {
    label: 'Competências Técnicas',
    heading: 'Com que trabalho',
    subheading: 'Um conjunto focado de tecnologias que uso para entregar soluções end-to-end.',
    categories: ['Frontend', 'Backend', 'Base de Dados', 'Cloud & DevOps', 'Testes & Qualidade', 'Ferramentas'],
  },
  experience: {
    label: 'Experiência Profissional',
    heading: 'O meu percurso',
    subheading: 'Mais de 7 anos a entregar soluções full-stack em Venezuela e Portugal.',
    items: [
      {
        role: 'Full Stack Developer',
        highlights: [
          'Desenvolvimento de um sistema de gestão de pagamentos de serviços de água para Castle Water',
          'Frontend Angular baseado em componentes com foco em manutenibilidade e UX responsiva',
          'Desenvolvimento de APIs RESTful e stored procedures SQL para operações CRUD',
          'Entrega end-to-end de funcionalidades alinhadas com os requisitos de negócio',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Desenvolvi e modernizei aplicações web de grande escala para a Siemens',
          'Construí módulos UI com Angular 13–16, otimização de performance e boas práticas',
          'Liderei upgrades de versão do Angular, resolvendo breaking changes no codebase',
          'Estendi APIs Node.js/Express e integrei serviços de terceiros',
          'Concebi e implementei funções serverless com AWS Lambda (Python), S3, CloudWatch, API Gateway',
          'Implementei Amazon OpenSearch: design de índices, mappings e integração de pesquisa',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Comecei como Consultor Java Júnior, evoluí para Full Stack numa plataforma de seguros',
          'Construí módulos frontend com Angular 8–12, TypeScript, SCSS e RxJS',
          'Desenvolvi microsserviços RESTful com Java 8 e Spring Boot 2.x',
          'Otimizei queries MySQL e escrevi testes unitários/integração com JUnit e Mockito',
          'Garantí qualidade de código com SonarQube em ambientes de desenvolvimento e produção',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Concebi e construí uma plataforma completa de gestão clínica de raiz',
          'Frontend React 16–17 com componentes reutilizáveis e gestão de estado com Hooks',
          'Backend Node.js/Express com autenticação JWT, MongoDB e aggregation pipelines para relatórios',
          'Módulo de gestão de filas de laboratório em tempo real para controlo de fluxo de consultas',
          'Deploy em AWS: EC2, Elastic Beanstalk, S3 e CI/CD com CodePipeline',
        ],
      },
    ],
  },
  projects: {
    label: 'Projetos',
    heading: 'O que construí',
    subheading: 'Aplicações reais entregues em ambientes de produção.',
    status: { live: 'Em produção', inProgress: 'Em Progresso', comingSoon: 'Em Breve' },
    viewGithub: 'Ver Perfil GitHub',
    moreProjects: 'Mais projetos no GitHub',
    caseStudy: 'Caso de estudo em breve',
    liveDemo: 'Demo ao Vivo',
    demoAccess: 'Acesso demo',
    demoUser: 'Utilizador',
    demoPassword: 'Palavra-passe',
    items: [
      {
        title: 'Billing Dashboard',
        description:
          'Sistema de faturação SaaS construído de raiz. Frontend Angular 21 com Signals e OnPush, API REST Spring Boot 3 com autenticação JWT, PostgreSQL + Flyway e pipeline CI/CD. Deployed no Vercel + Railway. Conta demo disponível.',
      },
      {
        title: 'DevTrack API',
        description:
          'API REST de rastreamento de issues construída com Node.js, Express e MongoDB. Autenticação JWT, controlo de acesso por roles, CRUD completo para projetos e tickets, e suite de testes com Jest e Supertest. Deployed no Railway.',
      },
      {
        title: 'Lambda Search Service',
        description:
          'Serviço de pesquisa de documentos serverless na AWS. Funções Lambda em Python por detrás do API Gateway indexam ficheiros enviados para S3 no Amazon OpenSearch. Frontend Angular para pesquisa full-text em tempo real com filtros.',
      },
    ],
  },
  contact: {
    label: 'Contacto',
    heading: 'Vamos conversar',
    subheading: 'Disponível para funções a tempo inteiro e oportunidades remotas na Europa. Vamos conectar.',
    cta: 'Prontos para trabalhar juntos?',
    text: 'Estou baseado em Carcavelos, Portugal, e disponível para funções remotas ou híbridas na Europa. Seja um cargo sénior em Angular, uma posição full-stack ou apenas uma conversa técnica — entre em contacto.',
    sendEmail: 'Enviar Email',
    downloadCv: 'Descarregar CV',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Localização',
      locationValue: 'Carcavelos, Portugal · Disponível remotamente',
    },
  },
  footer: { builtWith: 'Desenvolvido com Angular 21' },
};
