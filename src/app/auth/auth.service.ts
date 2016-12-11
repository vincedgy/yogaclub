import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate, CanActivateChild {
  private user: any;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.user = af.database.object('/users/' + auth.uid);
      } else {
        this.user = new FirebaseObjectObservable<any>();
      }
    });
  }

  logout() {
    this.user = null;
    return this.af.auth.logout();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.user && this.isLoggedIn()) {
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

  login(credentials) {
    return this.af.auth.login({email: credentials.email, password: credentials.password});
  }

  createUser(credentials) {
    return this.af.auth.createUser({email: credentials.email, password: credentials.password});
  }

}
