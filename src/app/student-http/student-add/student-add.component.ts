import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  allMarks = [
    { id: 1, value: 100},
    { id: 2, value: 200},
    { id: 3, value: 300},
    { id: 4, value: 400},
    { id: 5, value: 500}
  ];

  allGenders = [
    { id: 1, value: 'Male'},
    { id: 2, value: 'Female'},
    { id: 3, value: 'Other'},
  ]
  constructor(private studentHttpService: StudentHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  sendStudent(form: NgForm){
  
    console.log(form);

    // lets create a tudent object with dthe data from the form
    let newStudent: Student = {
      id: 0,
      // studentName: form.value.sName,
      // studentTotalMarks: form.value.sMark,
      studentName: form.value.personalData.sName,
      studentTotalMarks: form.value.personalData.sMark,
      studentDOB: new Date(form.value.sDOB),
      studentGender: form.value.sGender
    }

    // now send this student object to service layer to be sent to backend for adding it to DB
    this.studentHttpService.addStudent(newStudent).subscribe((response)=>{
      // onces added we can navigate back to student-http
      this.router.navigate(['student-http']);
    })

  }


  setDefaults(form: NgForm){
    // form.setValue({
    //   sName: 'TRIAL',
    //   sDOB: new Date(),
    //   sMark: 200,
    //   sGender: 'Male'
    // })

    form.setValue({
      personalData: {
        sName: 'TRIAL',
        sMark: 200,
      },
      sDOB: new Date(),
      sGender: 'Male'
    })
  }

  resetData(form: NgForm){
    form.reset();
  }

  logChange(studName: any){
    console.log(studName);
  }
}
