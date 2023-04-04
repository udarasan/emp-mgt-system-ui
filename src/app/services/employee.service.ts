import { Injectable } from '@angular/core';
import {EmployeeDTO} from "../dtos/EmployeeDTO";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EmployeeDTOList} from "../dtos/EmployeeDTOList";
import {EventDTO} from "../dtos/EventDTO";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:8080/api/v1/event/";
  constructor(private httpClient:HttpClient) { }
  add(eventDTO:EventDTO){
    return this.httpClient.post(this.baseUrl+"add",eventDTO,{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    });
  }
  update(employeeDTO:EmployeeDTO,_id:any){
    return this.httpClient.put(this.baseUrl+"update/"+_id,employeeDTO);
  }

  getAll() {
    return this.httpClient.get(this.baseUrl+'getAllEvents',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }
  delete(id:String) {
    return this.httpClient.delete(this.baseUrl+'delete/'+id)
  }
  countAll() {
    return this.httpClient.get(this.baseUrl+'count')
  }
}
