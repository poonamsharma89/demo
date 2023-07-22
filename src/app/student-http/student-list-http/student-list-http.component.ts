import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from '../../services/student-http.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {

  toggleEditId: number = 0;
  deleteMessage: string='';
  filterData: string = '';
  allStudents: Student[] = [];
  filterStudents: Student[] = [];

  constructor(private studentHttpService: StudentHttpService, private router: Router) {
   
  }

  loadStudents(){
    // this.studentHttpService.fetchAllStudents().subscribe((response)=>{
    //   this.allStudents = response;
    //   this.filterStudents = this.allStudents;
    //   this.deleteMessage = '';
    // });

    this.studentHttpService.fetchAllStudents().subscribe((response)=>{
      this.allStudents = response;
      this.filterStudents = this.allStudents;
      this.deleteMessage = '';
    }, (error)=>alert(error));
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  addStudent(){
    // here we should navigate to student-add route path
    this.router.navigate(['student-add']);
  }

  editStudent(student: Student){
    if(this.toggleEditId == student.id){
      this.studentHttpService.updateStudent(student).subscribe((response)=>{
        this.loadStudents();
        this.toggleEditId = 0;
      })
    }else{
      this.toggleEditId = student.id;
    }
  }

  removeStudent(student: Student){
    this.studentHttpService.deleteStudent(student.id).subscribe((response)=>{
      // if we are here means deletion was successful
      
      this.loadStudents();
      this.deleteMessage = 'Student with ID: ' + student.id +' is removed!';
    }
    )
  }

  filterByGender(){
    if(this.filterData == ''){
      this.filterStudents = this.allStudents
    }else{
      this.filterStudents = this.allStudents.filter((eachStudent)=> eachStudent.studentGender.toLowerCase().includes(this.filterData.toLowerCase()));
    }
  }

  viewStudent(student: Student){
    // here we need to navigate to StudentViewComponent
    // to navigate programtically we need the Router api
    // inject Router api through constructor

    this.router.navigate(['student-view', student.id]);

    //here student.id is a route parameter
  }

  goToEditStudent(sId: number){
    this.router.navigate(['student-edit', sId]);
  }
}
