import { Component, OnInit } from '@angular/core';
// import {Teacher} from '../teacher/teacher.model';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: `
  <h3>Les cours disponibles :</h3>
  <ul>
    <li *ngFor="let course of yogaCourses" (click)="onSelectCourse(course)" class="course">
      {{course.id}} : {{course.schedule}}
    </li>
  </ul>
  `
})

export class CoursesComponent implements OnInit {
  yogaCourses: Course [];
  selectedCourse: Course;

  constructor() { }

  onSelectCourse(course: Course): void {
    this.selectedCourse = course;
    console.log('Course selection is : ' + this.selectedCourse);
  }

  ngOnInit() {
    this.yogaCourses = [];

  }
}
