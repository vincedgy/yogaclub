import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Course } from './course.model';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-course',
  template: `
  <h2>Zoom sur un cours</h2>
  <div *ngIf="course">
    Course selected : <input [(ngModel)]="course.id" />
  </div>
`
})

export class CourseDetailsComponent implements OnInit {
  @Input() course: Course;

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
