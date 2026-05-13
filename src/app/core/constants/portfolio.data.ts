import { ContactInfo } from '../models/portfolio.models';

export const HERO_DATA = {
  name: 'Abraham Jaimes',
  title: 'Full Stack Developer',
  stack: 'Angular · Node.js · Java · AWS',
};

export const SKILLS_STRUCTURE = [
  { icon: '⬡', skills: ['Angular 8–21', 'TypeScript', 'RxJS', 'SCSS / SASS', 'HTML5', 'Bootstrap', 'Ionic', 'Responsive Design'] },
  { icon: '⚙', skills: ['Node.js', 'Express.js', 'Java 8', 'Spring Boot 2.x', 'RESTful APIs', 'JWT Auth', 'MVC Architecture'] },
  { icon: '◈', skills: ['MySQL', 'MongoDB', 'Mongoose ODM', 'SQL', 'Stored Procedures', 'Aggregation Pipelines', 'Query Optimization'] },
  { icon: '☁', skills: ['AWS Lambda (Python)', 'AWS S3', 'AWS EC2', 'API Gateway', 'CloudWatch', 'OpenSearch', 'CodePipeline', 'Serverless'] },
  { icon: '✓', skills: ['JUnit 4/5', 'Mockito', 'Jest', 'Supertest', 'Postman', 'SonarQube'] },
  { icon: '◎', skills: ['Git', 'GitHub', 'GitLab', 'Agile / Scrum', 'IntelliJ IDEA', 'VS Code', 'WebStorm'] },
];

export const EXPERIENCE_STRUCTURE: { company: string; period: string; location: string; stack: string[]; current?: boolean }[] = [
  {
    company: 'CGI',
    period: 'Aug 2025 – Apr 2026',
    location: 'Lisbon, Portugal',
    stack: ['Angular', 'TypeScript', 'SQL', 'RESTful APIs'],
  },
  {
    company: 'Growin · Siemens',
    period: 'Dec 2022 – Jul 2025',
    location: 'Lisbon, Portugal',
    stack: ['Angular 13–16', 'TypeScript', 'RxJS', 'Node.js', 'AWS Lambda', 'OpenSearch', 'Jest'],
  },
  {
    company: 'TCS',
    period: 'Oct 2018 – Dec 2022',
    location: 'Caracas, Venezuela',
    stack: ['Angular 8–12', 'Java 8', 'Spring Boot 2.x', 'MySQL', 'JUnit', 'SonarQube'],
  },
  {
    company: 'Clínica Ana Cecilia',
    period: 'Jan 2019 – Jun 2022',
    location: 'Caracas, Venezuela',
    stack: ['React 16–17', 'Node.js', 'MongoDB', 'AWS EC2', 'Elastic Beanstalk', 'Jest'],
  },
];

export const PROJECTS_STRUCTURE = [
  {
    stack: ['Angular 21', 'Spring Boot 3', 'PostgreSQL', 'JWT', 'Railway', 'Vercel'],
    status: 'live' as const,
    featured: true,
    demoUrl: 'https://billing-dashboard-frontend-zeta.vercel.app',
    githubUrl: 'https://github.com/Abrahamvjt95/billing-dashboard-frontend',
    demoCredentials: { user: 'demo@billflow.com', password: 'demo1234' },
  },
  {
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Jest', 'Supertest', 'Railway'],
    status: 'in-progress' as const,
  },
  {
    stack: ['Angular 21', 'Python', 'AWS Lambda', 'OpenSearch', 'S3', 'API Gateway', 'SAM', 'EventBridge'],
    status: 'live' as const,
    featured: true,
    demoUrl: 'https://joblens-frontend-psi.vercel.app',
    githubUrl: 'https://github.com/Abrahamvjt95/joblens-api',
  },
];

export const CONTACT_DATA: ContactInfo = {
  email: 'abrahamjaimesdev@gmail.com',
  github: 'https://github.com/Abrahamvjt95',
  linkedin: 'https://www.linkedin.com/in/abrahamjaimesdev/',
  location: 'Carcavelos, Portugal',
};
