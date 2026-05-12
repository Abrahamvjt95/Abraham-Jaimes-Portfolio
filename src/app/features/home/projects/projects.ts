import { Component, computed, inject } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title';
import { PROJECTS_STRUCTURE, CONTACT_DATA } from '../../../core/constants/portfolio.data';
import { I18nService } from '../../../core/i18n/i18n.service';

type ProjectStatus = 'live' | 'in-progress' | 'coming-soon';

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  i18n = inject(I18nService);
  contact = CONTACT_DATA;

  projects = computed(() =>
    PROJECTS_STRUCTURE.map((item, i) => ({
      ...item,
      ...this.i18n.t().projects.items[i],
    }))
  );

  getStatusClass(status: ProjectStatus): string {
    const map: Record<ProjectStatus, string> = {
      live: 'badge badge-green',
      'in-progress': 'badge badge-yellow',
      'coming-soon': 'badge badge-blue',
    };
    return map[status];
  }

  getStatusLabel(status: ProjectStatus): string {
    const s = this.i18n.t().projects.status;
    const map: Record<ProjectStatus, string> = {
      live: s.live,
      'in-progress': s.inProgress,
      'coming-soon': s.comingSoon,
    };
    return map[status];
  }
}
