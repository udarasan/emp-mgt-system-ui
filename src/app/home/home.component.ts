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
  teamsCount: any;
  displayedColumns: string[] = [ 'aids','dates', 'functions','messages'];
  dataSource! :any[];

  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService) {
  }

  ngOnInit(): void {
    this.employeeService.countAll().subscribe((res: any) => {

      this.empcount=res.data.player;
      this.depcount=res.data.event;
      this.teamsCount=res.data.team;
      if (res.code == '00') {
      }

    });
    this.employeeService.getAllAudits().subscribe((res: any) => {

      this.dataSource=res.data;

    });

  }

}
