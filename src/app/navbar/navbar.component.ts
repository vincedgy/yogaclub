import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: String;
  greetings: String = 'Bonjour';

  constructor(
    private authService: AuthService,
    public auth: FirebaseAuth,
    private router: Router
  ) {}

  ngOnInit() {
    // if (! this.authService.isLoggedIn) {
    //   console.log('User is not logged !');
    //   this.router.navigate(['/login']);
    // }
    this.auth.subscribe(user => {
      if (user && user.auth) {
        this.userName = user.auth.displayName || user.auth.email;
      } else {
        this.userName = '';
      }
    });
  }

  logout() {
    // console.log('Logout user');
    this.authService.logout();
    this.router.navigate(['/']);
  }

}


