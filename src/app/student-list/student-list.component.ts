import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filterData: string = '';

  allStudents: Student[] = [];

  filterStudents: Student[] =this.allStudents;

  //studentService: StudentService = new StudentService(); // this line is not correct here because we as developers should not create the service object
                                                            // let this work be done by angular

  // studentService: StudentService;  //commented this because the injected student service is made private

  constructor(private studentService: StudentService) {
    //this.studentService = studentService; //commented this because the injected student service is made private
  }

  ngOnInit(): void {
    this.allStudents = this.studentService.fetchAllStudents();
    this.filterStudents = this.allStudents;
  }

  addStudent(){
    // commented these lines because the new student should be added to the array in the servce class
  //   this.allStudents.push({
  //     id: 105,
  //     studentName: 'TEST',
  //     studentTotalMarks: 343,
  //     studentDOB: new Date(3,5,1992),
  //     studentGender: 'Female'
  // });
   let newStudent: Student =  {
        id: 105,
        studentName: 'TEST',
        studentTotalMarks: 343,
        studentDOB: new Date(3,5,1992),
        studentGender: 'Female'
    }

    this.studentService.addStudent(newStudent);
    this.allStudents = this.studentService.fetchAllStudents();
    
  }

  filterByGender(){
    if(this.filterData == ''){
      this.filterStudents = this.allStudents
    }else{
      this.filterStudents = this.allStudents.filter((eachStudent)=> eachStudent.studentGender.toLowerCase().includes(this.filterData.toLowerCase()));
    }
      
    
  }

}
