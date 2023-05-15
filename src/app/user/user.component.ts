import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  displayedColumns: string[] = [ 'username','email', 'idPhoto','name' ,'phoneNo','status',];
  dataSource! :any[];

  constructor(private service:EmployeeService) {
  }
  ngOnInit(): void {
    this.loadTable();
  }

  public loadTable(): void {
    // console.log(stateFilter);
    this.service.getAllPlayerUsers().subscribe((res:any)=>{
      if (res!=null){
        console.log(res)
        this.dataSource=res.data
      }
    })
  }
}
