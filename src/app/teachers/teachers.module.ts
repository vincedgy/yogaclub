import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TeachersListComponent }    from './teachersList.component';
import { TeacherDetailsComponent }  from './teacherDetails.component';

import { TeacherService }  from './teacher.service';

// import { TeachersRouting } from './teachers.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    TeachersListComponent,
    TeacherDetailsComponent
  ],
  providers: [
    TeacherService
  ]
})
export class TeachersModule {}
