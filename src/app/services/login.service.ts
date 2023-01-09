import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeDTO} from "../dtos/EmployeeDTO";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:3000/auth/";
  constructor(private httpClient:HttpClient) { }
  loginCheck(username:String){
    return this.httpClient.get(this.baseUrl+"findByUsername/"+username);
  }

}
