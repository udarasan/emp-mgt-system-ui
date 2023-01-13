import { Injectable } from '@angular/core';
import {EmployeeDTO} from "../dtos/EmployeeDTO";
import {HttpClient} from "@angular/common/http";
import {EmployeeDTOList} from "../dtos/EmployeeDTOList";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:3000/employee/";
  constructor(private httpClient:HttpClient) { }
  add(employeeDTO:EmployeeDTO){
    return this.httpClient.post(this.baseUrl+"save",employeeDTO);
  }
  update(employeeDTO:EmployeeDTO,_id:any){
    return this.httpClient.put(this.baseUrl+"update/"+_id,employeeDTO);
  }

  getAll() {
    return this.httpClient.get(this.baseUrl+'findall')
  }
  delete(id:String) {
    return this.httpClient.delete(this.baseUrl+'delete/'+id)
  }
  countAll() {
    return this.httpClient.get(this.baseUrl+'count')
  }
}
