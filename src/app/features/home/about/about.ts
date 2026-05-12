import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  i18n = inject(I18nService);
}
