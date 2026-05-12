import { Component, inject } from '@angular/core';
import { HERO_DATA, CONTACT_DATA } from '../../../core/constants/portfolio.data';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  i18n = inject(I18nService);
  hero = HERO_DATA;
  contact = CONTACT_DATA;

  scrollTo(e: Event, selector: string) {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}
