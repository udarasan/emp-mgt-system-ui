import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from "../department/department.component";
import {EmployeeComponent} from "../employee/employee.component";
import {DashboardComponent} from "./dashboard.component";
import {HomeComponent} from "../home/home.component";
import {AuthGuard} from "../auth.guard";
import {LeaveComponent} from "../leave/leave.component";
import {UserComponent} from "../user/user.component";

const routes: Routes = [
  {path: '', component:DashboardComponent,
  children:[
    { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
    { path: 'department', component: DepartmentComponent ,canActivate: [AuthGuard]},
    { path: 'employee', component: EmployeeComponent ,canActivate: [AuthGuard]},
    { path: 'user', component: UserComponent ,canActivate: [AuthGuard]},
    { path: 'leave', component:LeaveComponent  ,canActivate: [AuthGuard]},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
