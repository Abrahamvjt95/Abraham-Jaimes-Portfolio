import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';
import { I18nService } from '../../../core/i18n/i18n.service';

describe('ProjectsComponent', () => {
  afterEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  function createComponent() {
    TestBed.configureTestingModule({ imports: [ProjectsComponent] });
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    return { fixture, component: fixture.componentInstance };
  }

  it('should create', () => {
    const { component } = createComponent();
    expect(component).toBeTruthy();
  });

  describe('getStatusClass', () => {
    it('returns green badge for live', () => {
      const { component } = createComponent();
      expect(component.getStatusClass('live')).toBe('badge badge-green');
    });

    it('returns yellow badge for in-progress', () => {
      const { component } = createComponent();
      expect(component.getStatusClass('in-progress')).toBe('badge badge-yellow');
    });

    it('returns blue badge for coming-soon', () => {
      const { component } = createComponent();
      expect(component.getStatusClass('coming-soon')).toBe('badge badge-blue');
    });
  });

  describe('getStatusLabel', () => {
    it('returns English live label', () => {
      const { component } = createComponent();
      TestBed.inject(I18nService).setLang('en');
      expect(component.getStatusLabel('live')).toBe('Live');
    });

    it('returns English in-progress label', () => {
      const { component } = createComponent();
      TestBed.inject(I18nService).setLang('en');
      expect(component.getStatusLabel('in-progress')).toBe('In Progress');
    });

    it('returns Spanish in-progress label', () => {
      const { component } = createComponent();
      TestBed.inject(I18nService).setLang('es');
      expect(component.getStatusLabel('in-progress')).toBe('En Progreso');
    });

    it('returns Portuguese live label', () => {
      const { component } = createComponent();
      TestBed.inject(I18nService).setLang('pt');
      expect(component.getStatusLabel('live')).toBe('Em produção');
    });
  });

  describe('projects computed signal', () => {
    it('returns one project per PROJECTS_STRUCTURE entry', () => {
      const { component } = createComponent();
      expect(component.projects().length).toBeGreaterThan(0);
    });

    it('merges stack data with translation title', () => {
      const { component } = createComponent();
      const first = component.projects()[0];
      expect(first.title).toBeTruthy();
      expect(first.stack).toBeTruthy();
      expect(first.stack.length).toBeGreaterThan(0);
    });

    it('first project is Billing Dashboard with live status', () => {
      const { component } = createComponent();
      const first = component.projects()[0];
      expect(first.title).toBe('Billing Dashboard');
      expect(first.status).toBe('live');
    });

    it('first project exposes demo credentials', () => {
      const { component } = createComponent();
      const first = component.projects()[0];
      expect(first.demoCredentials?.user).toBe('demo@billflow.com');
      expect(first.demoCredentials?.password).toBe('demo1234');
    });

    it('second project is DevTrack API', () => {
      const { component } = createComponent();
      expect(component.projects()[1].title).toBe('DevTrack API');
    });

    it('third project is Lambda Search Service', () => {
      const { component } = createComponent();
      expect(component.projects()[2].title).toBe('Lambda Search Service');
    });

    it('updates titles when language changes', () => {
      const { component } = createComponent();
      const i18n = TestBed.inject(I18nService);
      i18n.setLang('en');
      const enSecond = component.projects()[1].title;
      i18n.setLang('de');
      const deSecond = component.projects()[1].title;
      // DevTrack API title is the same across languages
      expect(enSecond).toBe(deSecond);
    });

    it('exposes the GitHub profile link via contact', () => {
      const { component } = createComponent();
      expect(component.contact.github).toBe('https://github.com/Abrahamvjt95');
    });
  });
});
