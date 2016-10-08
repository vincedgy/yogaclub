//https://medium.freecodecamp.com/angular-2-authentication-made-easy-with-firebase-246c282d9ef8#.l13e9osp2

import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import {MdToolbar, MdButton, MdSidenav, MdDialog, MdDialogConfig} from '@angular/material';

export class SettingsDialog {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;
  user: any;
  title = "yoga Club - TUVB";

  constructor(
    public dialog: MdDialog, 
    public vcr: ViewContainerRef,
    private auth: AuthService,
    private router: Router) {

    if (! this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  };

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }
}
