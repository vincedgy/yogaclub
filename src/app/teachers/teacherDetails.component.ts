import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Teacher } from '../models/teacher.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-teacher',
  template: `
  <h2>Zoom sur un professeur</h2>
  <div *ngIf="teacher">
    Teacher selected : <input [(ngModel)]="teacher.firstname" />
  </div>
`
})

export class TeacherDetailsComponent implements OnInit {
  @Input() teacher: Teacher;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private af: AngularFire
  ) {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      console.log('Get id ' + id);
    });
  }

ngOnInit() {}
}
