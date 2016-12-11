// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

/* Application Modules */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { YogaclubComponent } from './yogaclub/yogaclub.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent, SignupComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoursesModule } from './courses/courses.module';
import { TeachersModule } from './teachers/teachers.module';


/* Services */
import { CourseService } from './courses/course.service';
import { TeacherService } from './teachers/teacher.service';
import { AuthService } from './auth/auth.service';

/* Firebase */
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
const firebaseConfig = {
  apiKey: 'AIzaSyCS4Y4f8MFUGyYXzXPQPFVF8LRVzhj936o',
  authDomain: 'yogaclub-145116.firebaseapp.com',
  databaseURL: 'https://yogaclub-145116.firebaseio.com',
  storageBucket: 'yogaclub-145116.appspot.com',
  messagingSenderId: '242837080009'
};
const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

/* Routing stuff */
import {
  routing,
  appRoutingProviders
} from './app.routing';

/* Material modules */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    YogaclubComponent,
    HomeComponent,
    LoginComponent, SignupComponent,
    PageNotFoundComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TeachersModule, CoursesModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [
    appRoutingProviders,
    AuthService,
    TeacherService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
