export const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    downloadCv: 'Download CV',
  },
  hero: {
    badge: 'Available for opportunities in Europe',
    subtitle: 'Building scalable web applications with strong frontend architecture, backend services, and cloud-ready solutions.',
    viewProjects: 'View Projects',
    downloadCv: 'Download CV',
    contactMe: 'Contact Me',
  },
  about: {
    label: 'About Me',
    heading: 'Who I Am',
    paragraph:
      "Full Stack Developer with 7+ years of experience building enterprise-grade applications across the full stack. My core expertise is Angular — delivering scalable, component-driven UIs — combined with solid backend work in Node.js and Java/Spring Boot, and real cloud deployments on AWS. I've contributed to products in insurance, healthcare, industrial software (Siemens), and utilities. Currently at CGI in Lisbon, open to new opportunities across Europe.",
    tags: ['Open to Remote', 'Europe-based', 'Angular First', 'Full Stack', 'Enterprise Apps'],
    highlights: [
      { value: '7+', label: 'Years of Experience' },
      { value: '4', label: 'Companies' },
      { value: 'Angular', label: 'Core Expertise' },
    ],
  },
  skills: {
    label: 'Technical Skills',
    heading: 'What I Work With',
    subheading: 'A focused set of technologies I use to deliver end-to-end solutions.',
    categories: ['Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Testing & Quality', 'Tools & Methods'],
  },
  experience: {
    label: 'Work Experience',
    heading: 'My Journey',
    subheading: '7+ years delivering full-stack solutions across Venezuela and Portugal.',
    items: [
      {
        role: 'Full Stack Developer',
        highlights: [
          'Building a water service payment management system for Castle Water',
          'Angular component-based frontend focused on maintainability and responsive UX',
          'RESTful API development and SQL stored procedures for CRUD operations',
          'End-to-end delivery of features aligned with business requirements',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Developed and modernized large-scale web applications for Siemens',
          'Built Angular 13–16 UI modules with performance optimization and best practices',
          'Led Angular version upgrades, resolving breaking changes across the codebase',
          'Extended Node.js/Express APIs and integrated third-party services',
          'Designed and deployed serverless functions with AWS Lambda (Python), S3, CloudWatch, API Gateway',
          'Implemented Amazon OpenSearch: index design, mappings, and search feature integration',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Started as Junior Java Consultant, transitioned to Full Stack on an insurance platform',
          'Built frontend modules with Angular 8–12, TypeScript, SCSS, and RxJS',
          'Developed RESTful microservices with Java 8 and Spring Boot 2.x',
          'Optimized MySQL queries and wrote unit/integration tests with JUnit and Mockito',
          'Ensured code quality with SonarQube across development and production environments',
        ],
      },
      {
        role: 'Full Stack Developer',
        highlights: [
          'Designed and built a complete clinic management platform from scratch',
          'React 16–17 frontend with reusable components and state management via Hooks',
          'Node.js/Express backend with JWT auth, MongoDB, and aggregation pipelines for reporting',
          'Real-time lab queue management module for appointment flow control',
          'Deployed to AWS: EC2, Elastic Beanstalk, S3, and CI/CD via CodePipeline',
        ],
      },
    ],
  },
  projects: {
    label: 'Projects',
    heading: "What I've Built",
    subheading: 'Real applications delivered in production environments.',
    status: { live: 'Live', inProgress: 'In Progress', comingSoon: 'Coming Soon' },
    viewGithub: 'View GitHub Profile',
    moreProjects: 'More projects on GitHub',
    caseStudy: 'Case study coming soon',
    liveDemo: 'Live Demo',
    items: [
      {
        title: 'Billing Dashboard',
        description:
          'Full-stack SaaS billing system built from scratch. Angular 21 frontend with Signals and OnPush, Spring Boot 3 REST API with JWT auth, PostgreSQL + Flyway, and CI/CD pipeline. Deployed on Vercel + Railway. Demo account available.',
      },
      {
        title: 'Clinic Management Platform',
        description:
          'Full-stack web platform built from scratch for Clínica Ana Cecilia. Accounting control, medical appointment scheduling, and a real-time lab queue system with AWS deployment.',
      },
      {
        title: 'Enterprise Web Modernization',
        description:
          'Large-scale web application modernization for Siemens. Angular 13–16 frontend, AWS serverless backend with Lambda and OpenSearch integration, version upgrades and performance optimization.',
      },
    ],
  },
  contact: {
    label: 'Get In Touch',
    heading: "Let's Talk",
    subheading: "Open to full-time roles and remote opportunities across Europe. Let's connect.",
    cta: 'Ready to work together?',
    text: "I'm based in Carcavelos, Portugal, and open to remote or hybrid roles in Europe. Whether it's a senior Angular role, a full-stack position, or just a tech conversation — reach out.",
    sendEmail: 'Send an Email',
    downloadCv: 'Download CV',
    labels: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Location',
      locationValue: 'Carcavelos, Portugal · Remote-ready',
    },
  },
  footer: { builtWith: 'Built with Angular 21' },
};
