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
  baseUrl1="http://localhost:8080/api/v1/team/";
  baseUrl2="http://localhost:8080/api/v1/user/";
  baseUrl4="http://localhost:8080/api/v1/audit/";
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
    return this.httpClient.get(this.baseUrl+'count',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }

  getAllTeams() {
    return this.httpClient.get(this.baseUrl1+'getAllTeams',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }
  getAllPlayerUsers() {
    return this.httpClient.get(this.baseUrl2+'getAllPayerUsers',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }

  getAllAudits() {
    return this.httpClient.get(this.baseUrl4+'getAllAudits',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }
}
