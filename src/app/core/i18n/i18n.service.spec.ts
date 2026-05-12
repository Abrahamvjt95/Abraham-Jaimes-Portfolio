import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  afterEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  function createService(): I18nService {
    TestBed.configureTestingModule({});
    return TestBed.inject(I18nService);
  }

  describe('language detection', () => {
    it('defaults to English when localStorage is empty', () => {
      const service = createService();
      expect(service.currentLang()).toBe('en');
    });

    it('restores saved language from localStorage', () => {
      localStorage.setItem('portfolio-lang', 'es');
      const service = createService();
      expect(service.currentLang()).toBe('es');
    });

    it('ignores invalid language in localStorage', () => {
      localStorage.setItem('portfolio-lang', 'xx');
      const service = createService();
      expect(service.currentLang()).toBe('en');
    });
  });

  describe('setLang', () => {
    it('updates currentLang signal', () => {
      const service = createService();
      service.setLang('pt');
      expect(service.currentLang()).toBe('pt');
    });

    it('persists language to localStorage', () => {
      const service = createService();
      service.setLang('de');
      expect(localStorage.getItem('portfolio-lang')).toBe('de');
    });

    it('updates translations reactively', () => {
      const service = createService();
      service.setLang('en');
      expect(service.t().nav.about).toBe('About');
      service.setLang('es');
      expect(service.t().nav.about).toBe('Sobre mí');
    });
  });

  describe('available languages', () => {
    it('exposes exactly 5 languages', () => {
      const service = createService();
      expect(service.available).toHaveLength(5);
    });

    it('includes all expected language codes', () => {
      const service = createService();
      const codes = service.available.map((l) => l.code);
      expect(codes).toContain('en');
      expect(codes).toContain('es');
      expect(codes).toContain('pt');
      expect(codes).toContain('it');
      expect(codes).toContain('de');
    });

    it('each language has label, name and flag', () => {
      const service = createService();
      service.available.forEach((lang) => {
        expect(lang.label).toBeTruthy();
        expect(lang.name).toBeTruthy();
        expect(lang.flag).toBeTruthy();
      });
    });
  });

  describe('currentLangMeta', () => {
    it('returns metadata matching the active language', () => {
      const service = createService();
      service.setLang('de');
      const meta = service.currentLangMeta();
      expect(meta.code).toBe('de');
      expect(meta.label).toBe('DE');
    });

    it('updates when language changes', () => {
      const service = createService();
      service.setLang('it');
      expect(service.currentLangMeta().code).toBe('it');
      service.setLang('pt');
      expect(service.currentLangMeta().code).toBe('pt');
    });
  });
});
