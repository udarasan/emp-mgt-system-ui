import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {AuthModule} from "../auth.module";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username= new FormControl();
  password=new FormControl();

  constructor(private authservice:LoginService,private router: Router) {
  }
  login() {
    this.authservice.loginCheck(this.username.value).subscribe((res: any) => {
      console.log(this.username.value)
      console.log(res.username)
      if (res!=null) {
        console.log("23")
        if (res.username==this.username.value && res.password==this.password.value){
          localStorage.setItem('username',res.username)
          localStorage.setItem('password',res.password)
          console.log("ye")

          this.router.navigate(['/home']);
        }
      }

    });

  }

  verifyLogin() {
    if (localStorage.getItem('username')!=null){
      console.log("1")
      return true;
    }else {
      console.log("2")
     return false;
    }
  }
}
