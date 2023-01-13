import {Component, OnInit} from '@angular/core';
import {EmployeeDTO} from "../dtos/EmployeeDTO";
import {EmployeeDTOList} from "../dtos/EmployeeDTOList";
import {DepartmentDTO} from "../dtos/DepartmentDTO";
import {FormControl} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {DepartmentService} from "../services/department.service";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeEditDialogComponent} from "./componets/employee-edit-dialog/employee-edit-dialog.component";
import {AlertComponent} from "../alert/alert.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = [ 'action','name', 'department', 'address','city','country','email','mobile','dob','doj','status','id'];
  dataSource! :any[];

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

  departments!:DepartmentDTO[];
  employees!:EmployeeDTOList[];

  selectedValue!: String;
  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService,public dialog: MatDialog) {
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
    if(this.name.value!=null && this.selectedValue!=null && this.email.value!=null &&
    this.mobile.value!=null && this.dob.value!=null && this.city.value!=null && this.doj.value!=null &&
    this.country.value!=null && this.address.value!=null){
      this.employeeService.add(new EmployeeDTO(this.name.value,this.selectedValue,this.email.value,this.mobile.value,this.dob.value,this.city.value,this.doj.value,this.country.value,this.address.value,'DE-ACTIVE')).subscribe((res: any) => {
        console.log(this.name)
        if (res.code == '00') {
        }
        this.loadTable()

      });
    }else {
      const dialogRef = this.dialog.open(AlertComponent, {

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.loadTable();

      });
    }

  }

  Edit(row:any) {

  }
  Delete(row:any) {

    this.employeeService.delete(row._id).subscribe((res: any) => {
      console.log(this.name)
      this.loadTable();
      if (res.code == '00') {
      }

    },error => {
      alert('error')
    });
  }

  openDialog(row:any) {
    const dialogRef = this.dialog.open(EmployeeEditDialogComponent, {
      data: {id: row._id, name: row.name,department:row.department,address:row.address,city:row.city,country:row.country,email:row.email,mobile:row.mobile,dob:row.dob,doj:row.doj},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadTable();

    });
  }
}
