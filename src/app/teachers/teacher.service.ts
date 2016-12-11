import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TeacherService {
  private teachers: FirebaseListObservable<Teacher[]>;

  constructor(af: AngularFire) {
    this.teachers = af.database.list('teachers');
  }

  getTeachers() {
    return this.teachers;
  }

  getTeacher(id: Number) {
    let myTeacher: Teacher;
    return myTeacher;
  }

}
