// https://blog.khophi.co/angularfire2-authentication/
// https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.n9435su88

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './auth.signup.component.html',
  styleUrls: ['./auth.component.css']
})

export class SignupComponent {

  constructor(private af: AngularFire, private router: Router) { }

  onSubmit(formData) {
    if (formData.valid) {
      // console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login']);
        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/login']);
        });
    }
  }
}

@Component({
  templateUrl: './auth.login.component.html',
  styleUrls: ['./auth.component.css']
})

export class LoginComponent {
  errorMessage: String = '';
  constructor(private auth: AuthService, private af: AngularFire, private router: Router) {
    if (this.auth.isLoggedIn) {
      console.log('Previous login is cleased');
      this.auth.logout();
    }
  }
  onSubmit(formData) {
    if (formData.valid) {
      // console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      })
        // On succesfull login
        .then(
        (success) => {
          console.log(success);
          localStorage.setItem('auth_token', success.uid);
          if ( this.auth.isLoggedIn ) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Ouch. Something wrong with localstorage of your authorization !';
          }

        })
        // On unsuccesfull login
        .catch(
        (err) => {
          // console.log(err);
          this.errorMessage = err.message;
          //this.router.navigate(['/login']);
        });
    }
  }
}
