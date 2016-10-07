import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersListComponent }    from './teachersList.component';
import { TeacherDetailsComponent }  from './teacherDetails.component';

const teachersRoutes: Routes = [
  { path: 'teachers',  component: TeachersListComponent },
  { path: 'teacher/:id', component: TeacherDetailsComponent }
];

export const TeachersRouting: ModuleWithProviders = RouterModule.forChild(teachersRoutes);
