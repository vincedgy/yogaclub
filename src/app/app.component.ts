//https://medium.freecodecamp.com/angular-2-authentication-made-easy-with-firebase-246c282d9ef8#.l13e9osp2

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <div class="container body-container">
    <app-navbar></app-navbar>
  </div>
  <div class="container body-container">
    <router-outlet></router-outlet>
  </div>

  `,
})
export class AppComponent {
  user: any;
  title = "yoga Club - TUVB";

  constructor(
    private auth: AuthService,
    private router: Router) {

    if (! this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  };
}
