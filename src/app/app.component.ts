import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Grid with Virtualization</a>
  <a routerLink="/grouping">Grid with grouping</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
