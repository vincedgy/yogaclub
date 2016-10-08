// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

/* Application Modules */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { YogaclubComponent } from './yogaclub/yogaclub.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent, SignupComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeachersModule }         from './teachers/teachers.module';


/* Services */
import { AuthService } from './auth/auth.service';

/* Firebase */
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
const firebaseConfig = {
    apiKey: "AIzaSyCS4Y4f8MFUGyYXzXPQPFVF8LRVzhj936o",
    authDomain: "yogaclub-145116.firebaseapp.com",
    databaseURL: "https://yogaclub-145116.firebaseio.com",
    storageBucket: "yogaclub-145116.appspot.com",
    messagingSenderId: "242837080009"
  };
const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
//firebase:host:yogaclub-145116.firebaseio.com

/* Routing stuff */
import {
  routing,
  appRoutingProviders
} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

/* Material modules */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    YogaclubComponent,
    CoursesComponent,
    CourseComponent,
    HomeComponent,
    LoginComponent, SignupComponent,
    PageNotFoundComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    TeachersModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [
    appRoutingProviders,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
