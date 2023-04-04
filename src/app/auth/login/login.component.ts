import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {AuthModule} from "../auth.module";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatDialog} from "@angular/material/dialog";
import {AlertComponent} from "../../alert/alert.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username= new FormControl('', [Validators.required]);
  password=new FormControl('', [Validators.required]);

  constructor(private authservice:LoginService,private router: Router,public dialog: MatDialog) {
  }
  login() {
    console.log(this.username.value,this.password.value)
    if (this.username.value!='' && this.password.value!=''){
      this.authservice.getLoginAccess(this.username.value,this.password.value).subscribe((res: any) => {
        if (res!=null) {
          console.log("23")
          if (res.data.token!=null){
            localStorage.setItem('username',res.data.username)
            localStorage.setItem('token',res.data.token)
            console.log("yes")

            this.router.navigate(['/home']);
          }
        }else {
          const dialogRef = this.dialog.open(AlertComponent);
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
        }

      },error => {
        const dialogRef = this.dialog.open(AlertComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      });
    }else{

    }


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
