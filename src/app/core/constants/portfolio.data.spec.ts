import {
  CONTACT_DATA,
  HERO_DATA,
  PROJECTS_STRUCTURE,
  SKILLS_STRUCTURE,
  EXPERIENCE_STRUCTURE,
} from './portfolio.data';
import { translations } from '../i18n/translations/index';

describe('Portfolio data integrity', () => {
  describe('HERO_DATA', () => {
    it('has a non-empty name', () => {
      expect(HERO_DATA.name).toBeTruthy();
    });

    it('has a non-empty title', () => {
      expect(HERO_DATA.title).toBeTruthy();
    });

    it('has a non-empty stack string', () => {
      expect(HERO_DATA.stack).toBeTruthy();
    });
  });

  describe('CONTACT_DATA', () => {
    it('has a valid email format', () => {
      expect(CONTACT_DATA.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('GitHub URL points to the correct profile', () => {
      expect(CONTACT_DATA.github).toBe('https://github.com/Abrahamvjt95');
    });

    it('LinkedIn URL points to the correct profile', () => {
      expect(CONTACT_DATA.linkedin).toContain('abrahamjaimesdev');
    });

    it('GitHub URL is reachable format (https)', () => {
      expect(CONTACT_DATA.github).toMatch(/^https:\/\/github\.com\//);
    });

    it('LinkedIn URL is reachable format (https)', () => {
      expect(CONTACT_DATA.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
    });

    it('has a non-empty location', () => {
      expect(CONTACT_DATA.location).toBeTruthy();
    });
  });

  describe('PROJECTS_STRUCTURE', () => {
    it('count matches the number of translation items', () => {
      expect(PROJECTS_STRUCTURE.length).toBe(translations.en.projects.items.length);
    });

    it('every project has a non-empty stack', () => {
      PROJECTS_STRUCTURE.forEach((p, i) => {
        expect(p.stack.length, `project[${i}] stack`).toBeGreaterThan(0);
      });
    });

    it('every project has a valid status', () => {
      const validStatuses = ['live', 'in-progress', 'coming-soon'];
      PROJECTS_STRUCTURE.forEach((p, i) => {
        expect(validStatuses, `project[${i}] status "${p.status}"`).toContain(p.status);
      });
    });

    it('first project is live and has a demo URL', () => {
      expect(PROJECTS_STRUCTURE[0].status).toBe('live');
      expect(PROJECTS_STRUCTURE[0].demoUrl).toBeTruthy();
    });

    it('first project has a GitHub URL', () => {
      expect(PROJECTS_STRUCTURE[0].githubUrl).toMatch(/^https:\/\/github\.com\//);
    });

    it('first project has demo credentials', () => {
      const creds = PROJECTS_STRUCTURE[0].demoCredentials;
      expect(creds).toBeDefined();
      expect(creds?.user).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      expect(creds?.password).toBeTruthy();
    });

    it('first project is marked as featured', () => {
      expect(PROJECTS_STRUCTURE[0].featured).toBe(true);
    });

    it('in-progress projects do not have a demo URL', () => {
      PROJECTS_STRUCTURE.filter((p) => p.status === 'in-progress').forEach((p, i) => {
        expect((p as { demoUrl?: string }).demoUrl, `in-progress project[${i}] should not have demoUrl`).toBeUndefined();
      });
    });
  });

  describe('SKILLS_STRUCTURE', () => {
    it('has exactly 6 skill categories', () => {
      expect(SKILLS_STRUCTURE).toHaveLength(6);
    });

    it('each category has a non-empty icon', () => {
      SKILLS_STRUCTURE.forEach((cat, i) => {
        expect(cat.icon, `category[${i}] icon`).toBeTruthy();
      });
    });

    it('each category has at least one skill', () => {
      SKILLS_STRUCTURE.forEach((cat, i) => {
        expect(cat.skills.length, `category[${i}] skills`).toBeGreaterThan(0);
      });
    });

    it('count matches translation category labels', () => {
      expect(SKILLS_STRUCTURE.length).toBe(translations.en.skills.categories.length);
    });
  });

  describe('EXPERIENCE_STRUCTURE', () => {
    it('has exactly 4 companies', () => {
      expect(EXPERIENCE_STRUCTURE).toHaveLength(4);
    });

    it('every entry has company, period and location', () => {
      EXPERIENCE_STRUCTURE.forEach((exp, i) => {
        expect(exp.company, `exp[${i}] company`).toBeTruthy();
        expect(exp.period, `exp[${i}] period`).toBeTruthy();
        expect(exp.location, `exp[${i}] location`).toBeTruthy();
      });
    });

    it('first entry is the current job', () => {
      expect(EXPERIENCE_STRUCTURE[0].current).toBe(true);
    });

    it('only first entry has the current flag', () => {
      EXPERIENCE_STRUCTURE.slice(1).forEach((exp, i) => {
        expect((exp as { current?: boolean }).current, `exp[${i + 1}] should not be current`).toBeFalsy();
      });
    });

    it('count matches translation experience items', () => {
      expect(EXPERIENCE_STRUCTURE.length).toBe(translations.en.experience.items.length);
    });

    it('every entry has at least one tech in the stack', () => {
      EXPERIENCE_STRUCTURE.forEach((exp, i) => {
        expect(exp.stack.length, `exp[${i}] stack`).toBeGreaterThan(0);
      });
    });
  });
});
