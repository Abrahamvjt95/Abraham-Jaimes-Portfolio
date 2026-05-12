import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar';
import { I18nService } from '../../../core/i18n/i18n.service';

describe('NavbarComponent', () => {
  afterEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  function createComponent() {
    TestBed.configureTestingModule({ imports: [NavbarComponent] });
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    return { fixture, component: fixture.componentInstance };
  }

  it('should create', () => {
    const { component } = createComponent();
    expect(component).toBeTruthy();
  });

  describe('initial state', () => {
    it('scrolled defaults to false', () => {
      const { component } = createComponent();
      expect(component.scrolled()).toBe(false);
    });

    it('menuOpen defaults to false', () => {
      const { component } = createComponent();
      expect(component.menuOpen()).toBe(false);
    });

    it('langOpen defaults to false', () => {
      const { component } = createComponent();
      expect(component.langOpen()).toBe(false);
    });
  });

  describe('menu toggle', () => {
    it('toggleMenu opens the menu', () => {
      const { component } = createComponent();
      component.toggleMenu();
      expect(component.menuOpen()).toBe(true);
    });

    it('toggleMenu closes the menu when already open', () => {
      const { component } = createComponent();
      component.toggleMenu();
      component.toggleMenu();
      expect(component.menuOpen()).toBe(false);
    });

    it('closeMenu sets menuOpen to false', () => {
      const { component } = createComponent();
      component.menuOpen.set(true);
      component.closeMenu();
      expect(component.menuOpen()).toBe(false);
    });

    it('closeMenu also closes langOpen', () => {
      const { component } = createComponent();
      component.langOpen.set(true);
      component.closeMenu();
      expect(component.langOpen()).toBe(false);
    });
  });

  describe('language dropdown', () => {
    it('toggleLang opens the dropdown', () => {
      const { component } = createComponent();
      const event = new MouseEvent('click');
      component.toggleLang(event);
      expect(component.langOpen()).toBe(true);
    });

    it('toggleLang closes the dropdown when already open', () => {
      const { component } = createComponent();
      const event = new MouseEvent('click');
      component.toggleLang(event);
      component.toggleLang(event);
      expect(component.langOpen()).toBe(false);
    });

    it('selectLang changes the active language', () => {
      const { component } = createComponent();
      const i18n = TestBed.inject(I18nService);
      component.selectLang(new MouseEvent('click'), 'pt');
      expect(i18n.currentLang()).toBe('pt');
    });

    it('selectLang closes the dropdown', () => {
      const { component } = createComponent();
      component.langOpen.set(true);
      component.selectLang(new MouseEvent('click'), 'it');
      expect(component.langOpen()).toBe(false);
    });
  });

  describe('navLinks computed', () => {
    it('exposes 5 navigation links', () => {
      const { component } = createComponent();
      expect(component.navLinks()).toHaveLength(5);
    });

    it('all links have a non-empty label and href', () => {
      const { component } = createComponent();
      component.navLinks().forEach((link, i) => {
        expect(link.label, `link[${i}] label`).toBeTruthy();
        expect(link.href, `link[${i}] href`).toMatch(/^#/);
      });
    });

    it('link labels change when language changes', () => {
      const { component } = createComponent();
      const i18n = TestBed.inject(I18nService);
      i18n.setLang('en');
      const enLabel = component.navLinks()[0].label;
      i18n.setLang('es');
      const esLabel = component.navLinks()[0].label;
      expect(enLabel).not.toBe(esLabel);
    });

    it('hrefs do not change when language changes', () => {
      const { component } = createComponent();
      const i18n = TestBed.inject(I18nService);
      const hrefs = component.navLinks().map((l) => l.href);
      i18n.setLang('de');
      expect(component.navLinks().map((l) => l.href)).toEqual(hrefs);
    });
  });

  describe('scroll listener', () => {
    it('sets scrolled to true when window.scrollY > 20', () => {
      const { component } = createComponent();
      Object.defineProperty(window, 'scrollY', { value: 30, configurable: true });
      component.onScroll();
      expect(component.scrolled()).toBe(true);
    });

    it('sets scrolled to false when window.scrollY <= 20', () => {
      const { component } = createComponent();
      component.scrolled.set(true);
      Object.defineProperty(window, 'scrollY', { value: 10, configurable: true });
      component.onScroll();
      expect(component.scrolled()).toBe(false);
    });
  });
});
