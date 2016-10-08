import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // if (! this.authService.isLoggedIn) {
    //   console.log('User is not logged !');
    //   this.router.navigate(['/login']);
    // }
  }

  logout() {
    // console.log('Logout user');
    this.authService.logout();
    this.router.navigate(['/']);
  }

}


