import { Injectable } from '@angular/core';
import {DepartmentDTO} from "../dtos/DepartmentDTO";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl="http://localhost:3000/department/";
  constructor(private httpClient:HttpClient) { }
  add(departmentDTO:DepartmentDTO){
    return this.httpClient.post(this.baseUrl+"save",departmentDTO);
  }

  getAll() {
    return this.httpClient.get('http://localhost:8080/api/v1/game/getAllGames',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }
  countAll() {
    return this.httpClient.get(this.baseUrl+'count')
  }
}
