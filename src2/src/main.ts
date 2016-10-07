import './polyfills.ts';
import * as firebase from 'firebase';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


var firebaseConfig = {
    apiKey: "AIzaSyCS4Y4f8MFUGyYXzXPQPFVF8LRVzhj936o",
    authDomain: "yogaclub-145116.firebaseapp.com",
    databaseURL: "https://yogaclub-145116.firebaseio.com",
    storageBucket: "yogaclub-145116.appspot.com",
    messagingSenderId: "242837080009"
  };

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, 
  [ FIREBASE_PROVIDERS, 
  defaultFirebase(firebaseConfig)
  ]);
