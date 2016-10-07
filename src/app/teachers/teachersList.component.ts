import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-teachers',
  template: `
  <h4>Les professeurs :</h4>
<ul class="items">
  <li *ngFor="let teacher of yogaTeachers | async" (click)="onSelect(teacher)" [class.selected]="teacher===selectedTeacher">
        <span class="badge">{{teacher.id}}</span> {{teacher.firstName}}
  </li>
</ul>
`
})

export class TeachersListComponent implements OnInit {
  yogaTeachers: FirebaseListObservable<any[]>;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private af: AngularFire) {
    this.yogaTeachers = af.database.list('/teachers');
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
    });
  }

  isSelected(teacher: Teacher) { return teacher.id === this.selectedId; }

  onSelect(teacher: Teacher) {
    this.router.navigate(['/teacher', teacher.id]);
  }

}
