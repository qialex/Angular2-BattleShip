import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>{{text}}</h1>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  text: string = 'Angular Sea Battle game by qiAlex';
}
