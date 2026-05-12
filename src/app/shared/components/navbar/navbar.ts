import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { I18nService, Language } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  i18n = inject(I18nService);
  scrolled = signal(false);
  menuOpen = signal(false);
  langOpen = signal(false);

  navLinks = computed(() => [
    { label: this.i18n.t().nav.about,      href: '#about' },
    { label: this.i18n.t().nav.skills,     href: '#skills' },
    { label: this.i18n.t().nav.experience, href: '#experience' },
    { label: this.i18n.t().nav.projects,   href: '#projects' },
    { label: this.i18n.t().nav.contact,    href: '#contact' },
  ]);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  @HostListener('document:click')
  onDocClick() {
    this.langOpen.set(false);
  }

  toggleLang(e: Event) {
    e.stopPropagation();
    this.langOpen.update((v) => !v);
  }

  selectLang(e: Event, code: Language) {
    e.stopPropagation();
    this.i18n.setLang(code);
    this.langOpen.set(false);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.langOpen.set(false);
  }

  scrollTo(href: string) {
    this.closeMenu();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
