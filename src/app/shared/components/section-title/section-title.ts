import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `
    <div class="section-title">
      <span class="section-title__label">{{ label() }}</span>
      <h2 class="section-title__heading">{{ heading() }}</h2>
      @if (subheading()) {
        <p class="section-title__sub">{{ subheading() }}</p>
      }
    </div>
  `,
  styleUrl: './section-title.scss',
})
export class SectionTitleComponent {
  label = input('');
  heading = input('');
  subheading = input('');
}
