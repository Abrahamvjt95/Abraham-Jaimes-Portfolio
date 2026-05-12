export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  status: 'live' | 'in-progress' | 'coming-soon';
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
