import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Teacher} from './teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) { 
    this.teachers = af.database.list('/teachers');
  }

  ngOnInit() {
  }

}
