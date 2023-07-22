import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  displayStudent: Student = {
    id: 0,
    studentName: '',
    studentTotalMarks: 0,
    studentDOB: new Date(),
    studentGender: ''
  }
  constructor(private activatedRoute: ActivatedRoute, private studentHttpService: StudentHttpService) { }

  ngOnInit(): void {

    //here we will retrieve the route parameter
    // in order to retrieve the route parameter we need ActivatedRoute api
    // so let's inject this in the constructor

    let studId = this.activatedRoute.snapshot.paramMap.get('sId');
    console.log(studId);

    // here we will fetch the student data by consuming an endpoint provided by json server
    if(studId!=null){
      this.studentHttpService.fetchAStudent(+studId).subscribe((response)=>{
        console.log(response);

        this.displayStudent = response;

      })
    }
    

  

  }

}
