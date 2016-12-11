import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-teachers',
  styleUrls: ['./teachers.component.css'],
  templateUrl: './teachersList.component.html'
})

export class TeachersListComponent implements OnInit {
  teachers: FirebaseListObservable<any[]>;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private af: AngularFire) {
    this.teachers = af.database.list('/teachers');
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
    });
  }

  isSelected(teacher: Teacher) { return teacher.id === this.selectedId; }

  onSelect(teacher: Teacher) {
    this.router.navigate(['/teachers', teacher.id]);
  }

}
