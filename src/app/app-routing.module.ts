import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleParentComponent } from './angular-lifecycle/lifecycle-parent/lifecycle-parent.component';
import { ColorListComponent } from './color-list/color-list.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from './guards/login.guard';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { LifecycleHeaderComponent } from './lifecycle-header/lifecycle-header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentAddComponent } from './student-http/student-add/student-add.component';
import { StudentEditComponent } from './student-http/student-edit/student-edit.component';
import { StudentListHttpComponent } from './student-http/student-list-http/student-list-http.component';
import { StudentViewComponent } from './student-http/student-view/student-view.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', component: DisplayComponent},
  // {path: '', redirectTo: 'display', pathMatch: 'full'},
  {path: 'display', component: DisplayComponent},
  {path: 'color', component: ColorListComponent},
  {path: 'todo', component: TodoAnimationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'student', component: StudentListComponent},
  {path: 'student-http', component: StudentListHttpComponent, canActivate: [LoginGuard]},
  {path: 'student-add', component: StudentAddComponent},
  {path: 'student-edit/:studId', component: StudentEditComponent},
  {path: 'student-view/:sId', component: StudentViewComponent}, // http://localhost:4900/student-view/101
  {path: 'lifecycle', component: LifecycleHeaderComponent, children: [
    // {path:'', component: LifecycleParentComponent},
    {path:'', redirectTo: 'demo1', pathMatch: 'full'},
    {path:'demo1', component: LifecycleParentComponent},
    {path:'demo2', component: ParentComponent},
  ]},
  {path: 'weather', component: WeatherComponent},
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
