import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CoursesListComponent }    from './coursesList.component';
import { CourseDetailsComponent }  from './courseDetails.component';

import { CourseService }  from './course.service';

// import { TeachersRouting } from './teachers.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CoursesListComponent,
    CourseDetailsComponent
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule {}
