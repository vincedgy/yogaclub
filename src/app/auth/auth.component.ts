// https://blog.khophi.co/angularfire2-authentication/
// https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.n9435su88

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './auth.signup.component.html',
  styleUrls: ['./auth.component.css']
})

export class SignupComponent {
  errorMessage: String = '';
  constructor(private auth: AuthService, private router: Router) { }
  onSubmit(formData) {
    if (formData.valid) {
      // console.log(formData.value);
      this.auth.createUser({email: formData.value.email, password: formData.value.password}).then(
        (success) => {
          this.errorMessage = 'User is now created. You can log in.';
          this.router.navigate(['/login']);
        }).catch(
        (err) => {
          this.errorMessage = err.message;
        });
    }
  }
  cancel(formData) {
    formData.reset();
    this.errorMessage = '';
  }
}

@Component({
  templateUrl: './auth.login.component.html',
  styleUrls: ['./auth.component.css']
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  errorMessage: String = '';
  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.isLoggedIn) {
      console.log('Previous login is cleansed');
      this.auth.logout();
    }
  }
  onSubmit(formData) {
    if (! this.isLoggedIn && formData.valid) {
      this.auth.login({ email: formData.value.email, password: formData.value.password})
        .then(
        (success) => {
          console.log('Login success' , success);
          this.isLoggedIn = true;
          if ( this.auth.isLoggedIn ) {
            this.router.navigate(['/']);
          } else {
            this.errorMessage = 'Error. Authorization is not complited';
          }

        })
        .catch(
        (err) => {
          console.log(err);
          this.isLoggedIn = false;
          this.errorMessage = err.message;
        });
    }
  }
}
