import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EmployeeService} from "../../../services/employee.service";
import {DepartmentService} from "../../../services/department.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DepartmentDTO} from "../../../dtos/DepartmentDTO";
import {EmployeeComponent} from "../../employee.component";
import {EmployeeDTOList} from "../../../dtos/EmployeeDTOList";
import {EmployeeDTO} from "../../../dtos/EmployeeDTO";

@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.scss']
})
export class EmployeeEditDialogComponent implements OnInit{

  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService,@Inject(MAT_DIALOG_DATA) public data: EmployeeComponent,) {
  }
  id=new FormControl();
  name = new FormControl();
  department= new FormControl();
  email= new FormControl();
  mobile= new FormControl();
  dob= new FormControl();
  city= new FormControl();
  doj= new FormControl();
  country= new FormControl();
  address= new FormControl();
  dataSource! :any[];
  departments!:DepartmentDTO[];
  selectedValue!: String;


  onUpdate() {
    this.employeeService.update(new EmployeeDTO(this.name.value,this.selectedValue,
      this.email.value,this.mobile.value,this.dob.value,this.city.value,
      this.doj.value,this.country.value,this.address.value),this.data.id).subscribe((res: any) => {
      console.log(this.name.value,this.selectedValue)
      if (res.code == '00') {
      }

    });
  }

  ngOnInit(): void {
    this.departmentService.getAll().subscribe((res:any)=>{
      if (res!=null){
        this.departments=res
      }
      console.log(this.departments)
    })
  }
}
