import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { ExperienceComponent } from './experience/experience';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-projects />
    <app-contact />
  `,
})
export class HomeComponent {}
