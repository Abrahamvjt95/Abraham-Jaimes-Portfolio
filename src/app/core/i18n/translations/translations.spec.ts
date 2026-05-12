import { translations } from './index';
import type { Language } from './index';

const langs: Language[] = ['en', 'es', 'pt', 'de', 'it'];

describe('Translation shape integrity', () => {
  describe('top-level structure', () => {
    it('all languages define the same top-level sections', () => {
      const expected = Object.keys(translations.en).sort();
      langs.forEach((lang) => {
        expect(Object.keys(translations[lang]).sort()).toEqual(expected);
      });
    });

    it('every language has non-empty nav, hero, about, skills, experience, projects, contact, footer', () => {
      const sections = ['nav', 'hero', 'about', 'skills', 'experience', 'projects', 'contact', 'footer'] as const;
      langs.forEach((lang) => {
        sections.forEach((section) => {
          expect(translations[lang][section]).toBeTruthy();
        });
      });
    });
  });

  describe('projects section', () => {
    it('all languages have the same number of project items as English', () => {
      const count = translations.en.projects.items.length;
      langs.forEach((lang) => {
        expect(translations[lang].projects.items).toHaveLength(count);
      });
    });

    it('all project items have non-empty title and description', () => {
      langs.forEach((lang) => {
        translations[lang].projects.items.forEach((item, i) => {
          expect(item.title, `${lang} project[${i}] title`).toBeTruthy();
          expect(item.description, `${lang} project[${i}] description`).toBeTruthy();
        });
      });
    });

    it('first project is Billing Dashboard in all languages', () => {
      langs.forEach((lang) => {
        expect(translations[lang].projects.items[0].title).toBe('Billing Dashboard');
      });
    });

    it('second project is DevTrack API in all languages', () => {
      langs.forEach((lang) => {
        expect(translations[lang].projects.items[1].title).toBe('DevTrack API');
      });
    });

    it('third project is Lambda Search Service in all languages', () => {
      langs.forEach((lang) => {
        expect(translations[lang].projects.items[2].title).toBe('Lambda Search Service');
      });
    });

    it('all languages define demoAccess, demoUser and demoPassword keys', () => {
      langs.forEach((lang) => {
        expect(translations[lang].projects.demoAccess, `${lang}.projects.demoAccess`).toBeTruthy();
        expect(translations[lang].projects.demoUser, `${lang}.projects.demoUser`).toBeTruthy();
        expect(translations[lang].projects.demoPassword, `${lang}.projects.demoPassword`).toBeTruthy();
      });
    });

    it('all languages define status labels for all three statuses', () => {
      langs.forEach((lang) => {
        const { status } = translations[lang].projects;
        expect(status.live, `${lang} status.live`).toBeTruthy();
        expect(status.inProgress, `${lang} status.inProgress`).toBeTruthy();
        expect(status.comingSoon, `${lang} status.comingSoon`).toBeTruthy();
      });
    });
  });

  describe('experience section', () => {
    it('all languages have the same number of experience items as English', () => {
      const count = translations.en.experience.items.length;
      langs.forEach((lang) => {
        expect(translations[lang].experience.items).toHaveLength(count);
      });
    });

    it('all experience items have a role and non-empty highlights', () => {
      langs.forEach((lang) => {
        translations[lang].experience.items.forEach((item, i) => {
          expect(item.role, `${lang} experience[${i}] role`).toBeTruthy();
          expect(item.highlights.length, `${lang} experience[${i}] highlights`).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('about section', () => {
    it('all languages have the same number of highlights', () => {
      const count = translations.en.about.highlights.length;
      langs.forEach((lang) => {
        expect(translations[lang].about.highlights).toHaveLength(count);
      });
    });

    it('all languages have 5 about tags', () => {
      langs.forEach((lang) => {
        expect(translations[lang].about.tags).toHaveLength(5);
      });
    });
  });

  describe('skills section', () => {
    it('all languages define 6 skill categories', () => {
      langs.forEach((lang) => {
        expect(translations[lang].skills.categories).toHaveLength(6);
      });
    });
  });
});
