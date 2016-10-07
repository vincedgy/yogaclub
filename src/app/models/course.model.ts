/**
 * name
 */

import { Teacher } from './teacher.model';

export class Course {

  id: number;
  name: string;
  scheduleYear: number;
  scheduleDay: string;
  scheduleStart: string;
  scheduleEnd: string;
  duration: number;
  planed: boolean;
  room: string;
  teacher: Teacher;

}
