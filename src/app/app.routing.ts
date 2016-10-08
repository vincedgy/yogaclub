import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent, SignupComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeachersListComponent }    from './teachers/teachersList.component';
import { TeacherDetailsComponent }  from './teachers/teacherDetails.component';

import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
  { path: 'teachers',  component: TeachersListComponent, canActivate: [AuthService] },
  { path: 'teacher/:id', component: TeacherDetailsComponent, canActivate: [AuthService] },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//TODO : https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9#.n9435su88
