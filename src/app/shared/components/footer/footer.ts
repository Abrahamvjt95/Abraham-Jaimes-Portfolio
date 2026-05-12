import { Component, inject } from '@angular/core';
import { CONTACT_DATA } from '../../../core/constants/portfolio.data';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  i18n = inject(I18nService);
  contact = CONTACT_DATA;
  year = new Date().getFullYear();
}
