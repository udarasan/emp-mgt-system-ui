import { Injectable } from '@angular/core';
import {DepartmentDTO} from "../dtos/DepartmentDTO";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {GameDTO} from "../dtos/GameDTO";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl="http://localhost:8080/api/v1/game/";
  constructor(private httpClient:HttpClient) { }
  add(gameDTO:GameDTO){
    return this.httpClient.post(this.baseUrl+"add",gameDTO,{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    });
  }

  getAll() {
    return this.httpClient.get(this.baseUrl+"getAllGames",{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      })
    })
  }
  countAll() {
    return this.httpClient.get(this.baseUrl+'count')
  }
}
