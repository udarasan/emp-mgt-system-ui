import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeDTO} from "../dtos/EmployeeDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:8080/api/v1/auth/";
  constructor(private httpClient:HttpClient) { }
  // loginCheck(username:String|null,password:string|null){
  //   console.log(username,password+'dw')
  //   return this.httpClient.post(this.baseUrl+"authenticate",{
  //     "username":username,
  //     "password":password
  //   });
  // }

  getLoginAccess(username:string|null,password:string|null): Observable<any> {
    return this.httpClient.post(this.baseUrl+'authenticate', {
      "username":username,
      "password":password
    })
  }

}
