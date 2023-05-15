import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {DepartmentService} from "../services/department.service";
import {MatDialog} from "@angular/material/dialog";
import {DepartmentDTO} from "../dtos/DepartmentDTO";
import {EmployeeDTOList} from "../dtos/EmployeeDTOList";
import {EmployeeEditDialogComponent} from "../employee/componets/employee-edit-dialog/employee-edit-dialog.component";
import {LeaveAcceptComponent} from "./leave-accept/leave-accept.component";

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit{
  displayedColumns: string[] = ['teamId', 'teamName', 'description','country'];
  dataSource! :any[];
  departments!:DepartmentDTO[];
  employees!:EmployeeDTOList[];

  ngOnInit(): void {
    this.loadTable();
    this.employeeService.getAll().subscribe((res:any)=>{
      if (res!=null){
        this.employees=res
      }
      console.log(this.employees)
    })
    this.departmentService.getAll().subscribe((res:any)=>{
      if (res!=null){
        this.departments=res
      }
      console.log(this.departments)
    })
  }
  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService,public dialog: MatDialog) {
  }
  public loadTable(): void {
    // console.log(stateFilter);
    this.employeeService.getAllTeams().subscribe((res:any)=>{
      if (res!=null){
        this.dataSource=res.data
      }
      console.log(this.employees)
    })
  }
  openDialog(row:any) {
    const dialogRef = this.dialog.open(LeaveAcceptComponent, {
      data: {id: row._id, name: row.name,department:row.department,address:row.address,city:row.city,country:row.country,email:row.email,mobile:row.mobile,dob:row.dob,doj:row.doj},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
