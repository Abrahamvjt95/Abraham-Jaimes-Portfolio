import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { HomeComponent } from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, HomeComponent],
  template: `
    <app-navbar />
    <main>
      <app-home />
    </main>
    <app-footer />
  `,
  styleUrl: './app.scss',
})
export class App {}
