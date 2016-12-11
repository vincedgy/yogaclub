import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-courses',
  template: `
<ul class="items">
  <li *ngFor="let course of courses | async" (click)="onSelect(course)" [class.selected]="course===selectedCourse">
        <span class="badge">{{course.id}}</span>
  </li>
</ul>
`
})

export class CoursesListComponent implements OnInit {
  courses: FirebaseListObservable<Course[]>;
  selectedCourse: Course;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private af: AngularFire) {
    this.courses = af.database.list('/courses');
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log('Courses params', params);
      this.selectedId = +params['id'];
    });
  }

  onSelect(course: Course) {
    this.selectedCourse = course;
    this.router.navigate(['/courses', course.id]);
  }

}
