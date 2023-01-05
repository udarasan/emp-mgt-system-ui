import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DepartmentService} from "../services/department.service";
import {DepartmentDTO} from "../dtos/DepartmentDTO";
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent{


  name = new FormControl();
  constructor(private departmentService:DepartmentService) {
  }



  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  onSave() {
    console.log(this.name)
    this.departmentService.add(new DepartmentDTO(this.name.value)).subscribe((res: any) => {
      console.log(this.name)
      if (res.code == '00') {
      }

    });
  }
}
