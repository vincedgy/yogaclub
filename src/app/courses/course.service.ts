import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Course } from './course.model';

@Injectable()
export class CourseService {
  private courses: FirebaseListObservable<Course[]>;

  constructor(private af: AngularFire) {
    this.courses = af.database.list('courses');
  }

  getCourses() {
    this.courses = this.af.database.list('courses');
    return this.courses;
  }

  getcourse(id: Number) {
    let myCourse: Course;
    return myCourse;
  }

}
