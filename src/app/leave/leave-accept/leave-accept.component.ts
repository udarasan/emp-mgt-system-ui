import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EmployeeComponent} from "../../employee/employee.component";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeDTO} from "../../dtos/EmployeeDTO";
import {LeaveComponent} from "../leave.component";

@Component({
  selector: 'app-leave-accept',
  templateUrl: './leave-accept.component.html',
  styleUrls: ['./leave-accept.component.scss']
})
export class LeaveAcceptComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeComponent,private employeeService:EmployeeService) {
  }
  updateLeave(data:any) {
    this.employeeService.update(new EmployeeDTO(data.name,data.department,
      data.email,data.mobile,data.dob,data.city,
      data.doj,data.country,data.address,'ACTIVE'),this.data.id).subscribe((res: any) => {
      console.log(data)
      if (res.code == '00') {
      }
      window.location.reload()

    });
  }

  ngOnInit(): void {

  }
}
