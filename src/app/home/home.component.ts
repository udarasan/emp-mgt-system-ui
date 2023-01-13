import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {DepartmentService} from "../services/department.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class
HomeComponent implements OnInit{
  empcount: any;
  depcount: any;

  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService) {
  }

  ngOnInit(): void {
    this.employeeService.countAll().subscribe((res: any) => {

      this.empcount=res;
      if (res.code == '00') {
      }

    });
    this.departmentService.countAll().subscribe((res: any) => {

      this.depcount=res;
      if (res.code == '00') {
      }

    });
  }

}
