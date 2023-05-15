import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DepartmentService} from "../services/department.service";
import {DepartmentDTO} from "../dtos/DepartmentDTO";
import {GameDTO} from "../dtos/GameDTO";
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit{
  selectedImage: File | undefined;
  displayedColumns: string[] = ['id','name','imageUrl','description'];
  dataSource! :any[];
  name = new FormControl();
  imageUrl= new FormControl();
  description= new FormControl();

  imageName:any;
  buttonEvent=true;
  constructor(private departmentService:DepartmentService,private http: HttpClient) {
  }



  ngOnInit(): void {
this.getAllDepartments()
    }

  onSave() {
    console.log(this.name)
    this.departmentService.add(new GameDTO(0,this.name.value,this.imageName,this.description.value,)).subscribe((res: any) => {
      console.log(this.name)
      if (res.code == '00') {
      }
      this.getAllDepartments();

    });
  }
  getAllDepartments(){
    this.departmentService.getAll().subscribe((res: any) => {
      this.dataSource=res.data;
      if (res.code == '00') {
      }

    });
  }

  uploadImage(): void {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('files', this.selectedImage);

      const headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      });

      this.http.post('http://localhost:8080/api/v1/game/upload', formData, { headers }).subscribe(
        (response) => {
          // Image upload success
          alert("Image Uploaded!")
          this.buttonEvent=false;
        },
        (error) => {
          // Handle error
          alert("Image Uploaded Error!")
          console.error(error);
        }
      );
    }
  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage?.name)
    this.imageName=this.selectedImage?.name
  }
}
