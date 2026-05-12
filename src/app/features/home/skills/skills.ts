import { Component, computed, inject } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { SKILLS_STRUCTURE } from '../../../core/constants/portfolio.data';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-skills',
  imports: [SectionTitleComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  i18n = inject(I18nService);

  skillGroups = computed(() =>
    SKILLS_STRUCTURE.map((item, i) => ({
      icon: item.icon,
      skills: item.skills,
      category: this.i18n.t().skills.categories[i],
    }))
  );
}
