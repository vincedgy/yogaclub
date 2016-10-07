// user.service.ts
import { Injectable } from '@angular/core';
import { AngularFire, } from 'angularfire2';

@Injectable()
export class AuthService {
  private loggedIn = false;

  constructor(
    private af: AngularFire) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

 logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = null;
    this.af.auth.logout();
  }

  isLoggedIn() {
    this.af.auth.subscribe(user => {
      if (user) {
        localStorage.removeItem('auth_token');
        localStorage.setItem('auth_token', user.uid);
        return this.loggedIn;
      } else {
        return null;
      }
    });
  }
}
