// user.service.ts
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate, CanActivateChild {
  private user: any;

  constructor(private af: AngularFire, private router: Router) { }

  logout() {
    this.af.auth.logout();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('AuthGuard#canActivate called for ' + url);
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      console.log('AuthGuard#canActivate called for ' + url);
      // this.af.auth.redirectUrl = url;
      // Navigate to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }

  isLoggedIn() {
    return this.af.auth.map((auth) => {
      if (auth == null) {
        return false;
      } else {
        return true;
      }
    }).first();
  }

  getUser() {
    if (!this.user) {
      return this.af.auth.subscribe(auth => {
        this.user = auth;
        return this.user;
      });
    } else {
      return this.user;
    }
  }
}
