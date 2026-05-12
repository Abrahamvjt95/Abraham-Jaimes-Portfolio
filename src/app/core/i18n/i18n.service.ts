import { Injectable, computed, signal } from '@angular/core';
import { Language, translations } from './translations/index';

export type { Language };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _lang = signal<Language>(this.detectLang());

  readonly t = computed(() => translations[this._lang()]);
  readonly currentLang = this._lang.asReadonly();

  readonly available: { code: Language; label: string; name: string; flag: string }[] = [
    { code: 'en', label: 'EN', name: 'English',    flag: '🇬🇧' },
    { code: 'es', label: 'ES', name: 'Español',    flag: '🇪🇸' },
    { code: 'pt', label: 'PT', name: 'Português',  flag: '🇵🇹' },
    { code: 'it', label: 'IT', name: 'Italiano',   flag: '🇮🇹' },
    { code: 'de', label: 'DE', name: 'Deutsch',    flag: '🇩🇪' },
  ];

  currentLangMeta = computed(() => this.available.find((l) => l.code === this._lang())!);

  setLang(lang: Language): void {
    this._lang.set(lang);
    localStorage.setItem('portfolio-lang', lang);
  }

  private detectLang(): Language {
    const saved = localStorage.getItem('portfolio-lang') as Language;
    if (saved && ['en', 'es', 'pt', 'it', 'de'].includes(saved)) return saved;

    const browser = navigator.language.slice(0, 2).toLowerCase();
    const map: Record<string, Language> = { en: 'en', es: 'es', pt: 'pt', it: 'it', de: 'de' };
    return map[browser] ?? 'en';
  }
}
