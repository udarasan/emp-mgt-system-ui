import { Injectable } from '@angular/core';
import {EmployeeDTO} from "../dtos/EmployeeDTO";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:3000/employee/";
  constructor(private httpClient:HttpClient) { }
  add(employeeDTO:EmployeeDTO){
    return this.httpClient.post(this.baseUrl+"save",employeeDTO);
  }

  getAll() {
    return this.httpClient.get(this.baseUrl+'findall')
  }
}
