import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DepartmentService} from "../services/department.service";
import {DepartmentDTO} from "../dtos/DepartmentDTO";
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit{

  displayedColumns: string[] = ['name','id'];
  dataSource! :any[];
  name = new FormControl();
  constructor(private departmentService:DepartmentService) {
  }



  ngOnInit(): void {
this.getAllDepartments()
    }

  onSave() {
    console.log(this.name)
    this.departmentService.add(new DepartmentDTO(this.name.value)).subscribe((res: any) => {
      console.log(this.name)
      if (res.code == '00') {
      }
      this.getAllDepartments();

    });
  }
  getAllDepartments(){
    this.departmentService.getAll().subscribe((res: any) => {
      this.dataSource=res;
      if (res.code == '00') {
      }

    });
  }
}
