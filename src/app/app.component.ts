//https://medium.freecodecamp.com/angular-2-authentication-made-easy-with-firebase-246c282d9ef8#.l13e9osp2
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export class SettingsDialog {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  title = "yoga Club - TUVB";

  constructor(
    private auth: AuthService,
    private router: Router) {

    if (! this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  };

}
