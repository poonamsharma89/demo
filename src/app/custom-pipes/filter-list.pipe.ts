import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student-list/student';

@Pipe({
  name: 'filterList',
  pure: false
})
export class FilterListPipe implements PipeTransform {

  transform(value: Student[], filterString: string): Student[] {
    console.log("filter pipe called.....");
    if(value.length == 0 || filterString == ''){
      return value;
    } 
    return value.filter((eachStudent)=> eachStudent.studentGender.toLowerCase() == filterString.toLowerCase());
  }

}
