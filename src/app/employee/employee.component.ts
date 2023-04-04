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
import {GameDTO} from "../dtos/GameDTO";
import {EventDTO} from "../dtos/EventDTO";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = [ 'eventId','gameId', 'eventType','isPaid' ,'eventName','startTime','endTime','country','location','organizer','description','eventImage'];
  dataSource! :any[];

  id=new FormControl();
  eventName = new FormControl();
  isPaid!:string;
  department= new FormControl();
  organizer= new FormControl();
  eventType= new FormControl();
  startTime= new FormControl();
  endTime= new FormControl();
  country= new FormControl();
  description= new FormControl();
  location= new FormControl();
  eventImage= new FormControl();
  games!:GameDTO[];
  employees!:EmployeeDTOList[];

  gameId!: number;

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
        this.games=res.data
      }
      console.log(this.games)
    })
  }
  public loadTable(): void {
    // console.log(stateFilter);
    this.employeeService.getAll().subscribe((res:any)=>{
      if (res!=null){
        console.log(res)
        this.dataSource=res.data
      }
    })
  }
  onSave() {
    if(this.gameId!=null && this.eventType.value!=null && this.isPaid!=null &&
    this.eventName.value!=null && this.startTime.value!=null && this.endTime.value!=null && this.country.value!=null &&
    this.location.value!=null && this.organizer.value!=null && this.description.value!=null && this.eventImage.value!=null)
    {
      this.employeeService.add(new EventDTO(0,this.gameId,this.eventType.value,this.isPaid,this.eventName.value,this.startTime.value,this.endTime.value,this.country.value,this.location.value,this.organizer.value,this.description.value,this.eventImage.value)).subscribe((res: any) => {
        console.log(this.eventName)
        if (res.code == '201') {
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
      console.log(this.eventName)
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
