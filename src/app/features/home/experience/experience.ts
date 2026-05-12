import { Component, computed, inject } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { EXPERIENCE_STRUCTURE } from '../../../core/constants/portfolio.data';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-experience',
  imports: [SectionTitleComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  i18n = inject(I18nService);

  experiences = computed(() =>
    EXPERIENCE_STRUCTURE.map((item, i) => ({
      ...item,
      ...this.i18n.t().experience.items[i],
    }))
  );
}
