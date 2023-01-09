import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from "./department/department.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmployeeComponent} from "./employee/employee.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
