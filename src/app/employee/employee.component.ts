import {Component, OnInit} from '@angular/core';
import {EmployeeDTO} from "../dtos/EmployeeDTO";
import {EmployeeDTOList} from "../dtos/EmployeeDTOList";
import {DepartmentDTO} from "../dtos/DepartmentDTO";
import {FormControl} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {DepartmentService} from "../services/department.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = [ 'name', 'department', 'address','city','country','email','mobile','dob','doj'];
  dataSource! :any[];
  private allItemSub!: Subscription;
  name = new FormControl();
  department= new FormControl();
  email= new FormControl();
  mobile= new FormControl();
  dob= new FormControl();
  city= new FormControl();
  doj= new FormControl();
  country= new FormControl();
  address= new FormControl();

  departments!:DepartmentDTO[];
  employees!:EmployeeDTOList[];
  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService) {
  }

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
  public loadTable(): void {
    // console.log(stateFilter);
    this.employeeService.getAll().subscribe((res:any)=>{
      if (res!=null){
        this.dataSource=res
      }
      console.log(this.employees)
    })
  }
  onSave() {
    this.employeeService.add(new EmployeeDTO(this.name.value,this.department.value,this.email.value,this.mobile.value,this.dob.value,this.city.value,this.doj.value,this.country.value,this.address.value)).subscribe((res: any) => {
      console.log(this.name)
      if (res.code == '00') {
      }

    });
  }
}
