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
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = [ 'eventId','gameId', 'eventType','isPaid' ,'payment','eventName','startTime','endTime','country','location','organizer','description','eventImage'];
  dataSource! :any[];
  selectedImage: File | undefined;

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
  eventImage:any
  games!:GameDTO[];
  employees!:EmployeeDTOList[];

  gameId!: number;
  payment=new FormControl();
  buttonEvent= true ;

  constructor(private employeeService:EmployeeService,private departmentService:DepartmentService,public dialog: MatDialog,private http: HttpClient) {
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
    if(this.gameId!=null && this.eventType.value!=null && this.isPaid!=null && this.payment!=null &&
    this.eventName.value!=null && this.startTime.value!=null && this.endTime.value!=null && this.country.value!=null &&
    this.location.value!=null && this.organizer.value!=null && this.description.value!=null && this.eventImage!=null)
    {
      this.employeeService.add(new EventDTO(0,this.gameId,this.eventType.value,this.isPaid,this.payment.value,this.eventName.value,this.startTime.value,this.endTime.value,this.country.value,this.location.value,this.organizer.value,this.description.value,this.eventImage)).subscribe((res: any) => {
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
  uploadImage(): void {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('files', this.selectedImage);

      const headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      });

      this.http.post('http://localhost:8080/api/v1/event/upload', formData, { headers }).subscribe(
        (response) => {
          // Image upload success
          console.log(response);
          this.buttonEvent=false;
          alert("Image Uploaded!")
        },
        (error) => {
          // Handle error
          console.error(error);
          alert("Image Uploaded Error!")
        }
      );
    }
  }
  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage?.name)
    this.eventImage=this.selectedImage?.name
  }
}
