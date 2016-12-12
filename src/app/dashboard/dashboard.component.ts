import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormArray, FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;

  constructor ( public fb: FormBuilder) { 
    this.form = this.fb.group({
      first: '',
      last: '',
      username: '',
      password: '',
      confirm: '',
      newslette: ''
    });

  }

  ngOnInit() {
  }

}
