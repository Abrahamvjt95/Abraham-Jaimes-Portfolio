import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { CONTACT_DATA } from '../../../core/constants/portfolio.data';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-contact',
  imports: [SectionTitleComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  i18n = inject(I18nService);
  contact = CONTACT_DATA;
}
